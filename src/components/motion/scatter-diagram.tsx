"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 20, y: 15 },
  { x: 80, y: 25 },
  { x: 15, y: 65 },
  { x: 75, y: 75 },
  { x: 45, y: 20 },
];

/** Scattered, disconnected nodes: the "5 vendors, no system" state. Reads colours from the section tone. */
export function ScatterDiagram({ size = 200 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
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
          stroke="var(--fg3)"
          strokeWidth={0.7}
          strokeDasharray="2 2.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={6}
          fill="var(--surface)"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        />
      ))}
    </svg>
  );
}
