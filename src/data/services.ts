export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: string[];
  approach: string;
  deliverables: string[];
  benchmarkStat: string;
  relatedCaseStudySlug: string;
  faqs: ServiceFaq[];
  cta: string;
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: "store-setup",
    name: "Shopify & WooCommerce Store Setup",
    shortDescription:
      "Conversion-optimized, mobile-first stores built for India. GST-ready, Razorpay-integrated, and designed to load in under 2 seconds.",
    heroHeadline: "A Store Built to Convert, Not Just Exist.",
    heroSubheadline:
      "Most Indian ecommerce stores convert at 1.5–2%. Ours are built to hit 2.5–4%+ — mobile-first, GST-ready, Razorpay-integrated, and fast enough that people don't leave before it loads.",
    painPoints: [
      "A theme that looks fine on desktop and breaks on the phone 85% of your traffic uses",
      "Checkout that doesn't support UPI or COD the way Indian buyers expect",
      "A PageSpeed score you're afraid to check",
      "GST and tax config someone eyeballed instead of set up properly",
    ],
    approach:
      "We design mobile-first because that's where your buyers actually are, wire Razorpay/PayU/Cashfree plus UPI and COD into checkout from day one, and integrate Shiprocket or Delhivery before launch — not as a scramble three weeks after.",
    deliverables: [
      "Custom Shopify/WooCommerce build",
      "Mobile-first responsive design",
      "Razorpay/PayU/Cashfree + UPI + COD checkout",
      "Shiprocket/Delhivery integration",
      "GST-compliant tax configuration",
      "90+ PageSpeed optimization",
      "2–4 week timeline to launch",
    ],
    benchmarkStat: "2.5–4%+ conversion rate, 90+ PageSpeed, <2s load time",
    relatedCaseStudySlug: "jaipur-ethnicwear-brand",
    faqs: [
      {
        question: "How long does a store build take?",
        answer: "2–4 weeks from kickoff to launch, depending on catalog size and custom features.",
      },
      {
        question: "Do you migrate existing stores?",
        answer:
          "Yes — we handle Shopify-to-Shopify replatforms and WooCommerce migrations without losing SEO rankings or order history.",
      },
      {
        question: "Is COD checkout included?",
        answer: "Yes, alongside UPI and card payments — COD optimization is part of the base build, not an add-on.",
      },
    ],
    cta: "Get a Free Store Audit →",
    seoTitle: "Shopify & WooCommerce Store Setup India | Ecom Orbit",
    seoDescription:
      "Conversion-optimized, mobile-first Shopify & WooCommerce stores for Indian ecommerce brands. GST-ready, Razorpay-integrated, 90+ PageSpeed.",
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing & Ads",
    shortDescription:
      "ROI-driven campaigns across Meta, Google, and marketplace ads. 15–20 creatives tested monthly. Every rupee accountable.",
    heroHeadline: "Ad Spend That Reports to ROAS, Not Impressions.",
    heroSubheadline:
      "We test 15–20 creatives a month across Meta, Google, and marketplace ads, and report on the numbers that actually pay your bills: ROAS, CAC, MER, contribution margin.",
    painPoints: [
      "An agency that reports 'reach' and 'engagement' when you asked about ROAS",
      "The same 3 creatives running for two months because nobody's testing",
      "Rising CAC with no clear explanation why",
      "Landing pages that don't match what the ad promised",
    ],
    approach:
      "Category-specific ROAS targets — Fashion 3–5X, Beauty 4–6X, Food 2.5–4X — not a generic benchmark pulled from a blog post. Creative testing at volume, and landing pages built by the same team running the ads, so message match isn't an afterthought.",
    deliverables: [
      "Meta + Google campaign management",
      "15–20 creatives tested monthly",
      "Marketplace ads (Sponsored Products/Brands)",
      "Landing page optimization",
      "Weekly performance reporting on ROAS/CAC/MER",
    ],
    benchmarkStat: "3.5X average blended ROAS across clients",
    relatedCaseStudySlug: "mumbai-skincare-brand",
    faqs: [
      {
        question: "What's your minimum ad spend?",
        answer:
          "We typically work with brands spending ₹1L+/month on ads, but talk to us — the audit will tell you if your spend level makes sense for paid yet.",
      },
      {
        question: "Do you handle creative production?",
        answer: "Yes — creative testing at 15–20 assets/month is built into the service, not billed separately.",
      },
      {
        question: "How is reporting different from other agencies?",
        answer:
          "You get ROAS, CAC, MER, and contribution margin weekly — not impressions and clicks dressed up as a win.",
      },
    ],
    cta: "Get a Free Ad Account Audit →",
    seoTitle: "Performance Marketing Agency India | Meta, Google & Marketplace Ads | Ecom Orbit",
    seoDescription:
      "ROI-driven Meta, Google & marketplace ad management for Indian ecommerce brands. 3.5X average blended ROAS.",
  },
  {
    slug: "seo-content",
    name: "SEO & Content Marketing",
    shortDescription:
      "Organic traffic that compounds. Product page SEO, technical fixes, and content that brings customers at zero marginal cost.",
    heroHeadline: "Traffic That Compounds Instead of Costing You Per Click.",
    heroSubheadline:
      "Product page SEO, technical fixes, and content built to bring customers at zero marginal cost — the channel that keeps working after you stop paying for it.",
    painPoints: [
      "Product pages that don't rank for the terms people actually search",
      "Technical SEO issues nobody's ever audited (broken schema, slow indexing, duplicate content)",
      "Blog content that reads like it was written to hit a word count, not to convert",
      "100% reliance on paid traffic with zero organic backup",
    ],
    approach:
      "We start with a full technical audit, fix what's broken, then build content around commercial-intent keywords your category actually searches — not vanity traffic terms that never convert.",
    deliverables: [
      "Technical SEO audit & fixes",
      "Product page SEO",
      "Content calendar & execution",
      "Schema markup",
      "Internal linking strategy",
      "Monthly organic traffic + ranking reports",
    ],
    benchmarkStat: "Organic traffic at zero marginal cost per acquisition",
    relatedCaseStudySlug: "pune-healthy-snacks-brand",
    faqs: [
      {
        question: "How long until SEO shows results?",
        answer:
          "Technical fixes show up in weeks; content-driven ranking growth is a 3–6 month compounding game — we're upfront about that timeline.",
      },
      {
        question: "Do you write the content or just strategize?",
        answer: "Both — we write, publish, and optimize; you're not handed a content calendar with no execution.",
      },
    ],
    cta: "Get a Free SEO Audit →",
    seoTitle: "Ecommerce SEO Agency India | Product Page SEO & Content | Ecom Orbit",
    seoDescription:
      "Technical SEO, product page optimization & content marketing that compounds organic traffic for Indian ecommerce brands.",
  },
  {
    slug: "marketplace-management",
    name: "Marketplace Management",
    shortDescription:
      "Listing SEO, A+ Content, PPC, inventory sync, seller health. We manage your marketplace accounts like they're our own brand.",
    heroHeadline: "Managed Like It's Our Own Brand, Not a Side Account.",
    heroSubheadline:
      "Listing SEO, A+ Content, PPC, inventory sync, and seller health across Amazon, Flipkart, Meesho, Myntra, and Nykaa — with a target ACOS under 18%.",
    painPoints: [
      "A listing sitting on page 4 that nobody's touched in months",
      "No Brand Registry, so anyone can hijack your listing",
      "PPC spend with no clear ACOS target",
      "Reviews and seller health metrics you check once a quarter, if that",
    ],
    approach:
      "We run marketplaces as their own P&L, not a checkbox. Brand Registry setup, A+ Content, Sponsored Products/Brands/Display, Buy Box monitoring, and FBA management — the full stack, actively managed, not set-and-forget.",
    deliverables: [
      "Listing SEO & A+ Content",
      "Brand Registry & hijacker protection",
      "Sponsored Products/Brands/Display management",
      "Buy Box & FBA management",
      "Flipkart Assured & Seller Rating optimization",
      "Meesho Tier 2/3 strategy",
      "Myntra EORS & Nykaa Pink Friday positioning",
    ],
    benchmarkStat: "<18% average ACOS on Sponsored Products",
    relatedCaseStudySlug: "delhi-haircare-brand",
    faqs: [
      {
        question: "Which marketplaces do you manage?",
        answer: "Amazon India, Flipkart, Meesho, Myntra, and Nykaa — the five that matter for most ecommerce categories.",
      },
      {
        question: "Can you recover a hijacked or suspended listing?",
        answer:
          "Yes — Brand Registry setup and hijacker removal is one of our most requested marketplace fixes.",
      },
    ],
    cta: "Get a Free Marketplace Audit →",
    seoTitle: "Marketplace Management India – Amazon, Flipkart, Meesho | Ecom Orbit",
    seoDescription:
      "Full-service Amazon, Flipkart, Meesho, Myntra & Nykaa account management for Indian ecommerce brands.",
  },
  {
    slug: "quick-commerce",
    name: "Quick Commerce Management",
    shortDescription:
      "Get into dark stores. Stay in stock. Win the in-app ad auction. Onboarding, replenishment, and in-app advertising — handled.",
    heroHeadline: "Get Into Dark Stores. Stay In Stock. Win the Auction.",
    heroSubheadline:
      "Onboarding, replenishment, and in-app advertising on Blinkit, Zepto, and Swiggy Instamart — starting with a free viability check before you spend on listing fees.",
    painPoints: [
      "A 4-month stalled Blinkit onboarding with no clear next step",
      "Chronic out-of-stock at dark stores killing your ranking",
      "No idea what ₹25,000/SKU/state in listing fees actually buys you",
      "Losing the in-app ad auction to a competitor with a bigger budget, not a better product",
    ],
    approach:
      "We start with a Quick Commerce Viability Assessment that models your unit economics against platform take-rates (35–50%) before you commit a rupee. Then we fast-track onboarding, manage weekly replenishment with proof of delivery, and run the in-app ad auction on your behalf.",
    deliverables: [
      "Quick Commerce Viability Assessment",
      "Blinkit/Zepto/Instamart onboarding",
      "Weekly dark-store replenishment",
      "In-app advertising management",
      "Category fit analysis (Food ★★★★★ · Beauty ★★★★☆ · Health ★★★★☆ · Fashion ★★☆☆☆)",
    ],
    benchmarkStat: "Fast-tracked onboarding in as little as 3 weeks",
    relatedCaseStudySlug: "mumbai-protein-snack-brand",
    faqs: [
      {
        question: "What does Blinkit listing actually cost?",
        answer:
          "Roughly ₹25,000/SKU/state, plus a 35–50% platform take rate — the Viability Assessment models this against your margins before you commit.",
      },
      {
        question: "Is quick commerce right for every category?",
        answer:
          "No — food and beauty fit best; fashion is a weak fit. We'll tell you honestly, even if it costs us the engagement.",
      },
    ],
    cta: "Get Your Free QC Viability Assessment →",
    seoTitle: "Quick Commerce Management India – Blinkit, Zepto, Instamart | Ecom Orbit",
    seoDescription:
      "Get listed on Blinkit, Zepto & Swiggy Instamart. Dark store management, replenishment & in-app advertising.",
  },
  {
    slug: "logistics-operations",
    name: "Inventory & Logistics Operations",
    shortDescription:
      "Shiprocket setup, COD optimization, return management. We fix the ops layer most agencies pretend doesn't exist.",
    heroHeadline: "The Ops Layer Most Agencies Pretend Doesn't Exist.",
    heroSubheadline:
      "Shiprocket setup, COD optimization, and return management — because 25–30% of Indian COD orders come back, and that's a margin problem, not a shipping problem.",
    painPoints: [
      "RTO eating 25-30% of your COD orders with no system to catch it",
      "Return rates north of 28% with no root-cause tracking",
      "Shipping costs that creep up every quarter with no renegotiation",
      "No WhatsApp/IVR confirmation step before dispatch",
    ],
    approach:
      "We treat RTO as a solvable math problem: WhatsApp/IVR order confirmation before dispatch cuts RTO by 15–25%. We set up and manage Shiprocket/Delhivery/Blue Dart, track return reasons by SKU, and push fashion return rates toward <20% instead of the 28–35% industry norm.",
    deliverables: [
      "Shiprocket/Delhivery/Blue Dart setup & management",
      "COD verification via WhatsApp/IVR",
      "Return-reason tracking by SKU",
      "Carrier cost renegotiation",
      "Monthly RTO & return-rate reporting",
    ],
    benchmarkStat: "15–25% RTO reduction via COD verification",
    relatedCaseStudySlug: "jaipur-ethnicwear-brand",
    faqs: [
      {
        question: "Can you fix RTO without killing COD conversion?",
        answer:
          "Yes — WhatsApp/IVR confirmation is a light-touch step that filters bad orders without adding checkout friction.",
      },
      {
        question: "Do you handle carrier negotiations?",
        answer: "Yes, as part of ongoing logistics management, not a one-time project.",
      },
    ],
    cta: "Get a Free Logistics Audit →",
    seoTitle: "Ecommerce Logistics & RTO Management India | Ecom Orbit",
    seoDescription:
      "Shiprocket setup, COD optimization & return management. Reduce RTO by 15-25% with WhatsApp/IVR order confirmation.",
  },
  {
    slug: "end-to-end",
    name: "End-to-End Ecommerce Management",
    shortDescription:
      "Your website + marketplaces + quick commerce + logistics — all managed by one team. One WhatsApp thread. One monthly report. You focus on your product.",
    heroHeadline: "One Team. One Thread. Every Channel.",
    heroSubheadline:
      "Your website, marketplaces, quick commerce, and logistics — all run by one team who actually talks to each other, because they're the same people.",
    painPoints: [
      "Five vendors, five invoices, zero shared accountability",
      "A marketing agency that doesn't know what's happening on your Amazon account",
      "Decisions made in silos that contradict each other",
      "You, personally, as the only person who sees the whole picture",
    ],
    approach:
      "Everything under this plan runs through one WhatsApp thread and one monthly report — store, ads, SEO, marketplaces, quick commerce, and logistics, tracked against a single revenue number instead of five disconnected dashboards.",
    deliverables: [
      "All 7 channels under one team",
      "Single monthly report tied to revenue",
      "Dedicated account manager",
      "Weekly sync via WhatsApp",
      "Unified strategy across every channel",
    ],
    benchmarkStat: "7 channels, 1 team, 1 report",
    relatedCaseStudySlug: "delhi-haircare-brand",
    faqs: [
      {
        question: "Is this more expensive than hiring channels separately?",
        answer:
          "Usually cheaper than 5 separate vendors once you account for the coordination overhead you're currently absorbing yourself — see the Pricing page for exact tiers.",
      },
      {
        question: "Can I start with fewer channels and add more later?",
        answer:
          "Yes — most brands start with 2-3 channels and expand into End-to-End as revenue grows; the Growth and Scale tiers on our Pricing page map to that path.",
      },
    ],
    cta: "Get Your Free Ecommerce Audit →",
    seoTitle: "End-to-End Ecommerce Management India | Ecom Orbit",
    seoDescription:
      "One team managing your website, marketplaces, quick commerce & logistics under a single monthly report.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
