"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useTransform, MotionValue, useReducedMotion } from "framer-motion";
import { PinnedSection } from "@/components/motion/pinned-section";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  {
    num: "01",
    title: "Free Ecommerce Audit",
    desc: "We tear down your store, ad accounts, marketplace listings, and logistics setup. No cost, no commitment — just specific, numbered recommendations you could act on with or without us.",
    duration: "Day 1–3",
    color: "#FF6B2B",
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    desc: "We pick the right channels for your category — not all seven for everyone — set target metrics, and map a 90-day plan against them.",
    duration: "Day 4–7",
    color: "#FF6B2B",
  },
  {
    num: "03",
    title: "Build & Launch",
    desc: "Store design, marketplace onboarding, quick commerce listing, payment gateway, shipping integration. Everything goes live in weeks, not quarters.",
    duration: "Week 2–4",
    color: "#00D4AA",
  },
  {
    num: "04",
    title: "Grow & Optimize",
    desc: "Campaigns launch. SEO activates. Weekly optimization cycles begin. You'll see movement inside 30 days — not a quarterly report that says 'trust the process.'",
    duration: "Month 2+",
    color: "#00D4AA",
  },
  {
    num: "05",
    title: "Scale & Compound",
    desc: "As revenue grows, we add channels, push CAC down, build retention loops, and move the conversation from lakhs to crores.",
    duration: "Month 4+",
    color: "#818CF8",
  },
];

function StepPanel({ step, index, progress }: { step: (typeof steps)[0]; index: number; progress: MotionValue<number> }) {
  const segment = 1 / steps.length;
  const start = index * segment;
  const end = start + segment;
  const opacity = useTransform(progress, [start, start + segment * 0.2, end - segment * 0.2, end], [0.25, 1, 1, 0.25]);
  const scale = useTransform(progress, [start, start + segment * 0.2, end - segment * 0.2, end], [0.94, 1, 1, 0.94]);

  return (
    <motion.div style={{ opacity, scale }} className="flex flex-col items-center text-center gap-4">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center font-mono font-700 text-[18px] shrink-0"
        style={{
          background: `${step.color}18`,
          border: `2px solid ${step.color}`,
          color: step.color,
          boxShadow: `0 0 20px ${step.color}30`,
        }}
      >
        {step.num}
      </div>
      <div className="flex flex-col gap-2 max-w-[220px]">
        <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: step.color }}>
          {step.duration}
        </span>
        <h3 className="font-display font-600 text-[16px] leading-snug" style={{ color: "#F0F4FF" }}>
          {step.title}
        </h3>
        <p className="text-[12px] leading-relaxed" style={{ color: "#8B9CC8" }}>
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export function ProcessTimeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section" style={{ background: "#0A0E1A" }}>
      <div className="container mx-auto px-6">
        <Reveal className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="eyebrow">How It Works</span>
          <h2
            className="font-display font-bold leading-[1.1] tracking-tight"
            style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
          >
            From Audit to <span style={{ color: "#FF6B2B" }}>₹1Cr/Month.</span>
          </h2>
        </Reveal>
      </div>

      {/* Desktop: pinned scroll-through */}
      {prefersReducedMotion ? (
        <div className="hidden md:block container mx-auto px-6 relative">
          <div
            className="absolute top-8 left-6 right-6 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #1E2D4A, #FF6B2B66, #1E2D4A, transparent)" }}
          />
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-mono font-700 text-[18px]"
                  style={{ background: `${step.color}18`, border: `2px solid ${step.color}`, color: step.color }}
                >
                  {step.num}
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: step.color }}>
                    {step.duration}
                  </span>
                  <h3 className="font-display font-600 text-[15px]" style={{ color: "#F0F4FF" }}>
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
      ) : (
        <div className="hidden md:block">
          <PinnedSection heightVh={280}>
            {(progress) => (
              <div className="container mx-auto px-6 w-full relative">
                <div
                  className="absolute top-8 left-6 right-6 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, #1E2D4A, #FF6B2B66, #1E2D4A, transparent)" }}
                />
                <div className="grid grid-cols-5 gap-4">
                  {steps.map((step, i) => (
                    <StepPanel key={step.num} step={step} index={i} progress={progress} />
                  ))}
                </div>
              </div>
            )}
          </PinnedSection>
        </div>
      )}

      {/* Mobile: simple vertical list */}
      <div className="container mx-auto px-6">
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.05} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-mono font-700 text-[14px] shrink-0"
                  style={{ background: `${step.color}18`, border: `2px solid ${step.color}`, color: step.color }}
                >
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: "#1E2D4A", minHeight: "40px" }} />
                )}
              </div>
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
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[14px] font-body font-500"
            style={{ color: "#00D4AA" }}
          >
            Start with a Free Audit <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
