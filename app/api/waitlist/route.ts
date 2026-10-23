import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Sends a notification email to the Skribe inbox through EmailJS. */
async function saveToWaitlist(email: string) {
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

  if (!res.ok) {
    console.error("[waitlist] EmailJS error:", res.status, await res.text());
    throw new Error("EmailJS failed");
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

  try {
    await saveToWaitlist(email);
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}