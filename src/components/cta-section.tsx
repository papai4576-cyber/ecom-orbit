import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

interface CtaSectionProps {
  headline: string;
  /** One short caption under the button. */
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/** Closing block for inner pages: one sentence, one button, rings pulsing out from behind them. */
export function CtaSection({ headline, subheadline, ctaLabel = "Get Your Free Ecommerce Audit", ctaHref = "/contact" }: CtaSectionProps) {
  return (
    <section className="tone-dark relative overflow-hidden px-5 py-[clamp(96px,13vw,176px)] sm:px-8">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {[0, 2.3].map((delay) => (
          <span
            key={delay}
            className="ring-loop absolute left-1/2 top-1/2 aspect-square w-[min(110vw,820px)] rounded-full border"
            style={{
              borderColor: delay === 0 ? "rgba(255,138,85,0.3)" : "rgba(255,255,255,0.1)",
              animation: `ring-pulse 7s ${delay}s ease-out infinite`,
            }}
          />
        ))}
        <span
          className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(255,107,43,0.18), transparent)" }}
        />
      </div>
      <div className="container relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
          <h2 className="display !text-[clamp(32px,5.6vw,68px)]">{headline}</h2>
          <Link href={ctaHref} className="btn-primary">
            {ctaLabel}
          </Link>
          {subheadline && <p className="caption">{subheadline}</p>}
        </Reveal>
      </div>
    </section>
  );
}
