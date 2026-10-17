import { h2 } from "framer-motion/client";
import Link from "next/link";
import type { ReactNode } from "react";
import { C, mono, sectionPad, container, serif } from "./theme";
import { PageHero, Reveal } from "./ui";


export type Block = string | { list: string[] } | { sub: string };
export type Section = { title: string; blocks: Block[] };

// Text conventions used in the copy:
//   **bold lead**   -> bold
//   [PLACEHOLDER]   -> highlighted, so unfinished items are impossible to miss
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\])/g;

function rich(text: string): ReactNode[] {
  return text.split(TOKEN).filter(Boolean).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i} className="font-semibold text-[#15130F]">{part.slice(2, -2)}</strong>;
    if (part.startsWith("["))
      return (
        <mark key={i} className="rounded bg-[#D9962B]/30 px-1 text-[#15130F]">
          {part}
        </mark>
      );
    return part;
  });
}

const hasPlaceholder = (s: string) => /\[[^\]]+\]/.test(s);

function collect(sections: Section[], summary: string[], meta: string) {
  const all = [meta, ...summary];
  sections.forEach((s) => {
    all.push(s.title);
    s.blocks.forEach((b) => (typeof b === "string" ? all.push(b) : "list" in b ? all.push(...b.list) : all.push(b.sub)));
  });
  return all.filter(hasPlaceholder).length;
}

export function LegalPage({
  label,
  title,
  meta,
  intro,
  summary,
  sections,
  other,
}: {
  label: string;
  title: ReactNode;
  meta: string;
  intro: string;
  summary: string[];
  sections: Section[];
  other: { href: string; text: string };
}) {
  const open = collect(sections, summary, meta);

  return (
    <>
      <PageHero n="00" label={label} color={C.indigo} title={title} text={intro}>
        <p className={`${mono.className} text-xs leading-relaxed tracking-wide text-[#15130F]/60`}>{rich(meta)}</p>
      </PageHero>

      <section className={sectionPad}>
        <div className={`${container} grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20`}>
          {/* contents */}
          <nav aria-label="Contents" className="lg:sticky lg:top-24 lg:self-start">
            <p className={`${mono.className} mb-4 text-xs uppercase tracking-[0.16em] text-[#15130F]/60`}>Contents</p>
            <ol className="space-y-2.5 text-sm text-[#15130F]/70">
              {sections.map((s, i) => (
                <li key={s.title}>
                  <a href={`#s${i + 1}`} className="flex gap-3 transition-colors hover:text-[#15130F]">
                    <span className={`${mono.className} w-5 shrink-0 text-xs text-[#15130F]/40`}>{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
            <Link href={other.href} className="mt-8 inline-block text-sm underline underline-offset-4 hover:text-[#15130F]">
              {other.text} →
            </Link>
          </nav>

          <div className="max-w-2xl">
            {/* shows only while [PLACEHOLDERS] remain in the copy */}
            {open > 0 && (
              <div className="mb-10 rounded-2xl border border-[#D9962B]/50 bg-[#D9962B]/10 p-5 text-sm leading-relaxed">
                <strong className="font-semibold">Draft: {open} item{open === 1 ? "" : "s"} still need your answer.</strong> Every{" "}
                <mark className="rounded bg-[#D9962B]/30 px-1">[highlighted item]</mark> must be replaced or removed before launch. This notice
                disappears once none are left.
              </div>
            )}

            <Reveal>
              <aside className="relative mb-14 rounded-2xl border border-[#15130F]/20 bg-[#FFFDF8] p-6 md:p-8">
                <p className={`${mono.className} text-xs uppercase tracking-[0.16em] text-[#15130F]/60`}>The short version</p>
                <ul className="mt-5 space-y-3">
                  {summary.map((t) => (
                    <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-[#15130F]/80">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: C.red }} />
                      <span>{rich(t)}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>

            <div className="space-y-14">
              {sections.map((s, i) => (
                <section key={s.title} id={`s${i + 1}`} className="scroll-mt-24">
                  <h2 className={`${h2} !text-3xl md:!text-4xl`}>
                    <span className={`${mono.className} mr-3 align-middle text-sm text-[#15130F]/40`}>{String(i + 1).padStart(2, "0")}</span>
                    {rich(s.title)}
                  </h2>
                  <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-[#15130F]/75">
                    {s.blocks.map((b, k) => {
                      if (typeof b === "string") return <p key={k}>{rich(b)}</p>;
                      if ("sub" in b) return <h3 key={k} className={`${serif.className} pt-3 text-2xl text-[#15130F]`}>{b.sub}</h3>;
                      return (
                        <ul key={k} className="space-y-2.5">
                          {b.list.map((t) => (
                            <li key={t} className="flex gap-3">
                              <span aria-hidden className="mt-[0.7em] h-1 w-3 shrink-0 bg-[#15130F]/30" />
                              <span>{rich(t)}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}