"use client";

import { VendorReports } from "@/components/vendor-reports";
import { LitText } from "@/components/motion/lit-text";

/**
 * One sentence, set huge and left-aligned. Each word lights up as you scroll through it, then the
 * proof: five vendors all report fine, nobody reports the owner's margin, and Ecom Orbit does.
 */
export function Statement() {
  return (
    <section className="section tone-white">
      <div className="container">
        <LitText
          text="Everyone reports their own number. Nobody reports yours."
          className="max-w-[17ch] text-[clamp(36px,7.4vw,96px)] !leading-[1.04] !tracking-[-0.04em]"
        />

        <div className="mt-14 max-w-[880px] sm:mt-20">
          <VendorReports />
        </div>
      </div>
    </section>
  );
}
