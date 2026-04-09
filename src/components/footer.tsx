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
  { label: "Case Studies", href: "/case-studies" },
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
                <a href="mailto:hello@ecomiorbit.in" className="text-[13px]" style={{ color: "#8B9CC8" }}>
                  hello@ecomiorbit.in
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: "#4A5A7A" }}>Hours</p>
                <p className="text-[13px]" style={{ color: "#8B9CC8" }}>Mon–Sat, 10am–7pm IST</p>
              </div>
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20a%20free%20ecommerce%20audit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-pill text-[13px] font-600 w-fit"
                style={{
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.3)",
                  color: "#25D366",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
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
