import type { Metadata } from "next";
import { JsonLd } from "../../components/site/JsonLd";
import { breadcrumbLd, pageMeta } from "../../components/site/seo";
import { C, container, mono, sectionPad, serif } from "../../components/site/theme";
import { PageHero, Reveal } from "../../components/site/ui";
import { StatusVisual } from "./StatusVisual";

// Not linked from the nav, footer or sitemap, and hidden from Google until you are ready.
// To launch: delete the `robots` line below, and add this path to `routes` in seo.ts.
export const metadata: Metadata = {
  ...pageMeta({
    title: "Status",
    description: "Is Skribe working? Live status of card payments, bills, transfers and notifications.",
    path: "/status",
  }),
  robots: { index: false, follow: false },
};

type State = "up" | "degraded" | "down";

// ─── CONNECT REAL DATA HERE ────────────────────────────────────────────────
// Replace this list (for example with a Firestore document your own checks update).
// While SAMPLE_DATA is true, a banner reminds you that these numbers are made up.
const SAMPLE_DATA = true;
const services: { name: string; note: string; state: State; uptime: number }[] = [
  { name: "Card payments", note: "Charges on your Skribe card", state: "up", uptime: 99.98 },
  { name: "Bills", note: "Airtime, data, TV and electricity", state: "up", uptime: 99.9 },
  { name: "Transfers", note: "Sending to bank accounts", state: "up", uptime: 99.85 },
  { name: "Sign-in and PIN", note: "Logging in and confirming payments", state: "up", uptime: 99.99 },
  { name: "Notifications", note: "Charge alerts and reminders", state: "up", uptime: 99.7 },
];
const incidents: { date: string; title: string; text: string }[] = [
  // { date: "2026-10-05", title: "Delayed transfers", text: "Some transfers were slow for about 40 minutes. Resolved." },
];

const meta: Record<State, { label: string; color: string }> = {
  up: { label: "Operational", color: C.green },
  degraded: { label: "Slower than usual", color: C.amber },
  down: { label: "Outage", color: C.mutedRed },
};

// 90 little bars. Sample only: a tiny repeatable pattern, no randomness (so it never differs between server and browser).
const bars = Array.from({ length: 90 }, (_, i) => (i === 41 ? "degraded" : "up") as State);

export default function StatusPage() {
  const worst: State = services.some((s) => s.state === "down") ? "down" : services.some((s) => s.state === "degraded") ? "degraded" : "up";
  const headline = { up: "All systems working", degraded: "Some things are slower than usual", down: "We're having a problem" }[worst];

  return (
    <>
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Status", "/status"]])} />
      <PageHero
        n="00"
        label="Status"
        color={meta[worst].color}
        title={
          <>
            {headline.split(" ").slice(0, -1).join(" ")} <span className="italic">{headline.split(" ").slice(-1)}.</span>
          </>
        }
        text="Whether Skribe is working right now, and what happened when it wasn't."
        aside={<StatusVisual />}
      />

      <section className={sectionPad}>
        <div className={`${container} max-w-3xl`}>
          {SAMPLE_DATA ? (
            <div className="mb-10 rounded-2xl border border-[#D9962B]/50 bg-[#D9962B]/10 p-5 text-sm leading-relaxed">
              <strong className="font-semibold">Sample data.</strong> These statuses and uptime numbers are made up. Connect real checks, then set{" "}
              <code className={mono.className}>SAMPLE_DATA</code> to <code className={mono.className}>false</code> to remove this notice.
            </div>
          ) : null}

          <Reveal>
            <div className="divide-y divide-dotted divide-[#15130F]/25 rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] px-6 md:px-8">
              {services.map((s) => (
                <div key={s.name} className="py-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-semibold">{s.name}</p>
                      <p className="text-sm text-[#15130F]/60">{s.note}</p>
                    </div>
                    <span className="flex shrink-0 items-center gap-2 text-sm font-semibold" style={{ color: meta[s.state].color }}>
                      <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: meta[s.state].color }} />
                      {meta[s.state].label}
                    </span>
                  </div>
                  <div className="mt-4 flex h-8 gap-[2px]" role="img" aria-label={`${s.name}: ${s.uptime}% uptime over the last 90 days`}>
                    {bars.map((b, i) => (
                      <span key={i} className="flex-1 rounded-[2px]" style={{ backgroundColor: meta[b].color, opacity: b === "up" ? 0.75 : 1 }} />
                    ))}
                  </div>
                  <div className={`${mono.className} mt-2 flex justify-between text-[11px] text-[#15130F]/50`}>
                    <span>90 days ago</span>
                    <span>{s.uptime}% uptime</span>
                    <span>Today</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <h2 className={`${serif.className} mt-16 text-4xl font-normal tracking-tight`}>Past incidents</h2>
          {incidents.length === 0 ? (
            <p className="mt-4 text-[17px] text-[#15130F]/70">Nothing to report in the last 90 days.</p>
          ) : (
            <ul className="mt-6 space-y-8">
              {incidents.map((n) => (
                <li key={n.title} className="border-t border-[#15130F]/20 pt-5">
                  <p className={`${mono.className} text-xs uppercase tracking-[0.14em] text-[#15130F]/55`}>{n.date}</p>
                  <p className={`${serif.className} mt-2 text-3xl`}>{n.title}</p>
                  <p className="mt-2 text-[#15130F]/70">{n.text}</p>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-12 text-sm text-[#15130F]/60">
            Something not working for you? Email <mark className="rounded bg-[#D9962B]/30 px-1">[SUPPORT EMAIL]</mark>.
          </p>
        </div>
      </section>
    </>
  );
}