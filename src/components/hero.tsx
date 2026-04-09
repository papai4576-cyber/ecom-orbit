"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const trustPills = [
  "Shopify Partner",
  "Google Partner",
  "Meta Business Partner",
  "Amazon SPN Certified",
  "Semrush Agency",
];

export function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-grid"
      style={{
        background: `radial-gradient(ellipse 90% 60% at 50% 105%, rgba(255,107,43,0.09) 0%, transparent 65%), #0A0E1A`,
        backgroundImage: `
          radial-gradient(ellipse 90% 60% at 50% 105%, rgba(255,107,43,0.09) 0%, transparent 65%),
          linear-gradient(rgba(30,45,74,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30,45,74,0.3) 1px, transparent 1px)
        `,
        backgroundSize: "auto, 60px 60px, 60px 60px",
        paddingTop: "100px",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,107,43,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,170,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 py-20 flex flex-col items-center gap-8 relative z-10">
        {/* Eyebrow */}
        <div
          className="eyebrow"
          style={{ animationDelay: "0ms" }}
        >
          🚀 India&apos;s 7-Channel Ecommerce Agency
        </div>

        {/* Main headline */}
        <div ref={headlineRef} className="flex flex-col items-center gap-1">
          <h1
            className="font-display font-bold leading-[1.05] tracking-tight"
            style={{ fontSize: "var(--text-hero)" }}
          >
            <span style={{ color: "#F0F4FF" }}>Your D2C Brand</span>
          </h1>
          <h1
            className="font-display font-bold leading-[1.05] tracking-tight relative"
            style={{ fontSize: "var(--text-hero)" }}
          >
            <span style={{ color: "#FF6B2B" }}>Deserves a Store</span>
            {/* SVG underline */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 400 8"
              preserveAspectRatio="none"
              style={{ opacity: 0.7 }}
            >
              <path
                d="M0 6 Q100 2 200 5 Q300 8 400 4"
                stroke="#FF6B2B"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </h1>
          <h1
            className="font-display font-bold leading-[1.05] tracking-tight"
            style={{ fontSize: "var(--text-hero)", color: "#F0F4FF" }}
          >
            That Actually Sells.
          </h1>
        </div>

        {/* Subheadline */}
        <p
          className="max-w-2xl font-body text-[17px] leading-relaxed"
          style={{ color: "#8B9CC8" }}
        >
          We build, market, and scale Shopify &amp; WooCommerce stores, manage your Amazon, Flipkart &amp;
          Meesho accounts, and get your products into Blinkit, Zepto &amp; Swiggy Instamart — all from{" "}
          <strong style={{ color: "#F0F4FF" }}>one integrated team.</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <Link href="/contact" className="btn-primary text-[16px]">
            Get Your Free Ecommerce Audit
            <ArrowRight size={18} />
          </Link>
          <button className="btn-secondary flex items-center gap-3 text-[16px]">
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full"
              style={{ background: "rgba(255,107,43,0.15)", border: "1px solid rgba(255,107,43,0.3)" }}
            >
              <Play size={13} fill="#FF6B2B" className="text-orange ml-0.5" />
            </span>
            Watch How It Works
          </button>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
          {trustPills.map((pill, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-body font-500"
              style={{
                background: "rgba(30,45,74,0.5)",
                border: "1px solid rgba(42,63,106,0.7)",
                color: "#8B9CC8",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#00D4AA" }}
              />
              {pill}
            </span>
          ))}
        </div>

        {/* Floating stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full max-w-3xl">
          {[
            { value: "₹50Cr+", label: "Revenue Generated" },
            { value: "200+", label: "Brands Launched" },
            { value: "3.5X", label: "Average ROAS" },
            { value: "7", label: "Channels Managed" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-4 py-4 rounded-card"
              style={{
                background: "rgba(17,24,39,0.8)",
                border: "1px solid rgba(30,45,74,0.8)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="font-mono font-bold text-[22px]" style={{ color: "#FF6B2B" }}>
                {stat.value}
              </span>
              <span className="text-[11px] font-body text-center" style={{ color: "#8B9CC8" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0A0E1A)",
        }}
      />
    </section>
  );
}
