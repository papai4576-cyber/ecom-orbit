"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BrowserMockupProps {
  children: ReactNode;
  label?: string;
  className?: string;
}

/** Abstract browser-window frame used to visualize "your store" without real screenshots. */
export function BrowserMockup({ children, label = "yourstore.in", className }: BrowserMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: 4 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{
        borderRadius: "14px",
        overflow: "hidden",
        border: "1px solid #1E2D4A",
        background: "#0D1120",
        boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "#111827", borderBottom: "1px solid #1E2D4A" }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF6B2B" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#00D4AA" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#2A3F6A" }} />
        </div>
        <div
          className="flex-1 mx-3 px-3 py-1 rounded-full text-[11px] font-mono text-center"
          style={{ background: "#0A0E1A", color: "#4A5A7A", border: "1px solid #1E2D4A" }}
        >
          {label}
        </div>
      </div>
      <div className="p-5">{children}</div>
    </motion.div>
  );
}
