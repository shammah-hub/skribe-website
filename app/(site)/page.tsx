import type { Metadata } from "next";
import { JsonLd } from "../components/site/JsonLd";
import { faqLd, pageMeta } from "../components/site/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import { C, container, h1, h2, lead, mono, sectionPad, serif } from "../components/site/theme";
import { faqs, smallFeatures, stats, steps, testimonials } from "../components/site/data";
import type { Step } from "../components/site/data";
import { Btn, CtaBand, Faq, Label, Reveal, SectionHead, Tile } from "../components/site/ui";
import { AlertVisual, CalendarVisual, Receipt, Underlined } from "../components/site/visuals";
import { SkribeCard } from "../components/site/SkribeCard";
import { ServicesStrip } from "../components/site/ServicesStrip";

export const metadata: Metadata = pageMeta({
  title: "Skribe: every subscription, written down",
  description:
    "Track, manage and pay for all your subscriptions in one place. No more surprise charges, just a clear list of what leaves your account and when.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqLd(faqs)]} />
      {/* Hero */}
      <section className="pb-20 pt-14 md:pb-28 md:pt-20">
        <div className={`${container} grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12`}>
          <div>
            <p className={`${mono.className} text-xs uppercase tracking-[0.16em] text-[#15130F]/60`}>
              Smart subscription banking
            </p>
            <h1 className={`${h1} mt-6`}>
              Every subscription, <Underlined>written down.</Underlined>
            </h1>
            <p className={`${lead} mt-8 max-w-md`}>
              Track, manage and pay for all your subscriptions in one place. No more surprise charges, just a clear list
              of what leaves your account and when.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Btn waitlist className="group">
                Join the waitlist
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Btn>
              <Btn href="/features" variant="outline">
                <Play className="h-4 w-4" />
                See how it works
              </Btn>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["/a.jpg", "/b.jpg", "/c.jpg", "/d.jpg"].map((src) => (
                  <Image key={src} src={src} alt="" width={32} height={32} className="h-8 w-8 rounded-full border-2 border-[#F4EFE6] object-cover" />
                ))}
              </div>
              <p className="text-sm text-[#15130F]/70">
                <span className="font-semibold text-[#15130F]">5,000+</span> people track their subscriptions with Skribe
              </p>
            </div>
          </div>
          <Receipt />
        </div>
      </section>

      {/* Services */}
      <ServicesStrip />

      {/* How it works */}
      <section id="how-it-works" className={`${sectionPad} scroll-mt-16`}>
        <div className={container}>
          <SectionHead
            n="01"
            label="How it works"
            color={C.teal}
            title={
              <>
                From a pile of charges to <span className="italic">one clear list.</span>
              </>
            }
          />
          <ol className="border-t border-[#15130F]">
            {steps.map((s: Step, i: number) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <li className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 border-b border-[#15130F]/20 py-8 transition-colors hover:bg-[#FFFDF8]/70 md:grid-cols-[120px_1fr_1.3fr_auto] md:items-center md:gap-x-8 md:px-4">
                  <span className={`${serif.className} text-6xl font-normal leading-none md:text-7xl`} style={{ color: s.color }}>
                    0{i + 1}
                  </span>
                  <h3 className={`${serif.className} text-3xl font-normal leading-tight tracking-tight`}>{s.title}</h3>
                  <p className="col-span-2 leading-relaxed text-[#15130F]/70 md:col-span-1">{s.text}</p>
                  <div className="hidden items-center gap-3 md:flex">
                    <span className={`${mono.className} text-xs uppercase tracking-[0.14em] text-[#15130F]/50`}>{s.tag}</span>
                    <Tile icon={s.icon} color={s.color} />
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Features preview */}
      <section className={`${sectionPad} border-y border-[#15130F]/20 bg-[#EDE7DA]/60`}>
        <div className={container}>
          <SectionHead
            n="02"
            label="Features"
            color={C.indigo}
            title={
              <>
                The boring parts of money, <span className="italic">handled.</span>
              </>
            }
            text="Built for people who pay for a lot of small things and want to keep it that way, on purpose."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Smart alerts", text: "A heads-up before a charge hits, with reminders you control.", color: C.amber, visual: <AlertVisual /> },
              { title: "Renewal calendar", text: "Every upcoming renewal in one calendar, colour-coded.", color: C.indigo, visual: <CalendarVisual /> },
              {
                title: "Virtual card",
                text: "Pay subscriptions with a card you can freeze in a tap.",
                color: C.teal,
                visual: <SkribeCard className="max-w-[230px]" />,
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#15130F]/12 bg-[#FFFDF8]">
                  <div className="grid h-56 place-items-center p-6" style={{ backgroundColor: `${f.color}14` }}>
                    {f.visual}
                  </div>
                  <div className="p-6">
                    <h3 className={`${serif.className} text-3xl font-normal tracking-tight`}>{f.title}</h3>
                    <p className="mt-2 leading-relaxed text-[#15130F]/70">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
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

          <Reveal className="mt-14">
            <Link href="/features" className="group inline-flex items-center gap-2 font-semibold">
              <span className="border-b-2 border-[#D7261E] pb-0.5">See every feature</span>
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Virtual cards band */}
      <section className={sectionPad}>
        <div className={`${container} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
          <Reveal>
            <Label n="03" color={C.teal}>
              Virtual cards
            </Label>
            <h2 className={`${h2} mt-4`}>
              A card you can <span className="italic">freeze</span> in one tap.
            </h2>
            <p className={`${lead} mt-4 max-w-md`}>
              Fund it from the app and use it for your subscriptions. Freeze it when you want, block merchants Skribe
              doesn&apos;t recognise, and see exactly why any charge was declined.
            </p>
            <div className="mt-8">
              <Btn href="/virtual-cards">
                Explore virtual cards
                <ArrowRight className="h-4 w-4" />
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="relative mx-auto max-w-[400px] -rotate-2">
              <SkribeCard />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 md:pb-28">
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
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={`${sectionPad} scroll-mt-16 border-y border-[#15130F]/20 bg-[#EDE7DA]/60`}>
        <div className={container}>
          <Reveal className="mb-14 max-w-2xl md:mb-20">
            <Label n="04" color={C.mutedRed}>
              Notes from users
            </Label>
            <h2 className={`${h2} mt-4`}>
              Kind words, <span className="italic">pinned up.</span>
            </h2>
          </Reveal>
          <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={(i % 3) * 0.05} className="h-full">
                <figure
                  className={`relative flex h-full flex-col rounded-md border border-[#15130F]/10 bg-[#FFFDF8] p-8 shadow-[0_14px_24px_-16px_rgba(21,19,15,0.45)] ${
                    ["md:-rotate-1", "md:rotate-1", "md:-rotate-[0.5deg]"][i % 3]
                  }`}
                >
                  <span aria-hidden className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2" style={{ backgroundColor: `${t.tape}55` }} />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-4 w-4" style={{ color: C.amber, fill: C.amber }} />
                    ))}
                  </div>
                  <blockquote className={`${serif.className} mt-4 flex-1 text-2xl font-normal leading-snug`}>“{t.quote}”</blockquote>
                  <figcaption className="mt-8 flex items-center gap-3 border-t border-dotted border-[#15130F]/30 pt-5">
                    <Image src={t.image} alt={t.author} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold">{t.author}</p>
                      <p className={`${mono.className} text-[11px] uppercase tracking-[0.1em] text-[#15130F]/55`}>{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${sectionPad} scroll-mt-16`}>
        <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Label n="05" color={C.green}>
              FAQ
            </Label>
            <h2 className={`${h2} mt-4`}>
              Questions, <span className="italic">answered.</span>
            </h2>
            <p className={`${lead} mt-4`}>Can&apos;t find it here? Our team replies fast.</p>
            <div className="mt-8">
              <Btn href="/contact" variant="outline">
                Contact support
              </Btn>
            </div>
          </Reveal>
          <Reveal>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
