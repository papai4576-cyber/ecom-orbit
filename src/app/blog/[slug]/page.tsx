import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.seoTitle, description: post.seoDescription };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <PageShell>
      <article className="section" style={{ background: "#0A0E1A" }}>
        <div className="container mx-auto px-6 max-w-2xl">
          <Reveal className="flex flex-col gap-4 mb-10">
            <Link href="/blog" className="text-[13px] font-500 w-fit" style={{ color: "#00D4AA" }}>
              ← Back to Blog
            </Link>
            <span className="eyebrow w-fit">{post.category}</span>
            <h1 className="font-display font-bold leading-[1.1]" style={{ fontSize: "var(--text-h2)", color: "#F0F4FF" }}>
              {post.title}
            </h1>
            <p className="text-[17px] leading-relaxed" style={{ color: "#8B9CC8" }}>{post.excerpt}</p>
          </Reveal>

          <StaggerGroup className="flex flex-col gap-5">
            {post.bodyOutline.map((paragraph) => (
              <StaggerItem key={paragraph}>
                <p className="text-[15px] leading-relaxed" style={{ color: "#8B9CC8" }}>{paragraph}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-12">
            <Link href={post.ctaHref} className="btn-primary">
              {post.ctaLabel.replace(" →", "")} <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </article>
    </PageShell>
  );
}
