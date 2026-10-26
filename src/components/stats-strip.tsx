"use client";

import { CountUp } from "@/components/motion/count-up";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";

const stats = [
  { value: 2, suffix: "", label: "Founders on every account" },
  { value: 7, suffix: "", label: "Channels managed under one roof" },
  { value: 3.5, suffix: "X", decimals: 1, label: "Average blended ROAS" },
  { value: 90, suffix: "+", label: "Average PageSpeed score" },
];

export function StatsStrip() {
  return (
    <section className="section tone-dark">
      <div className="container">
        <StaggerGroup className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="flex flex-col gap-3 md:items-center md:text-center">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                  className="stat-value"
                  style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
                  duration={1.5}
                />
                <span className="small max-w-[18ch]">{stat.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
