"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    tag: "Fashion & Apparel",
    tagColor: "#FF6B2B",
    brand: "Jaipur Ethnicwear Brand",
    heroStat: "₹28.4L/mo",
    heroLabel: "Monthly Revenue (from ₹3.2L)",
    metrics: [
      { label: "Revenue Growth", value: "8.9X", up: true },
      { label: "ROAS", value: "3.8X", up: true },
      { label: "Return Rate", value: "19%", up: false, note: "from 32%" },
      { label: "PageSpeed", value: "92", up: true },
    ],
    what: ["Shopify redesign", "Meta ads", "SEO", "COD optimization"],
    timeline: "6 months",
    slug: "jaipur-ethnicwear",
  },
  {
    tag: "Beauty & Personal Care",
    tagColor: "#00D4AA",
    brand: "Mumbai Skincare Brand",
    heroStat: "₹15.2L/mo",
    heroLabel: "Monthly Revenue (from ₹0)",
    metrics: [
      { label: "CVR", value: "3.6%", up: true },
      { label: "ROAS", value: "5.1X", up: true },
      { label: "Repeat Purchase", value: "28%", up: true },
      { label: "AOV", value: "₹1,340", up: true, note: "from ₹890" },
    ],
    what: ["Shopify build", "Meta UGC ads", "WhatsApp retention", "SEO"],
    timeline: "4 months",
    slug: "mumbai-skincare",
  },
  {
    tag: "Quick Commerce",
    tagColor: "#818CF8",
    brand: "Mumbai Protein Snack Brand",
    heroStat: "+₹4.8L/mo",
    heroLabel: "New QC Revenue Added",
    metrics: [
      { label: "Total Growth", value: "+67%", up: true },
      { label: "QC ROAS", value: "2.3X", up: true },
      { label: "Blinkit Orders", value: "680", up: true },
      { label: "Zepto Orders", value: "920", up: true },
    ],
    what: ["QC Viability Assessment", "Fast-track onboarding (3 weeks)", "Dark store setup"],
    timeline: "60 days",
    slug: "mumbai-protein-snacks",
  },
  {
    tag: "Marketplace Recovery",
    tagColor: "#F59E0B",
    brand: "Delhi Haircare Brand",
    heroStat: "₹13.8L/mo",
    heroLabel: "Total Revenue (from ₹1.8L)",
    metrics: [
      { label: "Revenue Growth", value: "7.7X", up: true },
      { label: "Amazon ACOS", value: "16.8%", up: false, note: "was 28%" },
      { label: "Return Rate", value: "11%", up: false, note: "from 22%" },
      { label: "Ranking", value: "Pg 1", up: true },
    ],
    what: ["Brand Registry", "A+ Content", "Sponsored Products", "Flipkart + Nykaa launch"],
    timeline: "4 months",
    slug: "delhi-haircare",
  },
];

export function CaseStudies() {
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
          <span className="eyebrow reveal">Results That Speak in Revenue</span>
          <h2
            className="font-display font-bold leading-[1.1] tracking-tight reveal"
            style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
          >
            Not Vanity Metrics.
            <br />
            <span style={{ color: "#FF6B2B" }}>Real Rupees.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {caseStudies.map((cs, i) => (
            <div
              key={cs.slug}
              className="reveal rounded-card overflow-hidden group"
              style={{
                background: "#111827",
                border: "1px solid #1E2D4A",
                transitionDelay: `${i * 80}ms`,
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = cs.tagColor + "44";
                el.style.boxShadow = `0 8px 32px ${cs.tagColor}15`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#1E2D4A";
                el.style.boxShadow = "none";
              }}
            >
              {/* Top bar */}
              <div
                className="h-1 w-full"
                style={{ background: cs.tagColor }}
              />

              <div className="p-7 flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span
                      className="text-[10px] font-mono font-500 uppercase tracking-widest"
                      style={{ color: cs.tagColor }}
                    >
                      {cs.tag}
                    </span>
                    <h3
                      className="font-display font-600 text-[18px] mt-1"
                      style={{ color: "#F0F4FF" }}
                    >
                      {cs.brand}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-mono font-700 text-[24px]" style={{ color: cs.tagColor }}>
                      {cs.heroStat}
                    </div>
                    <div className="text-[11px] text-text-muted">{cs.heroLabel}</div>
                  </div>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-4 gap-2">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col items-center gap-1 p-2 rounded-lg"
                      style={{ background: "rgba(30,45,74,0.3)" }}
                    >
                      <span
                        className="font-mono font-700 text-[16px]"
                        style={{ color: m.up ? "#00D4AA" : "#F59E0B" }}
                      >
                        {m.value}
                        <TrendingUp
                          size={10}
                          className="inline ml-0.5 mb-0.5"
                          style={{
                            transform: m.up ? "none" : "scaleY(-1)",
                            color: m.up ? "#00D4AA" : "#F59E0B",
                          }}
                        />
                      </span>
                      <span className="text-[9px] text-center leading-tight" style={{ color: "#4A5A7A" }}>
                        {m.label}
                      </span>
                      {m.note && (
                        <span className="text-[9px]" style={{ color: "#4A5A7A" }}>
                          {m.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* What we did */}
                <div className="flex flex-wrap gap-1.5">
                  {cs.what.map((w) => (
                    <span
                      key={w}
                      className="text-[11px] font-body px-2.5 py-1 rounded-pill"
                      style={{
                        background: "rgba(30,45,74,0.5)",
                        color: "#8B9CC8",
                        border: "1px solid rgba(30,45,74,0.8)",
                      }}
                    >
                      {w}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "#1E2D4A" }}>
                  <span className="text-[12px] font-mono" style={{ color: "#4A5A7A" }}>
                    Timeline: {cs.timeline}
                  </span>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-[13px] font-500 transition-all"
                    style={{ color: cs.tagColor }}
                  >
                    Read Case Study <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center reveal">
          <Link href="/case-studies" className="btn-secondary">
            View All Case Studies <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
