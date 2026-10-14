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

      <div className="grid items-stretch gap-6 md:grid-cols-3">
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
              <Btn waitlist variant={p.popular ? "light" : "dark"} className="mt-8">
                Join waitlist
              </Btn>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <h3 className={`${serif.className} mb-6 text-3xl font-normal tracking-tight`}>Compare all features</h3>
        <div className="overflow-x-auto rounded-3xl border border-[#15130F]/20 bg-[#FFFDF8]">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className={`${mono.className} border-b border-[#15130F]/20 text-left text-xs uppercase tracking-[0.12em]`}>
                <th className="p-5 font-medium text-[#15130F]/50">Feature</th>
                <th className="p-5 text-center font-medium">Basic</th>
                <th className="p-5 text-center font-medium" style={{ color: C.red }}>
                  Pro
                </th>
                <th className="p-5 text-center font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.feature} className="border-b border-dotted border-[#15130F]/25 last:border-0">
                  <td className="p-5 text-[#15130F]/80">{r.feature}</td>
                  {[r.basic, r.pro, r.ent].map((v, i) => (
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
