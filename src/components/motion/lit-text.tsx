"use client";

import { useRef } from "react";
import { MotionValue, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

function Word({ word, progress, from, to, reduce }: { word: string; progress: MotionValue<number>; from: number; to: number; reduce: boolean }) {
  const opacity = useTransform(progress, [from, to], [0.16, 1]);
  return (
    <motion.span style={{ opacity: reduce ? 1 : opacity }} className="mr-[0.26em] inline-block">
      {word}
    </motion.span>
  );
}

/** A sentence set large; each word lights up as you scroll through it. Static under reduced motion. */
export function LitText({ text, className = "" }: { text: string; className?: string }) {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");

  return (
    <p ref={ref} className={`font-light leading-[1.12] tracking-[-0.03em] text-[var(--fg)] ${className}`}>
      {words.map((w, i) => (
        <Word key={i} word={w} progress={scrollYProgress} from={i / words.length} to={Math.min((i + 1.6) / words.length, 1)} reduce={reduce} />
      ))}
    </p>
  );
}
