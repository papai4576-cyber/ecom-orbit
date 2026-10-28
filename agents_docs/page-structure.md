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

## Inner pages (minimal pass, 2026-10-28)

Every inner page opens with the shared `PageHero` (left-aligned light headline, one line, one button, optional `OrbitMark` picture on the right) and then uses a different layout per section from `components/page/` (see `DESIGN.md` 5c). Copy lives in `src/data/*.ts`; each service has a `tagline` and `stats`, each industry a `tagline` and `stat`.

| Page | Sections |
|---|---|
| `/services` | hero → interactive `LinkRows` list (name + tagline) → CTA |
| `/services/[slug]` | hero + OrbitMark → "Sound familiar?" `PainList` (numbered lines) → approach as `LitText` → (End-to-End only: `ReportingSample`, anchor `#reporting`) → "What's included" `PillCloud` → `StatRow` → `FaqList` accordion → `NextUp` next service → CTA |
| `/industries` | hero → 2×2 icon tiles (stat + name + tagline) → CTA |
| `/industries/[slug]` | hero + OrbitMark → sticky "What we handle" + `TickRows` → `StatRow` → `NextUp` → CTA |
| `/about` | hero → story as `LitText` → principles as title/one-line rows → operators line + `StatRow` → CTA |
| `/blog`, `/blog/[slug]` | `LinkRows` of titles; article in a 720px reading column + `NextUp` next post |
| `/contact`, `/free-audit` | split: headline + one line + details (or a `TickRows` checklist) on the left, glass form on the right |
| `/privacy-policy`, `/terms-of-service` | minimal hero + plain reading column (legal text unchanged) |

---

## Homepage Section Order

Each section has a background variant to create visual rhythm. Alternate between `bg-primary` (#0A0E1A) and `bg-secondary` (#111827).

| # | Section | Background | Primary CTA |
|---|---------|-----------|-------------|
| 1 | Navigation | Sticky, blur backdrop | "Get Free Audit" button |
| 2 | Hero | bg-primary + orange radial glow | "Get Your Free Ecommerce Audit" |
| 3 | Metrics Ticker | Dark band (#0D1120) | — |
| 3b | **Homepage minimal pass (2026-10-28):** after the Orbit Scrub the order is Statement → Platform marquee → Industry rail → Process path → Proof bento (QC + marketplaces) → Pricing → Final CTA. The old Multi-Channel, Services Grid, Problem, Industry Verticals, Process Timeline, QC Spotlight and Marketplace Spotlight sections are gone (the 7 services live in the Orbit Scrub, each linking to its page). See `DESIGN.md` 5b. | — | — |
| 2a | Hero facts rail (the 4 stats, glass cards at the base of the Hero; replaced the old Stats Strip row) | tone-white | — |
| 3a | **Orbit Scrub** (added 2026-10-28; sits directly under Hero, dark, pinned scroll, 7 channels → service pages) | tone-dark | each channel → its service page |
| 4 | Multi-Channel Reality | bg-secondary | "See How Multi-Channel Works →" |
| 5 | Stats Strip | bg-primary | — |
| 6 | Services Grid | bg-primary | Each card → service page |
| 7 | Channel Ecosystem Diagram | bg-secondary | — |
| 8 | Case Studies Preview | bg-primary | "View All Case Studies →" |
| 9 | The Problem We Solve | bg-secondary | "Let's Fix This →" (inline link, not a button — see dedup note below) |
| 10 | Industry Verticals | bg-primary | Per-industry CTAs |
| 11 | Process Timeline | bg-primary | "Start with a Free Audit →" (inline link, not a button) |
| 12 | Testimonials | bg-secondary | — *(disabled — see content-copy.md; row is stale, not live)* |
| 13 | Partner Badges | Dark band | — *(removed — see content-copy.md "platform partner/certification" note; row is stale, not live)* |
| 14 | Quick Commerce Spotlight | bg-secondary | "Get Free QC Assessment →" (inline link, not a button) |
| 15 | Marketplace Spotlight | bg-primary | "Get Free Marketplace Audit →" (inline link, not a button) |
| 16 | Pricing Tiers Preview | bg-secondary | Per-tier CTAs |
| 17 | Final CTA | bg-primary + orange gradient | "Get Your Free Ecommerce Audit" |
| 18 | Footer | bg-deep (#060A14) | Privacy Policy / Terms of Service / Sitemap links *(WhatsApp button removed — see content-copy.md)* |

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

- Min-height: ~100vh. Background: white tone (#fbfbfd), no glow or grid; the orbit diagram sits below the CTA (see DESIGN.md)
- **Eyebrow:** "🚀 India's 7-Channel Ecommerce Agency"
- **Headline (3 lines):**
  - Line 1: "Your Business" — color: white (deliberately not "D2C Brand" — see brand-context.md positioning note)
  - Line 2: "Deserves a Store" — color: **orange (#FF6B2B)**; SVG underline that draws on page load
  - Line 3: "That Actually Sells." — color: white
- **Subheadline:** Max-width 640px, centered, color: text-secondary
- **CTA:** [Get Your Free Ecommerce Audit →] only — the "Watch How It Works ▶" secondary CTA was removed (no video exists; don't re-add without an actual video to link)
- **Trust pills:** specialization claims only, not certifications/partnerships we can't back — "Shopify & WooCommerce Specialists · Meta & Google Ads Specialists · Amazon & Flipkart Marketplace Specialists · Quick Commerce Specialists". Do not use "Partner"/"Certified"/agency-badge language (Shopify Partner, Google Partner, Meta Business Partner, Amazon SPN Certified, Semrush Agency) — Ecom Orbit is a 2-founder consultancy, not an official platform partner.
- **Bottom ticker:** JetBrains Mono, orange, infinite scroll, key stats separated by · — same specialization-not-certification rule applies
- **No stat-card grid in Hero** — the hero previously repeated a 4-stat card grid (7 channels/3.5X ROAS/90+ PageSpeed/2 founders) directly above the Ticker, which itself sits directly above Stats Strip showing the same numbers a third time. Removed (2026-07-12) — `Stats Strip` (row 5 below) is the single canonical place these numbers appear as a formal stat block. Don't re-add a stat grid to Hero.

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
- Trust signal near submit: "We respond within 24 hours (Mon–Sat, 10am–7pm IST)"
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
