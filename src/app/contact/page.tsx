import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact Ecom Orbit | Free Ecommerce Consultation India",
  description: "Book a free ecommerce audit. Email or call — we respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="LET'S TALK REVENUE"
        headline="Tell us what's not working. We'll tell you why."
        subheadline="Fill this out, or email us directly — we respond within 24 hours."
      />
      <section className="section tone-white !pt-[clamp(32px,5vw,64px)]">
        <div className="container grid max-w-4xl gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="card">
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card flex h-fit flex-col gap-6">
              <div>
                <h3 className="h4 mb-2">Prefer to just talk?</h3>
                <p className="small">Email us directly and we&apos;ll get back to you within 24 hours.</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="caption">Email</span>
                <a href="mailto:connect@ecomorbit.in" className="link-more w-fit">
                  connect@ecomorbit.in
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="caption">Hours</span>
                <span className="small" style={{ color: "var(--fg)" }}>Mon–Sat, 10am–7pm IST</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
