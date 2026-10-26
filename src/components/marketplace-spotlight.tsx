"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const doYouHave = [
  "A+ Content with ingredient comparison tables",
  "Sponsored Products targeting your brand name",
  "Brand Registry protecting your listings",
  "Flipkart Assured badge activated",
  "Nykaa and Myntra listings live",
  "ACOS under 18%",
];

const platformStats = [
  { platform: "Amazon India", metric: "<18% ACOS target" },
  { platform: "Flipkart", metric: "Assured + PLA" },
  { platform: "Meesho", metric: "213M+ users" },
  { platform: "Myntra + Nykaa", metric: "Premium positioning" },
];

export function MarketplaceSpotlight() {
  return (
    <section className="section tone-light">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="card !p-0 overflow-hidden">
            <div className="px-6 py-5 sm:px-8">
              <h3 className="h4">Your competitor vs. you on Amazon</h3>
            </div>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="caption">
                  <th scope="col" className="px-6 pb-3 font-medium sm:px-8">Listing basics</th>
                  <th scope="col" className="px-3 pb-3 text-center font-medium">Competitor</th>
                  <th scope="col" className="px-3 pb-3 pr-6 text-center font-medium sm:pr-8">You (now)</th>
                </tr>
              </thead>
              <tbody>
                {doYouHave.map((item) => (
                  <tr key={item} className="border-t" style={{ borderColor: "var(--rule)" }}>
                    <td className="small px-6 py-3.5 sm:px-8">{item}</td>
                    <td className="px-3 py-3.5 text-center">
                      <Check size={18} className="mx-auto" style={{ color: "var(--link)" }} aria-label="Yes" />
                    </td>
                    <td className="px-3 py-3.5 pr-6 text-center sm:pr-8">
                      <X size={18} className="mx-auto" style={{ color: "var(--fg3)" }} aria-label="No" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <span className="eyebrow">Marketplace Management</span>
            <h2 className="h2">
              Your products are listed. <span className="accent-text">Are they actually selling?</span>
            </h2>
            <p className="body">
              There&apos;s a difference between being listed on Amazon and{" "}
              <strong className="font-semibold text-[var(--fg)]">winning on Amazon</strong>. Most brands treat
              marketplaces as an afterthought. Ecom Orbit treats them as revenue engines.
            </p>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-6" style={{ borderColor: "var(--rule)" }}>
              {platformStats.map((p) => (
                <div key={p.platform}>
                  <dt className="text-[17px] font-medium">{p.platform}</dt>
                  <dd className="mono mt-1 text-[13px]" style={{ color: "var(--link)" }}>
                    {p.metric}
                  </dd>
                </div>
              ))}
            </dl>

            <Link href="/contact" className="link-more w-fit">
              Get a free marketplace audit
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
