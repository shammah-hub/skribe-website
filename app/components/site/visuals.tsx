"use client";

// Illustrative pieces used on several pages.
import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { C, money, mono, serif, tornEdge } from "./theme";
import { subs, subsTotal } from "./data";
import { Stamp, Tile } from "./ui";

/** Italic red text with a hand-drawn underline that draws itself. */
export function Underlined({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block italic" style={{ color: C.red }}>
      {children}
      <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 h-3 w-full" fill="none" preserveAspectRatio="none">
        <motion.path
          d="M2 8c40-7 70 5 110 0s80-7 120-1 50 3 66-1"
          stroke={C.red}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        />
      </svg>
    </span>
  );
}

const bars = [2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 2, 3, 1, 1, 2, 1, 3, 1, 2, 1, 3, 2];

/** The hero receipt: prints line by line, then gets stamped PAID. */
export function Receipt() {
  return (
    <div className="relative mx-auto w-full max-w-sm rotate-[2deg] drop-shadow-[0_24px_28px_rgba(21,19,15,0.16)]">
      <div className="px-7 pb-8 pt-8" style={{ backgroundColor: C.sheet }}>
        <div className="flex flex-col items-center text-center">
          <span className="grid h-10 w-10 place-items-center rounded-xl" style={{ backgroundColor: C.red }}>
            <Image width={20} height={20} className="h-5 w-5" src="/skribe2.png" alt="" />
          </span>
          <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.2em] text-[#15130F]/60`}>Monthly statement</p>
        </div>

        <div className="my-5 border-t border-dashed border-[#15130F]/30" />

        <ul className="space-y-4">
          {subs.map((s, i) => (
            <motion.li
              key={s.name}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.18, duration: 0.4 }}
            >
              <div className="flex items-end">
                <Image src={s.image} alt="" width={20} height={20} className="mb-0.5 mr-2 h-5 w-5 object-contain" />
                <span className="text-[15px] font-medium">{s.name}</span>
                <span className="mx-2 mb-1 flex-1 border-b border-dotted border-[#15130F]/40" />
                <span className={`${mono.className} text-[15px]`}>{money(s.amount)}</span>
              </div>
              <p className={`${mono.className} mt-0.5 pl-7 text-[11px] text-[#15130F]/50`}>renews {s.next}</p>
            </motion.li>
          ))}
        </ul>

        <div className="my-5 border-t border-dashed border-[#15130F]/30" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35 }}
          className="flex items-end justify-between"
        >
          <span className={`${mono.className} text-xs uppercase tracking-[0.2em] text-[#15130F]/60`}>Total</span>
          <span className={`${serif.className} text-5xl font-normal leading-none tracking-tight`}>{money(subsTotal)}</span>
        </motion.div>

        <div className="mt-7 flex h-10 items-stretch justify-center gap-[2px] opacity-80" aria-hidden>
          {bars.map((w, i) => (
            <span key={i} className="bg-[#15130F]" style={{ width: w * 1.5 }} />
          ))}
        </div>
      </div>
      <div aria-hidden className="h-2 w-full" style={{ backgroundImage: tornEdge, backgroundRepeat: "repeat-x" }} />

      <motion.div
        initial={{ opacity: 0, scale: 1.7, rotate: -4 }}
        animate={{ opacity: 0.92, scale: 1, rotate: -13 }}
        transition={{ delay: 1.7, type: "spring", stiffness: 420, damping: 22 }}
        className="absolute right-3 top-[46%] mix-blend-multiply"
      >
        <Stamp className="text-3xl">Paid</Stamp>
      </motion.div>
    </div>
  );
}

export function AlertVisual() {
  return (
    <div className="relative w-full max-w-[260px]">
      <div className="absolute inset-x-3 -bottom-2.5 h-full rounded-2xl border border-[#15130F]/10 bg-white/70" />
      <div className="relative flex items-center gap-3 rounded-2xl border border-[#15130F]/10 bg-white p-4 shadow-[0_10px_24px_-14px_rgba(21,19,15,0.4)]">
        <Tile icon="bell" color={C.amber} />
        <div>
          <p className="text-sm font-semibold">Netflix renews tomorrow</p>
          <p className={`${mono.className} mt-0.5 text-xs text-[#15130F]/55`}>{money(5500)} will be charged</p>
        </div>
      </div>
    </div>
  );
}

export function CalendarVisual() {
  const marks: Record<number, string[]> = { 10: [C.green], 15: [C.red], 20: [C.indigo, C.amber] };
  const days = Array.from({ length: 14 }, (_, i) => i + 8);
  return (
    <div className="w-full max-w-[260px] rounded-2xl border border-[#15130F]/10 bg-white p-4 shadow-[0_10px_24px_-14px_rgba(21,19,15,0.4)]">
      <p className={`${mono.className} mb-3 text-[11px] uppercase tracking-[0.16em] text-[#15130F]/55`}>December</p>
      <div className="grid grid-cols-7 gap-y-2 text-center">
        {days.map((d) => (
          <div key={d} className="flex flex-col items-center gap-1">
            <span
              className={`${mono.className} grid h-6 w-6 place-items-center rounded-full text-xs ${
                d === 12 ? "bg-[#15130F] text-white" : "text-[#15130F]/70"
              }`}
            >
              {d}
            </span>
            <span className="flex h-1.5 gap-0.5">
              {(marks[d] ?? []).map((c) => (
                <span key={c} className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c }} />
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
