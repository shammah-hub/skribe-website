import type { Metadata } from "next";
import { JsonLd } from "../../components/site/JsonLd";
import { breadcrumbLd, faqLd, pageMeta } from "../../components/site/seo";
import { C, container, h2, lead, mono, sectionPad, serif } from "../../components/site/theme";
import { cardFaqs } from "../../components/site/data";
import { Btn, CtaBand, Faq, Label, PageHero, Reveal, SectionHead, Tile } from "../../components/site/ui";
import type { IconName } from "../../components/site/ui";
import { SkribeCard } from "../../components/site/SkribeCard";
import { CardDemo } from "./CardDemo";

export const metadata: Metadata = pageMeta({
  title: "Virtual cards",
  description:
    "A Skribe card you fund from the app. Freeze it in a tap, block merchants Skribe doesn't recognise, and see exactly why any charge was declined.",
  path: "/virtual-cards",
});

const steps: { title: string; text: string; tag: string; color: string }[] = [
  { title: "Verify once", text: "Finish identity verification in your Profile. Your Skribe card appears in the app. Nothing separate to apply for.", tag: "one time", color: C.indigo },
  { title: "Top up your balance", text: "Add money to the card from inside the app. It only ever spends what you've put on it.", tag: "any amount", color: C.teal },
  { title: "Pay your subscriptions", text: "Use the card details wherever you subscribe. Skribe tracks every charge in Recent charges.", tag: "anywhere", color: C.amber },
];

const controls: { title: string; text: string; icon: IconName; color: string }[] = [
  { title: "Freeze in a tap", text: "Every charge is declined until you turn it off. The card frosts over so you can see it's frozen.", icon: "snowflake", color: C.indigo },
  { title: "Block unknown merchants", text: "Merchants Skribe doesn't recognise are blocked by default. Allowing them asks you to confirm first.", icon: "shield", color: C.amber },
  { title: "Details hidden by default", text: "Reveal the number and CVV on demand, copy what you need, and hide them again.", icon: "lock", color: C.green },
  { title: "Plain-English declines", text: "No cryptic codes. Skribe says what happened, in words.", icon: "chat", color: C.mutedRed },
];

const reasons = ["Billing was off", "Card was frozen", "Not enough balance", "Unrecognised merchant", "Amount unclear"];

export default function VirtualCardsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([["Home", "/"], ["Virtual cards", "/virtual-cards"]]), faqLd(cardFaqs)]} />
      <PageHero
        n="01"
        label="Virtual cards"
        color={C.teal}
        title={
          <>
            A card for your subscriptions, <span className="italic">under your control.</span>
          </>
        }
        text="Fund your Skribe card from the app and pay for subscriptions without handing out your main account. Freeze it in a tap, and Skribe blocks merchants it doesn't recognise."
        aside={
          <div className="relative mx-auto w-full max-w-[420px] rotate-2">
            <SkribeCard />
            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-[#15130F]/15 bg-[#FFFDF8] p-3 pr-5 shadow-[0_16px_30px_-18px_rgba(21,19,15,0.5)] sm:-left-8">
              <Tile icon="shield" color={C.amber} />
              <div>
                <p className="text-sm font-semibold">Unknown merchant blocked</p>
                <p className={`${mono.className} text-xs text-[#15130F]/55`}>₦3,200.00 declined</p>
              </div>
            </div>
          </div>
        }
      >
        <Btn waitlist>Join the waitlist</Btn>
        <Btn href="#try-it" variant="outline">
          Try it below
        </Btn>
      </PageHero>

      {/* Demo */}
      <section id="try-it" className={`${sectionPad} scroll-mt-16`}>
        <div className={container}>
          <SectionHead
            n="02"
            label="Try it"
            color={C.red}
            title={
              <>
                This is the card tab <span className="italic">in the app.</span>
              </>
            }
            text="Same card, same controls, same wording. Freeze it, change how unknown merchants are handled, then simulate a charge."
          />
          <Reveal>
            <CardDemo />
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className={`${sectionPad} border-y border-[#15130F]/20 bg-[#EDE7DA]/60`}>
        <div className={container}>
          <SectionHead
            n="03"
            label="How it works"
            color={C.teal}
            title={
              <>
                Three steps, <span className="italic">then it just works.</span>
              </>
            }
          />
          <ol className="border-t border-[#15130F]">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <li className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 border-b border-[#15130F]/20 py-8 md:grid-cols-[120px_1fr_1.3fr_auto] md:items-center md:gap-x-8 md:px-4">
                  <span className={`${serif.className} text-6xl font-normal leading-none md:text-7xl`} style={{ color: s.color }}>
                    0{i + 1}
                  </span>
                  <h3 className={`${serif.className} text-3xl font-normal leading-tight tracking-tight`}>{s.title}</h3>
                  <p className="col-span-2 leading-relaxed text-[#15130F]/70 md:col-span-1">{s.text}</p>
                  <span className={`${mono.className} hidden text-xs uppercase tracking-[0.14em] text-[#15130F]/50 md:block`}>{s.tag}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Controls */}
      <section className={sectionPad}>
        <div className={container}>
          <SectionHead
            n="04"
            label="Controls"
            color={C.indigo}
            title={
              <>
                You decide what <span className="italic">gets through.</span>
              </>
            }
          />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#15130F]/15 bg-[#15130F]/15 sm:grid-cols-2">
            {controls.map((c) => (
              <div key={c.title} className="bg-[#FFFDF8] p-8">
                <Tile icon={c.icon} color={c.color} />
                <h3 className={`${serif.className} mt-6 text-2xl font-normal tracking-tight`}>{c.title}</h3>
                <p className="mt-2 leading-relaxed text-[#15130F]/70">{c.text}</p>
              </div>
            ))}
          </div>

          <Reveal className="mt-12">
            <p className={`${mono.className} mb-4 text-xs uppercase tracking-[0.16em] text-[#15130F]/55`}>
              When a charge is declined, you&apos;ll see one of these
            </p>
            <div className="flex flex-wrap gap-3">
              {reasons.map((r) => (
                <span key={r} className="rounded-full border border-[#B3261E]/25 bg-[#B3261E]/[0.06] px-4 py-2 text-sm font-medium text-[#B3261E]">
                  {r}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${sectionPad} border-t border-[#15130F]/20`}>
        <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Label n="05" color={C.green}>
              Card FAQ
            </Label>
            <h2 className={`${h2} mt-4`}>
              About the <span className="italic">card.</span>
            </h2>
            <p className={`${lead} mt-4`}>Still unsure? Ask us anything.</p>
            <div className="mt-8">
              <Btn href="/contact" variant="outline">
                Contact support
              </Btn>
            </div>
          </Reveal>
          <Reveal>
            <Faq items={cardFaqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
