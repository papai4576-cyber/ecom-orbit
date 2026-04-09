import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { MultiChannel } from "@/components/multi-channel";
import { StatsStrip } from "@/components/stats-strip";
import { ServicesGrid } from "@/components/services-grid";
import { CaseStudies } from "@/components/case-studies";
import { ProblemSection } from "@/components/problem-section";
import { IndustryVerticals } from "@/components/industry-verticals";
import { ProcessTimeline } from "@/components/process-timeline";
import { Testimonials } from "@/components/testimonials";
import { QcSpotlight } from "@/components/qc-spotlight";
import { MarketplaceSpotlight } from "@/components/marketplace-spotlight";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { WhatsappFloat } from "@/components/whatsapp-float";

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
        <CaseStudies />
        <ProblemSection />
        <IndustryVerticals />
        <ProcessTimeline />
        <Testimonials />
        <QcSpotlight />
        <MarketplaceSpotlight />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
