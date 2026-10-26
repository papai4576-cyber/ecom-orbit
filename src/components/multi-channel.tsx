"use client";

import Link from "next/link";
import { ShoppingBag, Globe, Zap } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const channels = [
  {
    icon: ShoppingBag,
    category: "Marketplaces",
    platforms: ["Amazon India", "Flipkart", "Meesho", "Myntra", "Nykaa"],
    reach: "590M+ shoppers",
    desc: "The largest buyer pool in India. High intent, high competition. Win with listing SEO + PPC.",
  },
  {
    icon: Globe,
    category: "D2C Website",
    platforms: ["Shopify", "WooCommerce", "Meta Ads", "Google Ads", "SEO"],
    reach: "Own your customer",
    desc: "Zero commission. Full data ownership. 3–5X higher LTV when retention is built right.",
  },
  {
    icon: Zap,
    category: "Quick Commerce",
    platforms: ["Blinkit", "Zepto", "Swiggy Instamart"],
    reach: "₹4,000Cr ad market",
    desc: "India's fastest-growing channel. 10-minute delivery. ₹240 avg order. Impulse-first buying.",
  },
];

export function MultiChannel() {
  return (
    <section className="section tone-light">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The Problem With One-Channel Thinking</span>
          <h2 className="h2">
            Where do Indian consumers <span className="accent-text">actually buy?</span>
          </h2>
          <p className="lead">
            Most agencies answer with &ldquo;Shopify + Meta ads.&rdquo; That&apos;s a fifth of the picture. Indian
            ecommerce is three separate battlegrounds — marketplaces, your own site, and quick commerce — and right
            now you&apos;re probably fighting in one of them while your competitor holds all three.
          </p>
        </Reveal>

        <StaggerGroup className="grid gap-4 md:grid-cols-3">
          {channels.map((ch) => (
            <StaggerItem key={ch.category}>
              <div className="card flex h-full flex-col gap-6">
                <div className="flex items-center justify-between gap-3">
                  <ch.icon size={28} strokeWidth={1.5} />
                  <span className="mono text-[12px]" style={{ color: "var(--link)" }}>
                    {ch.reach}
                  </span>
                </div>
                <div>
                  <h3 className="h4 mb-2">{ch.category}</h3>
                  <p className="small">{ch.desc}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {ch.platforms.map((p) => (
                    <span key={p} className="pill-tag">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mx-auto mt-16 max-w-3xl text-center">
          <p className="h3">
            &ldquo;You don&apos;t have to pick which battleground to fight in.{" "}
            <span className="accent-text">Ecom Orbit shows up in all three</span> — under your brand&apos;s name, not
            five different ones.&rdquo;
          </p>
          <div className="mt-8">
            <Link href="/services" className="link-more">
              See how multi-channel works
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
