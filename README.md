# Skribe website v2

Folder layout (matches the `../components/site/...` imports in your home page):

    app/
      components/site/*     shared components, theme, data, SEO config
      (site)/               pages: / features virtual-cards pricing about contact waitlist brand
      api/waitlist/         waitlist endpoint
      sitemap.ts robots.ts manifest.ts icon.tsx apple-icon.tsx opengraph-image.tsx not-found.tsx

Do NOT overwrite your root app/layout.tsx or app/globals.css.
Delete app/page.tsx (the new home is app/(site)/page.tsx).

SEO switches (.env.local, plus your host's environment variables):
    NEXT_PUBLIC_SITE_URL=https://yourdomain.com
    NEXT_PUBLIC_INDEXABLE=true      <- leave unset until launch: site stays hidden from Google

TODO before launch
  - app/api/waitlist/route.ts: saveToWaitlist() only logs the email. Connect storage.
  - contact form: same, see ContactForm.tsx.
  - /privacy and /terms are linked in the footer but not written yet.
