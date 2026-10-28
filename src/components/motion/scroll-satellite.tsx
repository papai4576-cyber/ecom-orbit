"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * A tiny satellite that rides a hairline orbit down the right edge as you scroll: the page's progress
 * indicator. Desktop only, hidden under reduced motion.
 */
export function ScrollSatellite() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const top = useTransform(p, [0, 1], ["0%", "100%"]);
  const spin = useTransform(p, [0, 1], [0, 720]);
  if (reduce) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed right-4 top-[22vh] z-30 hidden h-[56vh] w-5 xl:block">
      <div
        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.16) 15%, rgba(255,255,255,0.16) 85%, transparent)" }}
      />
      <motion.div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ top, rotate: spin }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="7.5" y="7.5" width="5" height="5" rx="1" fill="#ff6b2b" />
          <rect x="1" y="8.5" width="5" height="3" rx="0.6" fill="#9db7ff" opacity="0.9" />
          <rect x="14" y="8.5" width="5" height="3" rx="0.6" fill="#9db7ff" opacity="0.9" />
          <circle cx="10" cy="10" r="9" stroke="rgba(255,138,85,0.35)" strokeWidth="0.6" />
        </svg>
      </motion.div>
    </div>
  );
}
