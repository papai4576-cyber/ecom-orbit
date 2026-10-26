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
    <section className="section tone-white !pb-[clamp(40px,6vw,80px)]">
      <div className="container">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h2 !text-[clamp(36px,6vw,64px)]">{headline}</h1>
          {subheadline && <p className="lead">{subheadline}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
