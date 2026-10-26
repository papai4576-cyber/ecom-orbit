import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { PageHero } from "@/components/page-hero";
import { StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Ecommerce Blog India | Ecom Orbit",
  description: "Practical, India-specific ecommerce guidance on RTO, quick commerce, marketplaces & online growth.",
};

export default function BlogIndexPage() {
  return (
    <PageShell>
      <PageHero eyebrow="THE ECOM ORBIT BLOG" headline="Practical ecommerce, not growth-hack theatre." />
      <section className="section tone-light !pt-[clamp(32px,5vw,64px)]">
        <div className="container">
          <StaggerGroup className="grid gap-4 md:grid-cols-2">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="card flex h-full flex-col gap-3">
                  <span className="caption" style={{ color: "var(--link)" }}>{post.category}</span>
                  <h2 className="h3">{post.title}</h2>
                  <p className="small">{post.excerpt}</p>
                  <span className="link-more mt-auto !text-[15px]">Read post</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </PageShell>
  );
}
