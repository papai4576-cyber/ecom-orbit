export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  bodyOutline: string[];
  ctaLabel: string;
  ctaHref: string;
  seoTitle: string;
  seoDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cod-rto-confirmation-step",
    title: "COD Isn't the RTO Problem. Your Confirmation Step Is.",
    category: "Logistics & Operations",
    excerpt:
      "25–30% of Indian COD orders come back. Most brands blame COD itself. The actual fix is a lot cheaper than switching to prepaid-only.",
    bodyOutline: [
      "25–30% of COD orders in India result in RTO (returns to origin) — a number that scares a lot of founders into going prepaid-only.",
      "Banning COD outright usually kills conversion in categories where Indian buyers still expect it — the fix isn't removing the payment method, it's adding friction at the right point.",
      "A WhatsApp or IVR confirmation step before dispatch filters out low-intent and fraudulent orders without adding checkout friction, and typically reduces RTO by 15–25%.",
      "Combined with SKU-level return-reason tracking, this turns RTO from a mystery cost into a manageable line item.",
    ],
    ctaLabel: "See how we handle logistics & RTO →",
    ctaHref: "/services/logistics-operations",
    seoTitle: "COD & RTO in India: The Confirmation Step Fix | Ecom Orbit Blog",
    seoDescription:
      "Why banning COD isn't the fix for India's 25-30% RTO rate — and how a WhatsApp/IVR confirmation step cuts it by 15-25%.",
  },
  {
    slug: "blinkit-listing-fee-breakdown",
    title: "What ₹25,000 a SKU Actually Buys You on Blinkit",
    category: "Quick Commerce",
    excerpt:
      "Blinkit's listing fee is per SKU, per state — and the platform still takes 35–50% after that. Here's the unit-economics math before you commit.",
    bodyOutline: [
      "Blinkit charges roughly ₹25,000 per SKU, per state, just to get listed — before a single unit sells.",
      "On top of that, the platform's take rate runs 35–50%, meaning your margin has to absorb both the upfront fee and the ongoing cut.",
      "Category fit matters enormously here: food and beauty brands tend to clear this math comfortably; fashion rarely does.",
      "This is exactly why a Quick Commerce Viability Assessment — modeling your specific unit economics against these numbers — should happen before onboarding, not after.",
    ],
    ctaLabel: "Get your free QC Viability Assessment →",
    ctaHref: "/services/quick-commerce",
    seoTitle: "Blinkit Listing Fees Explained: ₹25,000/SKU Breakdown | Ecom Orbit Blog",
    seoDescription:
      "Blinkit's real cost structure — ₹25,000/SKU/state listing fee plus 35-50% take rate — and how to model it before you commit.",
  },
  {
    slug: "amazon-acos-target-explained",
    title: "Why Your Amazon ACOS Target Should Be Under 18%, Not 'Whatever It Takes'",
    category: "Marketplace Management",
    excerpt:
      "Most sellers don't have an ACOS target — they just watch sales and hope. Here's what separates a listing that's profitable from one that's just busy.",
    bodyOutline: [
      "Total Amazon seller costs already run 25–35% of the selling price — fees, fulfillment, and platform charges before ad spend enters the picture.",
      "Watching sales volume without an ACOS ceiling means you can be 'busy' on Amazon while losing money on every order.",
      "A <18% ACOS target on Sponsored Products keeps ad spend proportionate to what the listing can actually absorb.",
      "Brand Registry and A+ Content aren't just defensive moves — better conversion rate on the listing itself is what makes a lower ACOS achievable in the first place.",
    ],
    ctaLabel: "Get a free marketplace audit →",
    ctaHref: "/services/marketplace-management",
    seoTitle: "Amazon ACOS Target: Why <18% Matters | Ecom Orbit Blog",
    seoDescription:
      "Amazon sellers already pay 25-35% in total costs — here's why a sub-18% ACOS target is the number that decides if you're profitable.",
  },
  {
    slug: "multi-channel-math",
    title: "The Multi-Channel Math: Why One Marketplace Isn't a Strategy",
    category: "Strategy",
    excerpt:
      "Meesho alone reaches 213M+ users, with 87.8% outside the top 8 cities. If you're only on Amazon, you're not competing for most of India.",
    bodyOutline: [
      "Meesho has 213M+ annual transacting users, and 87.8% of them are outside the top 8 cities — a market Amazon-only sellers largely don't touch.",
      "Indian ecommerce splits into three real battlegrounds: marketplaces, your own D2C site, and quick commerce — each with a different buyer intent and unit economics.",
      "Brands that win rarely win on one channel — they run all three as one coordinated system instead of three disconnected side projects.",
      "The practical failure mode isn't picking the wrong channel — it's running each channel with a different team, a different strategy, and no shared reporting.",
    ],
    ctaLabel: "Get your free ecommerce audit →",
    ctaHref: "/free-audit",
    seoTitle: "Multi-Channel Ecommerce Strategy in India | Ecom Orbit Blog",
    seoDescription:
      "Why one marketplace isn't a strategy — the case for running D2C, marketplaces & quick commerce as one system.",
  },
  {
    slug: "fashion-return-rate-size-guide",
    title: "Return Rates Above 28%? Your Size Guide Is Probably the Reason.",
    category: "Fashion & Apparel",
    excerpt:
      "Fashion returns run 28–35% industry-wide. A chunk of that is fit — not product quality — and it's fixable on the product page, not in the warehouse.",
    bodyOutline: [
      "The Indian fashion industry averages 28–35% return rates — among the highest of any D2C category.",
      "A large share of these are fit-driven returns, not quality complaints — meaning the fix lives on the product page, not in manufacturing.",
      "Detailed size guides and better product photography (multiple angles, on-model shots at different body types) directly reduce fit-guessing.",
      "Ecom Orbit targets pushing fashion clients toward <20% return rates by combining size-guide fixes with the logistics-side RTO work.",
    ],
    ctaLabel: "See our fashion & apparel work →",
    ctaHref: "/industries/fashion-apparel",
    seoTitle: "Fashion Return Rates & Size Guides in India | Ecom Orbit Blog",
    seoDescription:
      "Indian fashion returns run 28-35% — why fit-driven returns are fixable on the product page, not the warehouse.",
  },
  {
    slug: "meesho-total-cost-breakdown",
    title: "The Real Cost of Selling on Meesho (It's Not the Commission)",
    category: "Marketplace Management",
    excerpt:
      "Meesho's commission looks cheap until you add shipping, returns, and ads — the real number runs 10–15% of your product price.",
    bodyOutline: [
      "Meesho's headline commission looks attractive, but the full cost — shipping, returns, and ads combined — runs 10–15% of your product price.",
      "The tradeoff is real reach: 213M+ users with 87.8% outside the top 8 cities, a Tier 2/3 audience most other marketplaces barely touch.",
      "Categories with low return rates and low shipping weight benefit most from this math; high-return categories need to model it carefully first.",
      "The decision isn't 'is Meesho worth it' in the abstract — it's whether your specific product's return rate and shipping cost clear the 10-15% bar.",
    ],
    ctaLabel: "Get a free marketplace audit →",
    ctaHref: "/services/marketplace-management",
    seoTitle: "Meesho Total Cost Breakdown for Sellers | Ecom Orbit Blog",
    seoDescription:
      "Meesho's real cost isn't the commission — shipping, returns & ads push the total to 10-15% of product price.",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
