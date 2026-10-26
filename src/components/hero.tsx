"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { OrbitDiagram } from "@/components/motion/orbit-diagram";

const specialties = [
  "Shopify & WooCommerce",
  "Meta & Google Ads",
  "Amazon & Flipkart",
  "Quick Commerce",
];

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  });

  return (
    <section className="tone-white relative overflow-hidden px-5 pb-0 pt-[104px] sm:px-8 sm:pt-[128px]">
      <div className="container flex flex-col items-center text-center">
        <motion.span {...rise(0)} className="eyebrow">
          India&apos;s 7-Channel Ecommerce Agency
        </motion.span>

        <motion.h1 {...rise(0.08)} className="display mt-4 max-w-[14ch] sm:max-w-[16ch]">
          Your Business Deserves a Store That Actually Sells.
        </motion.h1>

        <motion.p {...rise(0.18)} className="lead mt-6 max-w-[640px]">
          One team runs your Shopify store, your Amazon and Meesho accounts, and your Blinkit and Zepto listings —
          instead of <strong className="font-semibold text-[var(--fg)]">five vendors blaming each other</strong> when
          a launch goes sideways.
        </motion.p>

        <motion.div {...rise(0.28)} className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Link href="/contact" className="btn-primary">
            Get Your Free Ecommerce Audit
          </Link>
          <Link href="/services" className="link-more">
            Explore services
          </Link>
        </motion.div>

        <motion.p {...rise(0.38)} className="caption mt-8 max-w-[520px]">
          Specialists in {specialties.join(" · ")}
        </motion.p>

        {/* The product shot: seven channels, one team, drawn on a plain field and cropped by the section edge */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex w-full justify-center sm:mt-16"
          style={{ height: "clamp(260px, 46vw, 440px)", overflow: "hidden" }}
        >
          <div className="shrink-0">
            <OrbitDiagram size={680} labels className="!max-w-none scale-[0.56] origin-top sm:scale-[0.8] lg:scale-100" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
