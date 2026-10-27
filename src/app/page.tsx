import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { OrbitScrub } from "@/components/orbit-scrub";
import { Statement } from "@/components/statement";
import { PlatformMarquee } from "@/components/platform-marquee";
import { IndustryRail } from "@/components/industry-rail";
import { ProcessPath } from "@/components/process-path";
import { ProofBento } from "@/components/proof-bento";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OrbitScrub />
        <Statement />
        <PlatformMarquee />
        <IndustryRail />
        <ProcessPath />
        <ProofBento />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
