"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const view = { once: true, margin: "-10% 0px" } as const;

/**
 * Pain points as numbered lines: a small orange index, one large light line, hairlines between.
 * Rows rise in one after another. No strike-through, no icons, no cards.
 */
export function PainList({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  return (
    <ol className="flex flex-col border-t border-white/10">
      {items.map((text, i) => (
        <motion.li
          key={text}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: 0.55, delay: 0.06 * i, ease }}
          className="grid grid-cols-[2.25rem_1fr] items-baseline gap-x-3 border-b border-white/10 py-6 sm:grid-cols-[3.5rem_1fr] sm:py-8"
        >
          <span className="mono text-[13px] text-[var(--link)] sm:text-[14px]">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-[clamp(20px,2.8vw,32px)] font-light leading-[1.3] tracking-[-0.02em] text-[var(--fg)]">{text}</span>
        </motion.li>
      ))}
    </ol>
  );
}

/** Deliverables as a loose cloud of glass pills, not a list. */
export function PillCloud({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: 0.45, delay: 0.04 * i, ease }}
          className="glass flex items-center gap-2.5 rounded-full py-2.5 pl-3 pr-5 text-[15px] tracking-tight text-[var(--fg)]"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--on-accent)]">
            <Check size={12} strokeWidth={3} />
          </span>
          {item}
        </motion.li>
      ))}
    </ul>
  );
}

/** Short checklist: orange tick, one large light line per row, hairlines between. */
export function TickRows({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  return (
    <ul className="flex flex-col border-t border-white/10">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={reduce ? false : { opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={view}
          transition={{ duration: 0.5, delay: 0.05 * i, ease }}
          className="flex items-center gap-5 border-b border-white/10 py-5 sm:py-6"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--on-accent)]">
            <Check size={15} strokeWidth={3} />
          </span>
          <span className="text-[clamp(19px,2.4vw,28px)] font-light tracking-[-0.02em] text-[var(--fg)]">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}
