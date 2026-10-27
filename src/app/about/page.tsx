import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { CountUp } from "@/components/motion/count-up";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About Ecom Orbit | India's 7-Channel Ecommerce Agency",
  description:
    "Why Ecom Orbit exists, what we believe, and how we run every channel — store, ads, marketplaces, quick commerce & logistics.",
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
  { value: 2, label: "Founders on every account" },
  { value: 7, label: "Channels managed" },
  { value: 3.5, suffix: "X", decimals: 1, label: "Average ROAS" },
  { value: 90, suffix: "+", label: "Average PageSpeed score" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="WHY ECOM ORBIT EXISTS"
        headline={
          <>
            We got tired of watching good brands get <span className="accent-text">bad advice.</span>
          </>
        }
        subheadline="Ecom Orbit started because Indian ecommerce founders kept hiring five vendors to do one job — and every one of those vendors had an incentive to defend their own channel, not your revenue."
      />

      <section className="section tone-light">
        <div className="narrow">
          <Reveal className="flex flex-col gap-6">
            <p className="lead" style={{ color: "var(--fg)" }}>
              Every founder we&apos;d talk to had the same setup: a Shopify freelancer, a Meta ads agency, an SEO
              consultant, an Amazon specialist, and a logistics guy nobody could reach on weekends. Nobody owned the
              whole picture.
            </p>
            <p className="body">
              When ROAS dropped, the ad agency blamed the website. When the website was slow, the freelancer blamed
              the app stack. When Blinkit onboarding stalled for four months, nobody was even accountable for it.
            </p>
            <p className="body">
              We built Ecom Orbit to be the team that owns all of it — store, marketing, marketplaces, quick commerce,
              logistics — under one roof, with one person actually responsible for the number that matters: your
              revenue.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section tone-white">
        <div className="container">
          <Reveal className="section-head">
            <h2 className="h2">What we believe</h2>
          </Reveal>
          <StaggerGroup className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="card h-full">
                  <h3 className="h4 mb-2">{p.title}</h3>
                  <p className="small">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section tone-dark">
        <div className="narrow flex flex-col gap-14 text-center">
          <Reveal>
            <p className="h3">
              Ecom Orbit is run by operators who&apos;ve managed Shopify builds, Meta and Google ad accounts, Amazon
              and Flipkart seller accounts, and Blinkit/Zepto dark-store relationships directly — not account managers
              relaying instructions to a subcontractor.
            </p>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="flex flex-col items-center gap-3">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                    className="stat-value"
                    style={{ fontSize: "clamp(40px, 6vw, 56px)" }}
                  />
                  <span className="small max-w-[14ch]">{stat.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <CtaSection headline="See what we'd find in your store" ctaLabel="Get Your Free Ecommerce Audit" />
    </PageShell>
  );
}
