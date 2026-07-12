import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, X } from "lucide-react";
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
          {service.cta.replace(" →", "")} <ArrowRight size={18} />
        </Link>
      </PageHero>

      {/* Pain points */}
      <section className="section" style={{ background: "#111827" }}>
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-10">
            <h2 className="font-display font-600" style={{ fontSize: "var(--text-h3)", color: "#F0F4FF" }}>
              What you&apos;re probably dealing with:
            </h2>
          </Reveal>
          <StaggerGroup className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {service.painPoints.map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-start gap-3 p-4 rounded-card" style={{ background: "#0A0E1A", border: "1px solid #1E2D4A" }}>
                  <X size={18} style={{ color: "#F59E0B" }} className="shrink-0 mt-0.5" />
                  <span className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>{point}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* How we do it differently */}
      <section className="section" style={{ background: "#0A0E1A" }}>
        <div className="container mx-auto px-6">
          <Reveal className="max-w-3xl mx-auto text-center flex flex-col gap-4">
            <span className="eyebrow mx-auto">HOW WE DO IT DIFFERENTLY</span>
            <p className="font-display font-600 leading-relaxed" style={{ fontSize: "var(--text-h4)", color: "#F0F4FF" }}>
              {service.approach}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section" style={{ background: "#111827" }}>
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-10">
            <h2 className="font-display font-600" style={{ fontSize: "var(--text-h3)", color: "#F0F4FF" }}>
              What&apos;s Included
            </h2>
          </Reveal>
          <StaggerGroup className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {service.deliverables.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3">
                  <Check size={18} style={{ color: "#00D4AA" }} className="shrink-0 mt-0.5" />
                  <span className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal className="flex justify-center mt-10">
            <div
              className="px-6 py-4 rounded-card text-center"
              style={{ background: "rgba(255,107,43,0.06)", border: "1px solid rgba(255,107,43,0.2)" }}
            >
              <span className="font-mono font-700 text-[18px]" style={{ color: "#FF6B2B" }}>{service.benchmarkStat}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "#111827" }}>
        <div className="container mx-auto px-6 max-w-2xl">
          <Reveal className="text-center mb-10">
            <h2 className="font-display font-600" style={{ fontSize: "var(--text-h3)", color: "#F0F4FF" }}>
              Frequently Asked
            </h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {service.faqs.map((faq) => (
              <Reveal key={faq.question}>
                <div className="p-5 rounded-card" style={{ background: "#0A0E1A", border: "1px solid #1E2D4A" }}>
                  <h4 className="font-display font-600 text-[15px] mb-2" style={{ color: "#F0F4FF" }}>
                    {faq.question}
                  </h4>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>{faq.answer}</p>
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
