"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  z: number;
  tw: number;
  ph: number;
  hue: number; // 0 cool, 1 warm
}

interface Streak {
  x: number;
  y: number;
  vx: number;
  vy: number;
  born: number;
  life: number;
}

// Seeded PRNG so the nebula is the same on every visit.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Smooth value noise on a lattice, summed over octaves (fbm). */
function makeNoise(seed: number) {
  const rnd = mulberry32(seed);
  const N = 256;
  const grid = new Float32Array(N * N);
  for (let i = 0; i < grid.length; i++) grid[i] = rnd();
  const at = (x: number, y: number) => grid[((y & (N - 1)) * N + (x & (N - 1))) | 0];
  const smooth = (t: number) => t * t * (3 - 2 * t);
  const value = (x: number, y: number) => {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const xf = smooth(x - xi);
    const yf = smooth(y - yi);
    const a = at(xi, yi) * (1 - xf) + at(xi + 1, yi) * xf;
    const b = at(xi, yi + 1) * (1 - xf) + at(xi + 1, yi + 1) * xf;
    return a * (1 - yf) + b * yf;
  };
  return (x: number, y: number) => {
    let sum = 0;
    let amp = 0.5;
    let f = 1;
    for (let o = 0; o < 5; o++) {
      sum += amp * value(x * f, y * f);
      amp *= 0.5;
      f *= 2.05;
    }
    return sum; // roughly 0..0.97
  };
}

const smoothstep = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/** Paints the nebula once into a small canvas; it is scaled up and softly blurred when drawn. */
function paintNebula(w: number, h: number) {
  const nw = Math.max(48, Math.ceil(w / 6));
  const nh = Math.max(48, Math.ceil((h * 1.2) / 6));
  const c = document.createElement("canvas");
  c.width = nw;
  c.height = nh;
  const ctx = c.getContext("2d")!;
  const img = ctx.createImageData(nw, nh);
  const cloud = makeNoise(11);
  const tint = makeNoise(47);
  const core = makeNoise(93);
  const aspect = nw / nh;

  for (let j = 0; j < nh; j++) {
    for (let i = 0; i < nw; i++) {
      const u = i / nw;
      const v = j / nh;
      const x = u * aspect * 2.6;
      const y = v * 2.6;

      // A diagonal dust lane (our Milky Way): clouds are thicker along it.
      const lane = Math.abs(v - (0.15 + 0.7 * u)) * 1.6;
      const band = Math.exp(-lane * lane * 7);

      const n = cloud(x, y);
      const dens = smoothstep(0.38, 0.86, n) * (0.3 + 0.9 * band);

      // Colour: deep blue through violet, with a faint warm core low on the right
      const t = tint(x * 0.8 + 5, y * 0.8);
      const warmN = core(x * 1.1 + 9, y * 1.1 + 3);
      const warm = smoothstep(0.52, 0.8, warmN) * smoothstep(0.35, 1, u * 0.55 + v * 0.7) * 0.85;

      let r = 36 + t * 70;
      let g = 62 + t * 22;
      let b = 150 + t * 40;
      r = r * (1 - warm) + 255 * warm;
      g = g * (1 - warm) + 120 * warm;
      b = b * (1 - warm) + 60 * warm;

      const edge = smoothstep(0, 0.08, u) * smoothstep(1, 0.92, u);
      const alpha = Math.min(0.62, dens * 0.62 + band * 0.07) * edge;
      const k = (j * nw + i) * 4;
      img.data[k] = r;
      img.data[k + 1] = g;
      img.data[k + 2] = b;
      img.data[k + 3] = alpha * 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return c;
}

/**
 * Fixed deep-space backdrop for the whole site: a procedurally painted nebula with a diagonal dust
 * lane and a faint warm core, three depths of plain, quietly twinkling stars, and a rare shooting star. One canvas, paused when the tab is hidden,
 * throttled on phones, static under prefers-reduced-motion.
 */
export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;
    let mobile = false;
    let stars: Star[] = [];
    let nebula: HTMLCanvasElement | null = null;
    let raf = 0;
    let scrollY = window.scrollY;
    let docH = document.documentElement.scrollHeight;
    let frame = 0;
    let streak: Streak | null = null;
    let nextStreak = 12000 + Math.random() * 8000;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      // Nebula: oversized, drifting slowly sideways and sliding with scroll
      if (nebula) {
        const progress = scrollY / Math.max(1, docH - h);
        const dx = reduce ? 0 : Math.sin(t * 0.00004) * w * 0.02;
        const oy = -progress * h * 0.18;
        ctx.globalAlpha = 0.95;
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(nebula, -w * 0.05 + dx, oy, w * 1.1, h * 1.2);
      }

      // Plain, quiet stars: small points that twinkle gently. No glow, no spikes.
      for (const s of stars) {
        const y = (((s.y - scrollY * 0.1 * s.z) % h) + h) % h;
        const tw = reduce ? 0.85 : 0.7 + 0.3 * Math.sin(t * 0.0008 * s.tw + s.ph);
        ctx.globalAlpha = (0.22 + 0.5 * s.z) * tw;
        ctx.fillStyle = s.hue > 0.8 ? "#ffd6bd" : "#d7e3ff";
        const size = s.r * (0.7 + s.z * 0.6);
        ctx.fillRect(s.x, y, size, size);
      }

      // A shooting star now and then
      if (!reduce) {
        if (!streak && t > nextStreak) {
          const fromLeft = Math.random() > 0.35;
          const sp = (w > 700 ? 900 : 620) / 1000;
          streak = {
            x: fromLeft ? Math.random() * w * 0.6 : w * 0.5 + Math.random() * w * 0.5,
            y: Math.random() * h * 0.35,
            vx: sp * (fromLeft ? 1 : -1) * 0.9,
            vy: sp * 0.42,
            born: t,
            life: 800,
          };
        }
        if (streak) {
          const age = t - streak.born;
          if (age > streak.life) {
            streak = null;
            nextStreak = t + 18000 + Math.random() * 14000;
          } else {
            const px = streak.x + streak.vx * age;
            const py = streak.y + streak.vy * age;
            const tail = 120;
            const mag = Math.hypot(streak.vx, streak.vy);
            const tx = px - (streak.vx / mag) * tail;
            const ty = py - (streak.vy / mag) * tail;
            const fade = 1 - age / streak.life;
            const g = ctx.createLinearGradient(tx, ty, px, py);
            g.addColorStop(0, "rgba(255,160,110,0)");
            g.addColorStop(1, `rgba(255,236,220,${0.55 * fade})`);
            ctx.globalAlpha = 1;
            ctx.strokeStyle = g;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(px, py);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      mobile = w < 768;
      docH = document.documentElement.scrollHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nebula = paintNebula(w, h);

      const count = Math.min(mobile ? 120 : 260, Math.floor((w * h) / (mobile ? 3600 : 5600)));
      stars = Array.from({ length: count }, (_, i) => {
        // ~35% of stars cluster along the diagonal dust lane
        let x = Math.random() * w;
        let y = Math.random() * h;
        if (i % 3 === 0) {
          const u = Math.random();
          const spread = (Math.random() + Math.random() - 1) * h * 0.18;
          x = u * w;
          y = h * (0.15 + 0.7 * u) + spread;
        }
        return {
          x,
          y: ((y % h) + h) % h,
          r: Math.random() * 1 + 0.5,
          z: Math.random() * 0.85 + 0.1,
          tw: Math.random() * 2 + 0.6,
          ph: Math.random() * Math.PI * 2,
          hue: Math.random(),
        };
      });
      draw(0);
    };

    const onScroll = () => {
      scrollY = window.scrollY;
      if (reduce) draw(0);
    };

    const loop = (t: number) => {
      raf = requestAnimationFrame(loop);
      if (document.hidden) return;
      frame++;
      if (mobile && frame % 2) return; // phones: 30fps is plenty for twinkle
      draw(t);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!reduce) raf = requestAnimationFrame(loop);
    // Page height changes as sections mount; refresh it for the scroll-progress maths
    const refreshH = window.setTimeout(() => {
      docH = document.documentElement.scrollHeight;
    }, 1500);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(refreshH);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(80% 55% at 10% 0%, rgba(40, 78, 170, 0.32), transparent 70%), radial-gradient(50% 45% at 95% 100%, rgba(255, 107, 43, 0.09), transparent 70%)",
      }}
    >
      <canvas ref={ref} className="h-full w-full" />
      {/* Fine film grain over the whole sky, so gradients never band and nothing looks plastic */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1.2 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
