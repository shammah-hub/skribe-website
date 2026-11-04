import Link from "next/link";
import { C, container, mono } from "./theme";
import { Logo } from "./ui";
import { WaitlistLink } from "./WaitlistModal";

const cols = [
  {
    title: "Product",
    color: C.indigo,
    links: [
      ["Features", "/features"],
      ["Virtual cards", "/virtual-cards"],
      ["Pricing", "/pricing"],
      ["Join the waitlist", "#waitlist"],
    ],
  },
  {
    title: "Company",
    color: C.teal,
    links: [
      ["About us", "/about"],
      ["Brand kit", "/brand"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Support",
    color: C.amber,
    links: [
      ["Help center", "/contact"],
      ["Contact us", "/contact"],
      ["FAQ", "/pricing#faq"],
    ],
  },
];

// Classes are written out in full so Tailwind can see them at build time.
// Replace each href with your real profile URL.
const socials = [
  {
    label: "X",
    glyph: "𝕏",
    href: "#",
    hover: "hover:border-black hover:bg-black",
  },
  {
    label: "Facebook",
    glyph: "f",
    href: "#",
    hover: "hover:border-[#1877F2] hover:bg-[#1877F2]",
  },
  {
    // Instagram's brand gradient: yellow glow bottom-left, through orange, pink and purple to blue.
    label: "Instagram",
    glyph: "ig",
    href: "#",
    hover:
      "hover:border-transparent hover:bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#15130F]/20">
      <div className={`${container} py-16`}>
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm leading-relaxed text-[#15130F]/70">
              Track your subscriptions, pay with a virtual card and never miss a charge again. Skribe is not a bank. Financial
               services are provided through licensed partners.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`grid h-10 w-10 place-items-center rounded-full border border-[#15130F]/25 text-sm font-medium transition hover:text-white ${s.hover}`}
                >
                  {s.glyph}
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className={`${mono.className} flex items-center gap-2 text-xs uppercase tracking-[0.16em]`}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: col.color }} />
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-[#15130F]/70">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    {href === "#waitlist" ? (
                      <WaitlistLink className="transition-colors hover:text-[#15130F]">{label}</WaitlistLink>
                    ) : (
                      <Link href={href} className="transition-colors hover:text-[#15130F]">
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-dotted border-[#15130F]/30 pt-8 text-sm text-[#15130F]/60 md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} Skribe. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-[#15130F]">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[#15130F]">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Big faint logo at the bottom. brightness-0 turns it into a solid dark
          shape whatever colour the PNG is, then the opacity fades it. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/skribelogo2.png"
        alt=""
        aria-hidden
        draggable={false}
        className="pointer-events-none mx-auto -mb-[3.5vw] block h-auto w-[78vw] max-w-none select-none brightness-0 opacity-[0.06]"
      />
    </footer>
  );
}