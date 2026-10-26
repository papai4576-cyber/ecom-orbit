"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { BarCompare } from "@/components/motion/bar-compare";

const platforms = [
  { name: "Blinkit", share: ">50% market share" },
  { name: "Zepto", share: "Growing fast" },
  { name: "Swiggy Instamart", share: "Pan-India reach" },
];

const qcStats = [
  { value: "$6–7B", label: "India QC GMV 2024", note: "Growing" },
  { value: "~40%", label: "CAGR through 2030", note: "Projected" },
  { value: "₹4,000Cr", label: "QC ad spend 2025", note: "202% YoY" },
  { value: "10 min", label: "Average delivery", note: "No other channel" },
];

export function QcSpotlight() {
  return (
    <section className="section tone-dark">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">The Fastest-Growing Channel in India</span>
            <h2 className="h2">
              Is your brand on quick commerce? <span className="accent-text">If not, someone else is.</span>
            </h2>
            <p className="body">
              Every time a consumer in Mumbai opens Blinkit and searches &ldquo;protein bar&rdquo; — and your brand
              isn&apos;t there — a competitor gets that ₹240 order. Quick commerce is no longer an experiment.
              It&apos;s India&apos;s default for impulse and daily purchases.
            </p>
            <p className="body">
              We run a free <strong className="font-semibold text-[var(--fg)]">Quick Commerce Viability Assessment</strong>{" "}
              — modeling your unit economics against platform fees — before you spend a single rupee on listing
              charges.
            </p>

            <div className="card">
              <BarCompare
                label="Total revenue after adding quick commerce"
                beforePercent={60}
                afterPercent={100}
              />
            </div>

            <ul className="flex flex-col">
              {platforms.map((p) => (
                <li
                  key={p.name}
                  className="flex items-center justify-between border-b py-3.5 first:border-t"
                  style={{ borderColor: "var(--rule)" }}
                >
                  <span className="text-[17px] font-medium">{p.name}</span>
                  <span className="mono text-[13px]" style={{ color: "var(--fg2)" }}>
                    {p.share}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <Link href="/contact" className="link-more w-fit">
                Get your free QC viability assessment
              </Link>
              <p className="caption">
                We&apos;ll tell you honestly if quick commerce isn&apos;t right for you yet. Most agencies won&apos;t.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            {qcStats.map((s) => (
              <div key={s.label} className="card flex flex-col gap-3">
                <span className="caption" style={{ color: "var(--link)" }}>
                  {s.note}
                </span>
                <span className="stat-value text-[clamp(26px,3.4vw,36px)]">{s.value}</span>
                <span className="small">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
