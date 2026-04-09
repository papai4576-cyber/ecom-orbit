"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, X, Check } from "lucide-react";

const pains = [
  "Freelancer built the Shopify store — but no one owns the conversion rate",
  "Separate agency for Meta ads — campaigns don't match the landing pages",
  "Amazon specialist who sends a PDF report once a month",
  "A Blinkit contact who stopped responding after onboarding",
  "Still tracking inventory in a spreadsheet at midnight",
  "60% of your time managing vendors instead of building your product",
];

const fixes = [
  "One team owns every channel — store, ads, SEO, marketplaces, QC",
  "Campaigns built from the same brief as the landing pages",
  "Weekly status calls + live dashboard, not monthly PDFs",
  "Active dark store management + replenishment every week",
  "Inventory synced across all channels automatically",
  "You get to focus on your product. We handle the rest.",
];

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 70);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      style={{ background: "#111827" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="eyebrow reveal">The Real Problem</span>
          <h2
            className="font-display font-bold leading-[1.1] tracking-tight reveal max-w-3xl"
            style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
          >
            You&apos;re the unpaid project manager
            <br />
            of your own ecommerce operation.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-14">
          {/* Pain side */}
          <div
            className="reveal rounded-card p-7 flex flex-col gap-5"
            style={{ background: "#0A0E1A", border: "1px solid rgba(239,68,68,0.15)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(239,68,68,0.12)", color: "#EF4444" }}
              >
                <X size={16} />
              </div>
              <h3 className="font-display font-600 text-[17px]" style={{ color: "#F0F4FF" }}>
                What most D2C founders deal with
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {pains.map((pain) => (
                <div key={pain} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                    style={{ background: "rgba(239,68,68,0.12)", color: "#EF4444" }}
                  >
                    <X size={10} />
                  </div>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>
                    {pain}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fix side */}
          <div
            className="reveal rounded-card p-7 flex flex-col gap-5"
            style={{ background: "#0A0E1A", border: "1px solid rgba(0,212,170,0.2)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(0,212,170,0.12)", color: "#00D4AA" }}
              >
                <Check size={16} />
              </div>
              <h3 className="font-display font-600 text-[17px]" style={{ color: "#F0F4FF" }}>
                What Ecom Orbit replaces it with
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {fixes.map((fix) => (
                <div key={fix} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                    style={{ background: "rgba(0,212,170,0.12)", color: "#00D4AA" }}
                  >
                    <Check size={10} />
                  </div>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>
                    {fix}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pull quote */}
        <div
          className="reveal mx-auto max-w-2xl text-center p-8 rounded-card mb-8"
          style={{
            background: "rgba(255,107,43,0.05)",
            border: "1px solid rgba(255,107,43,0.2)",
          }}
        >
          <p
            className="font-display font-600 text-[20px] leading-relaxed"
            style={{ color: "#F0F4FF" }}
          >
            &ldquo;One team. One Slack channel. One monthly report.{" "}
            <span style={{ color: "#FF6B2B" }}>Every channel working as one system.</span>&rdquo;
          </p>
        </div>

        <div className="flex justify-center reveal">
          <Link href="/contact" className="btn-primary">
            Let&apos;s Fix This <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
