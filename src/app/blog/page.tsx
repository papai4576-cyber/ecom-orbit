import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { LinkRows } from "@/components/page/static-blocks";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Ecommerce Blog India | Ecom Orbit",
  description: "Practical, India-specific ecommerce guidance on RTO, quick commerce, marketplaces & online growth.",
};

export default function BlogIndexPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Blog" headline="Practical ecommerce, not growth-hack theatre." />
      <section className="tone-light px-5 pb-[clamp(72px,10vw,128px)] pt-2 sm:px-8">
        <div className="container">
          <LinkRows rows={blogPosts.map((p) => ({ href: `/blog/${p.slug}`, title: p.title, meta: p.category }))} />
        </div>
      </section>
    </PageShell>
  );
}
