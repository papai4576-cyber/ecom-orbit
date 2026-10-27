export interface Industry {
  slug: string;
  /** One short line for heroes and tiles (heroSubheadline is kept for reference/SEO copy). */
  tagline: string;
  /** The headline number, split from `benchmark` for display. */
  stat: { value: string; label: string };
  name: string;
  eyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  whatWeHandle: string[];
  benchmark: string;
  relatedCaseStudySlugs: string[];
  seoTitle: string;
  seoDescription: string;
}

export const industries: Industry[] = [
  {
    slug: "fashion-apparel",
    tagline: "Win on returns, not just traffic.",
    stat: { value: "3–5X", label: "target ROAS for fashion campaigns" },
    name: "Fashion & Apparel",
    eyebrow: "25% OF INDIA'S D2C MARKET",
    heroHeadline: "Fashion's Real Problem Isn't Traffic. It's Returns.",
    heroSubheadline:
      "India's largest D2C category at 25% market share — and the one where 28–35% of orders come back. We build for conversion and return-rate reduction together, not conversion alone.",
    whatWeHandle: [
      "Return-rate reduction toward <20%",
      "Trend-cycle-aware creative testing",
      "Size-guide optimization",
      "Festive-season (Oct–Dec) scaling",
      "Fashion-specific marketplace positioning (Myntra, Flipkart)",
    ],
    benchmark: "3–5X target ROAS for fashion campaigns",
    relatedCaseStudySlugs: ["jaipur-ethnicwear-brand"],
    seoTitle: "Fashion & Apparel Ecommerce Agency India | Ecom Orbit",
    seoDescription:
      "Ecommerce growth for Indian fashion brands — return-rate reduction, trend-aware creative & festive-season scaling.",
  },
  {
    slug: "beauty-personal-care",
    tagline: "Creative and retention drive the margin.",
    stat: { value: "4–6X", label: "target ROAS for beauty campaigns" },
    name: "Beauty & Personal Care",
    eyebrow: "24.9% CAGR, 60–80% GROSS MARGINS",
    heroHeadline: "60–80% Margins Mean Nothing If Your UGC Doesn't Convert.",
    heroSubheadline:
      "The fastest-growing D2C segment at 24.9% CAGR runs on creative quality and subscription retention — not just ad spend.",
    whatWeHandle: [
      "UGC and micro-influencer strategy",
      "Subscription funnel design",
      "Nykaa listing optimization",
      "Zepto/Blinkit in-app placement",
      "Repeat-purchase and AOV growth",
    ],
    benchmark: "4–6X target ROAS for beauty campaigns",
    relatedCaseStudySlugs: ["mumbai-skincare-brand"],
    seoTitle: "Beauty & Personal Care Ecommerce Agency India | Ecom Orbit",
    seoDescription:
      "UGC strategy, subscription funnels & marketplace growth for Indian beauty & personal care brands.",
  },
  {
    slug: "food-fmcg",
    tagline: "Quick commerce first, repeat purchase always.",
    stat: { value: "2.5–4X", label: "target ROAS for food and FMCG campaigns" },
    name: "Food & FMCG",
    eyebrow: "$6–7B QUICK COMMERCE GMV",
    heroHeadline: "Quick Commerce Isn't a Channel Here. It's the Business.",
    heroSubheadline:
      "Dark store replenishment, FSSAI-aware listing, and subscription models built for a category where repeat purchase frequency decides everything.",
    whatWeHandle: [
      "Dark store replenishment management",
      "FSSAI compliance awareness",
      "Subscription model design",
      "High-frequency repeat-purchase optimization",
      "Quick commerce category strategy",
    ],
    benchmark: "2.5–4X target ROAS for food/FMCG campaigns",
    relatedCaseStudySlugs: ["pune-healthy-snacks-brand", "mumbai-protein-snack-brand"],
    seoTitle: "Food & FMCG Ecommerce Agency India | Ecom Orbit",
    seoDescription:
      "Quick commerce & ecommerce growth for Indian food & FMCG brands — dark store replenishment to subscription models.",
  },
  {
    slug: "offline-to-online",
    tagline: "From counter to every channel in 30 days.",
    stat: { value: "30 days", label: "from zero online presence to a live, selling store" },
    name: "Offline → Online",
    eyebrow: "13M+ KIRANAS, ZERO DIGITAL SHELF",
    heroHeadline: "You Already Have Customers. You Just Don't Have a Digital Shelf.",
    heroSubheadline:
      "13M+ Indian kiranas and offline retailers have proven demand and zero online infrastructure. We build the bridge — WhatsApp catalog to live store to marketplace to quick commerce shelf — in 30 days.",
    whatWeHandle: [
      "Full Shopify setup from scratch",
      "Product photography",
      "First marketplace listing",
      "Instagram/Meta ads for a brand with zero digital presence",
      "30-day go-live timeline",
    ],
    benchmark: "30-day timeline from zero online presence to live, selling store",
    relatedCaseStudySlugs: ["lucknow-chikankari-boutique"],
    seoTitle: "Offline to Online Ecommerce Agency India | Ecom Orbit",
    seoDescription:
      "Take your offline retail business online in 30 days — Shopify, marketplaces & quick commerce for traditional Indian retailers.",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
