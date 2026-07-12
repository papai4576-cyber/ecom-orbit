import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
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
        eyebrow="WE GO DEEP ON FOUR CATEGORIES"
        headline={
          <>
            Not a Generalist.
            <br />
            <span style={{ color: "#FF6B2B" }}>A Specialist in Your World.</span>
          </>
        }
      />
      <section className="section" style={{ background: "#0A0E1A" }}>
        <div className="container mx-auto px-6">
          <StaggerGroup className="grid md:grid-cols-2 gap-5">
            {industries.map((ind) => (
              <StaggerItem key={ind.slug}>
                <Link href={`/industries/${ind.slug}`} className="card flex flex-col gap-4 no-underline group h-full">
                  <span className="text-[11px] font-mono" style={{ color: "#FF6B2B" }}>{ind.eyebrow}</span>
                  <h3 className="font-display font-600 text-[20px]" style={{ color: "#F0F4FF" }}>{ind.name}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>{ind.heroSubheadline}</p>
                  <div
                    className="flex items-center gap-1.5 text-[13px] font-500 mt-auto transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: "#00D4AA" }}
                  >
                    Explore {ind.name} <ArrowRight size={14} />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
      <CtaSection headline="Don't See Your Category?" subheadline="We still might be a fit — the free audit will tell you." />
    </PageShell>
  );
}
