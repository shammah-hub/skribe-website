"use client";

// Interactive copy of the app's Card tab. Same pieces, same wording:
// card, Available balance, Top up / Card details, Controls (Freeze card,
// Unrecognised charges Block / Allow), Recent charges with decline reasons.
import Image from "next/image";
import { useEffect, useState } from "react";
import { C, money, mono, serif } from "../../components/site/theme";
import { Btn, ICONS, Tile, Toggle } from "../../components/site/ui";
import { SkribeCard } from "../../components/site/SkribeCard";

type Charge = {
  id: number;
  merchant: string;
  amount: number;
  when: string;
  ok: boolean;
  reason?: string;
};

// Logo images live directly in /public (e.g. public/netflix.png).
// Merchants not listed here get a letter tile instead of an image.
const LOGOS: Record<string, string> = {
  Netflix: "/netflix.png",
  Spotify: "/spotify.png",
  "Adobe CC": "/adobe.png",
  ChatGPT: "/chatgpt.png",
  "Apple Music": "/apple-music.png",
  "YouTube Premium": "/youtube-premium.png",
};

const initial: Charge[] = [
  { id: 6, merchant: "ChatGPT", amount: 30000, when: "5 Dec · 10:20 AM", ok: true },
  { id: 5, merchant: "Netflix", amount: 5500, when: "4 Dec · 9:41 AM", ok: true },
  { id: 4, merchant: "Apple Music", amount: 1200, when: "4 Dec · 7:05 AM", ok: true },
  { id: 3, merchant: "Spotify", amount: 1300, when: "3 Dec · 6:02 PM", ok: true },
  { id: 2, merchant: "YouTube Premium", amount: 2500, when: "2 Dec · 12:30 PM", ok: true },
  { id: 1, merchant: "Adobe CC", amount: 16000, when: "1 Dec · 8:15 AM", ok: false, reason: "Not enough balance" },
];

const queue = [
  { merchant: "Spotify", amount: 1300, known: true },
  { merchant: "ChatGPT", amount: 30000, known: true },
  { merchant: "Brightpay Online", amount: 900, known: false },
  { merchant: "Apple Music", amount: 1200, known: true },
  { merchant: "Netflix", amount: 5500, known: true },
  { merchant: "YouTube Premium", amount: 2500, known: true },
];

const card = "rounded-3xl border border-[#15130F]/15 bg-[#FFFDF8]";
const FULL = "5061 0000 0000 4821";

export function CardDemo() {
  const [frozen, setFrozen] = useState(false);
  const [block, setBlock] = useState(true);
  const [balance, setBalance] = useState(48250);
  const [charges, setCharges] = useState<Charge[]>(initial);
  const [n, setN] = useState(0);
  const [sheet, setSheet] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  function simulate() {
    const q = queue[n % queue.length];
    let ok = true;
    let reason: string | undefined;
    if (frozen) {
      ok = false;
      reason = "Card was frozen";
    } else if (!q.known && block) {
      ok = false;
      reason = "Unrecognised merchant";
    } else if (q.amount > balance) {
      ok = false;
      reason = "Not enough balance";
    }
    if (ok) setBalance((b) => b - q.amount);
    setCharges((c) =>
      [{ id: Date.now(), merchant: q.merchant, amount: q.amount, when: "Just now", ok, reason }, ...c].slice(0, 8),
    );
    setN((x) => x + 1);
  }

  function setBlocking(next: boolean) {
    if (!next && block) {
      // The app asks before allowing unrecognised merchants.
      if (!window.confirm("Any merchant Skribe does not recognise will be able to charge your card. Blocking them is safer.\n\nAllow anyway?")) return;
    }
    setBlock(next);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      {/* Left: card, balance, controls */}
      <div className="space-y-6">
        <div className="mx-auto w-full max-w-[400px]">
          <SkribeCard frozen={frozen} balance={balance} />
        </div>

        <div className={`${card} p-6`}>
          <p className="text-sm text-[#15130F]/60">Available balance</p>
          <p className={`${serif.className} mt-1 text-5xl font-normal tracking-tight`}>{money(balance, true)}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Btn onClick={() => setToast("Top up is coming soon")} className="!h-11 !px-5">
              Top up
            </Btn>
            <Btn variant="outline" onClick={() => setSheet(true)} className="!h-11 !px-5">
              Card details
            </Btn>
          </div>
        </div>

        <div className={`${card} p-6`}>
          <p className={`${mono.className} mb-5 text-xs uppercase tracking-[0.16em] text-[#15130F]/55`}>Controls</p>

          <div className="flex items-center gap-4">
            <Tile icon="snowflake" color={C.indigo} />
            <div className="min-w-0 flex-1">
              <p className="font-semibold">Freeze card</p>
              <p className="text-sm text-[#15130F]/60">
                {frozen ? "Every charge is being declined" : "Decline every charge until you turn it off"}
              </p>
            </div>
            <Toggle value={frozen} onChange={setFrozen} label="Freeze card" />
          </div>

          <div className="my-5 border-t border-dotted border-[#15130F]/25" />

          <div className="flex items-center gap-4">
            <Tile icon="shield" color={C.amber} />
            <div className="min-w-0 flex-1">
              <p className="font-semibold">Unrecognised charges</p>
              <p className="text-sm text-[#15130F]/60">
                {block
                  ? "Merchants Skribe does not recognise are blocked."
                  : "Merchants Skribe does not recognise can charge your card."}
              </p>
            </div>
            <div className="flex shrink-0 rounded-full border border-[#15130F]/20 p-0.5 text-sm font-semibold">
              {[
                ["Block", true],
                ["Allow", false],
              ].map(([label, v]) => (
                <button
                  key={String(label)}
                  onClick={() => setBlocking(v as boolean)}
                  className={`rounded-full px-3.5 py-1.5 transition ${
                    block === v ? "bg-[#15130F] text-[#F4EFE6]" : "text-[#15130F]/60 hover:text-[#15130F]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right: recent charges */}
      <div className={`${card} flex flex-col p-6`}>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
          <p className={`${mono.className} text-xs uppercase tracking-[0.16em] text-[#15130F]/55`}>Recent charges</p>
          <Btn variant="outline" onClick={simulate} className="!h-10 !px-4 !text-sm">
            Simulate a charge
          </Btn>
        </div>

        <ul className="divide-y divide-dotted divide-[#15130F]/25">
          {charges.map((c) => (
            <li key={c.id} className="flex items-center gap-4 py-4">
              <MerchantLogo name={c.merchant} ok={c.ok} />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">{c.merchant}</p>
                <p className="text-sm text-[#15130F]/60">{c.ok ? c.when : `${c.reason} · ${c.when}`}</p>
              </div>
              <div className="text-right">
                <p className={`${mono.className} text-[15px] ${c.ok ? "" : "text-[#15130F]/40 line-through"}`}>
                  {money(c.amount, true)}
                </p>
                <span
                  className="mt-1 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold"
                  style={{
                    backgroundColor: c.ok ? `${C.green}1F` : `${C.mutedRed}1A`,
                    color: c.ok ? C.green : C.mutedRed,
                  }}
                >
                  {c.ok ? "Paid" : "Declined"}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-auto pt-4 text-sm text-[#15130F]/55">
          Try it: freeze the card or switch Block to Allow, then simulate a charge to see how Skribe responds.
        </p>
      </div>

      {sheet ? <DetailsSheet onClose={() => setSheet(false)} /> : null}

      {toast ? (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg"
          style={{ backgroundColor: C.ink }}
        >
          {toast}
        </div>
      ) : null}
    </div>
  );
}

function MerchantLogo({ name, ok }: { name: string; ok: boolean }) {
  const src = LOGOS[name];
  if (src) {
    return (
      <Image
        src={src}
        alt={`${name} logo`}
        width={40}
        height={40}
        className={`h-10 w-10 shrink-0 rounded-xl border border-[#15130F]/15 bg-white object-contain p-1.5 ${ok ? "" : "opacity-60"}`}
      />
    );
  }
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#15130F]/15 text-sm font-semibold"
      style={{ backgroundColor: `${C.mutedRed}14`, color: C.mutedRed }}
      aria-hidden="true"
    >
      {name.charAt(0)}
    </span>
  );
}

function DetailsSheet({ onClose }: { onClose: () => void }) {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const Eye = ICONS[show ? "eyeoff" : "eye"];

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#15130F]/50 p-4 sm:items-center" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Card details"
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-[#FFFDF8] p-6"
      >
        <h3 className={`${serif.className} text-3xl font-normal tracking-tight`}>Card details</h3>
        <p className="mt-1 text-sm text-[#15130F]/60">Never share these with anyone. (Demo numbers.)</p>

        <dl className="mt-6 space-y-4">
          {[
            ["Card number", show ? FULL : "••••  ••••  ••••  4821"],
            ["Expiry", "09/28"],
            ["CVV", show ? "123" : "•••"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-end">
              <dt className="text-sm text-[#15130F]/60">{k}</dt>
              <span className="mx-2 mb-1 flex-1 border-b border-dotted border-[#15130F]/35" />
              <dd className={`${mono.className} text-[15px]`}>{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 flex gap-3">
          <Btn variant="outline" onClick={() => setShow((s) => !s)} className="!h-11 flex-1 !px-4">
            <Eye className="h-4 w-4" />
            {show ? "Hide" : "Show"}
          </Btn>
          <Btn
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(FULL.replace(/\s/g, ""));
              } catch {
                /* clipboard may be blocked; the label still confirms the tap */
              }
              setCopied(true);
              setTimeout(() => setCopied(false), 1600);
            }}
            className="!h-11 flex-1 !px-4"
          >
            {copied ? "Copied" : "Copy number"}
          </Btn>
        </div>
        <button onClick={onClose} className="mt-4 w-full py-2 text-sm font-semibold text-[#15130F]/60 hover:text-[#15130F]">
          Close
        </button>
      </div>
    </div>
  );
}