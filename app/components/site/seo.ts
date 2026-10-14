// SEO config in one place.
//
// Set these in .env.local (and in your host's environment variables):
//   NEXT_PUBLIC_SITE_URL=https://yourdomain.com     <- once you own the domain
//   NEXT_PUBLIC_INDEXABLE=true                      <- ONLY when you are ready for Google
//
// Until INDEXABLE is "true", every page sends noindex and robots.txt blocks
// crawlers, so a temporary address (like yourapp.vercel.app) never gets indexed.
import type { Metadata } from "next";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const INDEXABLE = process.env.NEXT_PUBLIC_INDEXABLE === "true";
export const SITE_NAME = "Skribe";
export const SITE_TITLE = "Skribe: every subscription, written down";
export const SITE_DESCRIPTION =
  "Track, manage and pay for all your subscriptions in one place. No more surprise charges, just a clear list of what leaves your account and when.";

export const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/features", priority: 0.8, changeFrequency: "monthly" },
  { path: "/virtual-cards", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" },
  { path: "/brand", priority: 0.3, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.4, changeFrequency: "yearly" },
];

/** Per-page metadata: title, description, canonical, Open Graph and Twitter. */
export function pageMeta({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}): Metadata {
  const full = absolute ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title: full, description, url: path, siteName: SITE_NAME, locale: "en_NG", type: "website" },
    twitter: { card: "summary_large_image", title: full, description },
  };
}

// ── Structured data (JSON-LD) ──────────────────────────────────
export const siteLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/skribe1.png`,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
];

export const faqLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
});

export const breadcrumbLd = (trail: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: `${SITE_URL}${path}`,
  })),
});
