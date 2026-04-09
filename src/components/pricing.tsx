"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    tagline: "For brands just launching",
    price: "₹49,999",
    period: "one-time",
    color: "#8B9CC8",
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
    color: "#FF6B2B",
    features: [
      "Everything in Starter",
      "2 marketplace accounts managed",
      "Meta + Google performance marketing",
      "SEO & content (4 posts/month)",
      "Monthly revenue report",
      "Dedicated account manager",
      "WhatsApp-first communication",
    ],
    cta: "Most Popular — Start Here",
    popular: true,
  },
  {
    name: "Scale",
    tagline: "Full ecommerce orchestration",
    price: "₹1,99,999",
    period: "/month",
    color: "#00D4AA",
    features: [
      "Everything in Growth",
      "All 7 channels managed",
      "Quick commerce onboarding + management",
      "Logistics & COD optimization",
      "Weekly strategy calls",
      "Real-time dashboard access",
      "Priority support (4-hour response)",
    ],
    cta: "Let's Build Your Orbit",
    popular: false,
  },
];

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
      style={{ background: "#111827" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="eyebrow reveal">Transparent Pricing in an Industry That Hides It</span>
          <h2
            className="font-display font-bold leading-[1.1] tracking-tight reveal"
            style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
          >
            No &ldquo;Custom Quote&rdquo; Games.
            <br />
            <span style={{ color: "#FF6B2B" }}>Know What You&apos;re Getting.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`reveal flex flex-col rounded-card overflow-hidden relative`}
              style={{
                background: tier.popular ? "#0A0E1A" : "#0A0E1A",
                border: `1px solid ${tier.popular ? "#FF6B2B44" : "#1E2D4A"}`,
                boxShadow: tier.popular ? "0 0 48px rgba(255,107,43,0.12)" : "none",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {tier.popular && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: "linear-gradient(90deg, transparent, #FF6B2B, transparent)" }}
                />
              )}

              {tier.popular && (
                <div className="absolute top-4 right-4">
                  <span
                    className="text-[10px] font-mono font-700 px-2.5 py-1 rounded-pill uppercase tracking-wider"
                    style={{ background: "#FF6B2B18", color: "#FF6B2B", border: "1px solid #FF6B2B33" }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col gap-5 flex-1">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display font-700 text-[22px]" style={{ color: "#F0F4FF" }}>
                    {tier.name}
                  </h3>
                  <p className="text-[13px]" style={{ color: "#8B9CC8" }}>
                    {tier.tagline}
                  </p>
                </div>

                <div className="flex items-end gap-1">
                  <span className="font-mono font-700 text-[36px] leading-none" style={{ color: tier.color }}>
                    {tier.price}
                  </span>
                  <span className="text-[13px] pb-1" style={{ color: "#4A5A7A" }}>
                    {tier.period}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5 flex-1">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                        style={{ background: `${tier.color}15`, color: tier.color }}
                      >
                        <Check size={9} />
                      </div>
                      <span className="text-[13px] leading-relaxed" style={{ color: "#8B9CC8" }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={tier.popular ? "btn-primary justify-center text-center mt-4" : "btn-secondary justify-center text-center mt-4"}
                  style={tier.popular ? undefined : { borderColor: `${tier.color}44`, color: tier.color }}
                >
                  {tier.cta} {tier.popular && <ArrowRight size={16} />}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] reveal" style={{ color: "#4A5A7A" }}>
          All plans include GST invoicing, no hidden charges, and month-to-month flexibility — no 6-month lock-ins.
        </p>
      </div>
    </section>
  );
}
