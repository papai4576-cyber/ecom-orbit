"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

const platforms = [
  { name: "Blinkit", share: ">50% market share", color: "#FBBF24" },
  { name: "Zepto", share: "Growing fast", color: "#818CF8" },
  { name: "Swiggy Instamart", share: "Pan-India reach", color: "#FF6B2B" },
];

const qcStats = [
  { value: "$6–7B", label: "India QC GMV 2024", note: "Growing" },
  { value: "~40%", label: "CAGR through 2030", note: "Projected" },
  { value: "₹4,000Cr", label: "QC ad spend 2025", note: "202% YoY" },
  { value: "10 min", label: "Average delivery", note: "No other channel" },
];

export function QcSpotlight() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{ background: "#111827" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <span className="eyebrow reveal w-fit">The Fastest-Growing Channel in India</span>
            <h2
              className="font-display font-bold leading-[1.1] tracking-tight reveal"
              style={{ fontSize: "var(--text-h3)", color: "#F0F4FF" }}
            >
              Is Your Brand on Quick Commerce?
              <br />
              <span style={{ color: "#FF6B2B" }}>If Not, Someone Else Is.</span>
            </h2>
            <p className="text-[15px] leading-relaxed reveal" style={{ color: "#8B9CC8" }}>
              Every time a consumer in Mumbai opens Blinkit and searches &ldquo;protein bar&rdquo; — and your
              brand isn&apos;t there — a competitor gets that ₹240 order. Quick commerce is no longer an
              experiment. It&apos;s India&apos;s default for impulse and daily purchases.
            </p>
            <p className="text-[15px] leading-relaxed reveal" style={{ color: "#8B9CC8" }}>
              We run a free{" "}
              <strong style={{ color: "#F0F4FF" }}>Quick Commerce Viability Assessment</strong> — modeling
              your unit economics against platform fees — before you spend a single rupee on listing charges.
            </p>

            {/* Platforms */}
            <div className="flex flex-col gap-2 reveal">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between px-4 py-3 rounded-xl"
                  style={{ background: "rgba(30,45,74,0.3)", border: "1px solid rgba(30,45,74,0.6)" }}
                >
                  <span className="font-display font-600 text-[15px]" style={{ color: "#F0F4FF" }}>
                    {p.name}
                  </span>
                  <span className="text-[12px] font-mono" style={{ color: p.color }}>
                    {p.share}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 reveal">
              <Link href="/contact" className="btn-primary w-fit">
                Get Your Free QC Viability Assessment <ArrowRight size={18} />
              </Link>
              <p className="text-[12px] italic" style={{ color: "#4A5A7A" }}>
                We&apos;ll tell you honestly if quick commerce isn&apos;t right for you yet. Most agencies won&apos;t.
              </p>
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4 reveal">
            {qcStats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-2 p-6 rounded-card"
                style={{ background: "#0A0E1A", border: "1px solid #1E2D4A" }}
              >
                <div className="flex items-center gap-2">
                  <Zap size={16} style={{ color: "#818CF8" }} />
                  <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "#818CF8" }}>
                    {s.note}
                  </span>
                </div>
                <span className="font-mono font-700 text-[28px]" style={{ color: "#F0F4FF" }}>
                  {s.value}
                </span>
                <span className="text-[12px]" style={{ color: "#8B9CC8" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
