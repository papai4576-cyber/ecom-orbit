"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Globe, Zap } from "lucide-react";

const channels = [
  {
    icon: <ShoppingBag size={22} />,
    category: "Marketplaces",
    color: "#FF6B2B",
    platforms: ["Amazon India", "Flipkart", "Meesho", "Myntra", "Nykaa"],
    reach: "590M+ shoppers",
    desc: "The largest buyer pool in India. High intent, high competition. Win with listing SEO + PPC.",
  },
  {
    icon: <Globe size={22} />,
    category: "D2C Website",
    color: "#00D4AA",
    platforms: ["Shopify", "WooCommerce", "Meta Ads", "Google Ads", "SEO"],
    reach: "Own your customer",
    desc: "Zero commission. Full data ownership. 3–5X higher LTV when retention is built right.",
  },
  {
    icon: <Zap size={22} />,
    category: "Quick Commerce",
    color: "#818CF8",
    platforms: ["Blinkit", "Zepto", "Swiggy Instamart"],
    reach: "₹4,000Cr ad market",
    desc: "India's fastest-growing channel. 10-minute delivery. ₹240 avg order. Impulse-first buying.",
  },
];

export function MultiChannel() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="eyebrow reveal">The Problem With One-Channel Thinking</span>
          <h2
            className="font-display font-bold leading-[1.1] tracking-tight reveal"
            style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
          >
            Where Do Indian Consumers
            <br />
            <span style={{ color: "#FF6B2B" }}>Actually Buy?</span>
          </h2>
          <p
            className="max-w-2xl text-[17px] leading-relaxed reveal"
            style={{ color: "#8B9CC8" }}
          >
            Most agencies answer with &ldquo;Shopify + Meta ads.&rdquo; That&apos;s incomplete. India&apos;s ecommerce
            is three separate battlegrounds — and you&apos;re currently fighting in only one of them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {channels.map((ch, i) => (
            <div
              key={ch.category}
              className="card reveal flex flex-col gap-5 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${ch.color}18`, color: ch.color }}
                >
                  {ch.icon}
                </div>
                <span
                  className="text-[11px] font-mono font-500 px-2.5 py-1 rounded-pill"
                  style={{
                    background: `${ch.color}15`,
                    color: ch.color,
                    border: `1px solid ${ch.color}33`,
                  }}
                >
                  {ch.reach}
                </span>
              </div>
              <div>
                <h3
                  className="font-display font-600 text-[20px] mb-2"
                  style={{ color: "#F0F4FF" }}
                >
                  {ch.category}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>
                  {ch.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {ch.platforms.map((p) => (
                  <span
                    key={p}
                    className="text-[11px] font-body font-500 px-2.5 py-1 rounded-lg"
                    style={{
                      background: "rgba(30,45,74,0.6)",
                      color: "#8B9CC8",
                      border: "1px solid rgba(30,45,74,0.8)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div
          className="reveal mx-auto max-w-3xl text-center p-8 rounded-card"
          style={{
            background: "rgba(255,107,43,0.05)",
            border: "1px solid rgba(255,107,43,0.2)",
          }}
        >
          <p
            className="font-display font-600 text-[20px] leading-relaxed"
            style={{ color: "#F0F4FF" }}
          >
            &ldquo;Ecom Orbit is the only SMB agency in India managing all three — as{" "}
            <span style={{ color: "#FF6B2B" }}>one system</span>,{" "}
            <span style={{ color: "#FF6B2B" }}>one strategy</span>,{" "}
            <span style={{ color: "#FF6B2B" }}>one monthly report</span>.&rdquo;
          </p>
        </div>

        <div className="flex justify-center mt-8 reveal">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[14px] font-body font-500"
            style={{ color: "#00D4AA" }}
          >
            See How Multi-Channel Works <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
