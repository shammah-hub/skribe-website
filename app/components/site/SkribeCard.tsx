"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff, Snowflake } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

/**
 * The Skribe card, drawn from the app's CustomBankCard (utensils.dart).
 *
 * Same layout and values as the Flutter card: 350 x 164 base, 15 radius, red
 * #FF0000 with the card background image, "Skribe Wallet" + eye + logo on top,
 * masked number and "Virtual Card" in the middle, Available Balance and the
 * Active Subs badge at the bottom.
 *
 * Every size below is the app's logical pixel value converted to `cqw`, so the
 * card scales to whatever width it is given and always looks identical.
 *
 * Needs two files from the app's images/ folder copied into the site's public/ folder:
 *   public/skribecardbackground.png
 *   public/skribecard.png
 * (Without them it falls back to flat red and no logo.)
 */
const BASE = 350; // the app's card width in logical px
// One design pixel = --u. It starts as 1/350 of the card width using container units, and
// is replaced by a measured pixel value as soon as the page loads, so older phone browsers
// that do not understand `cqw` still get a card that fits.
const q = (px: number) => `calc(var(--u) * ${px})`;

const fmt = (n: number) => n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export function SkribeCard({
  frozen = false,
  last4 = "4821",
  balance = 24500,
  currency = "NGN",
  subs = 4,
  className = "",
}: {
  frozen?: boolean;
  last4?: string;
  balance?: number;
  currency?: string;
  subs?: number;
  className?: string;
  /** Kept so older calls like holder/expiry don't break. */
  holder?: string;
  expiry?: string;
}) {
  const [visible, setVisible] = useState(true);
  const [unit, setUnit] = useState<number | null>(null);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const measure = () => {
      // clientWidth ignores any rotation applied by a parent.
      if (el.clientWidth) setUnit(el.clientWidth / BASE);
    };
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={box}
      className={`w-full min-w-0 ${className}`}
      style={
        {
          containerType: "inline-size",
          "--u": unit ? `${unit}px` : "calc(100cqw / 350)",
        } as CSSProperties
      }
    >
      <div
        className="relative w-full overflow-hidden text-white"
        style={{
          aspectRatio: "350 / 164",
          borderRadius: q(15),
          backgroundColor: "#FF0000",
          backgroundImage: "url(/skribecardbackground.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: `${q(15)} ${q(15)} ${q(10)} ${q(-10)} #FFCDD2`,
          padding: `${q(16)} ${q(20)}`,
        }}
      >
        <div className="flex h-full flex-col justify-between">
          {/* Top: title, eye, logo */}
          <div className="flex items-center justify-between">
            <span
              className="font-medium"
              style={{ fontSize: q(13), letterSpacing: q(0.5), color: "rgba(255,255,255,0.7)" }}
            >
              Skribe Wallet
            </span>
            <div className="flex items-center" style={{ gap: q(6) }}>
              <button
                type="button"
                onClick={() => setVisible((v) => !v)}
                aria-label={visible ? "Hide balance" : "Show balance"}
                aria-pressed={!visible}
                style={{ padding: q(4), color: "rgba(255,255,255,0.7)" }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={String(visible)}
                    className="block"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.12 }}
                  >
                    {visible ? (
                      <Eye style={{ width: q(18), height: q(18) }} strokeWidth={1.6} />
                    ) : (
                      <EyeOff style={{ width: q(18), height: q(18) }} strokeWidth={1.6} />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/skribecard.png"
                alt=""
                style={{ width: q(50), height: q(16), objectFit: "contain" }}
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
              />
            </div>
          </div>

          {/* Middle: masked number */}
          <div>
            <p className="font-semibold" style={{ fontSize: q(16), letterSpacing: q(1.5) }}>
              •••• •••• •••• {last4}
            </p>
            <p style={{ marginTop: q(2), fontSize: q(10), color: "rgba(255,255,255,0.6)" }}>Virtual Card</p>
          </div>

          {/* Bottom: balance + active subs */}
          <div className="flex items-end justify-between">
            <div>
              <p className="font-medium" style={{ fontSize: q(10), color: "rgba(255,255,255,0.7)" }}>
                Available Balance
              </p>
              <div className="relative overflow-visible" style={{ marginTop: q(2), height: q(26) }}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={String(visible)}
                    className="whitespace-nowrap font-extrabold"
                    style={{ fontSize: q(20), lineHeight: q(26) }}
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.22 }}
                  >
                    {visible ? `${currency} ${fmt(balance)}` : "••••••"}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <div
              className="flex flex-col items-end"
              style={{
                padding: `${q(6)} ${q(10)}`,
                borderRadius: q(8),
                backgroundColor: "rgba(255,255,255,0.15)",
                border: `1px solid rgba(255,255,255,0.2)`,
              }}
            >
              <span className="font-extrabold leading-none" style={{ fontSize: q(18) }}>
                {subs}
              </span>
              <span className="font-medium" style={{ marginTop: q(2), fontSize: q(9), color: "rgba(255,255,255,0.7)" }}>
                Active Subs
              </span>
            </div>
          </div>
        </div>

        {/* Frozen: frosted veil + snowflake */}
        <div
          aria-hidden={!frozen}
          className={`absolute inset-0 grid place-items-center bg-white/35 backdrop-blur-[2px] transition-opacity duration-300 ${
            frozen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Snowflake style={{ width: q(40), height: q(40) }} strokeWidth={1.8} />
        </div>
      </div>
    </div>
  );
}