"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { C, mono, serif } from "../../components/site/theme";
import { Btn } from "../../components/site/ui";

/**
 * ─── CONNECT TO FIREBASE HERE ───────────────────────────────────────────────
 * This is the only function you need to change. It receives what the person typed
 * and should save a deletion request (or call a Cloud Function that deletes the
 * account). Throw an Error to show the message under the form.
 *
 * Right now it only waits half a second and pretends it worked.
 */
async function submitDeletionRequest(data: { email: string; reason: string }): Promise<void> {
  void data;
  await new Promise((r) => setTimeout(r, 600));
  // Example once Firebase is set up:
  //   await addDoc(collection(db, "deletionRequests"), { ...data, status: "pending", createdAt: serverTimestamp() });
}

const reasons = ["I no longer use Skribe", "I'm worried about privacy", "I have another account", "Something else"];

export function DeleteForm() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [sure, setSure] = useState(false);
  const [word, setWord] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const valid = /^\S+@\S+\.\S+$/.test(email) && sure && word.trim().toUpperCase() === "DELETE";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid || busy) return;
    setBusy(true);
    setError("");
    try {
      await submitDeletionRequest({ email: email.trim(), reason });
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or email us.");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-8 text-center md:p-10" role="status">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full text-white" style={{ backgroundColor: C.green }}>
          <Check className="h-6 w-6" />
        </span>
        <h3 className={`${serif.className} mt-6 text-4xl font-normal tracking-tight`}>Request received.</h3>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-[#15130F]/70">
          We&apos;ll confirm by email and delete your account once we&apos;ve checked it. You can still change your mind until then.
        </p>
      </div>
    );
  }

  const field =
    "mt-2 h-12 w-full rounded-xl border border-[#15130F]/20 bg-white px-4 text-base outline-none transition focus:border-[#15130F] focus:ring-2 focus:ring-[#15130F]/10";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-6 md:p-8" noValidate>
      <p className={`${mono.className} text-xs uppercase tracking-[0.16em] text-[#15130F]/55`}>Request deletion</p>

      <label className="mt-6 block text-sm font-semibold">
        Email on your Skribe account
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={field}
        />
      </label>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold">
          Why are you leaving? <span className="font-normal text-[#15130F]/50">(optional)</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {reasons.map((r) => (
            <button
              key={r}
              type="button"
              aria-pressed={reason === r}
              onClick={() => setReason(reason === r ? "" : r)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                reason === r ? "border-[#15130F] bg-[#15130F] text-[#F4EFE6]" : "border-[#15130F]/20 text-[#15130F]/70 hover:border-[#15130F]/50"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-[#15130F]/80">
        <input type="checkbox" checked={sure} onChange={(e) => setSure(e.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-[#D7261E]" />
        I understand this is permanent, that my subscriptions and card will be removed, and that I should withdraw or spend my balance first.
      </label>

      <label className="mt-6 block text-sm font-semibold">
        Type <span className={mono.className}>DELETE</span> to confirm
        <input value={word} onChange={(e) => setWord(e.target.value)} autoCapitalize="characters" autoComplete="off" className={field} />
      </label>

      {error ? (
        <p role="alert" className="mt-5 text-sm font-semibold" style={{ color: C.mutedRed }}>
          {error}
        </p>
      ) : null}

      <Btn type="submit" disabled={!valid || busy} className="mt-8 w-full sm:w-auto">
        {busy ? "Sending…" : "Delete my account"}
      </Btn>
    </form>
  );
}