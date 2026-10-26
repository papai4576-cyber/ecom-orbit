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
    <footer className="tone-light px-5 pb-8 pt-14 sm:px-8">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="logo-crop" aria-label="Ecom Orbit home">
              <Image src="/logo.png" alt="Ecom Orbit" width={1120} height={928} />
            </Link>
            <p className="small max-w-[28ch]">
              India&apos;s 7-channel ecommerce partner. We build, market, and scale online brands across every
              channel — from Shopify to Blinkit to Amazon.
            </p>
          </div>

          <nav aria-label="Services" className="flex flex-col gap-3">
            <h4 className="text-[12px] font-semibold" style={{ color: "var(--fg)" }}>Services</h4>
            <div className="flex flex-col gap-2">
              {serviceLinks.map((l) => (
                <Link key={l.href} href={l.href} className="footer-link">
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Company" className="flex flex-col gap-3">
            <h4 className="text-[12px] font-semibold" style={{ color: "var(--fg)" }}>Company</h4>
            <div className="flex flex-col gap-2">
              {companyLinks.map((l) => (
                <Link key={l.href} href={l.href} className="footer-link">
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-semibold" style={{ color: "var(--fg)" }}>Get in touch</h4>
            <div className="flex flex-col gap-3">
              <div>
                <p className="caption mb-0.5">Email</p>
                <a href="mailto:connect@ecomorbit.in" className="footer-link !text-[14px]">
                  connect@ecomorbit.in
                </a>
              </div>
              <div>
                <p className="caption mb-0.5">Hours</p>
                <p className="small">Mon–Sat, 10am–7pm IST</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="rule mt-12" />
        <div className="flex flex-col items-start justify-between gap-3 pt-5 sm:flex-row sm:items-center">
          <p className="caption">© 2025 Ecom Orbit. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Sitemap", href: "/sitemap.xml" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="footer-link">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
