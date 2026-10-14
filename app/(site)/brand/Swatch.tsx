"use client";

import { useState } from "react";
import { mono } from "../../components/site/theme";

/** A colour chip. Click to copy the hex code. */
export function Swatch({ name, hex, role, dark = false }: { name: string; hex: string; role: string; dark?: boolean }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(hex);
    } catch {
      /* clipboard can be blocked; the label still confirms the tap */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button
      onClick={copy}
      aria-label={`Copy ${name} ${hex}`}
      className="group overflow-hidden rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] text-left transition hover:-translate-y-0.5 hover:border-[#15130F]"
    >
      <span
        className={`${mono.className} flex h-28 items-end p-4 text-xs uppercase tracking-[0.14em] ${
          dark ? "text-white/80" : "text-[#15130F]/70"
        }`}
        style={{ backgroundColor: hex }}
      >
        {copied ? "Copied" : "Click to copy"}
      </span>
      <span className="block p-4">
        <span className="block font-semibold">{name}</span>
        <span className={`${mono.className} block text-[13px] text-[#15130F]/70`}>{hex}</span>
        <span className="mt-1 block text-sm text-[#15130F]/55">{role}</span>
      </span>
    </button>
  );
}
