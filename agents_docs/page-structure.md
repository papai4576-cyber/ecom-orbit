# Page Structure — Ecom Orbit Website

*Read this when adding, restructuring, or modifying any page or section.*

---

## Sitemap

```
/                          → Homepage
/services/
  store-setup              → Shopify & WooCommerce Store Setup
  performance-marketing    → Performance Marketing & Ads
  seo-content              → SEO & Content Marketing
  marketplace-management   → Marketplace Management
  quick-commerce           → Quick Commerce Management
  logistics-operations     → Inventory & Logistics Operations
  end-to-end               → End-to-End Ecommerce Management
/industries/
  fashion-apparel
  beauty-personal-care
  food-fmcg
  offline-to-online
/case-studies/             → Case studies listing
/case-studies/[slug]       → Individual case study
/about
/blog/                     → Blog listing
/blog/[slug]               → Individual post
/contact                   → Contact + booking
/free-audit                → Landing page (lead gen, not in nav)
```

---

## Homepage Section Order

Each section has a background variant to create visual rhythm. Alternate between `bg-primary` (#0A0E1A) and `bg-secondary` (#111827).

| # | Section | Background | Primary CTA |
|---|---------|-----------|-------------|
| 1 | Navigation | Sticky, blur backdrop | "Get Free Audit" button |
| 2 | Hero | bg-primary + orange radial glow | "Get Your Free Ecommerce Audit" |
| 3 | Metrics Ticker | Dark band (#0D1120) | — |
| 4 | Multi-Channel Reality | bg-secondary | "See How Multi-Channel Works →" |
| 5 | Stats Strip | bg-primary | — |
| 6 | Services Grid | bg-primary | Each card → service page |
| 7 | Channel Ecosystem Diagram | bg-secondary | — |
| 8 | Case Studies Preview | bg-primary | "View All Case Studies →" |
| 9 | The Problem We Solve | bg-secondary | "Let's Fix This →" |
| 10 | Industry Verticals | bg-primary | Per-industry CTAs |
| 11 | Process Timeline | bg-primary | — |
| 12 | Testimonials | bg-secondary | — |
| 13 | Partner Badges | Dark band | — |
| 14 | Quick Commerce Spotlight | bg-secondary | "Get Free QC Assessment →" |
| 15 | Marketplace Spotlight | bg-primary | "Get Free Marketplace Audit →" |
| 16 | Pricing Tiers Preview | bg-secondary | Per-tier CTAs |
| 17 | Final CTA | bg-primary + orange gradient | "Get Your Free Ecommerce Audit" |
| 18 | Footer | bg-deep (#060A14) | WhatsApp button |

---

## Navigation Spec

- **Fixed/sticky**, full-width, `backdrop-filter: blur(20px)`, `background: #0A0E1Aee`
- **Logo:** "Ecom Orbit" in Syne Bold — the "O" in Orbit has a small SVG orbital ring around it
- **Nav links (center):** Services (dropdown), Marketplaces, Quick Commerce, Case Studies, About
- **Nav right:** "Get Free Audit" (orange primary, compact: 12px 24px padding) + WhatsApp icon button
- **Services dropdown:** Dark card, grid of 7 services (icon + name + 1-line description). Fade in on hover.
- **Active link:** 2px orange underline, color: white

---

## Hero Section Spec

- Min-height: 100vh. Background: see design-system.md (radial orange glow + grid overlay)
- **Eyebrow:** "🚀 India's 7-Channel Ecommerce Agency"
- **Headline (3 lines):**
  - Line 1: "Your Business" — color: white (deliberately not "D2C Brand" — see brand-context.md positioning note)
  - Line 2: "Deserves a Store" — color: **orange (#FF6B2B)**; SVG underline that draws on page load
  - Line 3: "That Actually Sells." — color: white
- **Subheadline:** Max-width 640px, centered, color: text-secondary
- **CTA:** [Get Your Free Ecommerce Audit →] only — the "Watch How It Works ▶" secondary CTA was removed (no video exists; don't re-add without an actual video to link)
- **Trust pills:** specialization claims only, not certifications/partnerships we can't back — "Shopify & WooCommerce Specialists · Meta & Google Ads Specialists · Amazon & Flipkart Marketplace Specialists · Quick Commerce Specialists". Do not use "Partner"/"Certified"/agency-badge language (Shopify Partner, Google Partner, Meta Business Partner, Amazon SPN Certified, Semrush Agency) — Ecom Orbit is a 2-founder consultancy, not an official platform partner.
- **Bottom ticker:** JetBrains Mono, orange, infinite scroll, key stats separated by · — same specialization-not-certification rule applies

---

## Case Study Page Template

Each individual case study (`/case-studies/[slug]`) follows:
1. Header: industry tag + hero stat (large, JetBrains Mono, orange) + challenge summary
2. Client Profile section
3. The Challenge section
4. Our Approach section (numbered steps)
5. Results table (before/after, all metrics)
6. Key Takeaway (pull quote style)
7. CTA: "Ready to see similar results? → Get Your Free Ecommerce Audit"
8. Related case studies (2–3 cards from same or adjacent industry)

---

## Service Page Template

Each service page (`/services/[slug]`) follows:
1. Hero: outcome-focused headline + subheadline + "Get a Free [Service] Audit" CTA
2. Pain points section ("What you're probably dealing with")
3. "How we do it differently" section
4. Deliverables list
5. Benchmarks / metrics table
6. Mini case study callout card (most relevant CS from brand-context.md)
7. FAQ (3–5 questions)
8. CTA section

---

## Contact Page Spec

- Form fields: Name, Email, Phone, Monthly Revenue (dropdown: Pre-launch / Under ₹5L / ₹5L–₹25L / ₹25L–₹1Cr / ₹1Cr+), Message
- Alongside form: WhatsApp CTA + direct email + Calendly embed for 30-min calls
- Trust signal near submit: "We respond within 4 hours (Mon–Sat, 10am–7pm IST)"
- No form validation errors in red — use orange (#FF6B2B) for error states

---

## Footer Spec

4-column layout (1-column on mobile):
1. Branding: logo + tagline + social icons (LinkedIn, Instagram, X) — teal outline style
2. Services: links to all 7 service pages
3. Company: About, Case Studies, Industries, Blog, Contact
4. Contact: email, phone, hours, WhatsApp pill button

Below: partner badge row (grayscale logos, 50% opacity)
Bottom bar: copyright left, legal links right, DM Sans 13px, color text-muted
