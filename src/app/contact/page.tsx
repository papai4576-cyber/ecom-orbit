import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact Ecom Orbit | Free Ecommerce Consultation India",
  description: "Book a free ecommerce audit. Email or call — we respond within 4 hours.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="LET'S TALK REVENUE"
        headline="Tell Us What's Not Working. We'll Tell You Why."
        subheadline="Fill this out, or email us directly — we respond within 4 hours."
      />
      <section className="section" style={{ background: "#0A0E1A" }}>
        <div className="container mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-10 max-w-4xl">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card flex flex-col gap-6 h-fit">
              <div>
                <h3 className="font-display font-600 text-[16px] mb-2" style={{ color: "#F0F4FF" }}>
                  Prefer to just talk?
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>
                  Email us directly and we&apos;ll get back to you within 4 hours.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-wider" style={{ color: "#4A5A7A" }}>Email</span>
                <a href="mailto:connect@ecomorbit.in" className="text-[14px]" style={{ color: "#8B9CC8" }}>
                  connect@ecomorbit.in
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-wider" style={{ color: "#4A5A7A" }}>Hours</span>
                <span className="text-[14px]" style={{ color: "#8B9CC8" }}>Mon–Sat, 10am–7pm IST</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
