"use client";

import Link from "next/link";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const tiers = [
  {
    name: "Starter",
    price: "₹49,999",
    period: "one-time",
    features: ["Shopify store setup", "1 marketplace onboarding", "90+ PageSpeed, GST-ready", "30-day post-launch support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹99,999",
    period: "/month",
    features: ["Everything in Starter", "2 marketplaces managed", "Meta + Google ads, SEO", "Monthly revenue report"],
    cta: "Start Here",
    popular: true,
  },
  {
    name: "Scale",
    price: "₹1,99,999",
    period: "/month",
    features: ["Everything in Growth", "All 7 channels", "Quick commerce + logistics", "Weekly strategy calls", "24-hour priority support"],
    cta: "Let's Build Your Orbit",
    popular: false,
  },
];

/** Three open columns split by hairlines (no cards): the plan you'd pick is lifted on glass. */
export function Pricing() {
  return (
    <section className="section tone-light">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="h2">
            Pricing, in the open. <span className="text-[var(--fg3)]">No custom-quote games.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="grid items-stretch gap-4 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10" staggerDelay={0.08}>
          {tiers.map((tier) => (
            <StaggerItem key={tier.name} className="md:[&:first-child>div]:pl-0 md:[&:last-child>div]:pr-0">
              <div
                className={`relative flex h-full flex-col gap-8 rounded-[20px] p-6 md:rounded-none md:px-8 md:py-4 ${
                  tier.popular ? "glass md:rounded-[20px] md:py-8" : ""
                }`}
              >
                {tier.popular && <span className="absolute inset-x-8 top-0 h-px bg-[var(--accent)]" aria-hidden="true" />}
                <div className="flex flex-col gap-2">
                  <span className="mono text-[13px] text-[var(--fg2)]">{tier.name}</span>
                  <div className="flex items-end gap-2">
                    <span className="stat-value text-[clamp(34px,4vw,44px)]">{tier.price}</span>
                    <span className="caption pb-1">{tier.period}</span>
                  </div>
                </div>

                <ul className="flex flex-1 flex-col gap-3">
                  {tier.features.map((f) => (
                    <li key={f} className="small border-b pb-3" style={{ color: "var(--fg)", borderColor: "var(--rule)" }}>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className={tier.popular ? "btn-primary" : "btn-secondary"}>
                  {tier.cta}
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <p className="caption mt-10 text-center">GST invoicing. No hidden charges. No lock-ins.</p>
        </Reveal>
      </div>
    </section>
  );
}
