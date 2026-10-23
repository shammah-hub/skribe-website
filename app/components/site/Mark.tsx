import type { ReactNode } from "react";

/**
 * Highlights anything in [SQUARE BRACKETS] in amber, so unfinished copy is impossible to miss.
 * Server-safe. Use it on any string: {hl("Email [SUPPORT EMAIL]")}
 */
export function hl(text: string): ReactNode[] {
  return text
    .split(/(\[[^\]]+\])/g)
    .filter(Boolean)
    .map((part, i) =>
      part.startsWith("[") ? (
        <mark key={i} className="rounded bg-[#D9962B]/30 px-1 text-[#15130F]">
          {part}
        </mark>
      ) : (
        part
      ),
    );
}