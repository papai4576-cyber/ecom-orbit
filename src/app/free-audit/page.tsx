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
      <section
        className="section bg-grid"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,107,43,0.08) 0%, transparent 65%),
            linear-gradient(rgba(30,45,74,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,45,74,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "auto, 60px 60px, 60px 60px",
          background: "#0A0E1A",
        }}
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal className="flex flex-col gap-6">
            <span className="eyebrow w-fit">FREE, NO-OBLIGATION</span>
            <h1
              className="font-display font-bold leading-[1.1] tracking-tight"
              style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
            >
              We&apos;ll Tear Down Your Store
              <br />
              <span style={{ color: "#FF6B2B" }}>Before Your Competitor Does.</span>
            </h1>
            <p className="text-[16px] leading-relaxed" style={{ color: "#8B9CC8" }}>
              In 48 hours, we&apos;ll hand you a written audit of your Shopify/WooCommerce store, ad accounts,
              marketplace listings, and logistics setup — with specific, numbered fixes. Keep it whether or not you
              ever work with us.
            </p>

            <StaggerGroup className="flex flex-col gap-3 mt-2">
              {included.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3">
                    <Check size={18} style={{ color: "#00D4AA" }} className="shrink-0 mt-0.5" />
                    <span className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <p className="text-[13px] mt-2" style={{ color: "#4A5A7A" }}>
              Every audit is done personally by one of our two founders — not a template report or a junior
              analyst&apos;s checklist.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="card">
            <ContactForm />
            <p className="text-[12px] text-center mt-4" style={{ color: "#4A5A7A" }}>
              No credit card. No sales call unless you ask for one. Just the audit.
            </p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
