import type { Metadata } from "next";
import { Btn } from "./components/site/ui";
import { Shell } from "./components/site/Shell";
import { Stamp } from "./components/site/ui";
import { container, h1Inner, lead, serif } from "./components/site/theme";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Shell>
      <section className="py-24 md:py-36">
        <div className={container}>
          <Stamp className="-rotate-6">404</Stamp>
          <h1 className={`${h1Inner} mt-8`}>
            This page was never <span className={`${serif.className} italic text-[#D7261E]`}>written down.</span>
          </h1>
          <p className={`${lead} mt-8 max-w-md`}>The link may be old, or the page may have moved.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Btn href="/">Back to home</Btn>
            <Btn href="/contact" variant="outline">
              Contact us
            </Btn>
          </div>
        </div>
      </section>
    </Shell>
  );
}
