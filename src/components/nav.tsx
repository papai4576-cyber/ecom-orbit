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
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-card border border-border p-3 shadow-card"
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
              )}
            </div>

            {[
              { label: "Marketplaces", href: "/services/marketplace-management" },
              { label: "Quick Commerce", href: "/services/quick-commerce" },
              { label: "Case Studies", href: "/case-studies" },
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
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20a%20free%20ecommerce%20audit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-border-bright hover:border-teal hover:text-teal transition-colors"
              aria-label="WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-text-secondary">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
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
              { label: "Case Studies", href: "/case-studies" },
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
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20a%20free%20ecommerce%20audit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary justify-center"
                style={{ borderColor: "#25D366", color: "#25D366" }}
                onClick={() => setMobileOpen(false)}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
