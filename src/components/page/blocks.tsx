"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const view = { once: true, margin: "-10% 0px" } as const;

/**
 * Pain points as big dim lines that get struck through in orange as they scroll into view:
 * the problem, then its removal. No icons, no cards.
 */
export function StrikeList({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  return (
    <ul className="flex flex-col">
      {items.map((text, i) => (
        <li key={text} className="border-t border-white/10 py-6 first:border-t-0 first:pt-0 sm:py-8">
          <motion.span
            className="inline text-[clamp(21px,2.9vw,34px)] font-light leading-[1.35] tracking-[-0.02em] text-[var(--fg2)]"
            style={{
              backgroundImage: "linear-gradient(var(--accent), var(--accent))",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 58%",
              backgroundSize: reduce ? "100% 2px" : undefined,
            }}
            initial={reduce ? false : { opacity: 0, y: 14, backgroundSize: "0% 2px" }}
            whileInView={{ opacity: 1, y: 0, backgroundSize: "100% 2px" }}
            viewport={view}
            transition={{
              opacity: { duration: 0.5, ease },
              y: { duration: 0.5, ease },
              backgroundSize: { duration: 0.9, delay: 0.45, ease },
            }}
          >
            {text}
          </motion.span>
        </li>
      ))}
    </ul>
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
