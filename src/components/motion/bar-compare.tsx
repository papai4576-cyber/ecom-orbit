"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BarCompareProps {
  label: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforePercent: number;
  afterPercent: number;
  color?: string;
}

/** Animated before/after horizontal bar pair — grows into view on scroll. */
export function BarCompare({
  label,
  beforeLabel = "Before",
  afterLabel = "After",
  beforePercent,
  afterPercent,
  color = "#FF6B2B",
}: BarCompareProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className="text-[12px] font-body" style={{ color: "#8B9CC8" }}>{label}</span>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono w-12 shrink-0" style={{ color: "#4A5A7A" }}>{beforeLabel}</span>
          <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "#1E2D4A" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "#4A5A7A" }}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${beforePercent}%` } : { width: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono w-12 shrink-0" style={{ color }}>{afterLabel}</span>
          <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "#1E2D4A" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: color }}
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
