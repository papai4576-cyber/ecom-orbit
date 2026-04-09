"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Store, TrendingUp, Search, ShoppingCart, Zap, Package, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Store size={24} />,
    title: "Shopify & WooCommerce Store Setup",
    desc: "Conversion-optimized, mobile-first stores built for India. GST-ready, Razorpay-integrated, and designed to load in under 2 seconds.",
    tag: "2–4 week launch",
    color: "#FF6B2B",
    href: "/services/store-setup",
    metrics: ["90+ PageSpeed", "2.5–4% CVR", "<2s load"],
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Performance Marketing & Ads",
    desc: "ROI-driven campaigns across Meta, Google, and marketplace ads. 15–20 creatives tested monthly. Every rupee accountable.",
    tag: "3.5X avg ROAS",
    color: "#FF6B2B",
    href: "/services/performance-marketing",
    metrics: ["Meta + Google", "15–20 creatives/mo", "ROAS reporting"],
  },
  {
    icon: <Search size={24} />,
    title: "SEO & Content Marketing",
    desc: "Organic traffic that compounds. Product page SEO, technical fixes, and content that brings customers at zero marginal cost.",
    tag: "Compound growth",
    color: "#00D4AA",
    href: "/services/seo-content",
    metrics: ["Technical SEO", "Product page SEO", "Content strategy"],
  },
  {
    icon: <ShoppingCart size={24} />,
    title: "Marketplace Management",
    desc: "Listing SEO, A+ Content, PPC, inventory sync, seller health. We manage your marketplace accounts like they're our own brand.",
    tag: "<18% ACOS",
    color: "#00D4AA",
    href: "/services/marketplace-management",
    metrics: ["Amazon + Flipkart", "Meesho + Myntra", "A+ Content"],
  },
  {
    icon: <Zap size={24} />,
    title: "Quick Commerce Management",
    desc: "Get into dark stores. Stay in stock. Win the in-app ad auction. Onboarding, replenishment, and in-app advertising — handled.",
    tag: "Blinkit · Zepto · Instamart",
    color: "#818CF8",
    href: "/services/quick-commerce",
    metrics: ["Dark store setup", "Replenishment", "In-app ads"],
  },
  {
    icon: <Package size={24} />,
    title: "Inventory & Logistics Operations",
    desc: "Shiprocket setup, COD optimization, return management. We fix the ops layer most agencies pretend doesn't exist.",
    tag: "RTO reduction",
    color: "#818CF8",
    href: "/services/logistics-operations",
    metrics: ["Shiprocket", "COD optimization", "Return mgmt"],
  },
  {
    icon: <Layers size={24} />,
    title: "End-to-End Management",
    desc: "D2C website + marketplaces + quick commerce + logistics — all managed by one team. One WhatsApp thread. One monthly report.",
    tag: "Most popular",
    color: "#FF6B2B",
    href: "/services/end-to-end",
    metrics: ["All 7 channels", "1 account manager", "1 monthly report"],
    featured: true,
  },
];

export function ServicesGrid() {
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
      style={{ background: "#0A0E1A" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="eyebrow reveal">Our Services</span>
          <h2
            className="font-display font-bold leading-[1.1] tracking-tight reveal"
            style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
          >
            Everything Your Ecommerce Brand Needs.
            <br />
            <span style={{ color: "#FF6B2B" }}>Every Channel.</span> One Team.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link
              key={service.title}
              href={service.href}
              className={`card reveal group flex flex-col gap-5 no-underline ${service.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{
                transitionDelay: `${i * 60}ms`,
                border: service.featured ? "1px solid rgba(255,107,43,0.3)" : undefined,
                background: service.featured ? "linear-gradient(135deg, #111827 0%, #1a1f2e 100%)" : undefined,
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${service.color}15`, color: service.color }}
                >
                  {service.icon}
                </div>
                <span
                  className="text-[10px] font-mono font-500 px-2.5 py-1 rounded-pill shrink-0"
                  style={{
                    background: `${service.color}12`,
                    color: service.color,
                    border: `1px solid ${service.color}30`,
                  }}
                >
                  {service.tag}
                </span>
              </div>

              <div className="flex-1">
                <h3
                  className="font-display font-600 text-[18px] mb-2 leading-snug"
                  style={{ color: "#F0F4FF" }}
                >
                  {service.title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>
                  {service.desc}
                </p>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-1.5">
                {service.metrics.map((m) => (
                  <span
                    key={m}
                    className="text-[11px] font-body px-2.5 py-1 rounded-lg"
                    style={{
                      background: "rgba(30,45,74,0.5)",
                      color: "#8B9CC8",
                      border: "1px solid rgba(30,45,74,0.8)",
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div
                className="flex items-center gap-1.5 text-[13px] font-body font-500 mt-1 transition-all duration-200 group-hover:gap-2.5"
                style={{ color: service.color }}
              >
                Learn more <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
