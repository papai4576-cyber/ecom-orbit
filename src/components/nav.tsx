"use client";

import { useState } from "react";
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
  { name: "End-to-End Management", desc: "All 7 channels, one monthly report", href: "/services/end-to-end" },
];

const links = [
  { label: "Marketplaces", href: "/services/marketplace-management" },
  { label: "Quick Commerce", href: "/services/quick-commerce" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[110px]"
          style={{ background: "linear-gradient(to bottom, rgba(3,6,13,0.9), rgba(3,6,13,0))" }}
        />
        <nav aria-label="Main" className="relative flex w-full max-w-[1120px] items-center justify-between gap-3">
          <Link href="/" className="pointer-events-auto shrink-0" aria-label="Ecom Orbit home">
            <Image src="/logo-reversed.png" alt="Ecom Orbit" width={845} height={350} priority className="h-[38px] w-auto sm:h-[44px]" />
          </Link>

          <div className="nav-glass pointer-events-auto hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-link flex items-center gap-1 rounded-full px-4 py-2 hover:bg-white/10"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((o) => !o)}
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                  <div className="nav-glass rounded-[20px] p-2" style={{ background: "rgba(8, 13, 26, 0.92)" }}>
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex flex-col rounded-xl px-3 py-2.5 transition-colors hover:bg-white/10"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="text-[14px] font-medium text-[var(--fg,#f4f6fb)]">{s.name}</span>
                        <span className="text-[12px] text-white/55">{s.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link rounded-full px-4 py-2 hover:bg-white/10">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pointer-events-auto hidden lg:block">
            <Link href="/contact" className="btn-primary !min-h-[44px] !px-5 !py-2 !text-[14px]">
              Get Free Audit
            </Link>
          </div>

          <button
            className="nav-glass pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div
          className="tone-white fixed inset-0 z-40 overflow-y-auto pt-[76px] lg:hidden"
          style={{ background: "rgba(3, 6, 13, 0.96)", WebkitBackdropFilter: "blur(20px)", backdropFilter: "blur(20px)" }}
        >
          <div className="flex flex-col px-5 pb-10 pt-4">
            <p className="caption px-1 pb-2">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="border-b border-white/10 px-1 py-3.5 text-[19px] font-light tracking-tight text-[var(--fg)]"
                onClick={() => setMobileOpen(false)}
              >
                {s.name}
              </Link>
            ))}
            <p className="caption px-1 pb-2 pt-6">Company</p>
            {[
              { label: "Industries", href: "/industries" },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-white/10 px-1 py-3.5 text-[19px] font-light tracking-tight text-[var(--fg)]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-8" onClick={() => setMobileOpen(false)}>
              Get Your Free Ecommerce Audit
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
