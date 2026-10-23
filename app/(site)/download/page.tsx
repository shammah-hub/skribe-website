import type { Metadata } from "next";
import { JsonLd } from "../../components/site/JsonLd";
import { SkribeCard } from "../../components/site/SkribeCard";
import { breadcrumbLd, pageMeta } from "../../components/site/seo";
import { C, container, mono, sectionPad, serif } from "../../components/site/theme";
import { PageHero, Reveal, Tile, type IconName } from "../../components/site/ui";
import { StoreButton } from "./StoreButton";

// Not linked from the nav, footer or sitemap, and hidden from Google until you are ready.
// To launch: delete the `robots` line below, and add this path to `routes` in seo.ts.
export const metadata: Metadata = {
  ...pageMeta({
    title: "Download",
    description: "Get the Skribe app on your phone.",
    path: "/download",
  }),
  robots: { index: false, follow: false },
};

// ─── PUT YOUR STORE LINKS HERE ─────────────────────────────────────────────
// While a link is null, that button shows "Coming soon" and does nothing.
const PLAY_STORE: string | null = null; // e.g. "https://play.google.com/store/apps/details?id=..."
const APP_STORE: string | null = null; // e.g. "https://apps.apple.com/app/id..."

const steps: { icon: IconName; color: string; title: string; text: string }[] = [
  { icon: "phone", color: C.indigo, title: "Install and sign up", text: "Create your account with your email or Google." },
  { icon: "shield", color: C.amber, title: "Verify who you are", text: "Add your details and BVN once, in your Profile." },
  { icon: "card", color: C.teal, title: "Your card appears", text: "Fund it, and start paying for subscriptions on your terms." },
];

export default function DownloadPage() {
  const live = Boolean(PLAY_STORE || APP_STORE);
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Download", "/download"]])} />
      <PageHero
        n="00"
        label="Get the app"
        color={C.red}
        title={
          <>
            Skribe, <span className="italic">in your pocket.</span>
          </>
        }
        text={live ? "Free to download. Set up in a few minutes." : "The app is almost here. Join the waitlist and we'll tell you the moment it's live."}
        aside={
          <div className="relative mx-auto w-full max-w-[400px] -rotate-2">
            <SkribeCard />
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <StoreButton href={PLAY_STORE} store="Google Play" small="Get it on" />
          <StoreButton href={APP_STORE} store="App Store" small="Download on the" />
        </div>
      </PageHero>

      <section className={sectionPad}>
        <div className={container}>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05} className="h-full">
                <div className="h-full rounded-3xl border border-[#15130F]/12 bg-[#FFFDF8] p-6">
                  <div className="flex items-center justify-between">
                    <Tile icon={s.icon} color={s.color} />
                    <span className={`${mono.className} text-xs text-[#15130F]/40`}>0{i + 1}</span>
                  </div>
                  <h3 className={`${serif.className} mt-5 text-3xl font-normal leading-tight tracking-tight`}>{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-[#15130F]/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-sm text-[#15130F]/60">
            Works on Android and iPhone. You need to be 18 or over and live in Nigeria. [CONFIRM MINIMUM ANDROID / IOS VERSIONS]
          </p>
        </div>
      </section>
    </>
  );
}