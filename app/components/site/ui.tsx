"use client";

// Shared building blocks. Client file: server pages import the components,
// but constants and tokens live in theme.ts.
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Calendar,
  Check,
  CreditCard,
  Copy,
  DollarSign,
  Eye,
  EyeOff,
  Globe,
  Lightbulb,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  Plus,
  Send,
  Shield,
  Smartphone,
  Snowflake,
  Sparkles,
  Tv,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import { C, container, h1Inner, lead, mono, serif, tornEdge } from "./theme";
import { useWaitlist } from "./waitlistContext";

// ── Icons by name ──────────────────────────────────────────────
export const ICONS = {
  arrow: ArrowRight,
  bell: Bell,
  bulb: Lightbulb,
  calendar: Calendar,
  card: CreditCard,
  chart: BarChart3,
  chat: MessageCircle,
  check: Check,
  copy: Copy,
  dollar: DollarSign,
  eye: Eye,
  eyeoff: EyeOff,
  globe: Globe,
  lock: Lock,
  mail: Mail,
  phone: Smartphone,
  call: Phone,
  send: Send,
  shield: Shield,
  snowflake: Snowflake,
  sparkles: Sparkles,
  trending: TrendingUp,
  tv: Tv,
  wallet: Wallet,
  zap: Zap,
} as const;
export type IconName = keyof typeof ICONS;

// ── Motion ─────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Small pieces ───────────────────────────────────────────────
export function Tile({ icon, color }: { icon: IconName; color: string }) {
  const Icon = ICONS[icon];
  return (
    <span
      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border"
      style={{ backgroundColor: `${color}14`, borderColor: `${color}33` }}
    >
      <Icon className="h-5 w-5" style={{ color }} strokeWidth={1.8} />
    </span>
  );
}

export function Label({ n, children, color = C.red }: { n?: string; children: ReactNode; color?: string }) {
  return (
    <p className={`${mono.className} flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#15130F]/60`}>
      {n ? (
        <span className="rounded px-1.5 py-0.5 text-white" style={{ backgroundColor: color }}>
          §{n}
        </span>
      ) : (
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      )}
      {children}
    </p>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-xl" style={{ backgroundColor: C.red }}>
        <Image width={20} height={20} className="h-5 w-5" src="/skribe2.png" alt="Skribe logo" />
      </span>
      <span className={`${serif.className} text-[28px] font-normal leading-none tracking-tight`}>kribe</span>
    </span>
  );
}

export function Stamp({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`${mono.className} inline-block rounded-md border-[3px] border-double px-3 py-1 text-xl font-medium uppercase tracking-[0.2em] ${className}`}
      style={{ borderColor: C.red, color: C.red }}
    >
      {children}
    </span>
  );
}

type Variant = "dark" | "outline" | "light" | "ghostLight";
const btnBase = "inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-[15px] font-semibold transition";
const btnStyles: Record<Variant, string> = {
  dark: "bg-[#15130F] text-[#F4EFE6] hover:bg-[#2a2620]",
  outline: "border border-[#15130F]/30 hover:border-[#15130F]",
  light: "bg-[#FFFDF8] text-[#15130F] hover:bg-white",
  ghostLight: "border border-white/40 text-[#FFF6EE] hover:bg-white/10",
};

export function Btn({
  href,
  variant = "dark",
  children,
  className = "",
  onClick,
  type = "button",
  disabled,
  waitlist,
}: {
  href?: string;
  /** Opens the waitlist modal instead of navigating. */
  waitlist?: boolean;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const wl = useWaitlist();
  const cls = `${btnBase} ${btnStyles[variant]} ${disabled ? "cursor-not-allowed opacity-60" : ""} ${className}`;
  if (waitlist) {
    return (
      <button type="button" onClick={wl.open} className={cls}>
        {children}
      </button>
    );
  }
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}

/** Same switch as the app's SkribeToggle: slim line, round thumb, red when on. */
export function Toggle({ value, onChange, label }: { value: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      aria-label={label}
      onClick={() => onChange(!value)}
      className="relative h-10 w-[50px] shrink-0"
    >
      <span
        className="absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 rounded-full transition-colors duration-200"
        style={{ backgroundColor: value ? `${C.red}59` : "#D9DCE1" }}
      />
      <span
        className="absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-[1.5px] bg-white transition-all duration-200"
        style={{
          left: value ? "calc(100% - 24px)" : 0,
          backgroundColor: value ? C.red : "#fff",
          borderColor: value ? C.red : "#B9BEC6",
          boxShadow: value ? `0 2px 6px ${C.red}4D` : "0 2px 6px rgba(0,0,0,.12)",
        }}
      />
    </button>
  );
}

// ── Page header for inner pages ────────────────────────────────
export function PageHero({
  n,
  label,
  color,
  title,
  text,
  children,
  aside,
}: {
  n?: string;
  label: string;
  color?: string;
  title: ReactNode;
  text?: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="border-b border-[#15130F]/20 pb-16 pt-14 md:pb-24 md:pt-20">
      <div className={`${container} grid items-center gap-14 ${aside ? "lg:grid-cols-[1.1fr_0.9fr] lg:gap-12" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Label n={n} color={color}>
            {label}
          </Label>
          <h1 className={`${h1Inner} mt-6`}>{title}</h1>
          {text ? <p className={`${lead} mt-8 max-w-xl`}>{text}</p> : null}
          {children ? <div className="mt-10 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
        </motion.div>
        {aside}
      </div>
    </section>
  );
}

export function SectionHead({
  n,
  label,
  color,
  title,
  text,
}: {
  n?: string;
  label: string;
  color?: string;
  title: ReactNode;
  text?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <Label n={n} color={color}>
        {label}
      </Label>
      <h2 className={`${serif.className} mt-4 text-4xl font-normal leading-[1] tracking-[-0.02em] md:text-6xl`}>{title}</h2>
      {text ? <p className={`${lead} mt-4`}>{text}</p> : null}
    </Reveal>
  );
}

// ── FAQ accordion ──────────────────────────────────────────────
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="border-t border-[#15130F]">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-[#15130F]/20">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-baseline gap-5 py-6 text-left"
            >
              <span className={`${mono.className} text-xs text-[#15130F]/40`}>0{i + 1}</span>
              <span className={`${serif.className} flex-1 text-2xl font-normal leading-snug`}>{f.q}</span>
              <Plus
                className={`h-5 w-5 shrink-0 translate-y-1 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                style={{ color: C.red }}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pl-9 pr-10 leading-relaxed text-[#15130F]/70">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Closing call to action (every page ends with this) ─────────
export function CtaBand() {
  return (
    <section id="waitlist" className="scroll-mt-16 pb-20 md:pb-28">
      <div className={container}>
        <Reveal>
          <div
            className="grid items-center gap-12 overflow-hidden rounded-[32px] p-8 text-[#FFF6EE] md:p-14 lg:grid-cols-[1.2fr_0.8fr]"
            style={{ backgroundColor: C.red }}
          >
            <div>
              <h2 className={`${serif.className} text-5xl font-normal leading-[0.98] tracking-[-0.02em] md:text-7xl`}>
                Ready to take <span className="italic">control?</span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-[#FFF6EE]/85">
                Skribe isn&apos;t open to everyone yet. Join the waitlist and we&apos;ll let you know the moment your spot is ready.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Btn waitlist variant="light" className="group">
                  Join the waitlist
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Btn>
                <Btn href="/pricing" variant="ghostLight">
                  See pricing
                </Btn>
              </div>
            </div>

            <div className="mx-auto w-full max-w-xs -rotate-2 drop-shadow-[0_18px_22px_rgba(0,0,0,0.25)]">
              <div className="p-6 text-[#15130F]" style={{ backgroundColor: C.sheet }}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] text-[#15130F]/55`}>
                  The waitlist
                </p>
                <ul className="mt-5 space-y-3 text-sm">
                  {[
                    ["Early access", "first in line"],
                    ["Cost", "free"],
                    ["Spam", "never"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-end">
                      <span className="font-medium">{k}</span>
                      <span className="mx-2 mb-1 flex-1 border-b border-dotted border-[#15130F]/40" />
                      <span className={mono.className}>{v}</span>
                    </li>
                  ))}
                </ul>
                <div className="my-5 border-t border-dashed border-[#15130F]/30" />
                <div className="flex items-end justify-between">
                  <span className={`${mono.className} text-xs uppercase tracking-[0.2em] text-[#15130F]/60`}>Due</span>
                  <span className={`${serif.className} text-5xl font-normal leading-none`}>₦0</span>
                </div>
              </div>
              <div aria-hidden className="h-2 w-full" style={{ backgroundImage: tornEdge, backgroundRepeat: "repeat-x" }} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
