import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { LinkRows } from "@/components/page/static-blocks";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Ecommerce Services India | Store Setup, Ads, SEO & Logistics | Ecom Orbit",
  description: "End-to-end ecommerce services for Indian brands across 7 channels.",
};

export default function ServicesIndexPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        headline={
          <>
            Everything your ecommerce brand needs. <span className="accent-text">Every channel.</span>
          </>
        }
        subheadline="Pick what you need, or let us run all of it."
      />
      <section className="tone-light px-5 pb-[clamp(72px,10vw,128px)] pt-2 sm:px-8">
        <div className="container">
          <LinkRows rows={services.map((s) => ({ href: `/services/${s.slug}`, title: s.name, note: s.tagline }))} />
        </div>
      </section>
      <CtaSection headline="Not sure which channel to start with?" subheadline="The free audit will tell you." />
    </PageShell>
  );
}
