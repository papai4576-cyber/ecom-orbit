# Design System — Ecom Orbit (cinematic night, 2026-10-28)

Direction chosen by the owner from a reference (a dark, atmospheric product-launch page: full-bleed night scene, glass UI, big light-weight type, card rails). It replaces the earlier Apple-style white / gray / black system (that reference is kept in `agents_docs/reference-apple-design.md` for history only). Source of truth in code: `src/app/globals.css`.

## 1. Atmosphere
Night sky as the brand world: the logo is an orbit, so the site is a place you travel through. Deep navy-black field, a fixed starfield that drifts as you scroll, one warm light (the logo orange). Trust still comes from specifics: no fake imagery of people, no invented numbers. Visual interest comes from depth, light and motion built in code (no generated or stock imagery is used).

## 2. Colour
Base `--night #03060d`. The class names `.tone-white / .tone-light / .tone-dark` are kept, but they are now three levels of night, not light/dark: **white = base (transparent, starfield shows through), light = lifted (white 2.6%), dark = deep (black 42%)**. Components read CSS variables (`--bg --fg --fg2 --fg3 --surface --rule --link`) so one component works on any tone.

| Token | Value |
|---|---|
| `--fg` | #f4f6fb |
| `--fg2` / `--fg3` | 76% / 54% of #e2e9f8 |
| `--surface` (card) | white 5.5–7% |
| `--rule` | white 14% |
| `--glass` / `--glass-edge` | white 6% / white 12% |

Accent (the only brand chroma): `--accent #ff6b2b` for fills (always with `#1d1d1f` text); `--accent-bright #ff8a55` for orange text on night (links, eyebrows, emphasis words). The cool blue in the atmosphere (hazes, hero light shaft) is the logo's navy lit up: it is background light, never a UI colour. No teal, purple, red/green status colours.

## 3. Typography
- Sans: `-apple-system, "SF Pro Display/Text"`, fallback **Inter** (next/font, weights 300/400/500/600). **Display and h2 are weight 300** (light, tight tracking), h3 400, h4 500, body 400. Emphasis in a headline is the orange-bright colour, not bold.
- Mono: **JetBrains Mono** for every stat, price and metric (`.stat-value`, `.mono`).
- Classes: `.display` (42–96px, 1.02), `.h2` (32–58px), `.h3`, `.h4`, `.lead`, `.body`, `.small`, `.caption`, `.eyebrow`.

## 4. Components
- **Nav**: two floating glass pills on a top scrim (logo chip left, link pill centre, orange "Get Free Audit" right); on mobile the logo plus a round glass menu button. Services dropdown is dark glass. The logo is `public/logo-reversed.png`: the master logo (`Brand Assets/Brand_logo.png`, untouched) with its backdrop removed and the navy recoloured to the site's light foreground; shapes and the orange are unchanged.
- **Primary CTA** `.btn-primary`: 980px pill, orange fill, dark text, glow on hover, label always "Get Your Free Ecommerce Audit" (nav uses the short "Get Free Audit"). **Secondary** `.btn-secondary`: glass pill. **Inline** `.link-more`.
- **Card** `.card`: 20px radius, 1px white-9% border, translucent surface, pointer-following orange highlight on hover (`PointerGlow`). **`.glass`** is the heavier blurred surface for nav, hero rail and floating UI; blur is used sparingly for performance.
- **Section heads** carry a soft blue haze behind them.
- **Mobile rails** `.rail`: card grids (services, industries) become swipe carousels under 768px.
- **Mobile sticky CTA** (`StickyCta`): glass-free orange pill pinned to the bottom after the hero; hidden near the footer and on `/contact`, `/free-audit`.
- **Form fields** `.field`: translucent, light text, orange focus ring.

## 5. Scenes and motion (the visual layer)
- **Cosmos** (`motion/starfield.tsx`, component still named `Starfield`): one fixed canvas. A procedurally painted nebula (5-octave value noise: deep blue to violet, a diagonal dust lane, a faint warm-orange core low on the right) drifts slowly and slides with scroll; 120–260 plain small stars on 3 depth layers (about a third cluster along the dust lane) that twinkle gently; a rare, faint shooting star (every 18–32 s); fine film grain over the sky. No glowing or spiked stars and no cursor light (removed 2026-10-29: distracting). Phones get fewer stars and 30fps. Static under reduced motion; paused when the tab is hidden.
- **Hero lighting** (`hero.tsx` + `.beam`, `.planet`, `.planet-bloom` in `globals.css`): three very slow (26–34 s), faint light beams behind the headline, and a planet limb rising at the hero base with a thin sunlit rim and a soft sunrise bloom (14 s). A bottom gradient (transparent to the `.tone-dark` black 42%) eases the hero into the next section. Keep these quiet: they frame the orbit, they don't compete with it. The orbit scene is unchanged.
- **Scroll satellite** (`motion/scroll-satellite.tsx`): a tiny satellite on a hairline orbit down the right edge as the page progress indicator; xl screens only, hidden under reduced motion.
- **Hero** (`hero.tsx`), minimal pass: headline (orange emphasis phrase), one line, one button + a quiet link, and the **Orbit Scene** as the whole picture (`motion/orbit-scene.tsx`: 7 channel orbs on a tilted ellipse around a glowing "You" hub, with depth: size, brightness, back-orb blur, occlusion; plus a comet of sparks riding the ring). The scene tilts toward the mouse and rises on scroll; copy drifts up and softens. Four stats sit on one quiet mono line under it. No badge, no paragraph, no cards. Modelled on Linear / Raycast / Resend / Vercel heroes: short headline, at most two lines of support, one dominant object.
- **Orbit Scrub** (`orbit-scrub.tsx`): the one pinned-scroll section. Scroll turns the orbit so each channel reaches the top spoke in turn while the copy swaps. Do not add other pinned sections.
- **Process timeline**: step rules draw in orange on entry. Other sections use `Reveal` / `StaggerGroup`, count-up and bar-grow.
- All motion respects `prefers-reduced-motion`.

## 5b. Section vocabulary (homepage, 2026-10-28 minimal pass)
Every homepage section is a different kind of object, with one line of copy and one visual. Headlines are a bright line plus a dimmed second line (`text-[var(--fg3)]`). Do not go back to "eyebrow + headline + paragraph + card grid".

| Section | Object |
|---|---|
| Orbit Scrub | pinned orbit that walks the 7 channels |
| Statement (`statement.tsx`) | one huge left-aligned sentence (words light up on scroll), then `vendor-reports.tsx`: five vendor rows that all report fine (neutral ticks, no invented numbers), a dashed "Your contribution margin: Nobody reports this" row, and an orange-outlined "Ecom Orbit reports it. Every month, every channel." row with a link to End-to-End |
| Platform marquee (`platform-marquee.tsx`) | oversized outlined platform names drifting in two rows, no copy |
| Industry rail (`industry-rail.tsx`) | horizontal rail of tall cards: icon, one number, one name |
| Process path (`process-path.tsx`) | a line that fills as you scroll through 5 stops |
| Proof bento (`proof-bento.tsx`) | quick commerce 10-min ring, self-ticking marketplace checklist, two big numbers |
| Pricing | three open columns split by hairlines; the featured plan on glass |
| Final CTA | one sentence, one button, rings pulsing outward |

## 5c. Inner-page kit (`src/components/page/`, `page-hero.tsx`, `cta-section.tsx`)
Shared pieces, each a different object so no two sections in a page look alike: `PageHero` (left-aligned, one line, optional picture), `OrbitMark` (rings + glowing icon + a spark, CSS only), `LitText` (words light up on scroll), `PainList` (numbered lines: orange mono index, one large light line, hairlines; no strike-through), `PillCloud` (glass pills), `TickRows` (orange ticks on hairlines), `StatRow` (big mono numbers on hairlines), `FaqList` (details accordion, answers stay in the HTML), `LinkRows` (interactive index list), `NextUp` (big link to the next page), `CtaSection` (one sentence, one button, pulsing rings). The nav floats, so each page's first section sets its own top padding (`pt-[112px] sm:pt-[144px]`); `PageShell` adds none.

## 6. Do / Don't
- Do keep every claim checkable; stats stay in JetBrains Mono; use ₹, lakhs, crores.
- Do keep the cosmos canvas as the only page-level backdrop; add depth with haze, glass, light and parallax, not imagery. Keep nebula peak alpha low (~0.6) so text contrast holds.
- Don't add a section that is a heading + paragraph + grid of text cards; pick a new object from 5b or reuse one. Keep each section to a line or two of copy.
- Don't add a second accent colour, emoji, fake photos of people, fake testimonials or logos.
- Don't put blur (`backdrop-filter`) on lists of cards; use `.card` (no blur), reserve `.glass`.
- Don't add the WhatsApp CTA back (disabled site-wide).

## 7. Responsive
Mobile-first. Single column under 768px with swipe rails; 2-col at md, 3-col at lg for card grids. Section padding `clamp(72px,10vw,128px)`; side padding `clamp(20px,5vw,48px)`. Touch targets ≥44px. The orbit scene keeps its ellipse and hides channel labels under 768px.
