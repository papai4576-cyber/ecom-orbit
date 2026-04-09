# Design System — Ecom Orbit

*Read this before writing any CSS, component, or UI code.*

---

## Concept: "Mission Control"

The design metaphor is a premium command center — dark, confident, data-forward. Ecom Orbit's name contains "orbit": lean into the space/orbital aesthetic with disciplined restraint. Not sci-fi gimmicky — think a NASA control room crossed with a modern Indian startup brand.

A founder who spent ₹1Cr on ads should look at this and feel: *"These people know exactly what they're doing."*

---

## Color System

```css
:root {
  /* Backgrounds */
  --color-bg-primary:     #0A0E1A;   /* main page background */
  --color-bg-secondary:   #111827;   /* cards, elevated surfaces */
  --color-bg-tertiary:    #1A2235;   /* subtle section dividers */
  --color-bg-deep:        #060A14;   /* footer */

  /* Accents */
  --color-orange:         #FF6B2B;   /* primary CTAs, key numbers, headlines */
  --color-orange-glow:    #FF6B2B33; /* glow/halo effect on dark backgrounds */
  --color-orange-dim:     #FF6B2B18; /* pill backgrounds */
  --color-teal:           #00D4AA;   /* icons, secondary highlights, success */
  --color-teal-dim:       #00D4AA22; /* teal glow */

  /* Text */
  --color-text-primary:   #F0F4FF;   /* headlines, important body */
  --color-text-secondary: #8B9CC8;   /* body copy, descriptions */
  --color-text-muted:     #4A5A7A;   /* labels, captions, footer text */

  /* Borders */
  --color-border:         #1E2D4A;   /* default card/section borders */
  --color-border-bright:  #2A3F6A;   /* active borders, hover states */
}
```

**Rule**: never introduce a color not in this system without a documented reason.

---

## Typography

```css
/* Load from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  --font-display: 'Syne', sans-serif;       /* all headlines */
  --font-body:    'DM Sans', sans-serif;    /* all body, UI, labels */
  --font-mono:    'JetBrains Mono', monospace; /* all numbers, stats, metrics */
}
```

**Type Scale:**
```css
:root {
  --text-hero: clamp(52px, 7vw, 96px);
  --text-h2:   clamp(36px, 5vw, 60px);
  --text-h3:   clamp(24px, 3vw, 36px);
  --text-h4:   clamp(18px, 2.5vw, 24px);
  --text-body: 16px;
  --text-sm:   14px;
  --text-xs:   12px;
}
```

**Rules:**
- Syne Bold (700) for hero and h2. Syne SemiBold (600) for h3, h4.
- DM Sans 400 for body. DM Sans 500 for UI labels. DM Sans 600 for button text.
- JetBrains Mono for ALL numbers, stats, rupee values, percentages, platform names in data contexts.
- Eyebrow labels: DM Sans 500, uppercase, letter-spacing 0.15em, font-size 11–12px.

---

## Spacing System

```css
:root {
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  24px;
  --space-lg:  48px;
  --space-xl:  80px;
  --space-2xl: 120px;

  --section-padding-y:    clamp(80px, 10vw, 140px);
  --section-padding-x:    clamp(24px, 5vw, 80px);
  --content-max-width:    1280px;
  --card-padding:         32px;
  --card-radius:          12px;
  --button-radius:        8px;
  --pill-radius:          100px;
}
```

---

## Core Components

### Primary CTA Button
```css
.btn-primary {
  background: var(--color-orange);
  color: white;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 16px;
  padding: 16px 32px;
  border-radius: var(--button-radius);
  border: none;
  box-shadow: 0 0 24px var(--color-orange-glow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}
.btn-primary:hover {
  transform: scale(1.03);
  box-shadow: 0 0 40px #FF6B2B55;
}
```

### Secondary (Ghost) Button
```css
.btn-secondary {
  background: transparent;
  color: var(--color-text-primary);
  border: 1.5px solid var(--color-border-bright);
  padding: 16px 32px;
  border-radius: var(--button-radius);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 16px;
  transition: border-color 0.2s, color 0.2s;
}
.btn-secondary:hover {
  border-color: var(--color-teal);
  color: var(--color-teal);
}
```

### Eyebrow Label / Pill Tag
```css
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--color-orange-dim);
  border: 1px solid #FF6B2B44;
  color: var(--color-orange);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: var(--pill-radius);
}
```

### Service / Feature Card
```css
.card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--card-radius);
  padding: var(--card-padding);
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}
.card:hover {
  border-color: var(--color-teal);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px #00D4AA18;
}
```

### Stat Card
```css
.stat-card {
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--card-radius);
  padding: 28px;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.stat-card:hover {
  border-color: #FF6B2B44;
  box-shadow: 0 0 24px var(--color-orange-glow);
}
.stat-value {
  font-family: var(--font-mono);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 700;
  color: var(--color-orange);
  line-height: 1;
}
.stat-label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-top: 8px;
}
```

### Testimonial Card
```css
.testimonial-card {
  background: #0F1629;
  border-left: 3px solid var(--color-orange);
  border-radius: 0 var(--card-radius) var(--card-radius) 0;
  padding: 28px;
  position: relative;
  overflow: hidden;
}
/* Large faded quotation mark behind text */
.testimonial-card::before {
  content: '"';
  font-family: var(--font-display);
  font-size: 120px;
  color: var(--color-orange);
  opacity: 0.08;
  position: absolute;
  top: -16px;
  left: 16px;
  line-height: 1;
  pointer-events: none;
}
```

### Floating WhatsApp Button
```css
.whatsapp-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 1000;
  background: #25D366;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  border-radius: var(--pill-radius);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 15px;
  box-shadow: 0 4px 24px rgba(37, 211, 102, 0.4);
  text-decoration: none;
  animation: pulse-wa 2.5s ease-in-out infinite;
}
@keyframes pulse-wa {
  0%, 100% { box-shadow: 0 4px 24px rgba(37,211,102,0.4); }
  50% { box-shadow: 0 4px 40px rgba(37,211,102,0.65); }
}
```

---

## Background Treatments

**Default dark sections** (bg-primary): add a subtle 1px grid overlay for the "mission control" feel:
```css
background-image: linear-gradient(var(--color-border) 1px, transparent 1px),
                  linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
background-size: 60px 60px;
opacity: 0.12; /* overlay only, not on the bg itself */
```

**Hero section**: radial gradient glow from bottom-center:
```css
background: radial-gradient(ellipse 80% 60% at 50% 100%, #FF6B2B0D 0%, transparent 70%),
            var(--color-bg-primary);
```

**Elevated card sections** (bg-secondary): no texture, just the background color + border.

---

## Animation Principles

- Page load: staggered fade+slide-up, 40ms delay between elements, starting at 100ms
- Scroll reveal: `IntersectionObserver`, threshold 0.15, fade+translate(0, 20px) → translate(0, 0)
- Stats counter: count from 0 to final value on scroll-entry, 1.5s ease-out
- Hover: max 0.25s transition, never abrupt
- Continuous: orbital diagram rotation 60s/cycle; ticker marquee infinite horizontal scroll
- No animation if `prefers-reduced-motion: reduce`

---

## Responsive Breakpoints

```css
/* Mobile first */
/* sm  */ @media (min-width: 640px)  { }
/* md  */ @media (min-width: 768px)  { }
/* lg  */ @media (min-width: 1024px) { }
/* xl  */ @media (min-width: 1280px) { }
```

Mobile-specific: 1-column grid, collapsed nav (hamburger drawer), horizontal-scroll card carousels (snap), sticky bottom CTA bar.
