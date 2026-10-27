"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ShoppingBag, Megaphone, Search, Store, Zap, Truck, LayoutGrid, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";

interface Channel {
  label: string;
  Icon: LucideIcon;
  slug: string;
  text: string;
}

const bySlug = (slug: string) => services.find((s) => s.slug === slug)?.shortDescription ?? "";

const CHANNELS: Channel[] = [
  { label: "Store", Icon: ShoppingBag, slug: "store-setup", text: bySlug("store-setup") },
  { label: "Ads", Icon: Megaphone, slug: "performance-marketing", text: bySlug("performance-marketing") },
  { label: "SEO", Icon: Search, slug: "seo-content", text: bySlug("seo-content") },
  { label: "Marketplaces", Icon: Store, slug: "marketplace-management", text: bySlug("marketplace-management") },
  { label: "Quick Commerce", Icon: Zap, slug: "quick-commerce", text: bySlug("quick-commerce") },
  { label: "Logistics", Icon: Truck, slug: "logistics-operations", text: bySlug("logistics-operations") },
  {
    label: "End-to-End",
    Icon: LayoutGrid,
    slug: "end-to-end",
    text: "Website, marketplaces, quick commerce and logistics, run together and reported monthly. You focus on your product.",
  },
];

const N = CHANNELS.length;
const STEP = 360 / N;

/** Each channel holds still for a beat, then the orbit turns to the next one. */
function dwell(p: number) {
  const x = Math.min(Math.max(p, 0), 1) * (N - 1);
  const i = Math.min(Math.floor(x), N - 2);
  const f = x - i;
  const s = f < 0.4 ? 0 : f > 0.6 ? 1 : (f - 0.4) / 0.2;
  return i + s * s * (3 - 2 * s);
}

function Heading() {
  return (
    <>
      <span className="eyebrow">Seven channels</span>
      <h2 className="h2 mt-3 max-w-[14ch]">Every place your customers buy.</h2>
    </>
  );
}

function Panel({ channel }: { channel: Channel }) {
  return (
    <>
      <h3 className="h3">{channel.label}</h3>
      <p className="body mt-3 max-w-[44ch]">{channel.text}</p>
      <Link href={`/services/${channel.slug}`} className="link-more mt-5">
        See how we run it
      </Link>
    </>
  );
}

/** Reduced-motion and fallback layout: the same seven channels as a plain list. */
function StaticList() {
  return (
    <section className="section tone-dark">
      <div className="container">
        <div className="mb-12">
          <Heading />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((c) => (
            <div key={c.label} className="card flex flex-col gap-4">
              <c.Icon size={28} strokeWidth={1.5} />
              <Panel channel={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scrub() {
  const outer = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  const t = useTransform(scrollYProgress, dwell);
  const rotate = useSpring(useTransform(t, (v) => -v * STEP), { stiffness: 120, damping: 24, mass: 0.6 });
  const counter = useTransform(rotate, (v) => -v);

  useMotionValueEvent(t, "change", (v) => setActive(Math.min(N - 1, Math.max(0, Math.round(v)))));

  const channel = CHANNELS[active];

  return (
    <section
      ref={outer}
      className="tone-dark relative"
      style={{ height: `calc(100svh + ${(N - 1) * 62}svh)` }}
      aria-label="The seven channels Ecom Orbit runs"
    >
      <div
        className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden px-5 pb-6 pt-[96px] sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:pt-[60px]"
        style={{ maxWidth: "var(--content-max)", margin: "0 auto" }}
      >
        <div className="order-2 min-h-[190px] lg:order-1 lg:flex-1">
          <div className="hidden lg:block lg:mb-12">
            <Heading />
          </div>
          <div aria-live="off">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={channel.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <Panel channel={channel} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="order-1 mx-auto mb-6 lg:order-2 lg:mb-0 lg:flex-1" aria-hidden="true">
          <div className="mb-3 text-center lg:hidden">
            <Heading />
          </div>
          <div
            className="relative mx-auto aspect-square w-[min(78vw,36svh)] lg:w-[min(40vw,64svh,560px)]"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
              <circle cx="50" cy="50" r="38" fill="none" stroke="var(--rule)" strokeWidth="0.35" />
              <circle cx="50" cy="50" r="22" fill="none" stroke="var(--rule)" strokeWidth="0.25" />
              {/* spoke from the hub to the focus position at the top */}
              <line x1="50" y1="50" x2="50" y2="12" stroke="var(--accent)" strokeWidth="0.35" />
            </svg>

            <div
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-semibold"
              style={{
                width: "20%",
                height: "20%",
                background: "var(--accent)",
                color: "var(--on-accent)",
                fontSize: "clamp(13px, 2.4svh, 22px)",
                letterSpacing: "-0.03em",
              }}
            >
              You
            </div>

            <motion.div className="absolute inset-0" style={{ rotate }}>
              {CHANNELS.map(({ label, Icon }, i) => {
                const a = (i * STEP * Math.PI) / 180 - Math.PI / 2;
                const x = 50 + 38 * Math.cos(a);
                const y = 50 + 38 * Math.sin(a);
                const on = i === active;
                return (
                  <motion.div
                    key={label}
                    className="absolute flex items-center justify-center rounded-full"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      width: "15%",
                      height: "15%",
                      x: "-50%",
                      y: "-50%",
                      rotate: counter,
                      background: on ? "var(--accent)" : "var(--surface)",
                      color: on ? "var(--on-accent)" : "var(--fg2)",
                      transition: "background-color .25s ease, color .25s ease",
                    }}
                    animate={{ scale: on ? 1.22 : 0.9 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Icon size="46%" strokeWidth={1.6} />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Crawlable and screen-reader copy for all seven, independent of scroll position */}
      <ul className="sr-only">
        {CHANNELS.map((c) => (
          <li key={c.label}>
            <Link href={`/services/${c.slug}`}>{c.label}</Link>: {c.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function OrbitScrub() {
  const reduce = useReducedMotion();
  return reduce ? <StaticList /> : <Scrub />;
}
