import type { Metadata } from "next";
import Link from "next/link";
import { Store, TrendingUp, Search, ShoppingCart, Zap, Package, Layers } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Ecommerce Services India | Store Setup, Ads, SEO & Logistics | Ecom Orbit",
  description: "End-to-end ecommerce services for Indian brands across 7 channels.",
};

const icons = [Store, TrendingUp, Search, ShoppingCart, Zap, Package, Layers];

export default function ServicesIndexPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="OUR SERVICES"
        headline={
          <>
            Everything your ecommerce brand needs. <span className="accent-text">Every channel.</span> One team.
          </>
        }
        subheadline="Seven services. One team. Pick what you need, or let us run all of it."
      />
      <section className="section tone-light !pt-[clamp(32px,5vw,64px)]">
        <div className="container">
          <StaggerGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="card flex h-full flex-col gap-5">
                    <Icon size={28} strokeWidth={1.5} />
                    <div className="flex-1">
                      <h3 className="h4 mb-2">{service.name}</h3>
                      <p className="small">{service.shortDescription}</p>
                    </div>
                    <span className="link-more !text-[15px]">Learn more</span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>
      <CtaSection headline="Not sure which channel to start with?" subheadline="The free audit will tell you." />
    </PageShell>
  );
}
