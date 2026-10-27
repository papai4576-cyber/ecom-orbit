import { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

interface PageHeroProps {
  /** A small mono label above the headline (the section or service name). */
  eyebrow?: string;
  headline: ReactNode;
  /** One short line. Longer copy does not belong in a hero. */
  subheadline?: string;
  /** The hero's picture (usually an <OrbitMark/>); sits to the right on desktop. */
  visual?: ReactNode;
  children?: ReactNode;
}

/** Inner-page hero: left-aligned light headline, one line, one button, and an optional picture. */
export function PageHero({ eyebrow, headline, subheadline, visual, children }: PageHeroProps) {
  return (
    <section className="tone-white relative overflow-hidden px-5 pb-[clamp(48px,7vw,96px)] pt-[112px] sm:px-8 sm:pt-[144px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 55% at 18% 0%, rgba(96, 140, 220, 0.26), transparent 70%), radial-gradient(40% 50% at 85% 70%, rgba(255, 107, 43, 0.08), transparent 70%)",
        }}
      />
      <div className={`container relative grid items-center gap-10 ${visual ? "lg:grid-cols-[1.4fr_1fr]" : ""}`}>
        <Reveal className="flex flex-col items-start gap-5">
          {eyebrow && <span className="mono text-[12px] uppercase tracking-[0.08em] text-[var(--link)]">{eyebrow}</span>}
          <h1 className="display max-w-[20ch] !text-[clamp(36px,5.2vw,68px)]">{headline}</h1>
          {subheadline && <p className="lead max-w-[520px]">{subheadline}</p>}
          {children && <div className="mt-3 flex flex-wrap items-center gap-5">{children}</div>}
        </Reveal>
        {visual && <div className="order-last flex justify-center lg:justify-end">{visual}</div>}
      </div>
    </section>
  );
}
