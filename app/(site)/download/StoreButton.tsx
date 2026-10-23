"use client";

import { useWaitlist } from "../../components/site/waitlistContext";

// Put these two logo images in your /public folder: gplay.png and appstore.png (square, about 128px).
const LOGOS = { "Google Play": "/gplay.png", "App Store": "/appstore.png" } as const;

/**
 * With a store link: a normal link to the store.
 * Without one (the app isn't live yet): the same button opens the waitlist.
 */
export function StoreButton({ href, store, small }: { href: string | null; store: keyof typeof LOGOS; small: string }) {
  const wl = useWaitlist();
  const cls =
    "group flex h-16 min-w-[220px] items-center gap-4 rounded-2xl bg-[#15130F] px-5 text-left text-white shadow-[0_10px_24px_-12px_rgba(21,19,15,0.6)] transition duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_16px_28px_-12px_rgba(21,19,15,0.7)]";

  const inner = (
    <>
      {/* A background image, so a missing file shows a plain white tile instead of a broken-image icon. */}
      <span
        aria-hidden
        className="h-10 w-10 shrink-0 rounded-xl bg-white bg-center bg-no-repeat shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
        style={{ backgroundImage: `url(${LOGOS[store]})`, backgroundSize: "72%" }}
      />
      <span className="leading-tight">
        <span className="block text-[11px] font-medium uppercase tracking-wider text-white/70">{href ? small : "Join the waitlist"}</span>
        <span className="block text-lg font-semibold">{store}</span>
      </span>
    </>
  );

  return href ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <button type="button" onClick={wl.open} className={cls}>
      {inner}
    </button>
  );
}