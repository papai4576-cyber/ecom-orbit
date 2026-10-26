"use client";

import Link from "next/link";
import { Store, TrendingUp, Search, ShoppingCart, Zap, Package, Layers } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const services = [
  {
    icon: Store,
    title: "Shopify & WooCommerce Store Setup",
    desc: "Conversion-optimized, mobile-first stores built for India. GST-ready, Razorpay-integrated, and designed to load in under 2 seconds.",
    tag: "2–4 week launch",
    href: "/services/store-setup",
    metrics: ["90+ PageSpeed", "2.5–4% CVR", "<2s load"],
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing & Ads",
    desc: "ROI-driven campaigns across Meta, Google, and marketplace ads. 15–20 creatives tested monthly. Every rupee accountable.",
    tag: "3.5X avg ROAS",
    href: "/services/performance-marketing",
    metrics: ["Meta + Google", "15–20 creatives/mo", "ROAS reporting"],
  },
  {
    icon: Search,
    title: "SEO & Content Marketing",
    desc: "Organic traffic that compounds. Product page SEO, technical fixes, and content that brings customers at zero marginal cost.",
    tag: "Compound growth",
    href: "/services/seo-content",
    metrics: ["Technical SEO", "Product page SEO", "Content strategy"],
  },
  {
    icon: ShoppingCart,
    title: "Marketplace Management",
    desc: "Listing SEO, A+ Content, PPC, inventory sync, seller health. We manage your marketplace accounts like they're our own brand.",
    tag: "<18% ACOS",
    href: "/services/marketplace-management",
    metrics: ["Amazon + Flipkart", "Meesho + Myntra", "A+ Content"],
  },
  {
    icon: Zap,
    title: "Quick Commerce Management",
    desc: "Get into dark stores. Stay in stock. Win the in-app ad auction. Onboarding, replenishment, and in-app advertising — handled.",
    tag: "Blinkit · Zepto · Instamart",
    href: "/services/quick-commerce",
    metrics: ["Dark store setup", "Replenishment", "In-app ads"],
  },
  {
    icon: Package,
    title: "Inventory & Logistics Operations",
    desc: "Shiprocket setup, COD optimization, return management. We fix the ops layer most agencies pretend doesn't exist.",
    tag: "RTO reduction",
    href: "/services/logistics-operations",
    metrics: ["Shiprocket", "COD optimization", "Return mgmt"],
  },
  {
    icon: Layers,
    title: "End-to-End Management",
    desc: "Your website + marketplaces + quick commerce + logistics, run by the same team — so nothing falls into the gap between two vendors' scope.",
    tag: "Most popular",
    href: "/services/end-to-end",
    metrics: ["All 7 channels", "1 account manager", "1 monthly report"],
    featured: true,
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="section tone-white">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Our Services</span>
          <h2 className="h2">
            Everything your ecommerce brand needs. <span className="accent-text">Every channel.</span> One team.
          </h2>
        </Reveal>

        <StaggerGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.06}>
          {services.map((service) => (
            <StaggerItem key={service.title} className={service.featured ? "md:col-span-2 lg:col-span-1" : undefined}>
              <Link href={service.href} className="card flex h-full flex-col gap-5">
                <div className="flex items-start justify-between gap-3">
                  <service.icon size={28} strokeWidth={1.5} />
                  <span className="mono text-[12px] text-right" style={{ color: "var(--link)" }}>
                    {service.tag}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="h4 mb-2">{service.title}</h3>
                  <p className="small">{service.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.metrics.map((m) => (
                    <span key={m} className="pill-tag">
                      {m}
                    </span>
                  ))}
                </div>

                <span className="link-more !text-[15px]">Learn more</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
