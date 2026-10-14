import type { MetadataRoute } from "next";
import { INDEXABLE, SITE_URL } from "./components/site/seo";

export default function robots(): MetadataRoute.Robots {
  // Not ready for Google yet: block everything.
  if (!INDEXABLE) return { rules: { userAgent: "*", disallow: "/" } };

  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
