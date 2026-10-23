import type { Metadata } from "next";
import Link from "next/link";
import { hl } from "../../components/site/Mark";
import { JsonLd } from "../../components/site/JsonLd";
import { breadcrumbLd, pageMeta } from "../../components/site/seo";
import { C, container, h2, mono, sectionPad } from "../../components/site/theme";
import { PageHero, Reveal, Tile } from "../../components/site/ui";
import { DeleteForm } from "./DeleteForm";

// Not linked from the nav, footer or sitemap, and hidden from Google until you are ready.
// To launch: delete the `robots` line below, and add this path to `routes` in seo.ts.
export const metadata: Metadata = {
  ...pageMeta({
    title: "Delete your account",
    description: "How to delete your Skribe account and data, what we remove, and what we have to keep by law.",
    path: "/delete-account",
  }),
  robots: { index: false, follow: false },
};

const removed = [
  "Your profile, name, email, phone number and photo",
  "Your Skribe card, which is cancelled",
  "Your subscriptions, settings and reminders",
  "Your notification tokens",
];

const kept = [
  "Identity (KYC) and payment records, for at least [5 YEARS] after your account ends, because financial regulations require it",
  "Anything we must keep to deal with a fraud case or a legal order",
];

export default function DeleteAccountPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Delete your account", "/delete-account"]])} />
      <PageHero
        n="00"
        label="Your data"
        color={C.red}
        title={
          <>
            Delete your account <span className="italic">and data.</span>
          </>
        }
        text="You can leave Skribe at any time. Here is how, what we remove, and the few things the law says we must keep."
      />

      <section className={sectionPad}>
        <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16`}>
          <div className="space-y-12">
            <Reveal>
              <h2 className={`${h2} !text-3xl md:!text-4xl`}>Before you go</h2>
              <ol className="mt-6 space-y-6">
                {[
                  ["Empty your balance", "Spend it or send it to your bank first. A balance left on a deleted account can take longer to return."],
                  ["Cancel with each merchant", "Deleting Skribe doesn't cancel your subscriptions with Netflix, Spotify and the rest. Cancel those with them."],
                  ["Delete in the app, or ask here", "In the app: Profile → Settings → Delete account. [CONFIRM THE EXACT MENU PATH] Or send the form on this page."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className={`${mono.className} mt-1 text-xs text-[#15130F]/40`}>0{i + 1}</span>
                    <div>
                      <p className="font-semibold">{t}</p>
                      <p className="mt-1 leading-relaxed text-[#15130F]/70">{hl(d)}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#15130F]/15 bg-[#FFFDF8] p-6">
                  <Tile icon="check" color={C.green} />
                  <p className="mt-4 font-semibold">What we delete</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#15130F]/70">
                    {removed.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#15130F]/15 bg-[#FFFDF8] p-6">
                  <Tile icon="lock" color={C.amber} />
                  <p className="mt-4 font-semibold">What we must keep</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#15130F]/70">
                    {kept.map((t) => (
                      <li key={t}>{hl(t)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <p className="text-sm leading-relaxed text-[#15130F]/60">
              Prefer email? Write to {hl("[PRIVACY EMAIL]")} from the address on your account. We reply within {hl("[30 DAYS]")}.
              Read the <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link> for the full details.
            </p>
          </div>

          <Reveal>
            <div className="lg:sticky lg:top-24">
              <DeleteForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}