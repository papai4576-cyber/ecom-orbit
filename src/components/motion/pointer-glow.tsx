"use client";

import { useEffect } from "react";

/** Feeds --mx/--my to the nearest .card under the pointer so cards can light up where you point. */
export function PointerGlow() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    let raf = 0;
    let last: PointerEvent | null = null;

    const apply = () => {
      raf = 0;
      const e = last;
      if (!e) return;
      const card = (e.target as Element | null)?.closest?.(".card") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const onMove = (e: PointerEvent) => {
      last = e;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
