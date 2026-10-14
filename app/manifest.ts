import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Skribe",
    short_name: "Skribe",
    description: "Track, manage and pay for all your subscriptions in one place.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4EFE6",
    theme_color: "#D7261E",
    icons: [{ src: "/apple-icon", sizes: "180x180", type: "image/png" }],
  };
}
