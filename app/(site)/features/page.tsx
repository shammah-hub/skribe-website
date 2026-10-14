import type { Metadata } from "next";
import { JsonLd } from "../../components/site/JsonLd";
import { breadcrumbLd, pageMeta } from "../../components/site/seo";
import { C, container, h2, lead, sectionPad, serif } from "../../components/site/theme";
import { billFeatures, smallFeatures } from "../../components/site/data";
import { Btn, CtaBand, Label, PageHero, Reveal, SectionHead, Tile } from "../../components/site/ui";
import { AlertVisual, CalendarVisual } from "../../components/site/visuals";
import { SkribeCard } from "../../components/site/SkribeCard";
import { ServicesStrip } from "../../components/site/ServicesStrip";
import type { ReactNode } from "react";

export const metadata: Metadata = pageMeta({
  title: "Features",
  description:
    "Smart alerts, a renewal calendar, a virtual card, spending insights and bill payments, all in one app.",
  path: "/features",
});

const rows: { n: string; label: string; title: ReactNode; text: string; points: string[]; color: string; visual: ReactNode }[] = [
  {
    n: "01",
    label: "Smart alerts",
    title: (
      <>
        Know before it <span className="italic">charges.</span>
      </>
    ),
    text: "Skribe tells you a charge is coming, so a renewal is never a surprise. Set reminders the way you like them.",
    points: ["A heads-up before every renewal", "Alerts when a price or term changes", "Reminders you control"],
    color: C.amber,
    visual: <AlertVisual />,
  },
  {
    n: "02",
    label: "Renewal calendar",
    title: (
      <>
        Every renewal, <span className="italic">one calendar.</span>
      </>
    ),
    text: "See the whole month at a glance, colour-coded by service, with the days money leaves your account marked.",
    points: ["All upcoming renewals in one view", "Colour-coded by service", "Spot busy days before they arrive"],
    color: C.indigo,
    visual: <CalendarVisual />,
  },
  {
    n: "03",
    label: "Virtual card",
    title: (
      <>
        A card that <span className="italic">obeys you.</span>
      </>
    ),
    text: "Fund your Skribe card from the app and pay subscriptions with it. Freeze it in a tap and block merchants Skribe doesn't recognise.",
    points: ["Freeze and unfreeze instantly", "Unrecognised merchants blocked by default", "Plain-English reasons for every decline"],
    color: C.teal,
    visual: <SkribeCard className="max-w-[260px]" />,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Features", "/features"]])} />
      <PageHero
        n="01"
        label="Features"
        color={C.indigo}
        title={
          <>
            Everything your money <span className="italic">needs written down.</span>
          </>
        }
        text="Subscriptions, cards and everyday bills, in one calm app. Here's what's inside."
      >
        <Btn waitlist>Join the waitlist</Btn>
        <Btn href="/pricing" variant="outline">
          See pricing
        </Btn>
      </PageHero>

      {/* Big three */}
      <section className={sectionPad}>
        <div className={`${container} space-y-20 md:space-y-28`}>
          {rows.map((r, i) => (
            <div key={r.n} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
                <Label n={r.n} color={r.color}>
                  {r.label}
                </Label>
                <h2 className={`${h2} mt-4`}>{r.title}</h2>
                <p className={`${lead} mt-4 max-w-md`}>{r.text}</p>
                <ul className="mt-8 space-y-3">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 border-b border-dotted border-[#15130F]/25 pb-3 text-[15px]">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: r.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="grid min-h-[300px] place-items-center rounded-3xl border border-[#15130F]/12 p-8" style={{ backgroundColor: `${r.color}14` }}>
                  {r.visual}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Everyday bills */}
      <section className={`${sectionPad} border-y border-[#15130F]/20 bg-[#EDE7DA]/60`}>
        <div className={container}>
          <SectionHead
            n="02"
            label="Everyday bills"
            color={C.green}
            title={
              <>
                Pay the bills <span className="italic">you already pay.</span>
              </>
            }
            text="Skribe isn't only about subscriptions. Handle the rest of your monthly money from the same place, in naira."
          />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#15130F]/15 bg-[#15130F]/15 sm:grid-cols-2 lg:grid-cols-4">
            {billFeatures.map((f) => (
              <div key={f.title} className="bg-[#FFFDF8] p-8">
                <Tile icon={f.icon} color={f.color} />
                <h3 className={`${serif.className} mt-6 text-2xl font-normal tracking-tight`}>{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#15130F]/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The rest */}
      <section className={sectionPad}>
        <div className={container}>
          <SectionHead n="03" label="And the rest" color={C.mutedRed} title={<>The details that add up.</>} />
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {smallFeatures.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.05}>
                <div className="flex gap-4 border-t border-[#15130F]/25 pt-6">
                  <Tile icon={f.icon} color={f.color} />
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#15130F]/70">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesStrip />

      <CtaBand />
    </>
  );
}
