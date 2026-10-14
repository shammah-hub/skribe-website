import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { JsonLd } from "../components/site/JsonLd";
import { INDEXABLE, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, siteLd } from "../components/site/seo";
import { Shell } from "../components/site/Shell";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_NG",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION },
  // Hidden from Google until NEXT_PUBLIC_INDEXABLE=true (see components/site/seo.ts).
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#F4EFE6",
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <Shell>
      <JsonLd data={siteLd} />
      {children}
    </Shell>
  );
}
