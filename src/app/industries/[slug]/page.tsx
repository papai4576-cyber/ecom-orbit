import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { OrbitMark } from "@/components/page/orbit-mark";
import { industryIcons } from "@/components/page/icons";
import { TickRows } from "@/components/page/blocks";
import { StatRow, NextUp } from "@/components/page/static-blocks";
import { Reveal } from "@/components/motion/reveal";
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

  const next = industries[(industries.indexOf(industry) + 1) % industries.length];

  return (
    <PageShell>
      <PageHero
        eyebrow={industry.name}
        headline={industry.heroHeadline}
        subheadline={industry.tagline}
        visual={<OrbitMark Icon={industryIcons[industry.slug]} />}
      >
        <Link href="/contact" className="btn-primary">
          Get Your Free Ecommerce Audit
        </Link>
      </PageHero>

      {/* Two columns: the question on the left, the checklist on the right */}
      <section className="section tone-light">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <h2 className="h2 lg:sticky lg:top-32">What we handle</h2>
          </Reveal>
          <TickRows items={industry.whatWeHandle} />
        </div>
      </section>

      <section className="section tone-dark">
        <div className="container">
          <StatRow stats={[industry.stat]} />
        </div>
      </section>

      <section className="tone-white px-5 py-[clamp(56px,8vw,104px)] sm:px-8">
        <div className="container">
          <Reveal>
            <NextUp href={`/industries/${next.slug}`} label="Next category" title={next.name} />
          </Reveal>
        </div>
      </section>

      <CtaSection headline={`Ready to grow in ${industry.name}?`} />
    </PageShell>
  );
}
