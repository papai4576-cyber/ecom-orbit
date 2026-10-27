"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Shirt, Sparkles, Store, Utensils, type LucideIcon } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";

interface Industry {
  name: string;
  metric: string;
  label: string;
  href: string;
  Icon: LucideIcon;
}

// One number per category, taken from the existing industry copy.
const industries: Industry[] = [
  { name: "Fashion & Apparel", metric: "<20%", label: "our target return rate", href: "/industries/fashion-apparel", Icon: Shirt },
  { name: "Beauty & Personal Care", metric: "60–80%", label: "typical gross margins", href: "/industries/beauty-personal-care", Icon: Sparkles },
  { name: "Food & FMCG", metric: "48%+", label: "repeat purchase rate", href: "/industries/food-fmcg", Icon: Utensils },
  { name: "Offline → Online", metric: "30 days", label: "to launch on every channel", href: "/industries/offline-to-online", Icon: Store },
];

/** A horizontal rail of tall cards: one icon, one number, one name. Swipe on mobile, arrows on desktop. */
export function IndustryRail() {
  const rail = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const nudge = (dir: 1 | -1) => rail.current?.scrollBy({ left: dir * 340, behavior: reduce ? "auto" : "smooth" });

  return (
    <section className="section tone-white overflow-hidden">
      <div className="container">
        <Reveal className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <h2 className="h2 max-w-[14ch]">
            Built for your category. <span className="text-[var(--fg3)]">Not everyone&apos;s.</span>
          </h2>
          <div className="hidden gap-2 sm:flex">
            <button onClick={() => nudge(-1)} aria-label="Previous" className="glass flex h-11 w-11 items-center justify-center rounded-full text-[var(--fg)] transition-colors hover:bg-white/15">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => nudge(1)} aria-label="Next" className="glass flex h-11 w-11 items-center justify-center rounded-full text-[var(--fg)] transition-colors hover:bg-white/15">
              <ChevronRight size={20} />
            </button>
          </div>
        </Reveal>
      </div>

      <div
        ref={rail}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          paddingInline: "max(var(--pad-x), calc((100vw - var(--content-max)) / 2))",
          scrollPaddingInline: "max(var(--pad-x), calc((100vw - var(--content-max)) / 2))",
        }}
      >
        {industries.map(({ name, metric, label, href, Icon }) => (
          <Link
            key={name}
            href={href}
            className="card group flex h-[400px] w-[76vw] max-w-[320px] shrink-0 snap-start flex-col justify-between sm:h-[440px]"
          >
            <div className="relative h-24 w-24" aria-hidden="true">
              <span className="absolute inset-0 animate-[spin_26s_linear_infinite] rounded-full border border-dashed border-white/25 motion-reduce:animate-none" />
              <span className="absolute inset-3 rounded-full border border-white/10" />
              <Icon className="absolute inset-0 m-auto text-[var(--accent-bright)]" size={30} strokeWidth={1.4} />
            </div>

            <div className="flex flex-col gap-2">
              <span className="stat-value text-[clamp(40px,5vw,52px)]">{metric}</span>
              <span className="small">{label}</span>
              <div className="mt-5 flex items-center justify-between border-t pt-4" style={{ borderColor: "var(--rule)" }}>
                <span className="h4">{name}</span>
                <ArrowUpRight size={20} className="shrink-0 text-[var(--fg3)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-bright)]" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
