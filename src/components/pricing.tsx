"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const tiers = [
  {
    name: "Starter",
    tagline: "For brands just launching",
    price: "₹49,999",
    period: "one-time",
    features: [
      "Complete Shopify store setup",
      "1 marketplace onboarding (Amazon or Flipkart)",
      "Mobile-first, GST-ready, Razorpay integrated",
      "90+ PageSpeed guarantee",
      "30-day post-launch support",
      "Free ecommerce audit included",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    tagline: "For brands scaling revenue",
    price: "₹99,999",
    period: "/month",
    features: [
      "Everything in Starter",
      "2 marketplace accounts managed",
      "Meta + Google performance marketing",
      "SEO & content (4 posts/month)",
      "Monthly revenue report",
      "Dedicated account manager",
    ],
    cta: "Most Popular — Start Here",
    popular: true,
  },
  {
    name: "Scale",
    tagline: "Full ecommerce orchestration",
    price: "₹1,99,999",
    period: "/month",
    features: [
      "Everything in Growth",
      "All 7 channels managed",
      "Quick commerce onboarding + management",
      "Logistics & COD optimization",
      "Weekly strategy calls",
      "Real-time dashboard access",
      "Priority support (24-hour response)",
    ],
    cta: "Let's Build Your Orbit",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="section tone-white">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Transparent Pricing in an Industry That Hides It</span>
          <h2 className="h2">
            No &ldquo;custom quote&rdquo; games. <span className="accent-text">Know what you&apos;re getting.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mb-10 grid items-stretch gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              {/* The featured tier flips to the dark tone: contrast does the emphasis, not a border or glow */}
              <div className={`card flex h-full flex-col gap-6 ${tier.popular ? "tone-dark" : ""}`}>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h3 className="h3">{tier.name}</h3>
                    {tier.popular && (
                      <span className="caption" style={{ color: "var(--link)" }}>
                        Most popular
                      </span>
                    )}
                  </div>
                  <p className="small">{tier.tagline}</p>
                </div>

                <div className="flex items-end gap-2">
                  <span className="stat-value text-[clamp(32px,4vw,40px)]">{tier.price}</span>
                  <span className="caption pb-1">{tier.period}</span>
                </div>

                <ul className="flex flex-1 flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={16} className="mt-1 shrink-0" style={{ color: "var(--link)" }} />
                      <span className="small" style={{ color: "var(--fg)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={tier.popular ? "btn-primary" : "btn-secondary"}
                >
                  {tier.cta}
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <p className="caption text-center">
            All plans include GST invoicing, no hidden charges, and month-to-month flexibility — no 6-month lock-ins.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
