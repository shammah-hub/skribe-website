"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { hl } from "../../components/site/Mark";
import { C, mono, serif } from "../../components/site/theme";
import { Faq } from "../../components/site/ui";
import { groups } from "./helpData";

export function HelpClient() {
  const [tab, setTab] = useState("all");
  const [term, setTerm] = useState("");

  const shown = useMemo(() => {
    const t = term.trim().toLowerCase();
    return groups
      .filter((g) => tab === "all" || g.id === tab)
      .map((g) => ({ ...g, items: t ? g.items.filter((i) => (i.q + " " + i.a).toLowerCase().includes(t)) : g.items }))
      .filter((g) => g.items.length);
  }, [tab, term]);

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm transition ${
      active ? "border-[#15130F] bg-[#15130F] text-[#F4EFE6]" : "border-[#15130F]/20 text-[#15130F]/70 hover:border-[#15130F]/50"
    }`;

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search help</span>
        <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#15130F]/40" />
        <input
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search, e.g. freeze, PIN, declined"
          className="h-14 w-full rounded-2xl border border-[#15130F]/20 bg-[#FFFDF8] pl-14 pr-5 text-base outline-none transition focus:border-[#15130F] focus:ring-2 focus:ring-[#15130F]/10"
        />
      </label>

      <div className="mt-5 flex flex-wrap gap-2">
        <button className={chip(tab === "all")} aria-pressed={tab === "all"} onClick={() => setTab("all")}>
          All
        </button>
        {groups.map((g) => (
          <button key={g.id} className={chip(tab === g.id)} aria-pressed={tab === g.id} onClick={() => setTab(g.id)}>
            {g.label}
          </button>
        ))}
      </div>

      <div className="mt-12 space-y-14">
        {shown.length === 0 ? (
          <p className="text-[#15130F]/70">
            Nothing matches &ldquo;{term}&rdquo;. Try a shorter word, or contact us below.
          </p>
        ) : (
          shown.map((g) => (
            <section key={g.id}>
              <h2 className={`${mono.className} mb-5 text-xs uppercase tracking-[0.16em]`} style={{ color: C.red }}>
                {g.label}
              </h2>
              {/* Faq shows plain text, so any [BRACKETS] in an answer appear unhighlighted here. Fill them in before launch. */}
              <Faq items={g.items.map((i) => ({ q: i.q, a: i.a }))} />
            </section>
          ))
        )}
      </div>

      <div className="mt-16 rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8] p-8 md:p-10">
        <h3 className={`${serif.className} text-4xl font-normal tracking-tight`}>Still stuck?</h3>
        <p className="mt-3 max-w-md leading-relaxed text-[#15130F]/70">
          Email {hl("[SUPPORT EMAIL]")} and a person will reply within {hl("[TIMEFRAME]")}. If it's about a charge, include the date,
          merchant and amount.
        </p>
      </div>
    </div>
  );
}