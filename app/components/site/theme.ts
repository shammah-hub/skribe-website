// Shared design tokens for the Skribe website. Server-safe (no hooks, no JSX),
// so it can be imported from both server pages and client components.
//
// Spacing rules (8px grid), used on every page:
//   container      max-w-6xl, px-5 / md:px-8
//   section        py-20 / md:py-28
//   head -> body   mb-12 / md:mb-16
//   card padding   24px (p-6); large 32px (p-8)
//   gaps           16px in groups, 24px between cards
//
// Fonts: Instrument Serif (display, weight 400 only: never use font-bold on it),
// DM Sans (text), JetBrains Mono (numbers and labels).
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";

export const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"] });
export const sans = DM_Sans({ subsets: ["latin"] });
export const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export const C = {
  red: "#D7261E", // brand / stamp red
  indigo: "#5B6AD0",
  amber: "#D9962B",
  teal: "#2E9C8F",
  green: "#2F9E62",
  mutedRed: "#B3261E",
  ink: "#15130F",
  sheet: "#FFFDF8", // receipt / card paper
  paper: "#F4EFE6", // page
  paper2: "#EDE7DA", // alternate band
} as const;

export const container = "mx-auto w-full max-w-6xl px-5 md:px-8";
export const sectionPad = "py-20 md:py-28";

export const h1 = `${serif.className} font-normal leading-[0.96] tracking-[-0.025em] text-[52px] sm:text-7xl lg:text-[88px]`;
export const h1Inner = `${serif.className} font-normal leading-[0.98] tracking-[-0.025em] text-5xl sm:text-6xl lg:text-[76px]`;
export const h2 = `${serif.className} font-normal leading-[1] tracking-[-0.02em] text-4xl md:text-6xl`;
export const h3 = `${serif.className} font-normal leading-tight tracking-tight text-3xl`;
export const lead = "text-lg leading-relaxed text-[#15130F]/70";

export const money = (n: number, decimals = false) => {
  const [w, d] = n.toFixed(2).split(".");
  return "₦" + w.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (decimals ? "." + d : "");
};

// Paper grain for the page background.
export const grain =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.08 0 0 0 0 0.07 0 0 0 0 0.06 0 0 0 .06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// Sawtooth bottom edge for receipts.
export const tornEdge = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='8'%3E%3Cpath d='M0 0h16L8 8z' fill='%23FFFDF8'/%3E%3C/svg%3E")`;
