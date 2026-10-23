"use client";

import { useState } from "react";
import { C, mono, serif } from "../../components/site/theme";

/** A playable heartbeat monitor. Tap a service to break it, tap again to make it slow, again to fix it. No icons. */

type State = "up" | "degraded" | "down";
const NAMES = ["Card payments", "Bills", "Transfers", "Sign-in", "Alerts"];
const NEXT: Record<State, State> = { up: "degraded", degraded: "down", down: "up" };
const LOOK: Record<State, { label: string; color: string }> = {
  up: { label: "Working", color: C.green },
  degraded: { label: "Slow", color: C.amber },
  down: { label: "Down", color: C.mutedRed },
};

// one heartbeat per 100 units of width
const beat = (amp: number, w: number) =>
  Array.from({ length: 4 }, (_, i) => {
    const x = i * w;
    return `L${x + w * 0.35},50 L${x + w * 0.42},${50 - amp * 0.35} L${x + w * 0.5},${50 + amp} L${x + w * 0.58},${50 - amp * 1.1} L${x + w * 0.66},50 `;
  }).join("");
const PATHS: Record<State, string> = {
  up: `M0,50 ${beat(34, 100)} L400,50`,
  degraded: `M0,50 ${beat(14, 100)} L400,50`,
  down: "M0,50 L400,50",
};

export function StatusVisual() {
  const [s, setS] = useState<State[]>(NAMES.map(() => "up"));
  const worst: State = s.includes("down") ? "down" : s.includes("degraded") ? "degraded" : "up";
  const w = LOOK[worst];
  const headline = { up: "All systems working", degraded: "Some things are slow", down: "Something is down" }[worst];

  return (
    <div className="mx-auto w-full max-w-[440px]">
      <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-[#15130F] bg-[#FFFDF8] p-5 shadow-[10px_10px_0_0_rgba(21,19,15,0.9)]">
        <div aria-hidden className="absolute inset-x-0 top-0 h-2 transition-colors duration-500" style={{ backgroundColor: w.color }} />

        <div className="mt-2 flex items-center justify-between">
          <p className={`${serif.className} text-3xl leading-none`} role="status" aria-live="polite">
            {headline}
          </p>
          <span className="rounded-full px-3 py-1 text-xs font-semibold text-white transition-colors duration-500" style={{ backgroundColor: w.color }}>
            {w.label}
          </span>
        </div>

        {/* the heartbeat */}
        <div className="mt-5 overflow-hidden rounded-2xl transition-colors duration-500" style={{ backgroundColor: `${w.color}14` }}>
          <svg viewBox="0 0 400 100" className="block h-28 w-full" preserveAspectRatio="none" aria-hidden>
            {[25, 50, 75].map((y) => (
              <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(21,19,15,0.08)" strokeWidth="1" />
            ))}
            <path
              key={worst}
              d={PATHS[worst]}
              fill="none"
              stroke={w.color}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={1}
              style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "draw 1.1s ease-out forwards" }}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* services */}
        <ul className="mt-5 space-y-2.5">
          {NAMES.map((n, i) => {
            const l = LOOK[s[i]];
            return (
              <li key={n}>
                <button
                  type="button"
                  onClick={() => setS((arr) => arr.map((v, k) => (k === i ? NEXT[v] : v)))}
                  aria-label={`${n}: ${l.label}. Tap to change.`}
                  className="flex w-full items-center justify-between rounded-2xl border-2 px-4 py-3 text-left transition active:scale-[0.98]"
                  style={{ borderColor: l.color, backgroundColor: `${l.color}12` }}
                >
                  <span className="font-semibold">{n}</span>
                  <span className="flex items-center gap-2 text-sm font-semibold" style={{ color: l.color }}>
                    <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: l.color }} />
                    {l.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setS(NAMES.map(() => "up"))}
          disabled={worst === "up"}
          className="mt-5 h-11 w-full rounded-full bg-[#15130F] text-sm font-semibold text-[#F4EFE6] transition disabled:opacity-30"
        >
          Fix everything
        </button>
        <style>{`@keyframes draw{to{stroke-dashoffset:0}}`}</style>
      </div>
      <p className={`${mono.className} mt-5 text-center text-xs text-[#15130F]/50`}>A demo. Tap a service to break it.</p>
    </div>
  );
}