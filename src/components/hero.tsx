"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { OrbitScene } from "@/components/motion/orbit-scene";
import { CountUp } from "@/components/motion/count-up";

const stats = [
  { value: 2, suffix: "", label: "founders" },
  { value: 7, suffix: "", label: "channels" },
  { value: 3.5, suffix: "X", decimals: 1, label: "avg ROAS" },
  { value: 90, suffix: "+", label: "PageSpeed" },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/**
 * Hero: a headline, one line, one button, and the orbit as the whole picture.
 * The scene tilts toward the pointer and rises on scroll; everything else stays out of its way.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.5], [1, reduce ? 1 : 0.1]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);

  // Pointer parallax (mouse only): the scene turns a few degrees toward the cursor.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(sx, [-1, 1], [-6, 6]);
  const rotateX = useTransform(sy, [-1, 1], [5, -5]);
  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width) * 2 - 1);
    py.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      className="tone-white relative overflow-hidden px-5 pt-[104px] sm:px-8 sm:pt-[124px]"
    >
      {/* Atmosphere: a cool shaft of light from the top, a warm glow where the orbit sits */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 42% at 50% -5%, rgba(96, 140, 220, 0.34), transparent 70%), radial-gradient(46% 30% at 50% 66%, rgba(255, 107, 43, 0.12), transparent 70%)",
        }}
      />

      {/* Light beams slanting down behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[75%] overflow-hidden"
        style={{ WebkitMaskImage: "linear-gradient(to bottom, #000 35%, transparent)", maskImage: "linear-gradient(to bottom, #000 35%, transparent)" }}
      >
        <span className="beam beam-a" />
        <span className="beam beam-b" />
        <span className="beam beam-c" />
      </div>

      {/* Eases the hero's base into the next (darker) section so there is no visible step */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px]"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.42))" }}
      />

      {/* A planet limb rising at the base of the hero, lit from the side the orbit sits on */}
      <div aria-hidden="true" className="planet-wrap pointer-events-none absolute inset-x-0 bottom-0 h-[calc(clamp(150px,20vw,300px)+140px)] overflow-hidden">
        <div className="planet" />
        <div className="planet-bloom" />
      </div>

      <motion.div style={{ y: copyY, opacity: copyOpacity }} className="container relative z-10 flex flex-col items-center text-center">
        <motion.h1 {...rise(0)} className="display max-w-[16ch] !text-[clamp(40px,5.6vw,76px)] sm:max-w-[24ch]">
          Your Business Deserves a Store That <span className="accent-text">Actually Sells.</span>
        </motion.h1>

        <motion.p {...rise(0.12)} className="lead mt-5 max-w-[520px]">
          Stores, marketplaces and quick commerce for Indian brands.
        </motion.p>

        <motion.div {...rise(0.22)} className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-7">
          <Link href="/contact" className="btn-primary">
            Get Your Free Ecommerce Audit
          </Link>
          <Link href="/services" className="link-more">
            Explore services
          </Link>
        </motion.div>
      </motion.div>

      {/* The picture: the whole mechanism, big, tilting with the pointer */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.3, ease }}
        className="relative z-0 mt-6 px-3 sm:-mt-2 sm:px-0"
        style={{ perspective: 1400 }}
      >
        <motion.div style={{ y: sceneY, scale: sceneScale, rotateX, rotateY }}>
          <OrbitScene />
        </motion.div>
      </motion.div>

      {/* Four numbers on one quiet line instead of a row of cards */}
      <motion.ul
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto -mt-2 grid w-fit grid-cols-2 items-baseline gap-x-10 gap-y-4 pb-32 sm:-mt-6 sm:flex sm:w-full sm:max-w-[1120px] sm:flex-wrap sm:justify-center sm:gap-x-14 sm:gap-y-3 sm:pb-28"
      >
        {stats.map((s) => (
          <li key={s.label} className="flex items-baseline gap-2">
            <CountUp
              value={s.value}
              suffix={s.suffix}
              decimals={s.decimals ?? 0}
              className="stat-value"
              style={{ fontSize: "clamp(22px, 2.6vw, 30px)" }}
              duration={1.6}
            />
            <span className="caption">{s.label}</span>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
