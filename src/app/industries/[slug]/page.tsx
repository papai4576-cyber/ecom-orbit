import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
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
          Get Your Free Ecommerce Audit
        </Link>
      </PageHero>

      <section className="section tone-light">
        <div className="container">
          <Reveal className="section-head">
            <h2 className="h2">What we handle</h2>
          </Reveal>
          <StaggerGroup className="mx-auto grid max-w-3xl gap-x-10 gap-y-4 sm:grid-cols-2">
            {industry.whatWeHandle.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 shrink-0" style={{ color: "var(--link)" }} />
                  <span className="small" style={{ color: "var(--fg)" }}>{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-14 text-center">
            <span className="stat-value text-[clamp(20px,2.6vw,26px)]" style={{ color: "var(--link)" }}>
              {industry.benchmark}
            </span>
          </Reveal>
        </div>
      </section>

      <CtaSection headline={`Ready to grow in ${industry.name}?`} />
    </PageShell>
  );
}
