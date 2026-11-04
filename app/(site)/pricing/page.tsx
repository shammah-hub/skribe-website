import type { Metadata } from "next";
import { JsonLd } from "../../components/site/JsonLd";
import { breadcrumbLd, faqLd, pageMeta } from "../../components/site/seo";
import { C, container, h2, lead, sectionPad } from "../../components/site/theme";
import { faqs } from "../../components/site/data";
import { Btn, CtaBand, Faq, Label, PageHero, Reveal } from "../../components/site/ui";
import { PricingClient } from "./PricingClient";

export const metadata: Metadata = pageMeta({
  title: "Pricing",
  description:
    "Start free by tracking one subscription. Go Premium for unlimited subscriptions and detailed spending statistics that show where your money goes.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([["Home", "/"], ["Pricing", "/pricing"]]), faqLd(faqs)]} />
      <PageHero
        n="01"
        label="Pricing"
        color={C.amber}
        title={
          <>
            A price list you can <span className="italic">actually read.</span>
          </>
        }
        text="Start free with one subscription. Go Premium for unlimited subscriptions and a clear view of where your money goes."
      />

      <section className={sectionPad}>
        <div className={container}>
          <PricingClient />
        </div>
      </section>

      <section id="faq" className={`${sectionPad} scroll-mt-16 border-t border-[#15130F]/20`}>
        <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Label n="02" color={C.green}>
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