"use client";

import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const industries = [
  {
    name: "Fashion & Apparel",
    highlight: "25% of India D2C market",
    body: "India's largest D2C category. We understand return rate management (28–35% industry average), trend cycles, size-guide optimization, and festive-season scaling.",
    metrics: [
      { label: "Industry return rate", value: "28–35%" },
      { label: "Our target return rate", value: "<20%" },
      { label: "Festive season uplift", value: "3–5X" },
    ],
    href: "/industries/fashion-apparel",
  },
  {
    name: "Beauty & Personal Care",
    highlight: "24.9% CAGR",
    body: "The fastest-growing D2C segment with 60–80% gross margins. UGC strategy, subscription funnels, Nykaa optimization, and Zepto/Blinkit in-app placement.",
    metrics: [
      { label: "Gross margins", value: "60–80%" },
      { label: "Repeat purchase target", value: "28%+" },
      { label: "Avg ROAS", value: "4–6X" },
    ],
    href: "/industries/beauty-personal-care",
  },
  {
    name: "Food & FMCG",
    highlight: "Quick commerce-first",
    body: "Quick commerce is your fastest growth channel. We handle dark store replenishment, FSSAI compliance, subscription models, and high-frequency repeat purchase optimization.",
    metrics: [
      { label: "QC suitability", value: "5 / 5" },
      { label: "Subscription revenue", value: "20–40%" },
      { label: "Repeat purchase rate", value: "48%+" },
    ],
    href: "/industries/food-fmcg",
  },
  {
    name: "Offline → Online",
    highlight: "13M+ kiranas in India",
    body: "Your products have proven demand. You just need digital infrastructure. We take you from WhatsApp catalog to Shopify store to Amazon listing to Blinkit shelf — in 30 days.",
    metrics: [
      { label: "Launch timeline", value: "30 days" },
      { label: "Channel reach", value: "All 7" },
      { label: "Geographic reach", value: "Pan-India" },
    ],
    href: "/industries/offline-to-online",
  },
];

export function IndustryVerticals() {
  return (
    <section className="section tone-light">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">We Go Deep on Three Categories</span>
          <h2 className="h2">
            Not a generalist. <span className="accent-text">A specialist in your world.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="grid gap-4 md:grid-cols-2">
          {industries.map((ind) => (
            <StaggerItem key={ind.name}>
              <Link href={ind.href} className="card flex h-full flex-col gap-6">
                <div>
                  <span className="mono text-[12px]" style={{ color: "var(--link)" }}>
                    {ind.highlight}
                  </span>
                  <h3 className="h3 mt-2">{ind.name}</h3>
                </div>

                <p className="small">{ind.body}</p>

                <dl className="grid grid-cols-3 gap-4 border-t pt-5" style={{ borderColor: "var(--rule)" }}>
                  {ind.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col gap-1">
                      <dt className="caption order-2 leading-tight">{m.label}</dt>
                      <dd className="stat-value order-1 text-[20px]">{m.value}</dd>
                    </div>
                  ))}
                </dl>

                <span className="link-more mt-auto !text-[15px]">Explore {ind.name}</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
