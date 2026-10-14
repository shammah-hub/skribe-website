import Image from "next/image";
import { services } from "./data";
import { container, mono, serif } from "./theme";
import { Reveal } from "./ui";

/** All the logos on one row, in colour, with "and many more" underneath. */
export function ServicesStrip({ label = "Works with 1,000+ services, including" }: { label?: string }) {
  return (
    <section className="pb-20 md:pb-28">
      <div className={container}>
        <Reveal className="border-y border-[#15130F]/20 py-8">
          <p className={`${mono.className} mb-6 text-xs uppercase tracking-[0.16em] text-[#15130F]/60`}>{label}</p>

          {/* One row. On phones it scrolls sideways instead of wrapping. */}
          <div className="-mx-5 overflow-x-auto px-5 pb-2 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
            <ul className="flex min-w-max items-center justify-between gap-8 md:min-w-0">
              {services.map(([name, src]) => (
                <li key={name} title={name} className="shrink-0 transition-transform hover:-translate-y-0.5">
                  <Image src={src} alt={name} width={40} height={40} className="h-10 w-10 object-contain" />
                </li>
              ))}
            </ul>
          </div>

          <p className={`${serif.className} mt-6 text-2xl italic text-[#15130F]/70`}>and many more</p>
        </Reveal>
      </div>
    </section>
  );
}
