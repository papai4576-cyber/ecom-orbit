import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0A0E1A",
        "bg-secondary": "#111827",
        "bg-tertiary": "#1A2235",
        "bg-deep": "#060A14",
        orange: "#FF6B2B",
        "orange-glow": "rgba(255,107,43,0.2)",
        "orange-dim": "rgba(255,107,43,0.09)",
        teal: "#00D4AA",
        "teal-dim": "rgba(0,212,170,0.13)",
        "text-primary": "#F0F4FF",
        "text-secondary": "#8B9CC8",
        "text-muted": "#4A5A7A",
        border: "#1E2D4A",
        "border-bright": "#2A3F6A",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
        pill: "100px",
      },
      animation: {
        "ticker": "ticker 30s linear infinite",
        "pulse-wa": "pulse-wa 2.5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "orbit": "orbit 20s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-wa": {
          "0%, 100%": { boxShadow: "0 4px 24px rgba(37,211,102,0.4)" },
          "50%": { boxShadow: "0 4px 40px rgba(37,211,102,0.65)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,107,43,0.08) 0%, transparent 70%)",
        "grid-overlay":
          "linear-gradient(rgba(30,45,74,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,45,74,0.4) 1px, transparent 1px)",
        "orange-gradient":
          "linear-gradient(135deg, #FF6B2B 0%, #FF8C5A 100%)",
        "card-gradient":
          "linear-gradient(135deg, #111827 0%, #1A2235 100%)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      boxShadow: {
        "card": "0 8px 32px rgba(0,0,0,0.4)",
        "orange-glow": "0 0 40px rgba(255,107,43,0.25)",
        "teal-glow": "0 8px 32px rgba(0,212,170,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
