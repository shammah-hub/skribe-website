import { ImageResponse } from "next/og";

// Generated Apple touch icon. Replace with app/apple-icon.png for your real artwork.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#D7261E",
          color: "#ffffff",
          fontSize: 120,
          fontWeight: 700,
        }}
      >
        S
      </div>
    ),
    { ...size },
  );
}
