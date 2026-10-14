import type { Metadata } from "next";
import { C, container, mono, sectionPad, serif } from "../../components/site/theme";
import { pageMeta, breadcrumbLd } from "../../components/site/seo";
import { JsonLd } from "../../components/site/JsonLd";
import { PageHero, Reveal } from "../../components/site/ui";
import { WaitlistForm } from "./WaitlistForm";

export const metadata: Metadata = pageMeta({
  title: "Join the waitlist",
  description: "Skribe isn't open to everyone yet. Leave your email and we'll tell you the moment it is.",
  path: "/waitlist",
});

const next = [
  { title: "You join", text: "Leave your email. That's the only thing we ask for.", color: C.indigo },
  { title: "We open the doors", text: "Spots open in waves. We email you as soon as yours is ready.", color: C.amber },
  { title: "You start writing it down", text: "Connect your accounts and see every subscription in one list.", color: C.green },
];

export default function WaitlistPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Waitlist", "/waitlist"]])} />
      <PageHero
        n="01"
        label="Waitlist"
        color={C.red}
        title={
          <>
            Be first <span className="italic">in line.</span>
          </>
        }
        text="Skribe isn't open to everyone yet. Leave your email and we'll tell you the moment it is."
      />

      <section className={`${sectionPad} pb-28 md:pb-36`}>
        <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16`}>
          <Reveal>
            <WaitlistForm />
          </Reveal>

          <Reveal delay={0.05}>
            <p className={`${mono.className} mb-6 text-xs uppercase tracking-[0.16em] text-[#15130F]/55`}>What happens next</p>
            <ol className="border-t border-[#15130F]">
              {next.map((s, i) => (
                <li key={s.title} className="flex items-baseline gap-5 border-b border-[#15130F]/20 py-6">
                  <span className={`${serif.className} text-5xl font-normal leading-none`} style={{ color: s.color }}>
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className={`${serif.className} text-2xl font-normal leading-tight`}>{s.title}</h3>
                    <p className="mt-1 text-[#15130F]/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  );
}
