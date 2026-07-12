"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 20, y: 15 },
  { x: 80, y: 25 },
  { x: 15, y: 65 },
  { x: 75, y: 75 },
  { x: 45, y: 20 },
];

/** Scattered, disconnected nodes — visualizes the "5 vendors, no system" chaos state. */
export function ScatterDiagram({ size = 200 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={5}
          fill="#111827"
          stroke="#EF4444"
          strokeWidth={1.2}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        />
      ))}
      {/* broken connector lines */}
      {[
        [nodes[0], nodes[4]],
        [nodes[1], nodes[4]],
        [nodes[2], nodes[3]],
      ].map(([a, b], i) => (
        <motion.line
          key={i}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke="#EF4444"
          strokeWidth={0.6}
          strokeDasharray="2 2"
          opacity={0.35}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
        />
      ))}
    </svg>
  );
}
