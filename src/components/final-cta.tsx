"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

/** Closing: one sentence, one button, rings pulsing outward from behind them. */
export function FinalCta() {
  return (
    <section className="section tone-dark relative flex min-h-[78svh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {[0, 1.8, 3.6].map((delay) => (
          <span
            key={delay}
            className="ring-loop absolute left-1/2 top-1/2 aspect-square w-[min(120vw,980px)] rounded-full border"
            style={{
              borderColor: delay === 0 ? "rgba(255,138,85,0.35)" : "rgba(255,255,255,0.12)",
              animation: `ring-pulse 7s ${delay}s ease-out infinite`,
            }}
          />
        ))}
        <span
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(closest-side, rgba(255,107,43,0.2), transparent)" }}
        />
      </div>

      <div className="container relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <h2 className="display !text-[clamp(38px,7vw,80px)]">
            Ready to stop leaving <span className="accent-text">revenue on the table?</span>
          </h2>
          <Link href="/contact" className="btn-primary">
            Get Your Free Ecommerce Audit
          </Link>
          <p className="caption">Free. No commitment. We reply within 24 hours.</p>
        </Reveal>
      </div>
    </section>
  );
}
