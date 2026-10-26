"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

const trustItems = [
  "Response within 24 hours",
  "India-focused expertise",
  "No vanity metrics, only revenue",
];

export function FinalCta() {
  return (
    <section className="section tone-dark">
      <div className="container">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center">
          <span className="eyebrow">Let&apos;s Build Your Ecommerce Orbit</span>

          <h2 className="display !text-[clamp(38px,7vw,76px)]">
            Ready to stop leaving <span className="accent-text">revenue on the table?</span>
          </h2>

          <p className="lead max-w-[600px]">
            Get a free, no-obligation ecommerce audit. We&apos;ll analyze your store, ad accounts, marketplace
            listings, and logistics — and show you exactly where the growth opportunities are. No commitment. No hard
            sell. Just honest insights from people who live and breathe Indian ecommerce.
          </p>

          <Link href="/contact" className="btn-primary">
            Get Your Free Ecommerce Audit
          </Link>

          <ul className="mt-2 flex flex-wrap justify-center gap-x-8 gap-y-2">
            {trustItems.map((item) => (
              <li key={item} className="caption">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
