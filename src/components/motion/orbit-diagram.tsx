"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  ShoppingBag,
  Megaphone,
  Search,
  Store,
  Zap,
  Truck,
  LayoutGrid,
} from "lucide-react";

const CHANNELS = [
  { label: "Store", Icon: ShoppingBag },
  { label: "Ads", Icon: Megaphone },
  { label: "SEO", Icon: Search },
  { label: "Marketplaces", Icon: Store },
  { label: "Quick Commerce", Icon: Zap },
  { label: "Logistics", Icon: Truck },
  { label: "End-to-End", Icon: LayoutGrid },
];

interface OrbitDiagramProps {
  className?: string;
  size?: number;
  /** Show channel names under each node. Off for small instances. */
  labels?: boolean;
}

/**
 * The 7 channels orbiting one hub — the brand's literal mechanism.
 * Colours come from the surrounding section tone (--fg, --surface, --rule) so it works on any section.
 */
export function OrbitDiagram({ className, size = 480, labels = false }: OrbitDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const counterRotate = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const center = size / 2;
  const orbitRadius = size * 0.38;
  const node = size * 0.13;

  return (
    <div
      ref={ref}
      className={className}
      style={{ width: size, height: size, position: "relative", maxWidth: "100%" }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} style={{ position: "absolute", inset: 0 }}>
        <circle cx={center} cy={center} r={orbitRadius} fill="none" stroke="var(--rule)" strokeWidth={1.5} />
        <circle cx={center} cy={center} r={orbitRadius * 0.58} fill="none" stroke="var(--rule)" strokeWidth={1} />
      </svg>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: size * 0.2,
          height: size * 0.2,
          borderRadius: "50%",
          background: "var(--accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          fontSize: size * 0.055,
          color: "var(--on-accent)",
        }}
      >
        You
      </div>

      <motion.div style={{ position: "absolute", inset: 0, rotate: prefersReducedMotion ? 0 : rotate }}>
        {CHANNELS.map(({ label, Icon }, i) => {
          const angle = (i / CHANNELS.length) * Math.PI * 2 - Math.PI / 2;
          const x = center + orbitRadius * Math.cos(angle);
          const y = center + orbitRadius * Math.sin(angle);
          return (
            <motion.div
              key={label}
              style={{
                position: "absolute",
                top: `${(y / size) * 100}%`,
                left: `${(x / size) * 100}%`,
                transform: "translate(-50%, -50%)",
                rotate: prefersReducedMotion ? 0 : counterRotate,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              <div
                style={{
                  width: node,
                  height: node,
                  borderRadius: "50%",
                  background: "var(--surface)",
                  color: "var(--fg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={node * 0.46} strokeWidth={1.6} />
              </div>
              {labels && (
                <span style={{ fontSize: 12, letterSpacing: "-0.01em", color: "var(--fg2)", whiteSpace: "nowrap" }}>
                  {label}
                </span>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
