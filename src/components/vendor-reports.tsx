"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

// What each separate vendor sends the owner in a typical month. Deliberately metric-free: no invented numbers.
const REPORTS = [
  { vendor: "Web developer", says: "Site live" },
  { vendor: "Ad agency", says: "ROAS on target" },
  { vendor: "SEO consultant", says: "Rankings up" },
  { vendor: "Marketplace specialist", says: "Listings live" },
  { vendor: "Logistics partner", says: "Shipped on time" },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const view = { once: true, margin: "-8% 0px" } as const;

/**
 * "Everyone reports their own number. Nobody reports yours." Five vendors, five reports that all look fine,
 * then the line nobody sends (the owner's contribution margin), then where Ecom Orbit comes in: we report it.
 */
export function VendorReports() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: view,
    transition: { duration: 0.55, delay, ease },
  });

  return (
    <div>
      <p className="mono text-[12px] uppercase tracking-[0.08em] text-[var(--link)]">A typical month with five vendors</p>

      <ul className="mt-4 border-t border-white/10">
        {REPORTS.map((r, i) => (
          <motion.li
            key={r.vendor}
            {...rise(0.06 * i)}
            className="flex items-center justify-between gap-4 border-b border-white/10 py-4 sm:py-5"
          >
            <span className="text-[17px] text-[var(--fg)]">{r.vendor}</span>
            <span className="flex items-center gap-2.5 text-[15px] text-[var(--fg2)]">
              {r.says}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-[var(--fg)]">
                <Check size={13} strokeWidth={2.4} aria-hidden="true" />
              </span>
            </span>
          </motion.li>
        ))}
      </ul>

      {/* The line nobody sends */}
      <motion.div
        {...rise(0.1)}
        className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-dashed border-white/30 px-5 py-5 sm:px-6"
      >
        <div>
          <p className="text-[17px] font-medium text-[var(--fg)]">Your contribution margin</p>
          <p className="caption mt-0.5">The number that pays your bills</p>
        </div>
        <p className="mono shrink-0 text-right text-[15px] text-[var(--fg3)]">
          Nobody
          <br />
          reports this
        </p>
      </motion.div>

      {/* Where Ecom Orbit comes in */}
      <motion.div
        {...rise(0.2)}
        className="mt-4 flex flex-col gap-4 rounded-2xl border px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
        style={{
          borderColor: "rgba(255,107,43,0.55)",
          background: "linear-gradient(135deg, rgba(255,107,43,0.16), rgba(255,107,43,0.04))",
          boxShadow: "0 0 40px -12px rgba(255,107,43,0.45)",
        }}
      >
        <div>
          <p className="text-[19px] font-medium text-[var(--fg)] [text-wrap:balance] sm:text-[21px]">Ecom Orbit reports it. Every month, every channel.</p>
        </div>
        <Link href="/services/end-to-end#reporting" className="link-more shrink-0">
          How we report
        </Link>
      </motion.div>
    </div>
  );
}
