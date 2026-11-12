"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { C, mono, serif } from "../../components/site/theme";
import { compare, plans } from "../../components/site/data";
import { Btn, Reveal, Stamp, Toggle } from "../../components/site/ui";

export function PricingClient() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const yearly = billing === "yearly";

  return (
    <>
      <Reveal className="mb-12">
        <div className="inline-flex items-center gap-3 text-sm font-semibold">
          <span className={yearly ? "text-[#15130F]/50" : "text-[#15130F]"}>Monthly</span>
          <Toggle value={yearly} onChange={(v) => setBilling(v ? "yearly" : "monthly")} label="Bill yearly" />
          <span className={`flex items-center gap-2 ${yearly ? "text-[#15130F]" : "text-[#15130F]/50"}`}>
            Yearly
            <span className="rounded-full px-2 py-0.5 text-[11px]" style={{ backgroundColor: `${C.green}22`, color: C.green }}>
              Save 20%
            </span>
          </span>
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05} className="h-full">
            <div
              className={`relative flex h-full flex-col rounded-3xl p-8 ${
                p.popular ? "bg-[#15130F] text-[#F4EFE6] md:-my-4 md:py-12" : "border border-[#15130F]/20 bg-[#FFFDF8]"
              }`}
            >
              {p.popular ? <Stamp className="absolute -top-4 right-5 rotate-6 bg-[#15130F] text-sm">Most popular</Stamp> : null}
              <h3 className={`${serif.className} text-3xl font-normal`}>{p.name}</h3>
              <p className={`mt-1 text-sm ${p.popular ? "text-[#F4EFE6]/60" : "text-[#15130F]/60"}`}>{p.text}</p>
              <p className="mt-8 flex items-end gap-1.5">
                <span className={`${serif.className} text-6xl font-normal leading-none tracking-tight`}>
                  {billing === "monthly" ? p.monthly : p.yearly}
                </span>
                <span className={`${mono.className} mb-1 text-xs ${p.popular ? "text-[#F4EFE6]/60" : "text-[#15130F]/50"}`}>
                  {billing === "monthly" ? "/mo" : "/yr"}
                </span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: p.popular ? C.amber : C.green }} strokeWidth={2.4} />
                    <span className={p.popular ? "text-[#F4EFE6]/85" : "text-[#15130F]/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              {p.popular ? (
                <p className={`${mono.className} mt-8 text-center text-[11px] uppercase tracking-[0.12em] text-[#F4EFE6]/60`}>
                  Free when you use the Skribe card
                </p>
              ) : null}
              <Btn waitlist variant={p.popular ? "light" : "dark"} className={`${p.popular ? "mt-3" : "mt-8"} min-h-14 w-full`}>
                Join waitlist
              </Btn>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto mt-14 max-w-4xl">
        <div className="rounded-3xl border border-[#15130F]/20 bg-[#FFFDF8] p-8">
          <p className={`${mono.className} text-xs uppercase tracking-[0.12em] text-[#15130F]/50`}>Every plan includes</p>
          <h3 className={`${serif.className} mt-2 text-2xl font-normal tracking-tight md:text-3xl`}>
            Your money, not just your subscriptions.
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["Send money", "Transfer to any Nigerian bank account from your Skribe balance."],
              ["Receive money", "Get paid into your own Skribe account number."],
              ["Pay bills", "Airtime, data, electricity and TV, with no extra fees on bills."],
            ].map(([t, d]) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: C.green }} strokeWidth={2.4} />
                <span>
                  <span className="block font-semibold text-[#15130F]">{t}</span>
                  <span className="text-[#15130F]/70">{d}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-10 max-w-4xl">
        <div className="relative rounded-3xl border-2 border-dashed border-[#15130F]/40 bg-[#FFFDF8] p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <Stamp className="-rotate-2 text-sm">Free with the card</Stamp>
              <h3 className={`${serif.className} mt-5 text-4xl font-normal leading-tight tracking-tight md:text-5xl`}>
                Use the Skribe card, and <span className="italic">everything is free.</span>
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#15130F]/70">
                Pay your subscriptions with your Skribe card and every Premium feature is included, with no plan to buy. You can also pause or block any subscription you pay with the card, right in the app, because Skribe checks each charge the moment it happens.
              </p>
              <p className="mt-3 max-w-md text-[13px] leading-relaxed text-[#15130F]/55">
                Subscriptions you add manually are tracked only, on Free and Premium. Skribe can&apos;t pause or block a payment it doesn&apos;t process.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Btn waitlist variant="dark" className="min-h-16 w-full text-base">
                Join waitlist
              </Btn>
              <p className={`${mono.className} text-center text-xs text-[#15130F]/50`}>Prices may change at launch.</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h3 className={`${serif.className} mb-6 text-3xl font-normal tracking-tight`}>Compare plans</h3>
        <div className="mx-auto max-w-4xl overflow-x-auto rounded-3xl border border-[#15130F]/20 bg-[#FFFDF8]">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className={`${mono.className} border-b border-[#15130F]/20 text-left text-xs uppercase tracking-[0.12em]`}>
                <th className="p-5 font-medium text-[#15130F]/50">Feature</th>
                <th className="p-5 text-center font-medium">Free</th>
                <th className="p-5 text-center font-medium">Premium</th>
                <th className="p-5 text-center font-medium" style={{ color: C.red }}>
                  With Skribe card
                </th>
              </tr>
            </thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.feature} className="border-b border-dotted border-[#15130F]/25 last:border-0">
                  <td className="p-5 text-[#15130F]/80">{r.feature}</td>
                  {[r.free, r.premium, r.card].map((v, i) => (
                    <td key={i} className="p-5 text-center">
                      {typeof v === "boolean" ? (
                        v ? (
                          <Check className="mx-auto h-4 w-4" style={{ color: C.green }} strokeWidth={2.4} />
                        ) : (
                          <span className="text-[#15130F]/25">—</span>
                        )
                      ) : (
                        <span className={`${mono.className} text-[13px]`}>{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </>
  );
}