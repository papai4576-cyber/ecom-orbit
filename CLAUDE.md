# CLAUDE.md — Ecom Orbit Website Project

## WHY — Project Purpose

Ecom Orbit is an Indian ecommerce agency serving D2C brands (fashion, beauty, food) and offline businesses going online. This repository contains the agency's **marketing website** — the primary lead generation and credibility asset for the business.

The website must convert two types of visitors into consultation bookings:
1. D2C founders doing ₹5L–₹1Cr/month who need to scale across multiple channels
2. Traditional offline retailers (local shops, regional businesses) going digital for the first time

Every design and copy decision should be evaluated against this: *does it make a skeptical Indian SMB founder trust Ecom Orbit enough to book a call or submit the contact form?*

---

## WHAT — Project Structure

```
ecom-orbit-website/
├── CLAUDE.md                  ← you are here
├── agents_docs/
│   ├── design-system.md       ← colors, fonts, spacing, component specs
│   ├── content-copy.md        ← all website copy, headlines, body text
│   ├── page-structure.md      ← sitemap and section-by-section layout specs
│   ├── brand-context.md       ← services, differentiators, case studies, stats, live status & contact facts
│   ├── tech-stack.md          ← framework decisions, build tools, deployment
│   └── CHANGELOG.md           ← running record of shipped changes, newest first
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── assets/
└── package.json
```

**Before starting any task, check which `agents_docs/` files are relevant and read them first.**

---

## HOW — Working on This Project

### Before you write any code

1. Read `DESIGN.md` (and `agents_docs/design-system.md`) for all visual decisions (colors, fonts, spacing, components)
2. Read `agents_docs/content-copy.md` for the exact copy to use — do not invent or paraphrase headlines
3. Read `agents_docs/page-structure.md` for section order, layout, and hierarchy

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
- **WhatsApp CTA**: currently **disabled site-wide** (see `agents_docs/brand-context.md` → "Live Status & Contact Facts"). Do not re-add a floating WhatsApp button, WhatsApp nav icon, or "Chat on WhatsApp" CTA without an explicit instruction to re-enable it with a real business number.

### What to read for specific tasks

| Task | Read first |
|------|-----------|
| Any UI component or styling | `DESIGN.md` |
| Writing or editing copy | `agents_docs/content-copy.md` |
| Adding or restructuring pages | `agents_docs/page-structure.md` |
| Understanding services / case studies | `agents_docs/brand-context.md` |
| Build config, deployment, dependencies | `agents_docs/tech-stack.md` |

---

## Non-negotiables

- The accent is the logo orange **#FF6B2B** — the only chromatic colour. Sections alternate **white (#fbfbfd) / light gray (#f5f5f7) / black (#000)**. See `DESIGN.md`. (Replaced the earlier dark-navy design in the 2026 redesign.)
- Font stack: **SF Pro (via -apple-system) with Inter as web fallback** for all text, **JetBrains Mono** for numbers/stats. Do not use Syne, DM Sans or Roboto.
- All stats and metrics use **JetBrains Mono** — this is a design decision, not a preference.
- Primary CTA always reads **"Get Your Free Ecommerce Audit"**. Do not reword it. (The "Chat on WhatsApp" secondary CTA is currently disabled — see WhatsApp CTA note above.)
- Take the brand logo from the Brand Assets folder.

---

## Single Source of Truth — keep docs in sync with the live site

`agents_docs/*.md` and this file are the canonical record of what the site actually says and does — not just an initial spec. **Every time you ship a change that affects copy, positioning, contact/integration details, removed/disabled features, or the live domain, update the relevant `agents_docs/*.md` file(s) and this file (if a Non-negotiable is affected) in the same pass — not as a follow-up.**

- **Copy changes** (headlines, CTAs, claims, positioning) → update `agents_docs/content-copy.md`
- **Business facts** (contact email, live domain, differentiators, what's enabled/disabled, integration details) → update `agents_docs/brand-context.md` → "Live Status & Contact Facts"
- **Design/visual system changes** → update `DESIGN.md`
- **Sitemap/page additions or removals** → update `agents_docs/page-structure.md`
- **Stack, env vars, deployment, third-party integrations** → update `agents_docs/tech-stack.md`
- **Log every shipped change** — one line per change — in `agents_docs/CHANGELOG.md`, newest entry on top, with a one-line reason. This is the running record of what changed and why; keep it current rather than reconstructing it later.

If a change makes something in this CLAUDE.md file inaccurate (e.g. a Non-negotiable no longer holds), fix it here too. A stale doc is worse than no doc — it actively misdirects the next person or agent working on this repo.