import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service | Ecom Orbit",
  description: "The terms that apply when you use this website or engage Ecom Orbit for services.",
};

export default function TermsOfServicePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="LEGAL"
        headline="Terms of Service"
        subheadline="Last updated: July 2026"
      />
      <section className="section tone-light">
        <div className="container max-w-2xl flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="h4">
              Who we are
            </h2>
            <p className="body">
              Ecom Orbit is an India-based ecommerce consultancy run by two founders. This website
              (ecomorbit.in) is operated by Ecom Orbit for the purpose of describing our services and taking
              enquiries — it is not itself a store or a platform that processes payments or orders.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="h4">
              Using this website
            </h2>
            <p className="body">
              You&apos;re free to browse this site and submit the contact or free-audit form. Please don&apos;t use
              the forms to submit false information, spam, or attempt to interfere with how the site or its
              underlying services function.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="h4">
              The free audit
            </h2>
            <p className="body">
              The free ecommerce audit offered on this site is exactly that — free and no-obligation. It doesn&apos;t
              create any contract, retainer, or ongoing obligation between you and Ecom Orbit. Any paid engagement
              beyond the audit is agreed separately, in writing, with its own scope and pricing.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="h4">
              Content on this site
            </h2>
            <p className="body">
              Stats, benchmarks, and figures referenced on this site (ROAS, PageSpeed, ACOS, and similar) are
              approximate, illustrative, and based on our own work — they&apos;re not guarantees of results for
              your specific brand. Actual outcomes vary by category, budget, and starting point.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="h4">
              Questions
            </h2>
            <p className="body">
              Reach out to{" "}
              <a href="mailto:connect@ecomorbit.in" className="accent-text underline underline-offset-2">connect@ecomorbit.in</a> for
              anything not covered here.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
