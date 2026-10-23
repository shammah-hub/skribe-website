"use client";

import { useEffect, useRef, useState } from "react";
import { SkribeCard } from "../../components/site/SkribeCard";
import { C, mono, serif } from "../../components/site/theme";
import { Toggle } from "../../components/site/ui";

/** A small playable demo of the three protections. No icons: only shapes, colour and type. */

const DEMO_PIN = "1234";
const MAX_TRIES = 5;
const LOCK_SECONDS = 30 * 60;
const SCENES = [
  { id: "pin", label: "PIN lock", color: C.indigo },
  { id: "freeze", label: "Freeze", color: C.teal },
  { id: "card", label: "Card details", color: C.amber },
] as const;
type SceneId = (typeof SCENES)[number]["id"];

const mmss = (s: number) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

export function SecurityDemo() {
  const [scene, setScene] = useState<SceneId>("pin");
  const active = SCENES.find((s) => s.id === scene)!;

  return (
    <div className="mx-auto w-full max-w-[440px]">
      {/* scene switcher */}
      <div role="tablist" aria-label="Security demos" className="mb-4 flex gap-2">
        {SCENES.map((s) => {
          const on = s.id === scene;
          return (
            <button
              key={s.id}
              role="tab"
              aria-selected={on}
              onClick={() => setScene(s.id)}
              className="flex-1 rounded-full border-2 px-3 py-2 text-sm font-semibold transition"
              style={{ borderColor: s.color, backgroundColor: on ? s.color : "transparent", color: on ? "#fff" : s.color }}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {/* the "phone" */}
      <div
        className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#15130F] bg-[#FFFDF8] p-5 shadow-[10px_10px_0_0_rgba(21,19,15,0.9)]"
        style={{ minHeight: 470 }}
      >
        <div aria-hidden className="absolute inset-x-0 top-0 h-2" style={{ backgroundColor: active.color }} />
        <div className="mx-auto mb-4 mt-1 h-1.5 w-16 rounded-full bg-[#15130F]/15" aria-hidden />
        {scene === "pin" ? <PinScene /> : scene === "freeze" ? <FreezeScene /> : <CardScene />}
      </div>
      <p className={`${mono.className} mt-5 text-center text-xs text-[#15130F]/50`}>A demo. Nothing here is real money.</p>
    </div>
  );
}

/* ── 1. PIN with lockout ───────────────────────────────────────────── */
function PinScene() {
  const [pin, setPin] = useState("");
  const [wrong, setWrong] = useState(0);
  const [msg, setMsg] = useState<"" | "bad" | "ok">("");
  const [left, setLeft] = useState(0); // seconds of lock remaining
  const locked = left > 0;

  useEffect(() => {
    if (!locked) return;
    const t = setInterval(() => setLeft((l) => Math.max(0, l - 1)), 1000);
    return () => clearInterval(t);
  }, [locked]);

  function press(d: string) {
    if (locked || msg === "ok") return;
    const next = (pin + d).slice(0, 4);
    setPin(next);
    setMsg("");
    if (next.length === 4) {
      setTimeout(() => {
        if (next === DEMO_PIN) {
          setMsg("ok");
          setWrong(0);
        } else {
          const w = wrong + 1;
          setWrong(w);
          setMsg("bad");
          setPin("");
          if (w >= MAX_TRIES) setLeft(LOCK_SECONDS);
        }
      }, 180);
    }
  }
  function reset() {
    setPin("");
    setWrong(0);
    setMsg("");
    setLeft(0);
  }

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "⌫"];
  const tint = locked ? C.mutedRed : msg === "ok" ? C.green : C.indigo;

  return (
    <div className="text-center">
      <p className={`${serif.className} text-3xl leading-none`}>
        {locked ? "Locked for a while" : msg === "ok" ? "Payment confirmed" : "Confirm with your PIN"}
      </p>
      <p className="mt-2 text-sm text-[#15130F]/60">
        {locked ? "Too many wrong tries. This keeps a thief out." : msg === "ok" ? "₦5,000 airtime sent." : "Sending ₦5,000 airtime. Demo PIN is 1234."}
      </p>

      <div className="mt-6 flex justify-center gap-4" aria-label={`${pin.length} of 4 digits entered`}>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="h-4 w-4 rounded-full border-2 transition-all duration-150"
            style={{
              borderColor: tint,
              backgroundColor: i < pin.length || msg === "ok" || locked ? tint : "transparent",
              transform: i < pin.length ? "scale(1.2)" : "scale(1)",
            }}
          />
        ))}
      </div>

      {/* tries */}
      <div className="mt-5 flex items-center justify-center gap-1.5" aria-label={`${wrong} of ${MAX_TRIES} wrong tries used`}>
        {Array.from({ length: MAX_TRIES }).map((_, i) => (
          <span key={i} className="h-1.5 w-8 rounded-full transition-colors" style={{ backgroundColor: i < wrong ? C.mutedRed : "rgba(21,19,15,0.12)" }} />
        ))}
      </div>
      <p className="mt-2 h-5 text-xs font-semibold" style={{ color: C.mutedRed }} role="status">
        {locked ? "" : msg === "bad" ? `Wrong PIN. ${MAX_TRIES - wrong} ${MAX_TRIES - wrong === 1 ? "try" : "tries"} left.` : ""}
      </p>

      {locked ? (
        <div className="mt-4">
          <p className={`${mono.className} text-5xl font-medium tracking-tight`} style={{ color: C.mutedRed }}>
            {mmss(left)}
          </p>
          <p className="mt-2 text-xs text-[#15130F]/55">Real Skribe locks for 30 minutes after 5 wrong tries.</p>
          <button onClick={reset} className="mt-5 rounded-full bg-[#15130F] px-5 py-2 text-sm font-semibold text-[#F4EFE6]">
            Reset the demo
          </button>
        </div>
      ) : msg === "ok" ? (
        <button onClick={reset} className="mt-8 rounded-full bg-[#15130F] px-5 py-2 text-sm font-semibold text-[#F4EFE6]">
          Try again
        </button>
      ) : (
        <div className="mx-auto mt-3 grid max-w-[260px] grid-cols-3 gap-3">
          {keys.map((k, i) =>
            k === "" ? (
              <span key={i} />
            ) : (
              <button
                key={i}
                onClick={() => (k === "⌫" ? (setPin((p) => p.slice(0, -1)), setMsg("")) : press(k))}
                aria-label={k === "⌫" ? "Delete" : k}
                className="h-12 rounded-2xl border border-[#15130F]/15 bg-white text-xl font-semibold transition active:scale-95 active:bg-[#5B6AD0] active:text-white"
              >
                {k}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}

/* ── 2. Freeze, then try a charge ──────────────────────────────────── */
function FreezeScene() {
  const [frozen, setFrozen] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; n: number }>(null);
  const n = useRef(0);

  function charge() {
    n.current += 1;
    setResult({ ok: !frozen, n: n.current });
  }

  return (
    <div>
      <SkribeCard frozen={frozen} />
      <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#15130F]/15 bg-white p-4">
        <div>
          <p className="font-semibold">Freeze card</p>
          <p className="text-sm text-[#15130F]/60">{frozen ? "Every charge is declined" : "Charges go through"}</p>
        </div>
        <Toggle value={frozen} onChange={(v) => (setFrozen(v), setResult(null))} label="Freeze card" />
      </div>

      <button
        onClick={charge}
        className="mt-4 h-12 w-full rounded-full text-base font-semibold text-white transition active:scale-[0.98]"
        style={{ backgroundColor: C.teal }}
      >
        A shop tries to charge ₦3,200
      </button>

      <div className="mt-4 h-14" role="status" aria-live="polite">
        {result ? (
          <div
            key={result.n}
            className="flex animate-[pop_.25s_ease-out] items-center justify-between rounded-2xl px-4 py-3"
            style={{ backgroundColor: `${result.ok ? C.green : C.mutedRed}1A` }}
          >
            <span className="font-semibold" style={{ color: result.ok ? C.green : C.mutedRed }}>
              {result.ok ? "Approved" : "Declined"}
            </span>
            <span className="text-sm text-[#15130F]/65">{result.ok ? "Balance covers it" : "Card is frozen"}</span>
          </div>
        ) : (
          <p className="pt-3 text-center text-sm text-[#15130F]/50">Freeze it, then try a charge.</p>
        )}
      </div>
      <style>{`@keyframes pop{from{opacity:0;transform:translateY(6px) scale(.98)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}

/* ── 3. Card details live in the provider's window ─────────────────── */
function CardScene() {
  const [open, setOpen] = useState(false);
  const [t, setT] = useState(0);
  const SHOW = 8; // seconds

  useEffect(() => {
    if (!open) return;
    setT(SHOW);
    const id = setInterval(() => setT((x) => x - 1), 1000);
    return () => clearInterval(id);
  }, [open]);
  useEffect(() => {
    if (open && t <= 0) setOpen(false);
  }, [t, open]);

  return (
    <div>
      <p className={`${serif.className} text-3xl leading-none`}>Your card details</p>
      <p className="mt-2 text-sm text-[#15130F]/60">Hidden until you ask. They are never kept on Skribe.</p>

      <div className="mt-5 grid gap-3">
        <div className="rounded-2xl border border-[#15130F]/15 bg-white p-4">
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] text-[#15130F]/50`}>Skribe app</p>
          <p className={`${mono.className} mt-2 text-lg`}>•••• •••• •••• 4821</p>
          <p className="mt-1 text-xs text-[#15130F]/55">Only the last four digits live here.</p>
        </div>

        <div className="flex items-center justify-center" aria-hidden>
          <span className="h-6 w-px" style={{ backgroundColor: C.amber }} />
        </div>

        <div
          className="relative overflow-hidden rounded-2xl border-2 p-4 transition-colors"
          style={{ borderColor: C.amber, backgroundColor: open ? `${C.amber}1A` : "#fff" }}
        >
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.amber }}>
            Card provider&apos;s secure window
          </p>
          {open ? (
            <div className="mt-2">
              <p className={`${mono.className} text-lg`}>5399 8310 2247 4821</p>
              <p className={`${mono.className} mt-1 text-sm text-[#15130F]/70`}>Exp 09/28 · CVV 123</p>
              <p className="mt-2 text-xs text-[#15130F]/55">Demo numbers. Hides itself in {Math.max(t, 0)}s.</p>
              <span aria-hidden className="absolute bottom-0 left-0 h-1 transition-[width] duration-1000 ease-linear" style={{ width: `${(Math.max(t, 0) / SHOW) * 100}%`, backgroundColor: C.amber }} />
            </div>
          ) : (
            <div className="mt-2">
              <p className={`${mono.className} select-none text-lg tracking-widest text-[#15130F]/25`}>████ ████ ████ ████</p>
              <p className="mt-1 text-xs text-[#15130F]/55">Not shown. Not stored by Skribe.</p>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-5 h-12 w-full rounded-full text-base font-semibold text-white transition active:scale-[0.98]"
        style={{ backgroundColor: open ? C.ink : C.amber }}
      >
        {open ? "Hide now" : "Show my card details"}
      </button>
    </div>
  );
}