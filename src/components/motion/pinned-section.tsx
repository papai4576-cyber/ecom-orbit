"use client";

import { ReactNode, useRef } from "react";
import { MotionValue, useScroll } from "framer-motion";

interface PinnedSectionProps {
  children: (progress: MotionValue<number>) => ReactNode;
  /** How many viewport-heights of scroll space to allocate for the pin. */
  heightVh?: number;
  className?: string;
}

/**
 * Sticky-positioned scroll-storytelling wrapper. Renders a tall scroll track;
 * children are given scroll progress (0-1) across that track to drive their
 * own motion values while pinned via `position: sticky`.
 */
export function PinnedSection({ children, heightVh = 250, className }: PinnedSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={trackRef} style={{ height: `${heightVh}vh` }} className={className}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {children(scrollYProgress)}
      </div>
    </div>
  );
}
