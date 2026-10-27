import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { OrbitMark } from "@/components/page/orbit-mark";
import { serviceIcons } from "@/components/page/icons";
import { StrikeList, PillCloud } from "@/components/page/blocks";
import { FaqList, StatRow, NextUp } from "@/components/page/static-blocks";
import { LitText } from "@/components/motion/lit-text";
import { Reveal } from "@/components/motion/reveal";
import { services, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return { title: service.seoTitle, description: service.seoDescription };
}

const label = "mono text-[12px] uppercase tracking-[0.08em] text-[var(--link)]";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const next = services[(services.indexOf(service) + 1) % services.length];
  const cta = service.cta.replace(" →", "");

  return (
    <PageShell>
      <PageHero
        eyebrow={service.name}
        headline={service.heroHeadline}
        subheadline={service.tagline}
        visual={<OrbitMark Icon={serviceIcons[service.slug]} />}
      >
        <Link href="/contact" className="btn-primary">
          {cta}
        </Link>
      </PageHero>

      {/* The problem, struck through line by line */}
      <section className="section tone-light">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <h2 className="h2 mb-10 sm:mb-14">Sound familiar?</h2>
            </Reveal>
            <StrikeList items={service.painPoints} />
          </div>
        </div>
      </section>

      {/* The approach, set as one large sentence that lights up as you read */}
      <section className="section tone-white">
        <div className="container">
          <Reveal>
            <span className={label}>How we do it</span>
          </Reveal>
          <LitText text={service.approach} className="mt-6 max-w-[38ch] text-[clamp(23px,3.1vw,40px)]" />
        </div>
      </section>

      {/* What's included, as a cloud of pills */}
      <section className="section tone-dark">
        <div className="container">
          <Reveal>
            <h2 className="h2 mb-10 sm:mb-14">What&apos;s included</h2>
          </Reveal>
          <PillCloud items={service.deliverables} />
        </div>
      </section>

      {/* The numbers */}
      <section className="section tone-light">
        <div className="container">
          <StatRow stats={service.stats} />
        </div>
      </section>

      <section className="section tone-white">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="h2 mb-10 sm:mb-14">Questions, answered.</h2>
            </Reveal>
            <FaqList items={service.faqs} />
          </div>
        </div>
      </section>

      <section className="tone-light px-5 py-[clamp(56px,8vw,104px)] sm:px-8">
        <div className="container">
          <Reveal>
            <NextUp href={`/services/${next.slug}`} label="Next service" title={next.name} />
          </Reveal>
        </div>
      </section>

      <CtaSection headline="Want to see what we'd fix first?" ctaLabel={cta} />
    </PageShell>
  );
}
