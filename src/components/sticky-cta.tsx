"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Mobile-only floating CTA: appears once the hero is behind you, hides near the footer and on form pages. */
export function StickyCta() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearEnd = window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 1100;
      setShow(window.scrollY > 520 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname === "/contact" || pathname === "/free-audit") return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 transition-all duration-300 lg:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <Link href="/contact" className="btn-primary w-full max-w-[420px] !shadow-[0_10px_40px_-8px_rgba(255,107,43,0.6)]">
        Get Your Free Ecommerce Audit
      </Link>
    </div>
  );
}
