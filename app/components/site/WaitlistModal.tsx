"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { C, mono, serif } from "./theme";
import { Stamp } from "./ui";
import { WaitlistContext, useWaitlist } from "./waitlistContext";

/** Mount once (Shell does it). Any <Btn waitlist /> or <WaitlistLink /> opens the modal. */
export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ open }), [open]);

  return (
    <WaitlistContext.Provider value={value}>
      {children}
      <AnimatePresence>{isOpen ? <WaitlistDialog onClose={close} /> : null}</AnimatePresence>
    </WaitlistContext.Provider>
  );
}

/** A plain text-style trigger, for the footer. */
export function WaitlistLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { open } = useWaitlist();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}

function WaitlistDialog({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done">("idle");
  const [error, setError] = useState("");
  const panel = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  // Lock page scroll, close on Escape, keep Tab inside the dialog, give focus back on close.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => input.current?.focus(), 60);

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      const items = panel.current.querySelectorAll<HTMLElement>("button, input:not([tabindex='-1'])");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus?.();
    };
  }, [onClose]);

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

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-end bg-[#15130F]/55 p-4 backdrop-blur-sm sm:place-items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        className="relative w-full max-w-md rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-6 shadow-[0_30px_60px_-20px_rgba(21,19,15,0.55)] sm:p-8"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-[#15130F]/20 transition hover:border-[#15130F]"
        >
          <X className="h-4 w-4" />
        </button>

        {state === "done" ? (
          <div className="pt-2">
            <Stamp slam className="-rotate-6">
              On the list
            </Stamp>
            <h2 id="waitlist-title" className={`${serif.className} mt-8 text-4xl font-normal tracking-tight`}>
              You&apos;re in.
            </h2>
            <p className="mt-3 leading-relaxed text-[#15130F]/70">
              We&apos;ll email <span className="font-semibold text-[#15130F]">{email}</span> the moment Skribe opens up.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#15130F] px-7 text-[15px] font-semibold text-[#F4EFE6] transition hover:bg-[#2a2620]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="relative">
            <p className={`${mono.className} flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#15130F]/60`}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: C.red }} />
              Waitlist
            </p>
            <h2
              id="waitlist-title"
              className={`${serif.className} mt-4 text-4xl font-normal leading-[1] tracking-[-0.02em] sm:text-5xl`}
            >
              Be first <span className="italic">in line.</span>
            </h2>
            <p className="mt-3 leading-relaxed text-[#15130F]/70">
              Skribe isn&apos;t open to everyone yet. Leave your email and we&apos;ll tell you the moment it is.
            </p>

            <label htmlFor="waitlist-email" className="mb-1.5 mt-7 block text-sm font-medium">
              Email address
            </label>
            <input
              ref={input}
              id="waitlist-email"
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

            <button
              type="submit"
              disabled={state === "busy"}
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#15130F] px-7 text-[15px] font-semibold text-[#F4EFE6] transition hover:bg-[#2a2620] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state === "busy" ? "Adding you…" : "Join the waitlist"}
            </button>
            <p className="mt-4 text-center text-xs text-[#15130F]/55">One email when we open. No spam, ever.</p>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}