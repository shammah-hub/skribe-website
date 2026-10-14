import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { grain, sans } from "./theme";
import { WaitlistProvider } from "./WaitlistModal";

/** Page chrome: paper background, nav, footer. Used by the site layout and the 404 page. */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${sans.className} min-h-screen overflow-x-clip bg-[#F4EFE6] text-[#15130F] antialiased`}
      style={{ backgroundImage: grain }}
    >
      <WaitlistProvider>
        <Nav />
        <main>{children}</main>
        <Footer />
      </WaitlistProvider>
    </div>
  );
}
