"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingCart, Check } from "lucide-react";

const doYouHave = [
  { item: "A+ Content with ingredient comparison tables", them: true, you: false },
  { item: "Sponsored Products targeting your brand name", them: true, you: false },
  { item: "Brand Registry protecting your listings", them: true, you: false },
  { item: "Flipkart Assured badge activated", them: true, you: false },
  { item: "Nykaa and Myntra listings live", them: true, you: false },
  { item: "ACOS under 18%", them: true, you: false },
];

export function MarketplaceSpotlight() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 70);
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
      style={{ background: "#0A0E1A" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: competitive comparison */}
          <div
            className="reveal rounded-card overflow-hidden"
            style={{ border: "1px solid #1E2D4A" }}
          >
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ background: "#111827", borderBottom: "1px solid #1E2D4A" }}
            >
              <ShoppingCart size={18} style={{ color: "#FF6B2B" }} />
              <span className="font-display font-600 text-[15px]" style={{ color: "#F0F4FF" }}>
                Your Competitor vs. You on Amazon
              </span>
            </div>
            <div className="p-2">
              <div className="grid grid-cols-3 gap-0 text-center">
                <div className="px-4 py-3" />
                <div className="px-4 py-3">
                  <span className="text-[11px] font-mono font-700 uppercase tracking-wider" style={{ color: "#00D4AA" }}>
                    Competitor
                  </span>
                </div>
                <div className="px-4 py-3">
                  <span className="text-[11px] font-mono font-700 uppercase tracking-wider" style={{ color: "#EF4444" }}>
                    You (now)
                  </span>
                </div>
              </div>
              {doYouHave.map((row, i) => (
                <div
                  key={row.item}
                  className="grid grid-cols-3 gap-0 items-center rounded-lg"
                  style={{
                    background: i % 2 === 0 ? "rgba(30,45,74,0.2)" : "transparent",
                  }}
                >
                  <div className="px-4 py-3 text-[12px]" style={{ color: "#8B9CC8" }}>
                    {row.item}
                  </div>
                  <div className="flex justify-center py-3">
                    <Check size={15} style={{ color: "#00D4AA" }} />
                  </div>
                  <div className="flex justify-center py-3">
                    <span style={{ color: "#EF4444", fontSize: "16px", lineHeight: 1 }}>✕</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: copy */}
          <div className="flex flex-col gap-6">
            <span className="eyebrow reveal w-fit">Marketplace Management</span>
            <h2
              className="font-display font-bold leading-[1.1] tracking-tight reveal"
              style={{ fontSize: "var(--text-h3)", color: "#F0F4FF" }}
            >
              Your Products Are Listed.
              <br />
              <span style={{ color: "#FF6B2B" }}>Are They Actually Selling?</span>
            </h2>
            <p className="text-[15px] leading-relaxed reveal" style={{ color: "#8B9CC8" }}>
              There&apos;s a difference between being listed on Amazon and{" "}
              <strong style={{ color: "#F0F4FF" }}>winning on Amazon</strong>. Most brands treat
              marketplaces as an afterthought. Ecom Orbit treats them as revenue engines.
            </p>

            <div className="grid grid-cols-2 gap-3 reveal">
              {[
                { platform: "Amazon India", metric: "<18% ACOS target" },
                { platform: "Flipkart", metric: "Assured + PLA" },
                { platform: "Meesho", metric: "213M+ users" },
                { platform: "Myntra + Nykaa", metric: "Premium positioning" },
              ].map((p) => (
                <div
                  key={p.platform}
                  className="flex flex-col gap-1 p-4 rounded-xl"
                  style={{ background: "#111827", border: "1px solid #1E2D4A" }}
                >
                  <span className="font-display font-600 text-[14px]" style={{ color: "#F0F4FF" }}>
                    {p.platform}
                  </span>
                  <span className="text-[11px] font-mono" style={{ color: "#FF6B2B" }}>
                    {p.metric}
                  </span>
                </div>
              ))}
            </div>

            <div className="reveal">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[14px] font-body font-500 w-fit"
                style={{ color: "#FF6B2B" }}
              >
                Get a Free Marketplace Audit <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
