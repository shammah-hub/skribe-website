import type { Metadata } from "next";
import { JsonLd } from "../../components/site/JsonLd";
import { breadcrumbLd, pageMeta } from "../../components/site/seo";
import { C, container, mono, sectionPad, serif } from "../../components/site/theme";
import { PageHero, Reveal, Tile } from "../../components/site/ui";
import type { IconName } from "../../components/site/ui";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Questions about a payment, your card or your plan? Send us a message and we'll reply as soon as we can.",
  path: "/contact",
});

// PLACEHOLDER details: replace with your real ones.
const ways: { icon: IconName; color: string; title: string; text: string; value: string; href: string }[] = [
  { icon: "mail", color: C.indigo, title: "Email", text: "For anything, any time.", value: "support@skribe.app", href: "mailto:support@skribe.app" },
  { icon: "chat", color: C.teal, title: "In the app", text: "Open Profile, then Help.", value: "Fastest for payment issues", href: "#" },
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
            Tell us what&apos;s <span className="italic">going on.</span>
          </>
        }
        text="Questions about a payment, your card or your plan? Send a message and we'll reply as soon as we can."
      />

      <section className={`${sectionPad} pb-28 md:pb-36`}>
        <div className={`${container} grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16`}>
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.05}>
            <p className={`${mono.className} mb-6 text-xs uppercase tracking-[0.16em] text-[#15130F]/55`}>Other ways to reach us</p>
            <ul className="space-y-4">
              {ways.map((w) => (
                <li key={w.title}>
                  <a
                    href={w.href}
                    className="flex items-center gap-4 rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-5 transition hover:border-[#15130F]"
                  >
                    <Tile icon={w.icon} color={w.color} />
                    <div className="min-w-0">
                      <p className={`${serif.className} text-2xl font-normal leading-tight`}>{w.title}</p>
                      <p className="text-sm text-[#15130F]/60">{w.text}</p>
                      <p className={`${mono.className} mt-1 truncate text-[13px]`}>{w.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
