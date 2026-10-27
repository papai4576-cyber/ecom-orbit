"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Mobile-only floating CTA. It appears once the hero is behind you, and steps aside when it would
 * be redundant or in the way: near the footer, on form pages, and whenever the page's own primary
 * button is already on screen.
 */
export function StickyCta() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [nearEnd, setNearEnd] = useState(false);
  const [covered, setCovered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 520);
      setNearEnd(window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 1100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Hide while any other primary button in the page is visible, so two orange buttons never compete.
  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll("main .btn-primary"));
    if (!buttons.length) {
      setCovered(false);
      return;
    }
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setCovered(visible.size > 0);
    });
    buttons.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, [pathname]);

  if (pathname === "/contact" || pathname === "/free-audit") return null;

  const show = scrolled && !nearEnd && !covered;

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 pt-12 transition-all duration-300 lg:hidden ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ background: "linear-gradient(to top, rgba(3,6,13,0.92) 30%, rgba(3,6,13,0))" }}
      aria-hidden={!show}
    >
      <Link
        href="/contact"
        tabIndex={show ? 0 : -1}
        className={`btn-primary w-full max-w-[420px] !shadow-[0_10px_40px_-8px_rgba(255,107,43,0.6)] ${show ? "pointer-events-auto" : ""}`}
      >
        Get Your Free Ecommerce Audit
      </Link>
    </div>
  );
}
