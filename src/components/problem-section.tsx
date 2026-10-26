"use client";

import Link from "next/link";
import { ArrowRight, X, Check } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { ScatterDiagram } from "@/components/motion/scatter-diagram";
import { OrbitDiagram } from "@/components/motion/orbit-diagram";

const pains = [
  "Freelancer built the Shopify store — but no one owns the conversion rate",
  "Separate agency for Meta ads — campaigns don't match the landing pages",
  "Amazon specialist who sends a PDF report once a month",
  "A Blinkit contact who stopped responding after onboarding",
  "Still tracking inventory in a spreadsheet at midnight",
  "60% of your time managing vendors instead of building your product",
];

const fixes = [
  "One team owns every channel — store, ads, SEO, marketplaces, QC",
  "Campaigns built from the same brief as the landing pages",
  "Weekly status calls + live dashboard, not monthly PDFs",
  "Active dark store management + replenishment every week",
  "Inventory synced across all channels automatically",
  "You get to focus on your product. We handle the rest.",
];

export function ProblemSection() {
  return (
    <section className="section tone-dark">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">The Real Problem</span>
          <h2 className="h2">You&apos;re the unpaid project manager of your own ecommerce operation.</h2>
        </Reveal>

        <Reveal className="mb-16 flex items-center justify-center gap-6 sm:gap-14">
          <div className="flex flex-col items-center gap-3">
            <ScatterDiagram size={140} />
            <span className="caption">5 vendors, 0 system</span>
          </div>
          <ArrowRight size={22} className="shrink-0" style={{ color: "var(--fg3)" }} />
          <div className="flex flex-col items-center gap-3">
            <OrbitDiagram size={140} />
            <span className="caption" style={{ color: "var(--link)" }}>1 team, 1 system</span>
          </div>
        </Reveal>

        <StaggerGroup className="mb-16 grid gap-4 lg:grid-cols-2">
          <StaggerItem>
            <div className="card flex h-full flex-col gap-6">
              <h3 className="h4">What most founders deal with</h3>
              <ul className="flex flex-col gap-4">
                {pains.map((pain) => (
                  <li key={pain} className="flex items-start gap-3">
                    <X size={18} className="mt-0.5 shrink-0" style={{ color: "var(--fg3)" }} />
                    <span className="small">{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="card flex h-full flex-col gap-6">
              <h3 className="h4">What Ecom Orbit replaces it with</h3>
              <ul className="flex flex-col gap-4">
                {fixes.map((fix) => (
                  <li key={fix} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0" style={{ color: "var(--link)" }} />
                    <span className="small" style={{ color: "var(--fg)" }}>{fix}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="h3">
            &ldquo;When something breaks, you call one team — not five, hoping someone owns it.{" "}
            <span className="accent-text">No handoffs, no finger-pointing, no chasing.</span>&rdquo;
          </p>
          <div className="mt-8">
            <Link href="/contact" className="link-more">
              Let&apos;s fix this
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
