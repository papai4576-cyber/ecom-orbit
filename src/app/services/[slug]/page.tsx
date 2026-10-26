import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { services, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return { title: service.seoTitle, description: service.seoDescription };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <PageShell>
      <PageHero
        eyebrow={service.name.toUpperCase()}
        headline={service.heroHeadline}
        subheadline={service.heroSubheadline}
      >
        <Link href="/contact" className="btn-primary mt-2">
          {service.cta.replace(" →", "")}
        </Link>
      </PageHero>

      <section className="section tone-light">
        <div className="container">
          <Reveal className="section-head">
            <h2 className="h2">What you&apos;re probably dealing with</h2>
          </Reveal>
          <StaggerGroup className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {service.painPoints.map((point) => (
              <StaggerItem key={point}>
                <div className="card flex h-full items-start gap-3">
                  <X size={18} className="mt-0.5 shrink-0" style={{ color: "var(--fg3)" }} />
                  <span className="small" style={{ color: "var(--fg)" }}>{point}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section tone-dark">
        <div className="container">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <span className="eyebrow">HOW WE DO IT DIFFERENTLY</span>
            <p className="h3">{service.approach}</p>
          </Reveal>
        </div>
      </section>

      <section className="section tone-white">
        <div className="container">
          <Reveal className="section-head">
            <h2 className="h2">What&apos;s included</h2>
          </Reveal>
          <StaggerGroup className="mx-auto grid max-w-3xl gap-x-10 gap-y-4 sm:grid-cols-2">
            {service.deliverables.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 shrink-0" style={{ color: "var(--link)" }} />
                  <span className="small" style={{ color: "var(--fg)" }}>{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="mt-14 text-center">
            <span className="stat-value text-[clamp(22px,3vw,28px)]" style={{ color: "var(--link)" }}>
              {service.benchmarkStat}
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section tone-light">
        <div className="narrow">
          <Reveal className="section-head">
            <h2 className="h2">Frequently asked</h2>
          </Reveal>
          <div className="flex flex-col gap-3">
            {service.faqs.map((faq) => (
              <Reveal key={faq.question}>
                <div className="card">
                  <h3 className="h4 mb-2">{faq.question}</h3>
                  <p className="small">{faq.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection headline={service.heroHeadline} ctaLabel={service.cta.replace(" →", "")} />
    </PageShell>
  );
}
