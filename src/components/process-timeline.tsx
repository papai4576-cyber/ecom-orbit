"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Free Ecommerce Audit",
    desc: "We analyze your store, ad accounts, marketplace listings, and logistics. No cost. No commitment. Just a detailed teardown with specific recommendations.",
    duration: "Day 1–3",
    color: "#FF6B2B",
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    desc: "We define your target metrics, choose the right platforms for your category, and map out a 90-day growth roadmap.",
    duration: "Day 4–7",
    color: "#FF6B2B",
  },
  {
    num: "03",
    title: "Build & Launch",
    desc: "Store design, marketplace onboarding, quick commerce listing, payment gateway, shipping integration — everything goes live.",
    duration: "Week 2–4",
    color: "#00D4AA",
  },
  {
    num: "04",
    title: "Grow & Optimize",
    desc: "Performance campaigns launch. SEO activates. Weekly optimization cycles begin. Results visible within 30 days.",
    duration: "Month 2+",
    color: "#00D4AA",
  },
  {
    num: "05",
    title: "Scale & Compound",
    desc: "As revenue grows, we expand channels, reduce CAC, build retention loops, and move you from lakhs to crores.",
    duration: "Month 4+",
    color: "#818CF8",
  },
];

export function ProcessTimeline() {
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
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="eyebrow reveal">How It Works</span>
          <h2
            className="font-display font-bold leading-[1.1] tracking-tight reveal"
            style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
          >
            From Audit to{" "}
            <span style={{ color: "#FF6B2B" }}>₹1Cr/Month.</span>
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div
            className="absolute top-8 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #1E2D4A, #FF6B2B66, #1E2D4A, transparent)" }}
          />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="reveal flex flex-col items-center text-center gap-4 pt-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Node */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-mono font-700 text-[18px] z-10 relative"
                  style={{
                    background: `${step.color}18`,
                    border: `2px solid ${step.color}`,
                    color: step.color,
                    boxShadow: `0 0 20px ${step.color}30`,
                  }}
                >
                  {step.num}
                </div>

                <div className="flex flex-col gap-2">
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest"
                    style={{ color: step.color }}
                  >
                    {step.duration}
                  </span>
                  <h3
                    className="font-display font-600 text-[15px] leading-snug"
                    style={{ color: "#F0F4FF" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "#8B9CC8" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal flex gap-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Left: node + line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-mono font-700 text-[14px] shrink-0"
                  style={{
                    background: `${step.color}18`,
                    border: `2px solid ${step.color}`,
                    color: step.color,
                  }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: "#1E2D4A", minHeight: "40px" }} />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8 flex flex-col gap-1.5 pt-1">
                <span className="text-[10px] font-mono" style={{ color: step.color }}>
                  {step.duration}
                </span>
                <h3 className="font-display font-600 text-[16px]" style={{ color: "#F0F4FF" }}>
                  {step.title}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "#8B9CC8" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 reveal">
          <Link href="/contact" className="btn-primary">
            Start with a Free Audit <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
