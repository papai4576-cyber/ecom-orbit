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
  { name: "End-to-End Management", desc: "All 7 channels, one team", href: "/services/end-to-end" },
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
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50" aria-label="Main">
        <div className="mx-auto flex h-[60px] max-w-[1120px] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="logo-crop shrink-0" aria-label="Ecom Orbit home">
            <Image src="/logo.png" alt="Ecom Orbit" width={1120} height={928} priority />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="nav-link flex items-center gap-1"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((o) => !o)}
              >
                Services
                <ChevronDown size={13} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                  <div
                    className="rounded-card p-2"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      WebkitBackdropFilter: "saturate(180%) blur(20px)",
                      backdropFilter: "saturate(180%) blur(20px)",
                      boxShadow: "rgba(0, 0, 0, 0.22) 3px 5px 30px 0px",
                    }}
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-black/5"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="text-[14px] font-medium text-[#1d1d1f]">{s.name}</span>
                        <span className="text-[12px] text-black/55">{s.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary !min-h-[36px] !px-4 !py-1.5 !text-[13px]">
              Get Free Audit
            </Link>
          </div>

          <button
            className="lg:hidden -mr-2 p-2 text-[#1d1d1f]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="tone-white fixed inset-0 z-40 overflow-y-auto pt-[60px] lg:hidden">
          <div className="flex flex-col px-5 pb-10 pt-4">
            <p className="caption px-1 pb-2">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="border-b border-black/10 px-1 py-3.5 text-[19px] font-medium tracking-tight text-[#1d1d1f]"
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
                className="border-b border-black/10 px-1 py-3.5 text-[19px] font-medium tracking-tight text-[#1d1d1f]"
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
