import { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

interface PageHeroProps {
  eyebrow: string;
  headline: ReactNode;
  subheadline?: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, headline, subheadline, children }: PageHeroProps) {
  return (
    <section
      className="section bg-grid relative overflow-hidden"
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
      <div className="container mx-auto px-6 relative z-10">
        <Reveal className="flex flex-col items-center text-center gap-5 max-w-3xl mx-auto">
          <span className="eyebrow">{eyebrow}</span>
          <h1
            className="font-display font-bold leading-[1.1] tracking-tight"
            style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
          >
            {headline}
          </h1>
          {subheadline && (
            <p className="text-[17px] leading-relaxed" style={{ color: "#8B9CC8" }}>
              {subheadline}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
