"use client";

import { ArrowRight } from "lucide-react";
import { ScatterDiagram } from "@/components/motion/scatter-diagram";
import { OrbitDiagram } from "@/components/motion/orbit-diagram";
import { LitText } from "@/components/motion/lit-text";

/**
 * One sentence, set huge and left-aligned. Each word lights up as you scroll through it,
 * then a single before/after picture. No bullets, no cards: the statement is the section.
 */
export function Statement() {
  return (
    <section className="section tone-white">
      <div className="container">
        <LitText
          text="You're the unpaid project manager of your own ecommerce operation."
          className="max-w-[17ch] text-[clamp(36px,7.4vw,96px)] !leading-[1.04] !tracking-[-0.04em]"
        />

        <div className="mt-14 flex items-center gap-6 sm:mt-20 sm:gap-12">
          <div className="flex flex-col items-start gap-3">
            <ScatterDiagram size={120} />
            <span className="caption">5 vendors, 0 system</span>
          </div>
          <ArrowRight size={22} className="shrink-0" style={{ color: "var(--fg3)" }} aria-hidden="true" />
          <div className="flex flex-col items-start gap-3">
            <OrbitDiagram size={120} />
            <span className="caption" style={{ color: "var(--link)" }}>
              1 team, 1 system
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
