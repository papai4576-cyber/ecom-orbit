import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section
      className="section relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,107,43,0.1) 0%, transparent 70%), #0A0E1A",
      }}
    >
      <div className="container mx-auto px-6">
        <Reveal className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto">
          <span className="eyebrow">{eyebrow}</span>
          <h2
            className="font-display font-bold leading-[1.1] tracking-tight"
            style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
          >
            {headline}
          </h2>
          {subheadline && (
            <p className="text-[16px] leading-relaxed" style={{ color: "#8B9CC8" }}>
              {subheadline}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel} <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
