import type { Metadata } from "next";
import Link from "next/link";
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
            Not a generalist. <span className="accent-text">A specialist in your world.</span>
          </>
        }
      />
      <section className="section tone-light !pt-[clamp(32px,5vw,64px)]">
        <div className="container">
          <StaggerGroup className="grid gap-4 md:grid-cols-2">
            {industries.map((ind) => (
              <StaggerItem key={ind.slug}>
                <Link href={`/industries/${ind.slug}`} className="card flex h-full flex-col gap-4">
                  <span className="mono text-[12px]" style={{ color: "var(--link)" }}>{ind.eyebrow}</span>
                  <h3 className="h3">{ind.name}</h3>
                  <p className="small">{ind.heroSubheadline}</p>
                  <span className="link-more mt-auto !text-[15px]">Explore {ind.name}</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
      <CtaSection headline="Don't see your category?" subheadline="We still might be a fit — the free audit will tell you." />
    </PageShell>
  );
}
