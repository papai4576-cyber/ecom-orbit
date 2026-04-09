"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "We were doing ₹3 lakhs a month, mostly through walk-ins. Six months with Ecom Orbit and we crossed ₹28 lakhs online. The Meta ads and the Shopify redesign together changed everything.",
    name: "Priya Sharma",
    role: "Founder, Jaipur Ethnicwear",
    industry: "Fashion",
    stat: "₹28L/mo",
    color: "#FF6B2B",
  },
  {
    quote:
      "We launched with zero online presence. Ecom Orbit built everything — the store, the ad strategy, the WhatsApp retention. We hit ₹15 lakhs in month four. The 5.1X ROAS is real.",
    name: "Arjun Mehta",
    role: "Co-founder, Mumbai Skincare",
    industry: "Beauty",
    stat: "5.1X ROAS",
    color: "#00D4AA",
  },
  {
    quote:
      "Blinkit had rejected us twice when we tried to onboard ourselves. Ecom Orbit got us live in 3 weeks and we added ₹4.8 lakhs in new QC revenue within 60 days. This channel is now our fastest grower.",
    name: "Rahul Desai",
    role: "Founder, Mumbai Protein Snacks",
    industry: "Food & FMCG",
    stat: "+₹4.8L QC",
    color: "#818CF8",
  },
  {
    quote:
      "Our Amazon account was being hijacked and our listings were on page 4. Now we're on page 1, ACOS is under 17%, and we've added Flipkart and Nykaa as new channels. 7.7X revenue growth in 4 months.",
    name: "Sunita Kapoor",
    role: "Founder, Delhi Haircare",
    industry: "Marketplace",
    stat: "7.7X Revenue",
    color: "#F59E0B",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
          <span className="eyebrow reveal">Founder Stories</span>
          <h2
            className="font-display font-bold leading-[1.1] tracking-tight reveal"
            style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}
          >
            Founders Who Stopped
            <br />
            <span style={{ color: "#FF6B2B" }}>Guessing, Started Growing.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card reveal"
              style={{
                borderLeftColor: t.color,
                transitionDelay: `${i * 90}ms`,
              }}
            >
              <div className="relative z-10 flex flex-col gap-4">
                {/* Stat badge */}
                <div className="flex items-start justify-between gap-3">
                  <span
                    className="text-[10px] font-mono font-500 px-2.5 py-1 rounded-pill"
                    style={{
                      background: `${t.color}15`,
                      color: t.color,
                      border: `1px solid ${t.color}30`,
                    }}
                  >
                    {t.industry}
                  </span>
                  <span className="font-mono font-700 text-[18px]" style={{ color: t.color }}>
                    {t.stat}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-[15px] leading-relaxed" style={{ color: "#C5D0E8" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "#1E2D4A" }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-display font-700 text-[15px]"
                    style={{ background: `${t.color}20`, color: t.color }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-[14px] font-body font-500" style={{ color: "#F0F4FF" }}>
                      {t.name}
                    </div>
                    <div className="text-[12px]" style={{ color: "#4A5A7A" }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
