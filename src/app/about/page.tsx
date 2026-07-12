import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { CountUp } from "@/components/motion/count-up";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About Ecom Orbit | India's 7-Channel Ecommerce Agency",
  description:
    "Why Ecom Orbit exists, what we believe, and how we run every channel — store, ads, marketplaces, quick commerce & logistics — under one team.",
};

const principles = [
  {
    title: "Revenue over vanity metrics.",
    body: "We don't report impressions to clients who need ROAS. If a metric doesn't map to money, it doesn't go in your monthly report.",
  },
  {
    title: "Transparent pricing, always.",
    body: "You'll never get a 'let's hop on a call to discuss pricing' response from us. Our tiers are on this website.",
  },
  {
    title: "Category depth over generic playbooks.",
    body: "Fashion, beauty, and food/FMCG each have different unit economics, return rates, and channel mixes. We specialize instead of running the same template on every brand.",
  },
  {
    title: "Honest 'no' over a dishonest 'yes.'",
    body: "If quick commerce or a specific marketplace isn't right for your brand yet, we'll tell you — even though it costs us the fee.",
  },
];

const stats = [
  { value: 2, label: "Founders on Every Account" },
  { value: 7, label: "Channels Managed" },
  { value: 3.5, suffix: "X", decimals: 1, label: "Average ROAS" },
  { value: 90, suffix: "+", label: "Average PageSpeed Score" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="WHY ECOM ORBIT EXISTS"
        headline={
          <>
            We Got Tired of Watching
            <br />
            Good Brands Get <span style={{ color: "#FF6B2B" }}>Bad Advice.</span>
          </>
        }
        subheadline="Ecom Orbit started because Indian ecommerce founders kept hiring five vendors to do one job — and every one of those vendors had an incentive to defend their own channel, not your revenue."
      />

      <section className="section" style={{ background: "#111827" }}>
        <div className="container mx-auto px-6 max-w-2xl">
          <Reveal className="flex flex-col gap-5">
            <p className="text-[15px] leading-relaxed" style={{ color: "#8B9CC8" }}>
              Every founder we&apos;d talk to had the same setup: a Shopify freelancer, a Meta ads agency, an SEO
              consultant, an Amazon specialist, and a logistics guy nobody could reach on weekends. Nobody owned the
              whole picture. When ROAS dropped, the ad agency blamed the website. When the website was slow, the
              freelancer blamed the app stack. When Blinkit onboarding stalled for four months, nobody was even
              accountable for it.
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "#8B9CC8" }}>
              We built Ecom Orbit to be the team that owns all of it — store, marketing, marketplaces, quick
              commerce, logistics — under one roof, with one person actually responsible for the number that
              matters: your revenue.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "#0A0E1A" }}>
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-10">
            <h2 className="font-display font-600" style={{ fontSize: "var(--text-h3)", color: "#F0F4FF" }}>
              What We Believe
            </h2>
          </Reveal>
          <StaggerGroup className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="card h-full">
                  <h3 className="font-display font-600 text-[16px] mb-2" style={{ color: "#F0F4FF" }}>{p.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section" style={{ background: "#111827" }}>
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <Reveal>
            <p className="text-[15px] leading-relaxed" style={{ color: "#8B9CC8" }}>
              Ecom Orbit is run by operators who&apos;ve managed Shopify builds, Meta and Google ad accounts, Amazon
              and Flipkart seller accounts, and Blinkit/Zepto dark-store relationships directly — not account
              managers relaying instructions to a subcontractor.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "#0A0E1A" }}>
        <div className="container mx-auto px-6">
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="flex flex-col items-center gap-2 px-6 py-8 rounded-card h-full" style={{ background: "#111827", border: "1px solid #1E2D4A" }}>
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    className="font-mono font-700 leading-none"
                    style={{ fontSize: "clamp(28px,4vw,40px)", color: "#FF6B2B" }}
                  />
                  <span className="text-[13px] font-body text-center" style={{ color: "#8B9CC8" }}>{stat.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection headline="See What We'd Find in Your Store" ctaLabel="Get Your Free Ecommerce Audit" />
    </PageShell>
  );
}
