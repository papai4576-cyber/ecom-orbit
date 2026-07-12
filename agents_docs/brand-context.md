# Brand Context — Ecom Orbit

*Read this when working on case studies, service descriptions, stats, differentiators, or any content that references Ecom Orbit's positioning.*

---

## What Ecom Orbit Is

A full-service Indian ecommerce agency. **7 channels, one team:**

| # | Service | Channels |
|---|---------|----------|
| 1 | Shopify & WooCommerce Store Setup | Shopify, WooCommerce |
| 2 | Performance Marketing & Ads | Meta (Facebook/Instagram), Google |
| 3 | SEO & Content Marketing | Organic search, content |
| 4 | Marketplace Management | Amazon India, Flipkart, Meesho, Myntra, Nykaa |
| 5 | Quick Commerce Management | Blinkit, Zepto, Swiggy Instamart |
| 6 | Inventory & Logistics Operations | Shiprocket, Delhivery, Blue Dart |
| 7 | End-to-End Management | All of the above, fully managed |

**Geography:** India only. **Target clients:** D2C brands doing ₹5L–₹1Cr/month + offline retailers going online.

---

## Live Status & Contact Facts (keep in sync with reality)

- **Live domain:** ecomorbit.in / www.ecomorbit.in (production, deployed on Vercel)
- **Contact email:** connect@ecomorbit.in (footer, `/contact` page)
- **Response time:** 24 hours (changed from a previously-stated 4 hours, which was unrealistic for a 2-founder team) — this is the number to use anywhere response time is mentioned (contact page, form trust signals, final CTA trust row, pricing tier support line, meta descriptions).
- **Contact form:** submissions POST to a Google Apps Script webhook (`GOOGLE_SHEETS_WEBHOOK_URL` env var) that appends rows to a Google Sheet — no email/CRM delivery wired up yet
- **WhatsApp CTA:** disabled site-wide (floating button, nav icon, footer pill, CTA buttons all removed) — re-enable only with a real business WhatsApp number
- **Case Studies:** `/case-studies` pages, homepage case-studies section, and founder testimonials are removed site-wide — the prior client stories were placeholder/fabricated, not real. Case-study copy elsewhere in this doc is a template for when real data is available, not live content.
- **Positioning:** do not lead with "D2C" in headline-level copy — Ecom Orbit serves both online D2C brands and offline retailers going digital; "D2C" reads as Shopify-only/online-native-brand framing and undersells the offline-to-online side. Fine to use "D2C" in category-stat context (e.g. "India's largest D2C category at 25% market share").
- **Claims:** avoid unsubstantiated exclusivity language ("the only agency that...", "nobody else does...", "India's only..."). State the specifics and let them make the case instead.
- **Team size / scale:** Ecom Orbit is genuinely a 2-founder consultancy that has worked with roughly 10–12 brands to date — not a large agency. Do not display aggregate scale numbers (total revenue generated, brands launched/served) since they'd overstate actual scale. Site-wide positioning now leans on "founder-led, direct access, no account managers" as the credibility signal instead of volume. Per-client case-study numbers (see below) are fine to use since they describe one real engagement, not an aggregate claim — but case studies are currently disabled site-wide anyway (see above).
- **Platform partnerships:** Ecom Orbit is NOT an official Shopify/Google/Meta/Amazon partner and has no Semrush agency account — do not claim "Partner," "Certified," or agency-badge status for any platform. The team is specialized/experienced in these platforms, which is a defensible claim; formal partner/certification status is not. Use "Specialists," not "Partner"/"Certified."
- **Hero video CTA:** the "Watch How It Works" secondary hero button was removed (2026-07-12) — there was no video behind it. Only re-add once a real video exists to link.
- **Calendly booking:** the Contact page's Calendly embed was removed (2026-07-12) — it pointed at the generic calendly.com homepage, not a real scheduling link. Contact page now offers email + phone/hours only. Re-add only with a real Calendly (or equivalent) URL — see `tech-stack.md` `NEXT_PUBLIC_CALENDLY_URL`.
- **Legal pages:** `/privacy-policy` and `/terms-of-service` now exist (2026-07-12) — footer previously linked both (and "Sitemap") to `href="#"`, which was broken. Sitemap now links to `/sitemap.xml`.

---

## Core Differentiators (use in copy and UI callouts)

1. **A 7-channel SMB ecommerce agency** — most competitors specialize in 1–2 channels; Ecom Orbit integrates all 7 for SMBs
2. **One team, zero vendor juggling** — replaces 5 separate vendors (Shopify dev, ad agency, SEO consultant, Amazon specialist, logistics partner)
3. **Built for ₹5L–₹1Cr/month brands** — underserved tier: too big for freelancers, too small for enterprise agencies
4. **Offline-to-online specialist** — India has 13M+ kiranas; Ecom Orbit builds the digital bridge for traditional retailers going online
5. **Transparent pricing** — publish tiered packages; rare in an industry of "custom quotes"
6. **Quick Commerce Viability Assessment** — unique offer: we model your unit economics *before* you spend on listing fees

---

## Stats to Display (use these exact numbers)

All stats should render in `JetBrains Mono`. Always use ₹, lakhs, crores.

| Stat | Display value | Context |
|------|--------------|---------|
| Founders on every account | 2 | No account managers or junior handoffs |
| Channels managed | 7 | Under one roof |
| Average ROAS | 3.5X | Blended across all channels |
| PageSpeed score | 90+ | Average for all stores built |
| Amazon ACOS | <18% | Average on Sponsored Products campaigns |
| Quick commerce market | $6–7B GMV | India 2024 |
| QC growth | ~40% CAGR | Through 2030 |
| QC ad spend | ₹4,000Cr | Blinkit+Zepto+Instamart, 2025, up 202% YoY |
| Blinkit market share | >50% | September 2025 |
| Meesho users | 213M+ | Annual transacting users |
| Meesho Tier 2/3 reach | 87.8% | Users outside top 8 cities |
| Amazon seller cost | 25–35% | Of selling price, total |
| India ecommerce market | $400B | 2025 |

---

## Case Studies (canonical versions — do not alter results)

### CS1: Fashion/Apparel — Jaipur Ethnicwear Brand
- **Before:** ₹3.2L/month · 0.7% CVR · 32% return rate · PageSpeed 34
- **After (6 months):** ₹28.4L/month · 2.4% CVR · 3.8X ROAS · 19% return rate · PageSpeed 92 · 22% revenue from email+WhatsApp
- **What we did:** Shopify redesign + Meta ads + SEO + Shiprocket COD optimization + WhatsApp retention

### CS2: Beauty/Personal Care — Mumbai Skincare Brand (Launch)
- **Before:** ₹0 (pre-launch)
- **After (4 months):** ₹15.2L/month · 3.6% CVR · 5.1X ROAS · 28% repeat purchase rate · ₹1,340 AOV (up from ₹890) · 38% revenue from email+WhatsApp
- **What we did:** Shopify build + Meta UGC ads + micro-influencer seeding + WhatsApp retention + SEO

### CS3: Food/FMCG — Pune Healthy Snacks Brand (Marketplace Pivot)
- **Before:** ₹12L/month (70% Amazon dependent) · ₹2L D2C · ₹0 subscription
- **After (6 months):** ₹22L total · ₹14.5L D2C (66%) · ₹4.8L subscription revenue · 48% repeat rate · ₹58 avg shipping cost (down from ₹82)
- **What we did:** WooCommerce redesign + subscription-first architecture + Google Shopping + SEO + Shiprocket optimization

### CS4: Offline-to-Online — Lucknow Chikankari Boutique
- **Before:** ₹0 online · 400 Instagram followers · 1 city
- **After (90 days):** ₹8.2L online revenue · 420+ orders · 4,200 followers · 86 cities · 1.8% CVR · ₹1,950 AOV · 11% return rate
- **What we did:** Full Shopify setup + product photography + Meta ads + Instagram Reels strategy + Shiprocket

### CS5: Quick Commerce — Mumbai Protein Snack Brand
- **Before:** ₹8L/month (D2C + Amazon) · ₹0 quick commerce · 4-month failed Blinkit onboarding attempt
- **After (60 days):** +₹4.8L QC revenue · 680 Blinkit orders + 920 Zepto orders · 2.3X QC ROAS · ₹240 AOV (vs ₹180 on D2C) · Total: ₹13.4L (+67%)
- **What we did:** QC Viability Assessment + fast-track onboarding (3 weeks) + dark store setup + in-app ad management

### CS6: Marketplace Recovery — Delhi Haircare Brand
- **Before:** ₹1.8L/month Amazon · page 4–5 rankings · 22% return rate · Brand Registry inactive · listing hijacked · ₹0 Flipkart · ₹0 Nykaa
- **After (4 months):** ₹9.4L Amazon · ₹2.8L Flipkart · ₹1.6L Nykaa · ₹13.8L total (7.7X) · ACOS 16.8% · 11% return rate · Page 1 Position 3–5 rankings
- **What we did:** Brand Registry + hijacker removal + full listing overhaul + A+ Content + Sponsored Products + Flipkart + Nykaa launch

---

## Services — Key Copy Points

### Shopify & WooCommerce Store Setup
- Indian ecommerce stores average 1.5–2% CVR; Ecom Orbit stores hit 2.5–4%+
- All stores: Razorpay/PayU/Cashfree + UPI + COD checkout; Shiprocket/Delhivery integration; GST-compliant tax config
- Target: 90+ PageSpeed, <2s load time, mobile-first
- Timeline: 2–4 weeks to launch

### Performance Marketing & Ads
- Test 15–20 creatives per month
- Target benchmarks: Fashion 3–5X ROAS / Beauty 4–6X ROAS / Food 2.5–4X ROAS
- Report on ROAS, CAC, MER, contribution margin — not impressions or clicks

### Marketplace Management
- Amazon target ACOS: <18%
- Manage: listing SEO, A+ Content, Brand Store, Sponsored Products/Brands/Display, Buy Box, FBA, Brand Registry
- Flipkart: Flipkart Assured, Seller Rating, Flipkart Fulfilled, Product Listing Ads, Flipkart Live
- Meesho: total cost 10–15% of product price (shipping + returns + ads); Tier 2/3 reach
- Myntra: EORS event management; Nykaa: Pink Friday Sale positioning

### Quick Commerce Management
- Start with **Quick Commerce Viability Assessment** (free, models unit economics vs. platform fees)
- Blinkit listing fee: ₹25,000/SKU/state; platform take rate 35–50%
- Dark store replenishment: weekly, with Proof of Delivery, across multiple dark stores
- Profitable category fit: Food ★★★★★ / Beauty ★★★★☆ / Health ★★★★☆ / Fashion ★★☆☆☆

### Inventory & Logistics
- 25–30% of COD orders in India result in RTO (returns to origin)
- COD verification via WhatsApp/IVR reduces RTO by 15–25%
- Fashion return rates: 28–35% industry average; Ecom Orbit targets <20%

---

## Tone of Voice

- Direct, confident, India-native. Never corporate or stiff.
- Lead with rupees and ROAS, not brand stories.
- Use: ₹, lakhs, crores, Razorpay, Shiprocket, Delhivery, Diwali, WhatsApp.
- Avoid: "world-class," "global standards," "cutting-edge," "leverage synergies."
- The agency voice is: *"A sharp, experienced friend who runs an ecommerce agency."*

---

## Pricing Tiers (homepage teaser — not full pricing page)

| Tier | For | Price (starting) | Key inclusions |
|------|-----|-----------------|----------------|
| Starter | Brands just launching | ₹49,999 one-time | Shopify store + 1 marketplace + 30-day support |
| Growth | Brands scaling | ₹99,999/month | Store + 2 marketplaces + Meta+Google ads |
| Scale | Full orchestration | ₹1,99,999/month | All 7 channels + dedicated account manager |

Note on all plans: GST invoicing included, no hidden charges, month-to-month (no lock-in).
