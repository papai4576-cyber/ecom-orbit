"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const trustItems = [
  { icon: "⚡", label: "Response within 4 hours" },
  { icon: "🇮🇳", label: "India-focused expertise" },
  { icon: "📊", label: "No vanity metrics, only revenue" },
];

export function FinalCta() {
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
      className="section relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,107,43,0.1) 0%, transparent 70%), #0A0E1A`,
      }}
    >
      {/* Ambient decorations */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #FF6B2B55, transparent)" }}
      />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
          <span className="eyebrow reveal">Let&apos;s Build Your Ecommerce Orbit</span>

          <h2
            className="font-display font-bold leading-[1.05] tracking-tight reveal"
            style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
          >
            Ready to Stop Leaving
            <br />
            <span style={{ color: "#FF6B2B" }}>Revenue on the Table?</span>
          </h2>

          <p
            className="text-[17px] leading-relaxed reveal"
            style={{ color: "#8B9CC8", maxWidth: "580px" }}
          >
            Get a free, no-obligation ecommerce audit. We&apos;ll analyze your store, ad accounts,
            marketplace listings, and logistics — and show you exactly where the growth opportunities
            are. No commitment. No hard sell. Just honest insights from people who live and breathe
            Indian ecommerce.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 reveal">
            <Link href="/contact" className="btn-primary text-[16px]">
              Get Your Free Ecommerce Audit <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 reveal">
            {trustItems.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 text-[13px] font-body"
                style={{ color: "#8B9CC8" }}
              >
                <span>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
