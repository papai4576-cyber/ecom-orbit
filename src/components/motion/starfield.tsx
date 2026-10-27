"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  z: number;
  tw: number;
  ph: number;
}

/**
 * Fixed night-sky backdrop for the whole site: a few hundred stars on three depth layers that twinkle
 * and drift at different speeds as you scroll, over two soft colour hazes. Canvas, ~1 draw loop,
 * paused when the tab is hidden; static under prefers-reduced-motion.
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
    let stars: Star[] = [];
    let raf = 0;
    let scrollY = window.scrollY;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const y = (((s.y - scrollY * 0.1 * s.z) % h) + h) % h;
        const twinkle = reduce ? 0.8 : 0.6 + 0.4 * Math.sin(t * 0.001 * s.tw + s.ph);
        ctx.globalAlpha = (0.3 + 0.6 * s.z) * twinkle;
        ctx.fillStyle = s.z > 0.86 ? "#ffd6bd" : "#d7e3ff";
        const size = s.r * (0.7 + s.z * 0.7);
        ctx.fillRect(s.x, y, size, size);
      }
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(220, Math.floor((w * h) / 7500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.5,
        z: Math.random() * 0.9 + 0.1,
        tw: Math.random() * 2 + 0.6,
        ph: Math.random() * Math.PI * 2,
      }));
      draw(0);
    };

    const onScroll = () => {
      scrollY = window.scrollY;
      if (reduce) draw(0);
    };

    const loop = (t: number) => {
      if (!document.hidden) draw(t);
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (!reduce) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
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
          "radial-gradient(70% 50% at 12% 0%, rgba(44, 84, 168, 0.3), transparent 70%), radial-gradient(45% 40% at 92% 100%, rgba(255, 107, 43, 0.07), transparent 70%)",
      }}
    >
      <canvas ref={ref} className="h-full w-full" />
    </div>
  );
}
