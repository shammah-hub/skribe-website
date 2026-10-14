import Link from "next/link";
import { C, container, mono, serif } from "./theme";
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

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#15130F]/20">
      <div className={`${container} py-16`}>
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm leading-relaxed text-[#15130F]/70">
              Smart subscription banking for the modern world. Take control of your recurring payments and never miss a
              charge again.
            </p>
            <div className="mt-6 flex gap-3">
              {["𝕏", "in", "f", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[#15130F]/25 text-sm font-medium transition hover:border-[#15130F] hover:bg-[#15130F] hover:text-[#F4EFE6]"
                >
                  {s}
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

      <p
        aria-hidden
        className={`${serif.className} pointer-events-none -mb-[3.5vw] select-none text-center text-[26vw] font-normal leading-[0.8] tracking-[-0.04em] text-[#15130F]/[0.06]`}
      >
        Skribe
      </p>
    </footer>
  );
}
