"use client";

import { useState, type FormEvent } from "react";
import { C, serif } from "../../components/site/theme";
import { Btn } from "../../components/site/ui";

const topics = ["General question", "Problem with a payment", "My card", "Billing & plans", "Partnerships"];

const field =
  "w-full rounded-2xl border border-[#15130F]/20 bg-[#FFFDF8] px-4 py-3.5 text-[15px] outline-none transition placeholder:text-[#15130F]/35 focus:border-[#15130F]";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: send `data` to your backend (an /api/contact route, Resend, Formspree...).
    console.log("contact form", data);
    await new Promise((r) => setTimeout(r, 600));
    setBusy(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-8 md:p-10">
        <span className="grid h-12 w-12 place-items-center rounded-xl text-white" style={{ backgroundColor: C.green }}>
          ✓
        </span>
        <h3 className={`${serif.className} mt-6 text-4xl font-normal tracking-tight`}>Message written down.</h3>
        <p className="mt-3 max-w-sm leading-relaxed text-[#15130F]/70">
          Thanks for reaching out. We&apos;ll reply to your email as soon as we can.
        </p>
        <Btn variant="outline" onClick={() => setSent(false)} className="mt-8">
          Send another
        </Btn>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Name</span>
          <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={field} />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-medium">What&apos;s it about?</span>
        <select name="topic" className={field} defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-medium">Message</span>
        <textarea name="message" required rows={6} placeholder="Tell us what's going on" className={`${field} resize-y`} />
      </label>
      <Btn type="submit" disabled={busy} className="mt-6 w-full sm:w-auto">
        {busy ? "Sending…" : "Send message"}
      </Btn>
    </form>
  );
}
