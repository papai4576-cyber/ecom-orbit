import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ContactForm } from "@/components/contact-form";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Ecommerce Audit India | Ecom Orbit",
  description: "Get a free, no-obligation audit of your store, ad accounts, marketplace listings & logistics setup within 48 hours.",
};

const included = [
  "Store speed & conversion-rate teardown (PageSpeed, checkout friction, mobile UX)",
  "Ad account review — what's actually driving ROAS vs. burning spend",
  "Marketplace listing audit (Amazon/Flipkart/Meesho — wherever you're live)",
  "Quick commerce viability check, if you're not on Blinkit/Zepto/Instamart yet",
  "Logistics & RTO audit — where returns are actually coming from",
];

export default function FreeAuditPage() {
  return (
    <PageShell>
      <section className="section tone-white">
        <div className="container grid items-start gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow">FREE, NO-OBLIGATION</span>
            <h1 className="h2 !text-[clamp(36px,5.6vw,60px)]">
              We&apos;ll tear down your store <span className="accent-text">before your competitor does.</span>
            </h1>
            <p className="lead">
              In 48 hours, we&apos;ll hand you a written audit of your Shopify/WooCommerce store, ad accounts,
              marketplace listings, and logistics setup — with specific, numbered fixes. Keep it whether or not you
              ever work with us.
            </p>

            <StaggerGroup className="mt-2 flex flex-col gap-3">
              {included.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0" style={{ color: "var(--link)" }} />
                    <span className="small" style={{ color: "var(--fg)" }}>{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <p className="caption">
              Every audit is done personally by one of our two founders — not a template report or a junior
              analyst&apos;s checklist.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="card">
            <ContactForm />
            <p className="caption mt-4 text-center">
              No credit card. No sales call unless you ask for one. Just the audit.
            </p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
