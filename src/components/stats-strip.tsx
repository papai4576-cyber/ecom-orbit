"use client";

import { CountUp } from "@/components/motion/count-up";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const stats = [
  { value: 2, suffix: "", prefix: "", label: "Founders on Every Account" },
  { value: 7, suffix: "", prefix: "", label: "Channels Managed Under One Roof" },
  { value: 3.5, suffix: "X", prefix: "", decimals: 1, label: "Average Blended ROAS" },
  { value: 90, suffix: "+", prefix: "", label: "Average PageSpeed Score" },
];

export function StatsStrip() {
  return (
    <section className="section" style={{ background: "#0A0E1A" }}>
      <div className="container mx-auto px-6">
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div
                className="flex flex-col items-center gap-2 px-6 py-8 rounded-card transition-all duration-300 group cursor-default h-full"
                style={{ background: "#111827", border: "1px solid #1E2D4A" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,43,0.4)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(255,107,43,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1E2D4A";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                  className="font-mono font-700 leading-none"
                  style={{ fontSize: "clamp(36px,5vw,52px)", color: "#FF6B2B" }}
                  duration={1.5}
                />
                <span className="text-[13px] font-body text-center" style={{ color: "#8B9CC8" }}>
                  {stat.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
