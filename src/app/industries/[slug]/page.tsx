import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { industries, getIndustryBySlug } from "@/data/industries";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};
  return { title: industry.seoTitle, description: industry.seoDescription };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();

  return (
    <PageShell>
      <PageHero eyebrow={industry.eyebrow} headline={industry.heroHeadline} subheadline={industry.heroSubheadline}>
        <Link href="/contact" className="btn-primary mt-2">
          Get Your Free Ecommerce Audit <ArrowRight size={18} />
        </Link>
      </PageHero>

      <section className="section" style={{ background: "#111827" }}>
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-10">
            <h2 className="font-display font-600" style={{ fontSize: "var(--text-h3)", color: "#F0F4FF" }}>
              What We Handle
            </h2>
          </Reveal>
          <StaggerGroup className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-10">
            {industry.whatWeHandle.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3">
                  <Check size={18} style={{ color: "#00D4AA" }} className="shrink-0 mt-0.5" />
                  <span className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="flex justify-center">
            <div
              className="px-6 py-4 rounded-card text-center"
              style={{ background: "rgba(255,107,43,0.06)", border: "1px solid rgba(255,107,43,0.2)" }}
            >
              <span className="font-mono font-700 text-[16px]" style={{ color: "#FF6B2B" }}>{industry.benchmark}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection headline={`Ready to Grow in ${industry.name}?`} />
    </PageShell>
  );
}
