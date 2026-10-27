"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const checklist = ["A+ Content", "Sponsored Products", "Brand Registry", "ACOS under 18%"];

/** Quick commerce and marketplaces as one bento: each tile is a different kind of picture, not a card of text. */
export function ProofBento() {
  return (
    <section className="section tone-white">
      <div className="container">
        <Reveal className="mb-12 sm:mb-16">
          <h2 className="h2 max-w-[13ch]">
            Quick commerce. Marketplaces. <span className="text-[var(--fg3)]">Where growth hides.</span>
          </h2>
        </Reveal>

        <StaggerGroup className="grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto]" staggerDelay={0.07}>
          {/* Wide: the ten-minute ring */}
          <StaggerItem className="lg:col-span-2">
            <div className="card flex h-full flex-col justify-between gap-8 sm:flex-row sm:items-center">
              <div className="flex max-w-[30ch] flex-col gap-3">
                <span className="mono text-[12px] text-[var(--link)]">Quick commerce</span>
                <h3 className="h3">Be on the shelf where orders arrive in 10 minutes.</h3>
                <Link href="/contact" className="link-more mt-3 w-fit">
                  Free viability assessment
                </Link>
              </div>
              <div className="relative mx-auto h-[168px] w-[168px] shrink-0 sm:mx-0 sm:h-[200px] sm:w-[200px]" aria-hidden="true">
                <svg viewBox="0 0 100 100" className="-rotate-90">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" />
                  <circle
                    className="loop-anim"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    style={{ animation: "ring-sweep 5s cubic-bezier(.4,0,.2,1) infinite alternate" }}
                  />
                </svg>
                <span className="stat-value absolute inset-0 flex items-center justify-center text-[clamp(32px,4vw,44px)]">10 min</span>
              </div>
            </div>
          </StaggerItem>

          {/* Tall: the listing checklist ticking itself off */}
          <StaggerItem className="lg:row-span-2">
            <div className="card flex h-full flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="mono text-[12px] text-[var(--link)]">Marketplaces</span>
                <h3 className="h3">Listed isn&apos;t winning.</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {checklist.map((item, i) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      className="loop-anim flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--on-accent)]"
                      style={{ animation: `tick-in 7s ${i * 0.7}s ease infinite` }}
                      aria-hidden="true"
                    >
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-[17px] tracking-tight text-[var(--fg)]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="link-more mt-auto w-fit">
                Free marketplace audit
              </Link>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card flex h-full flex-col justify-between gap-6">
              <span className="stat-value text-[clamp(44px,6vw,64px)]">₹240</span>
              <span className="small">average quick-commerce order</span>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="card flex h-full flex-col justify-between gap-6">
              <span className="stat-value text-[clamp(44px,6vw,64px)]">&lt;18%</span>
              <span className="small">ACOS target on Amazon</span>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
