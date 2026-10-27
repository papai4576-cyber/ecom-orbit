import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { industryIcons } from "@/components/page/icons";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Fashion, Beauty, Food & Offline-to-Online | Ecom Orbit",
  description: "Category-specific ecommerce growth for Indian brands in fashion, beauty, food/FMCG & offline-to-online retail.",
};

export default function IndustriesIndexPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        headline={
          <>
            Not a generalist. <span className="accent-text">A specialist in your world.</span>
          </>
        }
      />
      <section className="tone-light px-5 pb-[clamp(72px,10vw,128px)] pt-2 sm:px-8">
        <div className="container">
          <StaggerGroup className="grid gap-4 md:grid-cols-2">
            {industries.map((ind) => {
              const Icon = industryIcons[ind.slug];
              return (
                <StaggerItem key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="card group flex h-full min-h-[340px] flex-col justify-between gap-10">
                    <div className="relative h-24 w-24" aria-hidden="true">
                      <span className="absolute inset-0 animate-[spin_26s_linear_infinite] rounded-full border border-dashed border-white/25 motion-reduce:animate-none" />
                      <span className="absolute inset-3 rounded-full border border-white/10" />
                      <Icon className="absolute inset-0 m-auto text-[var(--accent-bright)]" size={30} strokeWidth={1.4} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="stat-value text-[clamp(36px,5vw,52px)]">{ind.stat.value}</span>
                      <span className="small">{ind.stat.label}</span>
                      <div className="mt-4 flex items-center justify-between gap-4 border-t pt-4" style={{ borderColor: "var(--rule)" }}>
                        <span>
                          <span className="h3 block">{ind.name}</span>
                          <span className="small mt-1 block">{ind.tagline}</span>
                        </span>
                        <ArrowUpRight size={22} className="shrink-0 text-[var(--fg3)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-bright)]" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>
      <CtaSection headline="Don't see your category?" subheadline="We still might be a fit. The free audit will tell you." />
    </PageShell>
  );
}
