"use client";

import { useRef } from "react";
import { useAnimationFrame, useInView, useReducedMotion } from "framer-motion";
import { ShoppingBag, Megaphone, Search, Store, Zap, Truck, LayoutGrid } from "lucide-react";

const CHANNELS = [
  { label: "Store", Icon: ShoppingBag },
  { label: "Ads", Icon: Megaphone },
  { label: "SEO", Icon: Search },
  { label: "Marketplaces", Icon: Store },
  { label: "Quick Commerce", Icon: Zap },
  { label: "Logistics", Icon: Truck },
  { label: "End-to-End", Icon: LayoutGrid },
];

const RX = 46; // ellipse radii, % of the box
const RY = 34;
const SPEED = 0.000085; // radians per ms

/** Position of node i at time t: a tilted ellipse, front (bottom) nodes larger and brighter than back (top) ones. */
function place(i: number, t: number) {
  const a = t * SPEED + (i * Math.PI * 2) / CHANNELS.length + 0.4;
  const depth = (Math.sin(a) + 1) / 2; // 0 back .. 1 front
  return {
    left: `${(50 + RX * Math.cos(a)).toFixed(3)}%`,
    top: `${(50 + RY * Math.sin(a)).toFixed(3)}%`,
    transform: `translate(-50%, -50%) scale(${(0.6 + 0.62 * depth).toFixed(4)})`,
    opacity: 0.45 + 0.55 * depth,
    zIndex: depth > 0.5 ? 20 : 5,
    filter: `blur(${((1 - depth) * 1.6).toFixed(2)}px)`,
  };
}

const SPARKS = 9;

/** A comet: a head and a fading tail of tiny lights riding the same ellipse, a little faster than the orbs. */
function spark(k: number, t: number) {
  const a = t * SPEED * 2.3 + 1.1 - k * 0.07;
  const depth = (Math.sin(a) + 1) / 2;
  const fade = 1 - k / SPARKS;
  return {
    left: `${(50 + RX * Math.cos(a)).toFixed(3)}%`,
    top: `${(50 + RY * Math.sin(a)).toFixed(3)}%`,
    transform: `translate(-50%, -50%) scale(${((0.55 + 0.7 * depth) * (0.45 + 0.55 * fade)).toFixed(4)})`,
    opacity: Number((fade * (0.35 + 0.65 * depth)).toFixed(4)),
  };
}

/**
 * The brand's mechanism as a scene: seven channel orbs circling one glowing hub on a tilted orbit,
 * with depth (size, brightness, occlusion) instead of a flat diagram. Static under reduced motion.
 */
export function OrbitScene({ className = "" }: { className?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const sparks = useRef<(HTMLSpanElement | null)[]>([]);
  const reduce = useReducedMotion();
  const inView = useInView(box, { margin: "120px" });

  useAnimationFrame((t) => {
    if (reduce || !inView) return;
    nodes.current.forEach((el, i) => {
      if (!el) return;
      const p = place(i, t);
      el.style.left = p.left;
      el.style.top = p.top;
      el.style.transform = p.transform;
      el.style.opacity = String(p.opacity);
      el.style.zIndex = String(p.zIndex);
      el.style.filter = p.filter;
    });
    sparks.current.forEach((el, k) => {
      if (!el) return;
      const p = spark(k, t);
      el.style.left = p.left;
      el.style.top = p.top;
      el.style.transform = p.transform;
      el.style.opacity = String(p.opacity);
    });
  });

  return (
    <div ref={box} className={`relative mx-auto aspect-[1.45/1] w-full max-w-[1180px] sm:aspect-[2.35/1] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="ring-depth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="0.55" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="1" stopColor="#ff8a55" stopOpacity="0.75" />
          </linearGradient>
        </defs>
        <ellipse cx="50" cy="50" rx={RX} ry={RY} fill="none" stroke="url(#ring-depth)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        <ellipse cx="50" cy="50" rx={RX * 0.62} ry={RY * 0.62} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="2 5" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Hub: a warm orb with a wide halo, sitting between the back and front halves of the orbit */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: "min(46vw, 420px)", height: "min(46vw, 420px)", background: "radial-gradient(closest-side, rgba(255,107,43,0.32), transparent)" }}
        />
        <div
          className="relative flex items-center justify-center rounded-full font-medium"
          style={{
            width: "clamp(64px, 9vw, 108px)",
            height: "clamp(64px, 9vw, 108px)",
            background: "radial-gradient(circle at 35% 30%, #ffc3a3, #ff6b2b 55%, #b83a0a)",
            boxShadow: "0 0 70px rgba(255,107,43,0.55)",
            color: "#1d1d1f",
            fontSize: "clamp(14px, 1.9vw, 22px)",
            letterSpacing: "-0.03em",
          }}
        >
          You
        </div>
      </div>

      {Array.from({ length: SPARKS }, (_, k) => (
        <span
          key={k}
          ref={(el) => {
            sparks.current[k] = el;
          }}
          className="pointer-events-none absolute z-[15] h-[7px] w-[7px] rounded-full bg-[var(--accent-bright)]"
          style={{ ...spark(k, 0), boxShadow: "0 0 12px 3px rgba(255,138,85,0.7)" }}
        />
      ))}

      {CHANNELS.map(({ label, Icon }, i) => (
        <div
          key={label}
          ref={(el) => {
            nodes.current[i] = el;
          }}
          className="absolute flex flex-col items-center gap-1.5"
          style={place(i, 0)}
        >
          <div className="glass flex aspect-square w-[clamp(40px,6.4vw,72px)] items-center justify-center rounded-full text-[var(--fg)]">
            <Icon size="44%" strokeWidth={1.5} />
          </div>
          <span className="hidden whitespace-nowrap text-[12px] tracking-tight text-[var(--fg2)] md:block">{label}</span>
        </div>
      ))}
    </div>
  );
}
