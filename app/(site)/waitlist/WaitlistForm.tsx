"use client";

import { useState, type FormEvent } from "react";
import { C, serif } from "../../components/site/theme";
import { Btn, Stamp } from "../../components/site/ui";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done">("idle");
  const [error, setError] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("busy");
    setError("");
    const company = String(new FormData(e.currentTarget).get("company") ?? "");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      const j = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(j.error ?? "Something went wrong. Please try again.");
        setState("idle");
        return;
      }
      setState("done");
    } catch {
      setError("Could not reach the server. Check your connection and try again.");
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-8 md:p-10">
        <Stamp className="-rotate-6">On the list</Stamp>
        <h3 className={`${serif.className} mt-8 text-4xl font-normal tracking-tight`}>You&apos;re in.</h3>
        <p className="mt-3 max-w-sm leading-relaxed text-[#15130F]/70">
          We&apos;ll email <span className="font-semibold text-[#15130F]">{email}</span> the moment Skribe opens up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-6 md:p-8" noValidate>
      <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="w-full rounded-2xl border border-[#15130F]/20 bg-white px-4 py-3.5 text-[15px] outline-none transition placeholder:text-[#15130F]/35 focus:border-[#15130F]"
      />

      {/* Honeypot: hidden from people, visible to bots. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {error ? (
        <p role="alert" className="mt-3 text-sm" style={{ color: C.mutedRed }}>
          {error}
        </p>
      ) : null}

      <Btn type="submit" disabled={state === "busy"} className="mt-6 w-full">
        {state === "busy" ? "Adding you…" : "Join the waitlist"}
      </Btn>
      <p className="mt-4 text-center text-xs text-[#15130F]/55">One email when we open. No spam, ever.</p>
    </form>
  );
}
