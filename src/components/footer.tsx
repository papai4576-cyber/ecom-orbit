"use client";

import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { label: "Shopify & WooCommerce Setup", href: "/services/store-setup" },
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "SEO & Content", href: "/services/seo-content" },
  { label: "Marketplace Management", href: "/services/marketplace-management" },
  { label: "Quick Commerce", href: "/services/quick-commerce" },
  { label: "Logistics & Operations", href: "/services/logistics-operations" },
  { label: "End-to-End Management", href: "/services/end-to-end" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Free Audit", href: "/free-audit" },
];

export function Footer() {
  return (
    <footer style={{ background: "#060A14", borderTop: "1px solid #1E2D4A" }}>
      {/* Main footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="Ecom Orbit" fill className="object-contain" />
              </div>
              <span className="font-display font-700 text-[17px]" style={{ color: "#F0F4FF" }}>
                Ecom <span style={{ color: "#FF6B2B" }}>Orbit</span>
              </span>
            </Link>
            <p className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>
              India&apos;s 7-Channel Ecommerce Partner
            </p>
            <p className="text-[13px] leading-relaxed" style={{ color: "#4A5A7A" }}>
              We build, market, and scale online brands across every channel — from Shopify to Blinkit to Amazon.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { name: "LinkedIn", icon: "in", href: "#" },
                { name: "Instagram", icon: "ig", href: "#" },
                { name: "X", icon: "x", href: "#" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-600 text-[14px] uppercase tracking-wider" style={{ color: "#F0F4FF" }}>
              Services
            </h4>
            <div className="flex flex-col gap-2">
              {serviceLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="footer-link"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-600 text-[14px] uppercase tracking-wider" style={{ color: "#F0F4FF" }}>
              Company
            </h4>
            <div className="flex flex-col gap-2">
              {companyLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="footer-link"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-600 text-[14px] uppercase tracking-wider" style={{ color: "#F0F4FF" }}>
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: "#4A5A7A" }}>Email</p>
                <a href="mailto:connect@ecomorbit.in" className="text-[13px]" style={{ color: "#8B9CC8" }}>
                  connect@ecomorbit.in
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: "#4A5A7A" }}>Hours</p>
                <p className="text-[13px]" style={{ color: "#8B9CC8" }}>Mon–Sat, 10am–7pm IST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1E2D4A" }}>
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px]" style={{ color: "#4A5A7A" }}>
            © 2025 Ecom Orbit. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((l) => (
              <Link
                key={l}
                href="#"
                className="text-[12px] transition-colors"
                style={{ color: "#4A5A7A" }}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
