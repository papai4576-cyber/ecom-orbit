"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "Cr+", prefix: "₹", label: "Revenue Generated for Clients" },
  { value: 200, suffix: "+", prefix: "", label: "D2C Brands Launched" },
  { value: 7, suffix: "", prefix: "", label: "Channels Managed Under One Roof" },
  { value: 3.5, suffix: "X", prefix: "", label: "Average Blended ROAS" },
  { value: 90, suffix: "+", prefix: "", label: "Average PageSpeed Score" },
];

function useCounter(target: number, duration = 1500, started: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(parseFloat(start.toFixed(target % 1 !== 0 ? 1 : 0)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return value;
}

function StatCard({ stat, started }: { stat: (typeof stats)[0]; started: boolean }) {
  const count = useCounter(stat.value, 1500, started);
  return (
    <div
      className="flex flex-col items-center gap-2 px-6 py-8 rounded-card transition-all duration-300 group cursor-default"
      style={{
        background: "#111827",
        border: "1px solid #1E2D4A",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,43,0.4)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(255,107,43,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#1E2D4A";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <span className="font-mono font-700 leading-none" style={{ fontSize: "clamp(36px,5vw,52px)", color: "#FF6B2B" }}>
        {stat.prefix}{count}{stat.suffix}
      </span>
      <span className="text-[13px] font-body text-center" style={{ color: "#8B9CC8" }}>
        {stat.label}
      </span>
    </div>
  );
}

export function StatsStrip() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section"
      style={{ background: "#0A0E1A" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
