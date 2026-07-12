export interface CaseStudyMetric {
  label: string;
  before: string;
  after: string;
}

export interface CaseStudy {
  slug: string;
  industryTag: string;
  clientName: string;
  heroStat: string;
  heroStatLabel: string;
  challengeSummary: string;
  clientProfile: string;
  challenge: string;
  approach: string[];
  metrics: CaseStudyMetric[];
  keyTakeaway: string;
  seoTitle: string;
  seoDescription: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "jaipur-ethnicwear-brand",
    industryTag: "Fashion & Apparel",
    clientName: "Jaipur Ethnicwear Brand",
    heroStat: "8.9X",
    heroStatLabel: "Revenue Growth in 6 Months",
    challengeSummary:
      "A Jaipur ethnicwear label was stuck at ₹3.2L/month with a 0.7% conversion rate, a 32% return rate, and a PageSpeed score of 34 — a store too slow to convert the traffic it already had.",
    clientProfile:
      "A Jaipur-based ethnicwear D2C brand selling festive and occasion wear, running on an outdated Shopify theme with no mobile optimization and no return-management process.",
    challenge:
      "The store loaded in over 6 seconds on mobile, checkout abandoned at nearly 80%, and returns were eating a third of every order — with no system tracking why.",
    approach: [
      "Full Shopify redesign built mobile-first, cutting PageSpeed from 34 to 92",
      "Meta ads relaunched with trend-cycle-aware creative testing",
      "Technical + product-page SEO overhaul",
      "Shiprocket COD optimization with WhatsApp order confirmation",
      "WhatsApp + email retention flows for repeat festive-season buyers",
    ],
    metrics: [
      { label: "Monthly Revenue", before: "₹3.2L", after: "₹28.4L" },
      { label: "Conversion Rate", before: "0.7%", after: "2.4%" },
      { label: "Blended ROAS", before: "—", after: "3.8X" },
      { label: "Return Rate", before: "32%", after: "19%" },
      { label: "PageSpeed Score", before: "34", after: "92" },
      { label: "Email + WhatsApp Revenue Share", before: "0%", after: "22%" },
    ],
    keyTakeaway:
      "\"The store wasn't the marketing problem — it was the reason the marketing wasn't working. Fix the foundation first.\"",
    seoTitle: "Jaipur Ethnicwear Case Study — 8.9X Revenue Growth | Ecom Orbit",
    seoDescription:
      "How a Jaipur ethnicwear brand grew from ₹3.2L to ₹28.4L/month with a Shopify redesign, Meta ads, SEO & COD optimization.",
  },
  {
    slug: "mumbai-skincare-brand",
    industryTag: "Beauty & Personal Care",
    clientName: "Mumbai Skincare Brand",
    heroStat: "₹15.2L",
    heroStatLabel: "Monthly Revenue From Zero, 4 Months",
    challengeSummary:
      "A pre-launch Mumbai skincare brand went from ₹0 to ₹15.2L/month in 4 months with a 5.1X ROAS and 28% repeat purchase rate — built as a launch, not a rescue.",
    clientProfile:
      "A Mumbai-based skincare brand launching its first product line, with a formulated product but no digital storefront, no ad accounts, and no distribution.",
    challenge:
      "Launching from zero in a beauty category where UGC quality and subscription retention decide whether a brand survives past month three.",
    approach: [
      "Shopify build with subscription-first checkout architecture",
      "Meta UGC ad campaigns from day one, tested at volume",
      "Micro-influencer seeding program for organic social proof",
      "WhatsApp retention flows layered on top of email",
      "SEO foundation laid pre-launch, not bolted on after",
    ],
    metrics: [
      { label: "Monthly Revenue", before: "₹0", after: "₹15.2L" },
      { label: "Conversion Rate", before: "—", after: "3.6%" },
      { label: "Blended ROAS", before: "—", after: "5.1X" },
      { label: "Repeat Purchase Rate", before: "0%", after: "28%" },
      { label: "Average Order Value", before: "₹890 (projected)", after: "₹1,340" },
      { label: "Email + WhatsApp Revenue Share", before: "0%", after: "38%" },
    ],
    keyTakeaway:
      "\"Beauty brands don't win on ad spend alone. They win on UGC quality and whether the second purchase happens.\"",
    seoTitle: "Mumbai Skincare Brand Case Study — ₹15.2L/Month Launch | Ecom Orbit",
    seoDescription:
      "How a pre-launch Mumbai skincare brand hit ₹15.2L/month and 5.1X ROAS in 4 months with UGC ads, subscriptions & SEO.",
  },
  {
    slug: "pune-healthy-snacks-brand",
    industryTag: "Food & FMCG",
    clientName: "Pune Healthy Snacks Brand",
    heroStat: "66%",
    heroStatLabel: "Revenue Shifted From Amazon-Only to D2C-Led",
    challengeSummary:
      "A Pune snacks brand doing ₹12L/month with 70% Amazon dependence rebuilt around D2C and subscriptions, reaching ₹22L/month with 66% from its own site.",
    clientProfile:
      "A Pune-based healthy snacks D2C brand that had grown almost entirely on Amazon, with a weak WooCommerce presence and no subscription offering.",
    challenge:
      "Being 70% dependent on a single marketplace with no subscription revenue and no control over customer data or repeat purchase economics.",
    approach: [
      "WooCommerce redesign with subscription-first product architecture",
      "Google Shopping campaigns to diversify acquisition beyond Amazon",
      "Product-page and technical SEO overhaul",
      "Shiprocket optimization to bring per-order shipping cost down",
      "Subscription funnel built around high-frequency repeat purchase",
    ],
    metrics: [
      { label: "Total Monthly Revenue", before: "₹12L", after: "₹22L" },
      { label: "D2C Revenue Share", before: "₹2L (17%)", after: "₹14.5L (66%)" },
      { label: "Subscription Revenue", before: "₹0", after: "₹4.8L" },
      { label: "Repeat Purchase Rate", before: "—", after: "48%" },
      { label: "Avg. Shipping Cost", before: "₹82", after: "₹58" },
    ],
    keyTakeaway:
      "\"Being big on one marketplace isn't a growth strategy — it's a single point of failure with good numbers.\"",
    seoTitle: "Pune Snacks Brand Case Study — 66% D2C Revenue Shift | Ecom Orbit",
    seoDescription:
      "How a Pune healthy snacks brand cut Amazon dependence and grew to ₹22L/month with a WooCommerce rebuild & subscriptions.",
  },
  {
    slug: "lucknow-chikankari-boutique",
    industryTag: "Offline → Online",
    clientName: "Lucknow Chikankari Boutique",
    heroStat: "₹8.2L",
    heroStatLabel: "Online Revenue in 90 Days, From Zero",
    challengeSummary:
      "A Lucknow chikankari boutique went from ₹0 online and 400 Instagram followers in one city to ₹8.2L online revenue and 86 cities in 90 days.",
    clientProfile:
      "A traditional Lucknow chikankari boutique with decades of offline reputation, a WhatsApp catalog, and zero digital storefront.",
    challenge:
      "Proven offline demand for a heritage craft product with no way for buyers outside Lucknow to discover or purchase it.",
    approach: [
      "Full Shopify setup built around the craft story, not a generic template",
      "Professional product photography for a category that sells on texture and detail",
      "Meta ads and Instagram Reels strategy from a near-zero social base",
      "Shiprocket integration for pan-India fulfillment",
    ],
    metrics: [
      { label: "Online Revenue", before: "₹0", after: "₹8.2L" },
      { label: "Orders", before: "0", after: "420+" },
      { label: "Instagram Followers", before: "400", after: "4,200+" },
      { label: "Cities Reached", before: "1", after: "86" },
      { label: "Conversion Rate", before: "—", after: "1.8%" },
      { label: "Average Order Value", before: "—", after: "₹1,950" },
    ],
    keyTakeaway:
      "\"The product was never the problem. The problem was that nobody outside Lucknow could find it.\"",
    seoTitle: "Lucknow Chikankari Case Study — ₹8.2L in 90 Days | Ecom Orbit",
    seoDescription:
      "How a Lucknow chikankari boutique went from offline-only to ₹8.2L online revenue across 86 cities in 90 days.",
  },
  {
    slug: "mumbai-protein-snack-brand",
    industryTag: "Quick Commerce",
    clientName: "Mumbai Protein Snack Brand",
    heroStat: "+67%",
    heroStatLabel: "Total Revenue After Quick Commerce Launch",
    challengeSummary:
      "A Mumbai protein snack brand had failed a 4-month Blinkit onboarding attempt before Ecom Orbit fast-tracked it live in 3 weeks, adding ₹4.8L in 60 days.",
    clientProfile:
      "A Mumbai-based protein snack D2C brand doing ₹8L/month across D2C and Amazon, with zero quick commerce presence after a stalled Blinkit onboarding.",
    challenge:
      "A 4-month failed attempt at Blinkit onboarding with no clear understanding of unit economics against platform take-rates.",
    approach: [
      "Quick Commerce Viability Assessment to model unit economics before spending",
      "Fast-tracked onboarding to Blinkit and Zepto, live in 3 weeks",
      "Dark store setup across priority Mumbai zones",
      "In-app advertising management to win auction share on category search terms",
    ],
    metrics: [
      { label: "Total Monthly Revenue", before: "₹8L", after: "₹13.4L" },
      { label: "Quick Commerce Revenue", before: "₹0", after: "₹4.8L" },
      { label: "Blinkit + Zepto Orders", before: "0", after: "1,600" },
      { label: "Quick Commerce ROAS", before: "—", after: "2.3X" },
      { label: "Quick Commerce AOV", before: "₹180 (D2C)", after: "₹240" },
    ],
    keyTakeaway:
      "\"A failed Blinkit onboarding usually isn't a rejection — it's a process nobody owned end-to-end.\"",
    seoTitle: "Mumbai Protein Snack Brand Case Study — +67% Revenue | Ecom Orbit",
    seoDescription:
      "How a Mumbai protein snack brand added ₹4.8L in 60 days after a failed Blinkit onboarding, with Ecom Orbit's QC fast-track.",
  },
  {
    slug: "delhi-haircare-brand",
    industryTag: "Marketplace Recovery",
    clientName: "Delhi Haircare Brand",
    heroStat: "7.7X",
    heroStatLabel: "Marketplace Revenue Growth in 4 Months",
    challengeSummary:
      "A Delhi haircare brand with a hijacked Amazon listing and page 4-5 rankings rebuilt to ₹13.8L/month across three marketplaces at 16.8% ACOS.",
    clientProfile:
      "A Delhi-based haircare D2C brand doing ₹1.8L/month on Amazon alone, with an inactive Brand Registry, a hijacked listing, and zero presence on Flipkart or Nykaa.",
    challenge:
      "A hijacked listing actively diverting sales, page 4-5 search rankings, and a 22% return rate with no marketplace strategy beyond Amazon.",
    approach: [
      "Brand Registry setup and hijacker removal",
      "Full listing overhaul with A+ Content and ingredient comparison tables",
      "Sponsored Products campaign rebuild targeting category and branded terms",
      "Flipkart and Nykaa launch from zero presence",
    ],
    metrics: [
      { label: "Amazon Revenue", before: "₹1.8L", after: "₹9.4L" },
      { label: "Flipkart Revenue", before: "₹0", after: "₹2.8L" },
      { label: "Nykaa Revenue", before: "₹0", after: "₹1.6L" },
      { label: "Total Marketplace Revenue", before: "₹1.8L", after: "₹13.8L" },
      { label: "ACOS", before: "—", after: "16.8%" },
      { label: "Return Rate", before: "22%", after: "11%" },
      { label: "Search Ranking", before: "Page 4-5", after: "Page 1, Pos 3-5" },
    ],
    keyTakeaway:
      "\"A hijacked listing isn't a one-time incident to fix — it's a sign nobody's actively defending your marketplace revenue.\"",
    seoTitle: "Delhi Haircare Brand Case Study — 7.7X Marketplace Growth | Ecom Orbit",
    seoDescription:
      "How a Delhi haircare brand recovered from a hijacked Amazon listing to ₹13.8L/month across Amazon, Flipkart & Nykaa.",
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}
