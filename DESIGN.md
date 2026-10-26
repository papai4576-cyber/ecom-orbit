# Design System — Ecom Orbit (2026 redesign)

Apple-style structure, Ecom Orbit specifics. Direction chosen by the owner; the original Apple reference is kept in `agents_docs/reference-apple-design.md`. Source of truth in code: `src/app/globals.css`.

## 1. Atmosphere
Calm, confident, reductive. Large tight type on flat fields; section tone (not borders or shadows) creates rhythm. One accent: the logo orange. Trust comes from specifics and restraint, not effects.

## 2. Colour
Three section tones, set with `.tone-white`, `.tone-light`, `.tone-dark`. Components read CSS variables (`--bg --fg --fg2 --fg3 --surface --rule --link`) so one component works on any tone.

| Tone | Background | Text | Card surface |
|---|---|---|---|
| white | #fbfbfd | #1d1d1f | #f5f5f7 |
| light | #f5f5f7 | #1d1d1f | #ffffff |
| dark | #000000 | #f5f5f7 | #1d1d1f |

Home rhythm: white → light → dark → white → dark → light → white → dark → light → white → dark → light (footer).

Accent (the only chroma): `--accent #ff6b2b` for fills (always with `#1d1d1f` text, 5.9:1); `--accent-ink #c2410c` for orange text on light tones (4.7:1+); `--accent-bright #ff8a55` for orange text on black. No teal, no purple, no red/green status colours.

## 3. Typography
- Sans: `-apple-system, "SF Pro Display/Text"`, fallback **Inter** (next/font) on Android/Windows. Weights 400/500/600 only.
- Mono: **JetBrains Mono** for every stat, price and metric (`.stat-value`, `.mono`).
- Tight tracking at all sizes. Classes: `.display` (42–92px, 1.04), `.h2` (32–56px, 1.07), `.h3` (24–32px), `.h4` (21px), `.lead` (19–24px), `.body` (17px), `.small` (14px), `.caption` (12px).
- `.eyebrow`: 14px/600 in `--link`. Body copy left-aligned; only headlines and section heads centre.

## 4. Components
- **Primary CTA** `.btn-primary`: 980px pill, orange fill, dark text, 48px min height, label always "Get Your Free Ecommerce Audit" (nav uses the short "Get Free Audit").
- **Secondary** `.btn-secondary`: pill outline in `--link`. **Inline** `.link-more`: text + "›".
- **Card** `.card`: 12px radius, no border, no shadow; elevation by tone contrast. Featured pricing tier flips to `.tone-dark`.
- **Nav**: light glass (`rgba(251,251,253,.8)` + blur 20), 60px. Light because the master logo has a light backdrop; `.logo-crop` crops and multiplies it.
- **Footer**: light gray, small links, hairline rule.
- **Form fields** `.field`: white, 12px radius, orange focus ring.
- **Hero signature**: `OrbitDiagram` (7 channels around "You") on a plain field, cropped by the section edge. Also used small in the Problem section next to `ScatterDiagram`.

## 5. Depth
Flat by default. The one shadow is the services dropdown (`rgba(0,0,0,.22) 3px 5px 30px`). No glows, gradients, textures or grid backgrounds.

## 6. Motion
Framer Motion reveal-on-scroll (`Reveal`, `StaggerGroup`), count-up stats, orbit rotates with scroll, bars grow into view. All respect `prefers-reduced-motion`. No ticker, no pinned scroll.

## 7. Do / Don't
- Do keep every claim checkable; stats stay in JetBrains Mono; use ₹, lakhs, crores.
- Don't add a second accent colour, emoji, coloured badges, borders on cards, gradients, or radii over 12px (pills excepted).
- Don't add the WhatsApp CTA back (disabled site-wide).

## 8. Responsive
Mobile-first. Single column under 768px; 2-col at md, 3-col at lg for card grids. Section padding `clamp(72px,10vw,128px)`; side padding `clamp(20px,5vw,48px)`. Touch targets ≥44px.
