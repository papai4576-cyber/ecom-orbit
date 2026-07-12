"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Store Setup", desc: "Shopify & WooCommerce", href: "/services/store-setup" },
  { name: "Performance Marketing", desc: "Meta, Google Ads", href: "/services/performance-marketing" },
  { name: "SEO & Content", desc: "Organic growth", href: "/services/seo-content" },
  { name: "Marketplace Management", desc: "Amazon, Flipkart, Meesho", href: "/services/marketplace-management" },
  { name: "Quick Commerce", desc: "Blinkit, Zepto, Instamart", href: "/services/quick-commerce" },
  { name: "Logistics & Ops", desc: "Shiprocket, Delhivery", href: "/services/logistics-operations" },
  { name: "End-to-End Management", desc: "All 7 channels, one team", href: "/services/end-to-end" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(10,14,26,0.92)"
            : "rgba(10,14,26,0.75)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(30,45,74,0.6)" : "none",
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="Ecom Orbit"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className="font-display font-700 text-[17px] tracking-tight"
              style={{ color: "#F0F4FF" }}
            >
              Ecom <span style={{ color: "#FF6B2B" }}>Orbit</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-[13px] font-body font-500 transition-colors duration-200 text-text-secondary hover:text-text-primary">
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                  <div
                    className="rounded-card border border-border p-3 shadow-card"
                    style={{ background: "#0D1120" }}
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-bg-tertiary transition-colors"
                      >
                        <span className="text-[13px] font-500 text-text-primary">{s.name}</span>
                        <span className="text-[11px] text-text-muted">{s.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {[
              { label: "Marketplaces", href: "/services/marketplace-management" },
              { label: "Quick Commerce", href: "/services/quick-commerce" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-body font-500 text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA row */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-[13px] px-5 py-2.5">
              Get Free Audit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden flex flex-col pt-16"
          style={{ background: "#060A14" }}
        >
          <div className="flex flex-col gap-1 p-6 overflow-y-auto">
            <p className="eyebrow mb-4">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-bg-secondary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-[15px] font-500 text-text-primary">{s.name}</span>
              </Link>
            ))}
            <div className="h-px bg-border my-4" />
            {[
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-[15px] text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/contact" className="btn-primary justify-center" onClick={() => setMobileOpen(false)}>
                Get Your Free Ecommerce Audit →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
