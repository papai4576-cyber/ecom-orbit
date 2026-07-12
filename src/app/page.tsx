import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { MultiChannel } from "@/components/multi-channel";
import { StatsStrip } from "@/components/stats-strip";
import { ServicesGrid } from "@/components/services-grid";
import { ProblemSection } from "@/components/problem-section";
import { IndustryVerticals } from "@/components/industry-verticals";
import { ProcessTimeline } from "@/components/process-timeline";
import { QcSpotlight } from "@/components/qc-spotlight";
import { MarketplaceSpotlight } from "@/components/marketplace-spotlight";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <MultiChannel />
        <StatsStrip />
        <ServicesGrid />
        <ProblemSection />
        <IndustryVerticals />
        <ProcessTimeline />
        <QcSpotlight />
        <MarketplaceSpotlight />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
