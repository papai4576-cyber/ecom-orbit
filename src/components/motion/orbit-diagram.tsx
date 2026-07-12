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
  { label: "Store", Icon: ShoppingBag, radius: 1 },
  { label: "Ads", Icon: Megaphone, radius: 1 },
  { label: "SEO", Icon: Search, radius: 1 },
  { label: "Marketplaces", Icon: Store, radius: 1 },
  { label: "Quick Commerce", Icon: Zap, radius: 1 },
  { label: "Logistics", Icon: Truck, radius: 1 },
  { label: "End-to-End", Icon: LayoutGrid, radius: 1 },
];

interface OrbitDiagramProps {
  className?: string;
  size?: number;
}

/** Literal orbit of the 7 channels around a central hub — the brand's visual metaphor. */
export function OrbitDiagram({ className, size = 480 }: OrbitDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const counterRotate = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const center = size / 2;
  const orbitRadius = size * 0.38;

  return (
    <div
      ref={ref}
      className={className}
      style={{ width: size, height: size, position: "relative" }}
      aria-hidden="true"
    >
      {/* orbit ring */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: "absolute", inset: 0 }}
      >
        <circle
          cx={center}
          cy={center}
          r={orbitRadius}
          fill="none"
          stroke="#1E2D4A"
          strokeWidth={1}
          strokeDasharray="4 6"
        />
        <circle cx={center} cy={center} r={orbitRadius * 0.55} fill="none" stroke="#1E2D4A" strokeWidth={1} opacity={0.5} />
      </svg>

      {/* central hub */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: size * 0.16,
          height: size * 0.16,
          borderRadius: "50%",
          background: "radial-gradient(circle, #FF6B2B 0%, #B8471C 100%)",
          boxShadow: "0 0 40px rgba(255,107,43,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: size * 0.045,
          color: "white",
        }}
      >
        EO
      </div>

      {/* orbiting channels */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          rotate: prefersReducedMotion ? 0 : rotate,
        }}
      >
        {CHANNELS.map(({ label, Icon }, i) => {
          const angle = (i / CHANNELS.length) * Math.PI * 2 - Math.PI / 2;
          const x = center + orbitRadius * Math.cos(angle);
          const y = center + orbitRadius * Math.sin(angle);
          return (
            <motion.div
              key={label}
              title={label}
              style={{
                position: "absolute",
                top: y,
                left: x,
                transform: "translate(-50%, -50%)",
                rotate: prefersReducedMotion ? 0 : counterRotate,
              }}
            >
              <div
                style={{
                  width: size * 0.11,
                  height: size * 0.11,
                  borderRadius: "50%",
                  background: "#111827",
                  border: "1px solid #2A3F6A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={size * 0.05} color="#00D4AA" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
