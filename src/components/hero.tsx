"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { OrbitDiagram } from "@/components/motion/orbit-diagram";

const trustPills = [
  "Shopify & WooCommerce Specialists",
  "Meta & Google Ads Specialists",
  "Amazon & Flipkart Marketplace Specialists",
  "Quick Commerce Specialists",
];

const heroStats = [
  { value: "2", label: "Founders on Every Account" },
  { value: "7", label: "Channels Managed" },
  { value: "3.5X", label: "Average ROAS" },
  { value: "90+", label: "PageSpeed Score" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orbitOpacity = useTransform(scrollYProgress, [0, 0.8], [0.22, 0]);
  const orbitScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 80]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-grid"
      style={{
        background: `#0A0E1A`,
        backgroundImage: `
          linear-gradient(rgba(30,45,74,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30,45,74,0.3) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        paddingTop: "100px",
      }}
    >
      {/* Orbit diagram — brand's literal visual metaphor, behind the content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: prefersReducedMotion ? 0.12 : orbitOpacity,
          scale: prefersReducedMotion ? 1 : orbitScale,
          filter: "blur(1.5px)",
        }}
      >
        <OrbitDiagram size={680} />
      </motion.div>

      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,107,43,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,170,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <motion.div
        style={{ y: contentY }}
        className="container mx-auto px-6 py-20 flex flex-col items-center gap-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          🚀 India&apos;s 7-Channel Ecommerce Agency
        </motion.div>

        {/* Main headline */}
        <div className="flex flex-col items-center gap-1">
          {["Your Business", null, "That Actually Sells."].map((line, i) =>
            line ? (
              <motion.h1
                key={line}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold leading-[1.05] tracking-tight"
                style={{ fontSize: "var(--text-hero)", color: "#F0F4FF" }}
              >
                {line}
              </motion.h1>
            ) : (
              <motion.h1
                key="orange-line"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold leading-[1.05] tracking-tight relative"
                style={{ fontSize: "var(--text-hero)" }}
              >
                <span style={{ color: "#FF6B2B" }}>Deserves a Store</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 400 8"
                  preserveAspectRatio="none"
                  style={{ opacity: 0.7 }}
                >
                  <motion.path
                    d="M0 6 Q100 2 200 5 Q300 8 400 4"
                    stroke="#FF6B2B"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                  />
                </motion.svg>
              </motion.h1>
            )
          )}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="max-w-2xl font-body text-[17px] leading-relaxed"
          style={{ color: "#8B9CC8" }}
        >
          One team runs your Shopify store, your Amazon and Meesho accounts, and your Blinkit and
          Zepto listings — instead of{" "}
          <strong style={{ color: "#F0F4FF" }}>five vendors blaming each other</strong> when a
          launch goes sideways.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <Link href="/contact" className="btn-primary text-[16px]">
            Get Your Free Ecommerce Audit
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-2 mt-4"
        >
          {trustPills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-body font-500"
              style={{
                background: "rgba(30,45,74,0.5)",
                border: "1px solid rgba(42,63,106,0.7)",
                color: "#8B9CC8",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00D4AA" }} />
              {pill}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full max-w-3xl"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-4 py-4 rounded-card"
              style={{
                background: "rgba(17,24,39,0.8)",
                border: "1px solid rgba(30,45,74,0.8)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="font-mono font-bold text-[22px]" style={{ color: "#FF6B2B" }}>
                {stat.value}
              </span>
              <span className="text-[11px] font-body text-center" style={{ color: "#8B9CC8" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0A0E1A)" }}
      />
    </section>
  );
}
