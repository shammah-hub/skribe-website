import type { Metadata } from "next";
import { JsonLd } from "../../components/site/JsonLd";
import { breadcrumbLd, pageMeta } from "../../components/site/seo";
import { C, container, h2, lead, mono, sectionPad, serif } from "../../components/site/theme";
import { stats } from "../../components/site/data";
import { CtaBand, Label, PageHero, Reveal, SectionHead } from "../../components/site/ui";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Skribe writes down every subscription and bill so you always know what leaves your account and when.",
  path: "/about",
});

// DRAFT COPY: edit freely. Nothing here claims a founding date, a team size or
// a location, so add those yourself if you want them on the page.
const principles = [
  { title: "Write it down", text: "A charge you can see is a charge you control. Skribe turns scattered, forgotten payments into one clear list.", color: C.red },
  { title: "No surprises", text: "Alerts arrive before the money moves, not after. Prices change, renewals roll over, and you hear about it first.", color: C.amber },
  { title: "You hold the switch", text: "Freeze a card, block a merchant, cancel a service. Every control is one tap away and none of it needs a phone call.", color: C.indigo },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["About", "/about"]])} />
      <PageHero
        n="01"
        label="About"
        color={C.teal}
        title={
          <>
            We write things down so <span className="italic">you don&apos;t have to.</span>
          </>
        }
        text="Skribe started with a simple annoyance: money leaving an account for things nobody remembered signing up for. So we built the app we wanted, one that writes every subscription and bill down, plainly."
      />

      <section className={sectionPad}>
        <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <Reveal>
            <Label n="02" color={C.indigo}>
              Our story
            </Label>
            <h2 className={`${h2} mt-4`}>
              Why a <span className="italic">scribe?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="space-y-6 text-lg leading-relaxed text-[#15130F]/75">
              <p>
                A scribe is the person who keeps the record. That is the whole idea. Most of us pay for a dozen small
                things every month, and the record of them lives nowhere: a card statement, an old email, a memory.
              </p>
              <p>
                Skribe keeps that record for you. It reads your recurring payments, tells you what&apos;s coming, and
                gives you a card and a set of controls so that you, not the merchant, decide what gets charged.
              </p>
              <p>
                We build for people paying in naira, for the way people here actually pay: airtime, data, TV,
                electricity and the streaming apps in between.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`${sectionPad} border-y border-[#15130F]/20 bg-[#EDE7DA]/60`}>
        <div className={container}>
          <SectionHead
            n="03"
            label="What we believe"
            color={C.red}
            title={
              <>
                Three rules we <span className="italic">keep.</span>
              </>
            }
          />
          <ol className="border-t border-[#15130F]">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <li className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 border-b border-[#15130F]/20 py-8 md:grid-cols-[120px_1fr_1.3fr] md:items-center md:gap-x-8 md:px-4">
                  <span className={`${serif.className} text-6xl font-normal leading-none md:text-7xl`} style={{ color: p.color }}>
                    0{i + 1}
                  </span>
                  <h3 className={`${serif.className} text-3xl font-normal leading-tight tracking-tight`}>{p.title}</h3>
                  <p className="col-span-2 leading-relaxed text-[#15130F]/70 md:col-span-1">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={sectionPad}>
        <div className={container}>
          <Reveal>
            <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`${i > 0 ? "md:border-l md:border-dotted md:border-[#15130F]/30 md:pl-8" : ""} ${i % 2 === 1 ? "pl-6" : ""}`}
                >
                  <p className={`${serif.className} text-6xl font-normal leading-none tracking-tight md:text-7xl`} style={{ color: s.color }}>
                    {s.value}
                  </p>
                  <p className={`${mono.className} mt-4 text-xs uppercase tracking-[0.14em] text-[#15130F]/60`}>{s.label}</p>
                </div>
              ))}
            </div>
            <p className={`${lead} mt-16 max-w-xl`}>
              Questions, ideas or something we got wrong? We read every message.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
