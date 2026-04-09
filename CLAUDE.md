# CLAUDE.md — Ecom Orbit Website Project

## WHY — Project Purpose

Ecom Orbit is an Indian ecommerce agency serving D2C brands (fashion, beauty, food) and offline businesses going online. This repository contains the agency's **marketing website** — the primary lead generation and credibility asset for the business.

The website must convert two types of visitors into consultation bookings:
1. D2C founders doing ₹5L–₹1Cr/month who need to scale across multiple channels
2. Traditional offline retailers (local shops, regional businesses) going digital for the first time

Every design and copy decision should be evaluated against this: *does it make a skeptical Indian SMB founder trust Ecom Orbit enough to book a call or send a WhatsApp message?*

---

## WHAT — Project Structure

```
ecom-orbit-website/
├── CLAUDE.md                  ← you are here
├── agent_docs/
│   ├── design-system.md       ← colors, fonts, spacing, component specs
│   ├── content-copy.md        ← all website copy, headlines, body text
│   ├── page-structure.md      ← sitemap and section-by-section layout specs
│   ├── brand-context.md       ← services, differentiators, case studies, stats
│   └── tech-stack.md          ← framework decisions, build tools, deployment
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── assets/
└── package.json
```

**Before starting any task, check which `agent_docs/` files are relevant and read them first.**

---

## HOW — Working on This Project

### Before you write any code

1. Read `agent_docs/design-system.md` for all visual decisions (colors, fonts, spacing, components)
2. Read `agent_docs/content-copy.md` for the exact copy to use — do not invent or paraphrase headlines
3. Read `agent_docs/page-structure.md` for section order, layout, and hierarchy

### Running the project

```bash
npm install        # install dependencies
npm run dev        # start dev server (localhost:3000)
npm run build      # production build
npm run preview    # preview production build locally
```

### Key constraints — always apply

- **Mobile-first**: 80%+ of Indian ecommerce traffic is mobile. Build mobile layout first, desktop second.
- **India-native numbers**: Always use ₹ (not $), lakhs/crores (not millions/billions), Indian date format.
- **Performance**: Target 90+ PageSpeed score. No unoptimized images. Lazy-load below-the-fold content.
- **WhatsApp CTA**: Every page must have a floating WhatsApp button (bottom-right). This is how Indian SMB clients actually reach out — it is not optional.

### What to read for specific tasks

| Task | Read first |
|------|-----------|
| Any UI component or styling | `agent_docs/design-system.md` |
| Writing or editing copy | `agent_docs/content-copy.md` |
| Adding or restructuring pages | `agent_docs/page-structure.md` |
| Understanding services / case studies | `agent_docs/brand-context.md` |
| Build config, deployment, dependencies | `agent_docs/tech-stack.md` |

---

## Non-negotiables

- The primary color is **#FF6B2B** (orange). The background is **#0A0E1A** (dark navy). Do not substitute.
- Font stack: **Syne** (headlines) + **DM Sans** (body) + **JetBrains Mono** (numbers/stats). Do not use Inter, Roboto, or system fonts.
- All stats and metrics use **JetBrains Mono** — this is a design decision, not a preference.
- CTAs always read **"Get Your Free Ecommerce Audit"** (primary) or **"Chat on WhatsApp"** (secondary). Do not reword them.
-take the brand logo from the Brand Assets folder