import { FieldValue } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
import { db } from "@/app/lib/firebaseAdmin";
import { isDisposableEmail, domainCanReceiveMail, emailDomain, normalizeEmail, emailKey } from "@/app/lib/emailCheck";

export const runtime = "nodejs"; // needs Node for DNS lookups and firebase-admin

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Optional: tells the Skribe inbox about each NEW signup. Never blocks the signup if it fails. */
async function notifyInbox(email: string) {
  if (!process.env.EMAILJS_SERVICE_ID) return;
  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: { user_email: email },
      }),
    });
    if (!res.ok) console.error("[waitlist] EmailJS error:", res.status, await res.text());
  } catch (err) {
    console.error("[waitlist] EmailJS failed:", err);
  }
}

export async function POST(req: Request) {
  let body: { email?: unknown; company?: unknown } = {};
  try {
    body = await req.json();
  } catch {
    /* empty or invalid body falls through to the validation error below */
  }

  // Honeypot: real people never fill the hidden "company" field, bots do.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (isDisposableEmail(email)) {
    return NextResponse.json(
      { error: "Please use your real email address. Temporary email addresses can't join the waitlist." },
      { status: 400 },
    );
  }

  if (!(await domainCanReceiveMail(emailDomain(email)))) {
    return NextResponse.json({ error: "That email domain doesn't look real. Please check it and try again." }, { status: 400 });
  }

  const normalized = normalizeEmail(email);

  try {
    // create() fails if the document already exists, so each real inbox is stored once.
    await db().collection("waitlist").doc(emailKey(normalized)).create({
      email,
      normalized,
      createdAt: FieldValue.serverTimestamp(),
      source: "website",
    });
  } catch (err) {
    if ((err as { code?: number }).code === 6) {
      // ALREADY_EXISTS: they are already on the list. Show success, count nothing new.
      return NextResponse.json({ ok: true, already: true });
    }
    console.error("[waitlist] Firestore error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  await notifyInbox(email);
  return NextResponse.json({ ok: true });
}