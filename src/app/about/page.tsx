import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { StatRow } from "@/components/page/static-blocks";
import { LitText } from "@/components/motion/lit-text";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About Ecom Orbit | India's 7-Channel Ecommerce Agency",
  description:
    "Why Ecom Orbit exists, what we believe, and how we run every channel — store, ads, marketplaces, quick commerce & logistics.",
};

const principles = [
  { title: "Revenue over vanity metrics.", body: "If a metric doesn't map to money, it's not in your report." },
  { title: "Transparent pricing, always.", body: "Our tiers are on this website. No \"hop on a call\" games." },
  { title: "Category depth over generic playbooks.", body: "Fashion, beauty and food run on different economics, so we specialize." },
  { title: "An honest no over a dishonest yes.", body: "If a channel isn't right for you yet, we'll say so, even if it costs us the fee." },
];

const stats = [
  { value: "2", label: "founders on every account" },
  { value: "7", label: "channels managed" },
  { value: "3.5X", label: "average ROAS" },
  { value: "90+", label: "average PageSpeed" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        headline={
          <>
            We got tired of watching good brands get <span className="accent-text">bad advice.</span>
          </>
        }
        subheadline="Five vendors, one job, and nobody owning your revenue."
      />

      {/* The story, as one sentence you read your way through */}
      <section className="section tone-light">
        <div className="container">
          <LitText
            text="Nobody owned the whole picture. When ROAS dropped, the ad agency blamed the website. When the website was slow, the freelancer blamed the app stack. When Blinkit onboarding stalled for four months, nobody was accountable."
            className="max-w-[34ch] text-[clamp(26px,4vw,52px)]"
          />
          <Reveal>
            <p className="lead mt-10 max-w-[44ch]">
              So we built the agency that owns all of it, and the one number that matters: your revenue.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles: title on the left, one line on the right */}
      <section className="section tone-white">
        <div className="container">
          <Reveal>
            <h2 className="h2 mb-10 sm:mb-14">What we believe</h2>
          </Reveal>
          <StaggerGroup className="border-t border-white/10" staggerDelay={0.08}>
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="grid gap-3 border-b border-white/10 py-7 sm:grid-cols-[1.2fr_1fr] sm:items-center sm:gap-12 sm:py-9">
                  <h3 className="text-[clamp(22px,3vw,36px)] font-light leading-[1.15] tracking-[-0.025em] text-[var(--fg)]">{p.title}</h3>
                  <p className="small sm:max-w-[34ch]">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section tone-dark">
        <div className="container flex flex-col gap-14 sm:gap-20">
          <Reveal>
            <p className="max-w-[30ch] text-[clamp(24px,3.4vw,44px)] font-light leading-[1.15] tracking-[-0.03em] text-[var(--fg)]">
              Run by operators who&apos;ve managed these accounts directly, not account managers relaying instructions.
            </p>
          </Reveal>
          <StatRow stats={stats} />
        </div>
      </section>

      <CtaSection headline="See what we'd find in your store" />
    </PageShell>
  );
}
