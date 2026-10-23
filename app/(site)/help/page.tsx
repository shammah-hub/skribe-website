import type { Metadata } from "next";
import { JsonLd } from "../../components/site/JsonLd";
import { breadcrumbLd, faqLd, pageMeta } from "../../components/site/seo";
import { C, container, sectionPad } from "../../components/site/theme";
import { PageHero } from "../../components/site/ui";
import { HelpClient } from "./HelpClient";
import { groups } from "./helpData";

// Not linked from the nav, footer or sitemap, and hidden from Google until you are ready.
// To launch: delete the `robots` line below, and add this path to `routes` in seo.ts.
export const metadata: Metadata = {
  ...pageMeta({
    title: "Help",
    description: "Answers about your Skribe card, bills and transfers, your PIN and your account.",
    path: "/help",
  }),
  robots: { index: false, follow: false },
};

export default function HelpPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd([["Home", "/"], ["Help", "/help"]]), faqLd(groups.flatMap((g) => g.items))]} />
      <PageHero
        n="00"
        label="Help"
        color={C.teal}
        title={
          <>
            How can we <span className="italic">help?</span>
          </>
        }
        text="Quick answers about your card, payments and account. Can't find yours? Write to us at the bottom."
      />
      <section className={sectionPad}>
        <div className={`${container} max-w-3xl`}>
          <HelpClient />
        </div>
      </section>
    </>
  );
}