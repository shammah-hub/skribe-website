import type { Metadata } from "next";
import Link from "next/link";
import { hl } from "../../components/site/Mark";
import { JsonLd } from "../../components/site/JsonLd";
import { breadcrumbLd, pageMeta } from "../../components/site/seo";
import { C, container, h2, mono, sectionPad, serif } from "../../components/site/theme";
import { PageHero, Reveal, SectionHead } from "../../components/site/ui";
import { SecurityDemo } from "./SecurityDemo";

// Not linked from the nav, footer or sitemap, and hidden from Google until you are ready.
// To launch: delete the `robots` line below, and add this path to `routes` in seo.ts.
export const metadata: Metadata = {
  ...pageMeta({
    title: "Security",
    description: "How Skribe protects your PIN, your card details and your payments, and what we will never ask you for.",
    path: "/security",
  }),
  robots: { index: false, follow: false },
};

// Only claims that match the Privacy Policy and Terms. Add more here once they are true.
const pillars: { color: string; title: string; text: string }[] = [
  {
    color: C.indigo,
    title: "A PIN only you know",
    text: "Your 4-digit PIN is stored as a scrambled value we can't read or recover. After 5 wrong tries it locks for 30 minutes.",
  },
  {
    color: C.teal,
    title: "Card details stay with the card provider",
    text: "Your full card number and CVV are shown through our card provider's secure display. They don't pass through our servers or sit in our database.",
  },
  {
    color: C.amber,
    title: "Every charge is checked",
    text: "We check each charge on the server in real time: is the card frozen, is that merchant switched off, and do you have the balance.",
  },
  {
    color: C.indigo,
    title: "Freeze in one tap",
    text: "Lost your phone or spotted something odd? Freeze the card and every charge is declined until you turn it back on.",
  },
  {
    color: C.teal,
    title: "Encrypted in transit",
    text: "Data moving between the app and our servers is encrypted. Access to what we store is limited and controlled.",
  },
  {
    color: C.amber,
    title: "You see why it was declined",
    text: "Skribe tells you in plain words why a charge didn't go through, so nothing happens behind your back.",
  },
];

const never = [
  "Your Skribe PIN",
  "Your full card number or CVV",
  "A code sent to your phone or email",
  "Your password, over a call, text or chat",
];

export default function SecurityPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Security", "/security"]])} />
      <PageHero
        n="00"
        label="Security"
        color={C.indigo}
        title={
          <>
            Your money, <span className="italic">kept safe.</span>
          </>
        }
        text="Skribe handles cards and identity details, so we keep what we collect small and what we protect strong. Here is what we do, in plain words. Try it on the right."
        aside={<SecurityDemo />}
      />

      <section className={sectionPad}>
        <div className={container}>
          <SectionHead n="01" label="How we protect you" color={C.indigo} title={<>Six things that <span className="italic">matter.</span></>} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04} className="h-full">
                <div className="h-full rounded-3xl border border-[#15130F]/12 bg-[#FFFDF8] p-6">
                  <span className={`${mono.className} inline-block rounded-full px-3 py-1 text-xs font-medium text-white`} style={{ backgroundColor: p.color }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`${serif.className} mt-5 text-3xl font-normal leading-tight tracking-tight`}>{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-[#15130F]/70">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className={container}>
          <Reveal>
            <div className="grid gap-10 rounded-3xl p-8 md:grid-cols-2 md:p-12" style={{ backgroundColor: C.ink, color: "#FFF6EE" }}>
              <div>
                <p className={`${mono.className} text-xs uppercase tracking-[0.16em] text-white/55`}>Staying safe</p>
                <h2 className={`${h2} mt-4 !text-4xl md:!text-5xl`}>
                  We will <span className="italic">never</span> ask you for&hellip;
                </h2>
                <p className="mt-5 max-w-sm leading-relaxed text-white/70">
                  If anyone says they are from Skribe and asks for these, it is a scam. Stop, and tell us.
                </p>
              </div>
              <ul className="space-y-3 self-center">
                {never.map((t) => (
                  <li key={t} className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4">
                    <span aria-hidden className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-sm font-bold" style={{ backgroundColor: C.red }}>
                      ×
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className={container}>
          <SectionHead n="02" label="If something looks wrong" color={C.red} title={<>Do these, <span className="italic">in order.</span></>} />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Freeze your card", "Open the Card tab and tap Freeze. Every charge is declined straight away."],
              ["Tell us", "Email [SUPPORT EMAIL] with the date, merchant and amount. We look into it with our partners."],
              ["Change your PIN", "If you think someone saw it, reset it in Settings by confirming your sign-in."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05} className="h-full">
                <div className="h-full rounded-3xl border border-[#15130F]/12 bg-[#FFFDF8] p-6">
                  <span className={`${mono.className} text-xs text-[#15130F]/40`}>0{i + 1}</span>
                  <p className={`${serif.className} mt-3 text-3xl leading-tight`}>{t}</p>
                  <p className="mt-3 leading-relaxed text-[#15130F]/70">{hl(d)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className={container}>
          <Reveal>
            <div className="max-w-2xl border-t border-[#15130F] pt-8">
              <h2 className={`${h2} !text-3xl md:!text-4xl`}>Found a security problem?</h2>
              <p className="mt-4 text-[17px] leading-relaxed text-[#15130F]/70">
                Please tell us privately before sharing it publicly. Email {hl("[SECURITY EMAIL]")} with what you found and how to
                reproduce it. We read every report and will reply within {hl("[TIMEFRAME]")}.
              </p>
              <p className="mt-4 text-sm text-[#15130F]/60">
                More on how we handle your data in the{" "}
                <Link href="/privacy" className="underline underline-offset-4">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}