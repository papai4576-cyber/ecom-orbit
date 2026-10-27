import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact Ecom Orbit | Free Ecommerce Consultation India",
  description: "Book a free ecommerce audit. Email or call — we respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="tone-white relative overflow-hidden px-5 pb-[clamp(72px,10vw,128px)] pt-[112px] sm:px-8 sm:pt-[144px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(50% 50% at 15% 0%, rgba(96, 140, 220, 0.26), transparent 70%)" }}
        />
        <div className="container relative grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal className="flex flex-col items-start gap-6">
            <span className="mono text-[12px] uppercase tracking-[0.08em] text-[var(--link)]">Contact</span>
            <h1 className="display max-w-[14ch] !text-[clamp(36px,5.2vw,68px)]">
              Tell us what&apos;s not working. <span className="accent-text">We&apos;ll tell you why.</span>
            </h1>
            <p className="lead">We reply within 24 hours.</p>
            <dl className="mt-4 flex w-full flex-col gap-6 border-t pt-6" style={{ borderColor: "var(--rule)" }}>
              <div className="flex flex-col gap-1">
                <dt className="caption">Email</dt>
                <dd>
                  <a href="mailto:connect@ecomorbit.in" className="link-more">
                    connect@ecomorbit.in
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="caption">Hours</dt>
                <dd className="small" style={{ color: "var(--fg)" }}>
                  Mon–Sat, 10am–7pm IST
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="card glass">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
