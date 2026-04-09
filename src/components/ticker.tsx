"use client";

const items = [
  "₹50Cr+ Revenue Generated",
  "200+ Brands Launched",
  "7 Channels Managed",
  "3.5X Average ROAS",
  "90+ PageSpeed Scores",
  "Amazon SPN Certified",
  "Blinkit Onboarding Partner",
  "<18% Amazon ACOS",
  "30-Day Launch Guarantee",
  "One Team. Zero Vendor Juggling.",
];

export function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-4 border-y"
      style={{
        background: "#080C18",
        borderColor: "rgba(30,45,74,0.5)",
      }}
    >
      <div className="ticker-inner flex items-center gap-0 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-mono font-500 text-[13px] px-6"
              style={{ color: "#FF6B2B" }}
            >
              {item}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: "rgba(255,107,43,0.4)" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
