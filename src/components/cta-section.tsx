import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

interface CtaSectionProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CtaSection({
  eyebrow = "LET'S BUILD YOUR ECOMMERCE ORBIT",
  headline,
  subheadline,
  ctaLabel = "Get Your Free Ecommerce Audit",
  ctaHref = "/contact",
}: CtaSectionProps) {
  return (
    <section className="section tone-dark">
      <div className="container">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h2">{headline}</h2>
          {subheadline && <p className="lead">{subheadline}</p>}
          <Link href={ctaHref} className="btn-primary mt-2">
            {ctaLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
