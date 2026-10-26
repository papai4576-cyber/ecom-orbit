import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy | Ecom Orbit",
  description: "How Ecom Orbit collects, uses, and stores information submitted through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="LEGAL"
        headline="Privacy Policy"
        subheadline="Last updated: July 2026"
      />
      <section className="section tone-light">
        <div className="container max-w-2xl flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="h4">
              What we collect
            </h2>
            <p className="body">
              When you submit the contact or free-audit form on this website, we collect the name, email address,
              phone number, monthly revenue range, and message you provide. We don&apos;t collect any information
              beyond what you type into the form — no tracking pixels, no analytics cookies profiling you across
              other sites.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="h4">
              How we store it
            </h2>
            <p className="body">
              Form submissions are written directly to a private Google Sheet that only Ecom Orbit&apos;s founders
              can access. We don&apos;t use a third-party CRM or marketing platform to store your details.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="h4">
              How we use it
            </h2>
            <p className="body">
              We use your details only to respond to your enquiry — by email, phone, or WhatsApp if you&apos;ve
              given us that number. We never sell, rent, or share your information with third parties, and we
              don&apos;t send marketing emails unless you separately opt in.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="h4">
              Your rights
            </h2>
            <p className="body">
              You can ask us to delete any information you&apos;ve submitted at any time by emailing{" "}
              <a href="mailto:connect@ecomorbit.in" className="accent-text underline underline-offset-2">connect@ecomorbit.in</a>. We&apos;ll
              remove it within 7 days.
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
