import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * TODO: store the email somewhere. Right now it is only logged on the server.
 * Pick one: Firestore (firebase-admin), Resend / Mailchimp audience, a Google Sheet, your database.
 * Throw an error from here if saving fails and the visitor will see a friendly message.
 */
async function saveToWaitlist(email: string) {
  console.log("[waitlist]", email);
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
