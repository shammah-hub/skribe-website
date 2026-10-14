"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { container, mono } from "./theme";
import { Logo } from "./ui";
import { useWaitlist } from "./waitlistContext";

const links = [
  ["Features", "/features"],
  ["Virtual cards", "/virtual-cards"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const waitlist = useWaitlist();

  return (
    <header className="sticky top-0 z-50 border-b border-[#15130F]/15 bg-[#F4EFE6]/90 backdrop-blur">
      <nav className={`${container} flex h-16 items-center justify-between`}>
        <Link href="/" aria-label="Skribe home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <div className={`${mono.className} hidden items-center gap-8 text-xs uppercase tracking-[0.14em] md:flex`}>
          {links.map(([label, href]) => {
            const active = path === href;
            return (
              <Link
                key={href}
                href={href}
                className={`border-b-2 pb-1 transition-colors ${
                  active ? "border-[#D7261E] text-[#15130F]" : "border-transparent text-[#15130F]/60 hover:text-[#15130F]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={waitlist.open}
            className="flex h-10 items-center gap-2 rounded-full bg-[#15130F] px-5 text-sm font-semibold text-[#F4EFE6] transition hover:bg-[#2a2620]"
          >
            <Sparkles className="hidden h-4 w-4 sm:block" />
            <span>Join waitlist</span>
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-[#15130F]/25 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[#15130F]/15 bg-[#F4EFE6] md:hidden">
          <div className={`${container} flex flex-col py-2`}>
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`border-b border-dotted border-[#15130F]/25 py-4 text-lg ${
                  path === href ? "font-semibold text-[#D7261E]" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
