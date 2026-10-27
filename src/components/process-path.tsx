"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  { when: "Day 1–3", title: "Free audit", line: "We tear down your store, ads, listings and logistics." },
  { when: "Day 4–7", title: "Strategy", line: "The right channels for your category, and a 90-day plan." },
  { when: "Week 2–4", title: "Build & launch", line: "Store, marketplaces, payments, shipping. Live in weeks." },
  { when: "Month 2+", title: "Grow", line: "Campaigns and SEO go live. Weekly optimisation." },
  { when: "Month 4+", title: "Scale", line: "More channels, lower CAC, retention loops." },
];

/** A path you travel: the line fills as you scroll and each stop lights up when the line reaches it. */
export function ProcessPath() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.55"] });
  const fill = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.5 });
  const lineH = useTransform(fill, [0, 1], ["0%", "100%"]);

  return (
    <section className="section tone-dark">
      <div className="container">
        <Reveal className="mb-14 sm:mb-20">
          <h2 className="h2 max-w-[12ch]">
            From audit to ₹1Cr/month. <span className="text-[var(--fg3)]">One step at a time.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="relative">
          {/* Track: vertical on mobile, horizontal from lg */}
          <div className="absolute bottom-2 left-[11px] top-2 w-px lg:bottom-auto lg:left-0 lg:right-0 lg:top-[11px] lg:h-px lg:w-auto" style={{ background: "var(--rule)" }} aria-hidden="true">
            <motion.div
              className="absolute left-0 top-0 origin-top bg-[var(--accent)] max-lg:w-px lg:h-px lg:origin-left"
              style={reduce ? { height: "100%", width: "100%" } : { height: lineH, width: lineH }}
            />
          </div>

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12% 0px" }}
                transition={{ duration: 0.55, delay: 0.04 * i, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-9 lg:pl-0 lg:pt-10"
              >
                <span
                  className="absolute left-0 top-1 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-white/25 bg-[var(--night)] lg:top-0"
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                </span>
                <span className="mono text-[13px] text-[var(--link)]">{s.when}</span>
                <h3 className="h4 mt-2">{s.title}</h3>
                <p className="small mt-2 max-w-[26ch]">{s.line}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-14 sm:mt-20">
          <Link href="/contact" className="link-more">
            Start with a free audit
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
