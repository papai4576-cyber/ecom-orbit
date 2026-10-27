"use client";

import { useRef } from "react";
import { MotionValue, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScatterDiagram } from "@/components/motion/scatter-diagram";
import { OrbitDiagram } from "@/components/motion/orbit-diagram";

const LINE = "You're the unpaid project manager of your own ecommerce operation.";

function Word({ word, progress, from, to, reduce }: { word: string; progress: MotionValue<number>; from: number; to: number; reduce: boolean }) {
  const opacity = useTransform(progress, [from, to], [0.16, 1]);
  return (
    <motion.span style={{ opacity: reduce ? 1 : opacity }} className="mr-[0.26em] inline-block">
      {word}
    </motion.span>
  );
}

/**
 * One sentence, set huge and left-aligned. Each word lights up as you scroll through it,
 * then a single before/after picture. No bullets, no cards: the statement is the section.
 */
export function Statement() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = LINE.split(" ");

  return (
    <section className="section tone-white">
      <div className="container">
        <p ref={ref} className="max-w-[17ch] text-[clamp(36px,7.4vw,96px)] font-light leading-[1.04] tracking-[-0.04em] text-[var(--fg)]">
          {words.map((w, i) => (
            <Word key={i} word={w} progress={scrollYProgress} from={i / words.length} to={Math.min((i + 1.6) / words.length, 1)} reduce={reduce} />
          ))}
        </p>

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
