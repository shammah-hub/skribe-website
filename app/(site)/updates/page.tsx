import type { Metadata } from "next";
import { JsonLd } from "../../components/site/JsonLd";
import { breadcrumbLd, pageMeta } from "../../components/site/seo";
import { C, container, mono, sectionPad, serif } from "../../components/site/theme";
import { PageHero, Reveal } from "../../components/site/ui";
import { UpdatesVisual } from "./UpdatesVisual";

// Not linked from the nav, footer or sitemap, and hidden from Google until you are ready.
// To launch: delete the `robots` line below, and add this path to `routes` in seo.ts.
export const metadata: Metadata = {
  ...pageMeta({
    title: "Updates",
    description: "What's new in Skribe: new features, fixes and what we're working on next.",
    path: "/updates",
  }),
  robots: { index: false, follow: false },
};

type Tag = "New" | "Improved" | "Fixed" | "Coming";
type Post = { date: string; title: string; text: string; tag: Tag; points?: string[] };

// ADD A NEW UPDATE: copy one object, put it at the TOP of the list, change the text. That's all.
// (These are examples. Replace them with real updates before launch.)
const posts: Post[] = [
  {
    date: "2026-10-01",
    tag: "New",
    title: "Pay bills and send money from Skribe",
    text: "Buy airtime, data, TV and electricity, and send money to any bank account, all from the same balance as your card.",
    points: ["Airtime and data for every major network", "Cable TV and electricity", "Transfers to bank accounts"],
  },
  {
    date: "2026-09-12",
    tag: "Improved",
    title: "Clearer reasons when a charge is declined",
    text: "Skribe now tells you exactly why: frozen card, subscription switched off, unrecognised merchant, or not enough balance.",
  },
  {
    date: "2026-08-20",
    tag: "New",
    title: "Freeze your card in one tap",
    text: "Lost your phone or spotted something odd? Freeze the card and every charge is declined until you turn it back on.",
  },
  {
    date: "2026-07-30",
    tag: "Coming",
    title: "What we're working on next",
    text: "Funding your balance from your bank, and a monthly summary of what you spent on subscriptions.",
  },
];

const tagColor: Record<Tag, string> = { New: C.green, Improved: C.indigo, Fixed: C.amber, Coming: C.red };

const fmt = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default function UpdatesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Updates", "/updates"]])} />
      <PageHero
        n="00"
        label="Updates"
        color={C.green}
        title={
          <>
            What&apos;s <span className="italic">new.</span>
          </>
        }
        text="New features, improvements and fixes, newest first. Nothing here is marketing: just what changed."
        aside={<UpdatesVisual />}
      />

      <section className={sectionPad}>
        <div className={`${container} max-w-3xl`}>
          <ol className="relative border-l border-[#15130F]/20 pl-8 md:pl-12">
            {posts.map((p, i) => (
              <li key={p.title} className="relative pb-14 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[39px] top-2 h-3 w-3 rounded-full ring-4 ring-[#F4EFE6] md:-left-[55px]"
                  style={{ backgroundColor: tagColor[p.tag] }}
                />
                <Reveal delay={Math.min(i, 3) * 0.04}>
                  <div className="flex flex-wrap items-center gap-3">
                    <time dateTime={p.date} className={`${mono.className} text-xs uppercase tracking-[0.14em] text-[#15130F]/55`}>
                      {fmt(p.date)}
                    </time>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{ backgroundColor: `${tagColor[p.tag]}1F`, color: tagColor[p.tag] }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <h2 className={`${serif.className} mt-3 text-4xl font-normal leading-[1.05] tracking-tight`}>{p.title}</h2>
                  <p className="mt-3 text-[17px] leading-relaxed text-[#15130F]/70">{p.text}</p>
                  {p.points ? (
                    <ul className="mt-4 space-y-2 text-[15px] text-[#15130F]/75">
                      {p.points.map((t) => (
                        <li key={t} className="flex gap-3">
                          <span aria-hidden className="mt-[0.65em] h-1 w-3 shrink-0 bg-[#15130F]/30" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}