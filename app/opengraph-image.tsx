import { ImageResponse } from "next/og";

// The preview card shown when a Skribe link is shared on WhatsApp, X, LinkedIn, iMessage...
// Simple on purpose. To use your own design, delete this file and add app/opengraph-image.png (1200x630).
export const alt = "Skribe: every subscription, written down";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4EFE6",
          padding: 72,
          color: "#15130F",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#D7261E",
              borderRadius: 18,
              color: "#ffffff",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ marginLeft: 16, fontSize: 40, fontWeight: 700 }}>kribe</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3 }}>Every subscription,</div>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.02, letterSpacing: -3, color: "#D7261E" }}>
            written down.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#5b574f" }}>
          Track, manage and pay for all your subscriptions in one place.
        </div>
      </div>
    ),
    { ...size },
  );
}
