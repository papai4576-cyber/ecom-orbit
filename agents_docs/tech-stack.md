# Tech Stack — Ecom Orbit Website

*Read this before touching build config, package.json, deployment, or framework decisions.*

---

## Framework & Core Dependencies

```json
{
  "framework": "Next.js 14 (App Router)",
  "language": "TypeScript",
  "styling": "Tailwind CSS + CSS Modules for component-level styles",
  "animations": "Framer Motion (React) for page transitions and scroll reveals",
  "fonts": "next/font/google — Syne, DM Sans, JetBrains Mono",
  "icons": "Lucide React (lightweight, tree-shakeable)",
  "forms": "React Hook Form + Zod validation",
  "analytics": "Google Analytics 4 (via next/script)",
  "deployment": "Vercel"
}
```

---

## Commands

```bash
npm run dev          # dev server on localhost:3000 (hot reload)
npm run build        # production build — check for TypeScript errors
npm run start        # serve production build locally
npm run lint         # ESLint check (do not skip)
npm run type-check   # tsc --noEmit (run before any PR)
```

**Before submitting any code change:** run `npm run build` and verify zero errors.

---

## Project Conventions

- **File naming:** kebab-case for files and folders (`hero-section.tsx`, not `HeroSection.tsx`)
- **Component exports:** named exports for all components
- **Page files:** `page.tsx` with `export default` per Next.js App Router convention
- **CSS:** Tailwind utility classes first; extract to CSS Module only when utility classes become unwieldy (>8 classes on one element)
- **Images:** always use `next/image` with explicit `width`, `height`, and `alt`. No `<img>` tags.
- **Links:** always use `next/link`. No `<a>` tags for internal navigation.

---

## Performance Requirements

These are not aspirational — they are build requirements:

| Metric | Target |
|--------|--------|
| PageSpeed (mobile) | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.5s |

**Image optimization:** All images must be WebP or AVIF. No PNG/JPEG above 200KB without explicit sign-off. Use `next/image` sizes prop for responsive images.

**Font loading:** Use `display: swap` on all Google Fonts. Syne and DM Sans are subsetted to Latin.

---

## Accessibility

- Minimum WCAG AA contrast ratio on all text
- All interactive elements keyboard-navigable and have `:focus-visible` styles
- All images have descriptive `alt` text
- Use semantic HTML (`<section>`, `<article>`, `<nav>`, `<main>`, `<header>`, `<footer>`)
- `prefers-reduced-motion`: wrap all animations in `@media (prefers-reduced-motion: no-preference)`

---

## Environment Variables

```bash
# .env.local (never commit)
NEXT_PUBLIC_GA_ID=          # Google Analytics 4 Measurement ID
NEXT_PUBLIC_WA_NUMBER=      # WhatsApp business number (digits only, with country code) — currently unused, WhatsApp CTA is disabled site-wide
NEXT_PUBLIC_CALENDLY_URL=   # Calendly booking URL
GOOGLE_SHEETS_WEBHOOK_URL=  # Apps Script Web App URL that appends contact-form submissions to a Google Sheet — see below
```

### Contact form → Google Sheet setup

`src/app/api/contact/route.ts` POSTs every validated submission to `GOOGLE_SHEETS_WEBHOOK_URL`. Without it set, submissions are only logged to the server console. To wire up a real Google Sheet:

1. Create a Google Sheet. Add a header row: `Timestamp | Name | Email | Phone | Revenue | Message`.
2. In the sheet, go to **Extensions → Apps Script**, delete the boilerplate, and paste:
   ```js
   function doPost(e) {
     const data = JSON.parse(e.postData.contents);
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     sheet.appendRow([data.timestamp, data.name, data.email, data.phone, data.revenue, data.message]);
     return ContentService.createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
3. **Deploy → New deployment → Web app.** Set "Execute as" to yourself and "Who has access" to **Anyone** (required for the server to POST to it without OAuth).
4. Copy the deployment URL (ends in `/exec`) into `GOOGLE_SHEETS_WEBHOOK_URL` — locally in `.env.local`, and in Vercel under Project Settings → Environment Variables.
5. Redeploy after setting the Vercel env var (env vars only apply to builds started after they're saved).

---

## Linting & Formatting

Linting is handled by **ESLint** (configured in `.eslintrc.json`) and **Prettier** (`.prettierrc`). These run automatically on `npm run lint`. Claude should not attempt to manually format code — just write clean code and let the linter handle it.

If ESLint reports an error, fix the underlying code issue — do not add `// eslint-disable` comments without a documented reason.

---

## Third-Party Integrations

- **WhatsApp:** Deep link format: `https://wa.me/${NEXT_PUBLIC_WA_NUMBER}?text=Hi%2C%20I%27d%20like%20a%20free%20ecommerce%20audit`
- **Calendly:** Embed via `@calendly/react-widget` or iframe, styled to match dark theme
- **Google Analytics:** Page view tracking via `usePathname()` + `useEffect()` in a root layout client component
- **Meta Pixel:** Load via `next/script` with `strategy="lazyOnload"` in root layout
