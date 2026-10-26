"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BarCompareProps {
  label: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforePercent: number;
  afterPercent: number;
}

/** Animated before/after bar pair that grows into view. Colours come from the section tone. */
export function BarCompare({
  label,
  beforeLabel = "Before",
  afterLabel = "After",
  beforePercent,
  afterPercent,
}: BarCompareProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className="flex flex-col gap-3">
      <span className="small">{label}</span>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="caption w-14 shrink-0">{beforeLabel}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: "var(--rule)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "var(--fg3)" }}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${beforePercent}%` } : { width: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="caption w-14 shrink-0" style={{ color: "var(--link)" }}>{afterLabel}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: "var(--rule)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "var(--accent)" }}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${afterPercent}%` } : { width: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
