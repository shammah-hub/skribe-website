import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import { C, container, h2, lead, mono, sectionPad, serif } from "../../components/site/theme";
import { breadcrumbLd, pageMeta } from "../../components/site/seo";
import { JsonLd } from "../../components/site/JsonLd";
import { Btn, CtaBand, Label, PageHero, Reveal, SectionHead, Stamp, Tile } from "../../components/site/ui";
import { Swatch } from "./Swatch";

export const metadata: Metadata = pageMeta({
  title: "Brand kit",
  description: "Skribe logos, colours, typefaces and the rules for using them. For press, partners and designers.",
  path: "/brand",
});

const brand = [
  { name: "Skribe red", hex: C.red, role: "The one loud colour. Logo, stamp, key moments.", dark: true },
  { name: "Ink", hex: C.ink, role: "Text, buttons, the dark card.", dark: true },
  { name: "Paper", hex: C.paper, role: "Page background.", dark: false },
  { name: "Sheet", hex: C.sheet, role: "Receipts, cards, anything on paper.", dark: false },
  { name: "Band", hex: C.paper2, role: "Alternate sections.", dark: false },
];

const accents = [
  { name: "Indigo", hex: C.indigo, role: "Info, security, calendar." },
  { name: "Teal", hex: C.teal, role: "Cards, balance, receiving." },
  { name: "Amber", hex: C.amber, role: "Alerts, reminders." },
  { name: "Green", hex: C.green, role: "Paid, success, savings." },
  { name: "Muted red", hex: C.mutedRed, role: "Declined, errors, warnings." },
];

const misuse: { label: string; style: CSSProperties }[] = [
  { label: "Don't stretch it", style: { transform: "scaleX(1.6)" } },
  { label: "Don't recolour it", style: { filter: "hue-rotate(200deg) saturate(1.4)" } },
  { label: "Don't rotate it", style: { transform: "rotate(24deg)" } },
  { label: "Don't add effects", style: { filter: "drop-shadow(0 6px 4px rgba(0,0,0,.55)) blur(0.6px)" } },
];

function Mark({ size = 56 }: { size?: number }) {
  return (
    <span className="grid place-items-center rounded-[28%]" style={{ backgroundColor: C.red, width: size, height: size }}>
      <Image src="/skribe2.png" alt="" width={size} height={size} style={{ width: size * 0.5, height: size * 0.5 }} />
    </span>
  );
}

export default function BrandPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Brand kit", "/brand"]])} />
      <PageHero
        n="01"
        label="Brand kit"
        color={C.red}
        title={
          <>
            How Skribe looks, sounds and <span className="italic">behaves.</span>
          </>
        }
        text="Everything you need to represent Skribe: logos, colours, type and a few simple rules. Press, partners and designers, start here."
      >
        <Btn href="#logos">See the logos</Btn>
        <Btn href="/contact" variant="outline">
          Ask us something
        </Btn>
      </PageHero>

      {/* Logos */}
      <section id="logos" className={`${sectionPad} scroll-mt-16`}>
        <div className={container}>
          <SectionHead
            n="02"
            label="Logo"
            color={C.red}
            title={
              <>
                One mark, <span className="italic">used plainly.</span>
              </>
            }
            text="The S on Skribe red is the app mark. The wordmark sits beside it in a serif. Keep clear space equal to the height of the S on every side, and never go smaller than 24px."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "App mark",
                note: "White S on Skribe red",
                href: "/skribe2.png",
                bg: C.red,
                art: <Image src="/skribe2.png" alt="Skribe app mark" width={96} height={96} className="h-24 w-24 object-contain" />,
              },
              {
                title: "Colour mark",
                note: "For paper and white backgrounds",
                href: "/skribe1.png",
                bg: C.sheet,
                art: <Image src="/skribe1.png" alt="Skribe colour mark" width={96} height={96} className="h-24 w-24 object-contain" />,
              },
              {
                title: "Wordmark",
                note: "Mark plus the name",
                href: "",
                bg: C.paper,
                art: (
                  <span className="flex items-center gap-3">
                    <Mark size={56} />
                    <span className={`${serif.className} text-6xl font-normal leading-none tracking-tight`}>kribe</span>
                  </span>
                ),
              },
            ].map((l, i) => (
              <Reveal key={l.title} delay={i * 0.05} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8]">
                  <div className="grid h-52 place-items-center" style={{ backgroundColor: l.bg }}>
                    {l.art}
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-4 p-6">
                    <div>
                      <p className="font-semibold">{l.title}</p>
                      <p className="text-sm text-[#15130F]/60">{l.note}</p>
                    </div>
                    {l.href ? (
                      <a
                        href={l.href}
                        download
                        className="shrink-0 rounded-full border border-[#15130F]/30 px-4 py-2 text-sm font-semibold transition hover:border-[#15130F]"
                      >
                        PNG
                      </a>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { bg: C.paper, fg: C.ink, label: "On paper" },
                { bg: C.ink, fg: C.paper, label: "On ink" },
                { bg: C.red, fg: "#FFF6EE", label: "On red" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex h-28 items-center justify-between rounded-3xl border border-[#15130F]/15 px-6"
                  style={{ backgroundColor: b.bg, color: b.fg }}
                >
                  <span className={`${serif.className} text-4xl font-normal tracking-tight`}>Skribe</span>
                  <span className={`${mono.className} text-xs uppercase tracking-[0.14em] opacity-70`}>{b.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <p className={`${mono.className} mb-4 text-xs uppercase tracking-[0.16em] text-[#15130F]/55`}>Please don&apos;t</p>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {misuse.map((m) => (
                <div key={m.label} className="rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-6">
                  <div className="grid h-24 place-items-center overflow-hidden">
                    <span style={m.style}>
                      <Mark size={56} />
                    </span>
                  </div>
                  <p className="mt-4 flex items-center gap-2 text-sm font-medium">
                    <span style={{ color: C.mutedRed }}>✕</span>
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Colour */}
      <section className={`${sectionPad} border-y border-[#15130F]/20 bg-[#EDE7DA]/60`}>
        <div className={container}>
          <SectionHead
            n="03"
            label="Colour"
            color={C.amber}
            title={
              <>
                One loud colour, <span className="italic">quiet everything else.</span>
              </>
            }
            text="Red is for the logo, the stamp and the moments that matter. Accent colours stay small and flat: icon tiles, dots and numbers. Never gradients. Click any swatch to copy its code."
          />
          <p className={`${mono.className} mb-4 text-xs uppercase tracking-[0.16em] text-[#15130F]/55`}>Core</p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {brand.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>
          <p className={`${mono.className} mb-4 mt-12 text-xs uppercase tracking-[0.16em] text-[#15130F]/55`}>Accents</p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {accents.map((c) => (
              <Swatch key={c.hex} {...c} dark />
            ))}
          </div>
        </div>
      </section>

      {/* Type */}
      <section className={sectionPad}>
        <div className={container}>
          <SectionHead
            n="04"
            label="Typography"
            color={C.indigo}
            title={
              <>
                Three typefaces, <span className="italic">three jobs.</span>
              </>
            }
          />
          <div className="border-t border-[#15130F]">
            {[
              {
                name: "Instrument Serif",
                job: "Headlines, big numbers",
                sample: <span className={`${serif.className} text-6xl font-normal leading-none tracking-tight md:text-7xl`}>Every subscription, <em>written down.</em></span>,
              },
              {
                name: "DM Sans",
                job: "Body text, buttons",
                sample: <span className="text-2xl leading-snug">Track, manage and pay for all your subscriptions in one place.</span>,
              },
              {
                name: "JetBrains Mono",
                job: "Labels, amounts, dates",
                sample: <span className={`${mono.className} text-2xl uppercase tracking-[0.12em]`}>₦5,500 · renews Dec 15</span>,
              },
            ].map((t) => (
              <Reveal key={t.name}>
                <div className="grid gap-4 border-b border-[#15130F]/20 py-8 md:grid-cols-[220px_1fr] md:items-center md:gap-10">
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-[#15130F]/60">{t.job}</p>
                  </div>
                  <div>{t.sample}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#15130F]/60">All three are free on Google Fonts. The serif only comes in regular weight, so never make it bold.</p>
        </div>
      </section>

      {/* Shapes */}
      <section className={`${sectionPad} border-t border-[#15130F]/20`}>
        <div className={container}>
          <SectionHead
            n="05"
            label="Shapes and motifs"
            color={C.teal}
            title={
              <>
                Everything looks like <span className="italic">paper.</span>
              </>
            }
            text="Skribe keeps the record, so the design borrows from receipts and ledgers. These pieces show up everywhere."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Reveal className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-6">
                <div className="flex flex-1 items-center gap-3">
                  <Tile icon="bell" color={C.amber} />
                  <Tile icon="shield" color={C.indigo} />
                  <Tile icon="card" color={C.teal} />
                </div>
                <p className="mt-6 font-semibold">Rounded-square icon tiles</p>
                <p className="mt-1 text-sm text-[#15130F]/60">Tinted, with a hairline border. Never circles.</p>
              </div>
            </Reveal>
            <Reveal delay={0.05} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-6">
                <div className="flex flex-1 items-center">
                  <Stamp className="-rotate-6">Paid</Stamp>
                </div>
                <p className="mt-6 font-semibold">The stamp</p>
                <p className="mt-1 text-sm text-[#15130F]/60">Skribe red, double border, tilted. Use it once per view.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-6">
                <div className="flex flex-1 flex-col justify-center gap-4">
                  {[["Netflix", "₦5,500"], ["Spotify", "₦1,300"]].map(([k, v]) => (
                    <div key={k} className="flex items-end text-sm">
                      <span className="font-medium">{k}</span>
                      <span className="mx-2 mb-1 flex-1 border-b border-dotted border-[#15130F]/40" />
                      <span className={mono.className}>{v}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 font-semibold">Dotted leaders</p>
                <p className="mt-1 text-sm text-[#15130F]/60">Join a name to its amount. Dashed rules separate groups.</p>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-6">
                <div className="flex flex-1 items-center gap-3">
                  <span className="rounded-full bg-[#15130F] px-5 py-2.5 text-sm font-semibold text-[#F4EFE6]">Pill</span>
                  <span className="rounded-full border border-[#15130F]/30 px-5 py-2.5 text-sm font-semibold">Outline</span>
                </div>
                <p className="mt-6 font-semibold">Pill buttons</p>
                <p className="mt-1 text-sm text-[#15130F]/60">Black for the main action, outlined for the rest.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Voice */}
      <section className={`${sectionPad} border-t border-[#15130F]/20 bg-[#EDE7DA]/60`}>
        <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <Reveal>
            <Label n="06" color={C.green}>
              Voice
            </Label>
            <h2 className={`${h2} mt-4`}>
              Plain words, <span className="italic">exact numbers.</span>
            </h2>
            <p className={`${lead} mt-4`}>We write like a good scribe: clear, short and never dramatic.</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-6">
                <p className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.green }}>
                  We say
                </p>
                <ul className="mt-4 space-y-3 text-[15px]">
                  <li>“Netflix renews tomorrow. ₦5,500.”</li>
                  <li>“Card was frozen.”</li>
                  <li>Short sentences.</li>
                  <li>Exact naira amounts, with the ₦ sign.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-6">
                <p className={`${mono.className} text-xs uppercase tracking-[0.16em]`} style={{ color: C.mutedRed }}>
                  We don&apos;t say
                </p>
                <ul className="mt-4 space-y-3 text-[15px] text-[#15130F]/70">
                  <li>“Revolutionary” or “game-changing”.</li>
                  <li>“Error code 05”.</li>
                  <li>Exclamation marks!!!</li>
                  <li>Vague amounts like “a small fee”.</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
