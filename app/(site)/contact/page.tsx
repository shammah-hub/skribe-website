import type { Metadata } from "next";
import { JsonLd } from "../../components/site/JsonLd";
import { breadcrumbLd, pageMeta } from "../../components/site/seo";
import { C, container, mono, sectionPad, serif } from "../../components/site/theme";
import { Btn, PageHero, Reveal, SectionHead, Tile } from "../../components/site/ui";
import type { IconName } from "../../components/site/ui";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Questions about a payment, your card or your plan? Email us, or message us from inside the Skribe app.",
  path: "/contact",
});

// PLACEHOLDER: replace with your real address.
const EMAIL = "skribesubscribers@gmail.com";

const routes: { title: string; text: string; tag: string; color: string; icon: IconName; href?: string; cta?: string }[] = [
  {
    title: "In the app",
    text: "Open Profile, then Help. Your account and recent activity are already attached, so we can see what happened.",
    tag: "fastest for payments",
    color: C.teal,
    icon: "chat",
  },
  {
    title: "Email us",
    text: "For anything that is not urgent, or if you cannot open the app. Tell us what happened and we will take it from there.",
    tag: EMAIL,
    color: C.indigo,
    icon: "mail",
    href: `mailto:${EMAIL}`,
    cta: "Send an email",
  },
  {
    title: "Help centre",
    text: "Answers on cards, subscriptions, transfers and bills. Most questions are already covered here.",
    tag: "self-serve",
    color: C.amber,
    icon: "bulb",
    href: "/help",
    cta: "Browse help",
  },
  {
    title: "Service status",
    text: "If something looks broken for everyone, check here before you write. We post problems and fixes as they happen.",
    tag: "live",
    color: C.green,
    icon: "zap",
    href: "/status",
    cta: "Check status",
  },
];

const include = [
  "The email on your Skribe account",
  "The merchant name and the amount",
  "The date and roughly what time",
  "A screenshot, if you have one",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Contact", "/contact"]])} />
      <PageHero
        n="01"
        label="Contact"
        color={C.indigo}
        title={
          <>
            Talk to us, <span className="italic">we&apos;re listening.</span>
          </>
        }
        text="Questions about a payment, your card or your plan? Reach us from the app or by email. The details below help us sort it out faster."
        aside={
          <div className="relative mx-auto w-full max-w-[420px] rotate-2">
            <div className="rounded-3xl border-2 border-dashed border-[#15130F]/40 bg-[#FFFDF8] p-8">
              <p className={`${mono.className} text-xs uppercase tracking-[0.16em] text-[#15130F]/55`}>Write to us</p>
              <a
                href={`mailto:${EMAIL}`}
                className={`${serif.className} mt-4 block break-all text-3xl font-normal leading-tight tracking-tight underline decoration-[#15130F]/25 underline-offset-8 transition hover:decoration-[#15130F] md:text-4xl`}
              >
                {EMAIL}
              </a>
              <div className="my-6 border-t border-dotted border-[#15130F]/30" />
              <div className="flex items-center gap-3">
                <Tile icon="chat" color={C.teal} />
                <p className="text-sm leading-snug text-[#15130F]/70">
                  Using the app? <span className="font-semibold text-[#15130F]">Profile, then Help</span> is quicker.
                </p>
              </div>
            </div>
          </div>
        }
      >
        <Btn href={`mailto:${EMAIL}`}>Send an email</Btn>
        <Btn href="/help" variant="outline">
          Visit the help centre
        </Btn>
      </PageHero>

      {/* Ways to reach us */}
      <section className={`${sectionPad} border-y border-[#15130F]/20 bg-[#EDE7DA]/60`}>
        <div className={container}>
          <SectionHead
            n="02"
            label="Where to go"
            color={C.teal}
            title={
              <>
                Pick the one that <span className="italic">fits.</span>
              </>
            }
          />
          <ol className="border-t border-[#15130F]">
            {routes.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.04}>
                <li className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 border-b border-[#15130F]/20 py-8 md:grid-cols-[120px_1fr_1.3fr_auto] md:items-center md:gap-x-8 md:px-4">
                  <span className={`${serif.className} text-6xl font-normal leading-none md:text-7xl`} style={{ color: r.color }}>
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className={`${serif.className} text-3xl font-normal leading-tight tracking-tight`}>{r.title}</h3>
                    <p className={`${mono.className} mt-1 text-xs uppercase tracking-[0.14em] text-[#15130F]/50`}>{r.tag}</p>
                  </div>
                  <p className="col-span-2 leading-relaxed text-[#15130F]/70 md:col-span-1">{r.text}</p>
                  <div className="col-span-2 md:col-span-1">
                    {r.href ? (
                      <Btn href={r.href} variant="outline" className="!h-11 !px-5">
                        {r.cta}
                      </Btn>
                    ) : (
                      <span className={`${mono.className} text-xs text-[#15130F]/50`}>Inside the app</span>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* What to include */}
      <section className={`${sectionPad} pb-28 md:pb-36`}>
        <div className={`${container} grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
          <Reveal>
            <SectionHead
              n="03"
              label="Before you write"
              color={C.amber}
              title={
                <>
                  Help us help you <span className="italic">faster.</span>
                </>
              }
              text="A few details save a round of back and forth. Never send your card number, CVV or PIN. We will never ask for them."
            />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-3xl border border-[#15130F]/20 bg-[#FFFDF8] p-8">
              <p className={`${mono.className} mb-2 text-xs uppercase tracking-[0.16em] text-[#15130F]/55`}>Include</p>
              <ul className="divide-y divide-dotted divide-[#15130F]/25">
                {include.map((t, i) => (
                  <li key={t} className="flex items-baseline gap-5 py-4">
                    <span className={`${mono.className} text-xs text-[#15130F]/40`}>0{i + 1}</span>
                    <span className="text-[15px] text-[#15130F]/85">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}