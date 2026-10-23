"use client";

import { useState } from "react";
import { C, mono, serif } from "../../components/site/theme";

/** A stack of colourful release cards. Tap the front card (or the button) to send it to the back. No icons. */

const cards = [
  { tag: "New", date: "Oct 2026", title: "Pay bills and send money", color: C.green, bars: [88, 62, 74] },
  { tag: "Improved", date: "Sep 2026", title: "Clearer decline reasons", color: C.indigo, bars: [70, 90, 55] },
  { tag: "New", date: "Aug 2026", title: "Freeze your card in a tap", color: C.teal, bars: [60, 80, 92] },
  { tag: "Coming", date: "Soon", title: "Top up from your bank", color: C.red, bars: [95, 50, 68] },
];

// resting pose for each position in the stack (0 = front)
const pose = [
  { x: 0, y: 0, r: -2, s: 1 },
  { x: 18, y: 26, r: 3, s: 0.96 },
  { x: -14, y: 50, r: -4, s: 0.92 },
  { x: 12, y: 72, r: 5, s: 0.88 },
];

export function UpdatesVisual() {
  const [order, setOrder] = useState([0, 1, 2, 3]); // card indexes, front first
  const next = () => setOrder((o) => [...o.slice(1), o[0]]);

  return (
    <div className="mx-auto w-full max-w-[420px]">
      <div className="relative" style={{ height: 380 }}>
        {cards.map((c, i) => {
          const pos = order.indexOf(i);
          const p = pose[pos];
          const front = pos === 0;
          return (
            <button
              key={c.title}
              type="button"
              onClick={front ? next : undefined}
              tabIndex={front ? 0 : -1}
              aria-label={front ? `${c.title}. Show the next update` : undefined}
              aria-hidden={!front}
              className="absolute inset-x-0 top-0 block w-full cursor-pointer rounded-3xl border-[3px] border-[#15130F] p-6 text-left transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFDF8",
                transform: `translate(${p.x}px, ${p.y}px) rotate(${p.r}deg) scale(${p.s})`,
                zIndex: 10 - pos,
                boxShadow: front ? `8px 8px 0 0 ${c.color}` : "4px 4px 0 0 rgba(21,19,15,0.9)",
                cursor: front ? "pointer" : "default",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: c.color }}>
                  {c.tag}
                </span>
                <span className={`${mono.className} text-xs uppercase tracking-[0.14em] text-[#15130F]/55`}>{c.date}</span>
              </div>
              <p className={`${serif.className} mt-6 text-4xl leading-[1.02] tracking-tight`}>{c.title}</p>

              {/* a little drawing of "something changed": bars that grow in when the card comes forward */}
              <div className="mt-7 space-y-3" aria-hidden>
                {c.bars.map((w, k) => (
                  <div key={k} className="h-3 rounded-full bg-[#15130F]/8" style={{ backgroundColor: "rgba(21,19,15,0.08)" }}>
                    <div
                      className="h-full rounded-full transition-[width] duration-700 ease-out"
                      style={{ width: front ? `${w}%` : "18%", backgroundColor: c.color, opacity: 0.35 + k * 0.25, transitionDelay: `${k * 90}ms` }}
                    />
                  </div>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2" aria-hidden>
          {order.map((idx, pos) => (
            <span
              key={cards[idx].title}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{ width: pos === 0 ? 28 : 10, backgroundColor: pos === 0 ? cards[idx].color : "rgba(21,19,15,0.2)" }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="rounded-full border-2 border-[#15130F] px-5 py-2 text-sm font-semibold transition hover:bg-[#15130F] hover:text-[#F4EFE6]"
        >
          Next update
        </button>
      </div>
    </div>
  );
}