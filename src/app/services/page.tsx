import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Store, TrendingUp, Search, ShoppingCart, Zap, Package, Layers } from "lucide-react";
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
            Everything Your Ecommerce Brand Needs.
            <br />
            <span style={{ color: "#FF6B2B" }}>Every Channel.</span> One Team.
          </>
        }
        subheadline="Seven services. One team. Pick what you need, or let us run all of it."
      />
      <section className="section" style={{ background: "#0A0E1A" }}>
        <div className="container mx-auto px-6">
          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="card group flex flex-col gap-5 no-underline h-full">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(255,107,43,0.1)", color: "#FF6B2B" }}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-600 text-[18px] mb-2 leading-snug" style={{ color: "#F0F4FF" }}>
                        {service.name}
                      </h3>
                      <p className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>
                        {service.shortDescription}
                      </p>
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-[13px] font-500 mt-1 transition-all duration-200 group-hover:gap-2.5"
                      style={{ color: "#00D4AA" }}
                    >
                      Learn more <ArrowRight size={14} />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>
      <CtaSection headline="Not Sure Which Channel to Start With?" subheadline="The free audit will tell you." />
    </PageShell>
  );
}
