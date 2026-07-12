import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      <PageHero eyebrow="THE ECOM ORBIT BLOG" headline="Practical Ecommerce, Not Growth-Hack Theatre." />
      <section className="section" style={{ background: "#0A0E1A" }}>
        <div className="container mx-auto px-6">
          <StaggerGroup className="grid md:grid-cols-2 gap-5">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="card flex flex-col gap-3 no-underline group h-full">
                  <span className="text-[11px] font-mono uppercase tracking-widest" style={{ color: "#00D4AA" }}>
                    {post.category}
                  </span>
                  <h2 className="font-display font-600 text-[18px] leading-snug" style={{ color: "#F0F4FF" }}>
                    {post.title}
                  </h2>
                  <p className="text-[14px] leading-relaxed" style={{ color: "#8B9CC8" }}>{post.excerpt}</p>
                  <div
                    className="flex items-center gap-1.5 text-[13px] font-500 mt-auto transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: "#FF6B2B" }}
                  >
                    Read Post <ArrowRight size={14} />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </PageShell>
  );
}
