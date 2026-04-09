"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    emoji: "👗",
    name: "Fashion & Apparel",
    highlight: "25% of India D2C market",
    body: "India's largest D2C category. We understand return rate management (28–35% industry average), trend cycles, size-guide optimization, and festive-season scaling.",
    metrics: [
      { label: "Industry Return Rate", value: "28–35%" },
      { label: "Our Target Return Rate", value: "<20%" },
      { label: "Festive Season Uplift", value: "3–5X" },
    ],
    href: "/industries/fashion-apparel",
    color: "#FF6B2B",
  },
  {
    emoji: "✨",
    name: "Beauty & Personal Care",
    highlight: "24.9% CAGR",
    body: "The fastest-growing D2C segment with 60–80% gross margins. UGC strategy, subscription funnels, Nykaa optimization, and Zepto/Blinkit in-app placement.",
    metrics: [
      { label: "Gross Margins", value: "60–80%" },
      { label: "Repeat Purchase Target", value: "28%+" },
      { label: "Avg ROAS", value: "4–6X" },
    ],
    href: "/industries/beauty-personal-care",
    color: "#EC4899",
  },
  {
    emoji: "🥗",
    name: "Food & FMCG",
    highlight: "Quick commerce-first",
    body: "Quick commerce is your fastest growth channel. We handle dark store replenishment, FSSAI compliance, subscription models, and high-frequency repeat purchase optimization.",
    metrics: [
      { label: "QC Suitability", value: "★★★★★" },
      { label: "Subscription Revenue", value: "20–40%" },
      { label: "Repeat Purchase Rate", value: "48%+" },
    ],
    href: "/industries/food-fmcg",
    color: "#10B981",
  },
  {
    emoji: "🏪",
    name: "Offline → Online",
    highlight: "13M+ kiranas in India",
    body: "Your products have proven demand. You just need digital infrastructure. We take you from WhatsApp catalog to Shopify store to Amazon listing to Blinkit shelf — in 30 days.",
    metrics: [
      { label: "Launch Timeline", value: "30 days" },
      { label: "Channel Reach", value: "All 7" },
      { label: "Geographic Reach", value: "Pan-India" },
    ],
    href: "/industries/offline-to-online",
    color: "#818CF8",
  },
];

export function IndustryVerticals() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{ background: "#0A0E1A" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="eyebrow reveal">We Go Deep on Three Categories</span>
          <h2
            className="font-display font-bold leading-[1.1] tracking-tight reveal"
            style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
          >
            Not a Generalist.
            <br />
            <span style={{ color: "#FF6B2B" }}>A Specialist in Your World.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {industries.map((ind, i) => (
            <Link
              key={ind.name}
              href={ind.href}
              className="card reveal flex flex-col gap-5 no-underline group"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{ind.emoji}</span>
                  <div>
                    <h3
                      className="font-display font-600 text-[18px]"
                      style={{ color: "#F0F4FF" }}
                    >
                      {ind.name}
                    </h3>
                    <span
                      className="text-[11px] font-mono"
                      style={{ color: ind.color }}
                    >
                      {ind.highlight}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>
                {ind.body}
              </p>

              <div className="grid grid-cols-3 gap-3">
                {ind.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col gap-1 p-3 rounded-lg"
                    style={{ background: "rgba(30,45,74,0.3)" }}
                  >
                    <span className="font-mono font-700 text-[15px]" style={{ color: ind.color }}>
                      {m.value}
                    </span>
                    <span className="text-[10px] leading-tight" style={{ color: "#4A5A7A" }}>
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="flex items-center gap-1.5 text-[13px] font-500 mt-auto transition-all duration-200 group-hover:gap-2.5"
                style={{ color: ind.color }}
              >
                Explore {ind.name} Services <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
