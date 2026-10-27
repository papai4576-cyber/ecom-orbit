import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { TickRows } from "@/components/page/blocks";

export const metadata: Metadata = {
  title: "Free Ecommerce Audit India | Ecom Orbit",
  description: "Get a free, no-obligation audit of your store, ad accounts, marketplace listings & logistics setup within 48 hours.",
};

const included = [
  "Store speed and conversion teardown",
  "Ad account review",
  "Marketplace listing audit",
  "Quick commerce viability check",
  "Logistics and RTO audit",
];

export default function FreeAuditPage() {
  return (
    <PageShell>
      <section className="tone-white relative overflow-hidden px-5 pb-[clamp(72px,10vw,128px)] pt-[112px] sm:px-8 sm:pt-[144px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(50% 50% at 15% 0%, rgba(96, 140, 220, 0.26), transparent 70%), radial-gradient(40% 40% at 90% 80%, rgba(255, 107, 43, 0.09), transparent 70%)" }}
        />
        <div className="container relative grid items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal className="flex flex-col items-start gap-6">
            <span className="mono text-[12px] uppercase tracking-[0.08em] text-[var(--link)]">Free audit</span>
            <h1 className="display max-w-[15ch] !text-[clamp(36px,5.2vw,68px)]">
              We&apos;ll tear down your store <span className="accent-text">before your competitor does.</span>
            </h1>
            <p className="lead max-w-[480px]">A written audit in 48 hours, with numbered fixes. Keep it whether or not we work together.</p>
            <div className="mt-2 w-full">
              <TickRows items={included} />
            </div>
            <p className="caption">Every audit is done personally by one of our two founders.</p>
          </Reveal>

          <Reveal delay={0.15} className="card glass">
            <ContactForm />
            <p className="caption mt-4 text-center">No credit card. No sales call unless you ask for one.</p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
