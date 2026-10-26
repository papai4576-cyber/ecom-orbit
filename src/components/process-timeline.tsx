"use client";

import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const steps = [
  {
    num: "01",
    title: "Free Ecommerce Audit",
    desc: "We tear down your store, ad accounts, marketplace listings, and logistics setup. No cost, no commitment — just specific, numbered recommendations you could act on with or without us.",
    duration: "Day 1–3",
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    desc: "We pick the right channels for your category — not all seven for everyone — set target metrics, and map a 90-day plan against them.",
    duration: "Day 4–7",
  },
  {
    num: "03",
    title: "Build & Launch",
    desc: "Store design, marketplace onboarding, quick commerce listing, payment gateway, shipping integration. Everything goes live in weeks, not quarters.",
    duration: "Week 2–4",
  },
  {
    num: "04",
    title: "Grow & Optimize",
    desc: "Campaigns launch. SEO activates. Weekly optimization cycles begin. You'll see movement inside 30 days — not a quarterly report that says 'trust the process.'",
    duration: "Month 2+",
  },
  {
    num: "05",
    title: "Scale & Compound",
    desc: "As revenue grows, we add channels, push CAC down, build retention loops, and move the conversation from lakhs to crores.",
    duration: "Month 4+",
  },
];

export function ProcessTimeline() {
  return (
    <section className="section tone-white">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">How It Works</span>
          <h2 className="h2">
            From audit to <span className="accent-text">₹1Cr/month.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-5" staggerDelay={0.07}>
          {steps.map((step) => (
            <StaggerItem key={step.num}>
              <div className="flex h-full flex-col gap-3 border-t-2 pt-5" style={{ borderColor: "var(--fg)" }}>
                <div className="flex items-baseline justify-between">
                  <span className="stat-value text-[28px]" style={{ color: "var(--link)" }}>
                    {step.num}
                  </span>
                  <span className="caption">{step.duration}</span>
                </div>
                <h3 className="h4">{step.title}</h3>
                <p className="small">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-14 flex justify-center">
          <Link href="/contact" className="link-more">
            Start with a free audit
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
