import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { NextUp } from "@/components/page/static-blocks";
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

  const next = blogPosts[(blogPosts.indexOf(post) + 1) % blogPosts.length];
  const [first, ...rest] = post.bodyOutline;

  return (
    <PageShell>
      <article className="tone-white px-5 pb-[clamp(64px,9vw,112px)] pt-[112px] sm:px-8 sm:pt-[144px]">
        <div className="mx-auto max-w-[720px]">
          <Reveal className="mb-12 flex flex-col items-start gap-5 sm:mb-16">
            <Link href="/blog" className="link-more-back flex items-center gap-2 text-[14px] text-[var(--fg3)] transition-colors hover:text-[var(--fg)]">
              <ArrowLeft size={16} /> Blog
            </Link>
            <span className="mono text-[12px] uppercase tracking-[0.08em] text-[var(--link)]">{post.category}</span>
            <h1 className="display !text-[clamp(32px,5vw,60px)]">{post.title}</h1>
          </Reveal>

          <Reveal>
            <p className="lead mb-8 text-[var(--fg)]">{first}</p>
          </Reveal>
          <StaggerGroup className="flex flex-col gap-6">
            {rest.map((paragraph) => (
              <StaggerItem key={paragraph}>
                <p className="body">{paragraph}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-14">
            <Link href={post.ctaHref} className="btn-primary">
              {post.ctaLabel.replace(" →", "")}
            </Link>
          </Reveal>
        </div>
      </article>

      <section className="tone-light px-5 py-[clamp(56px,8vw,104px)] sm:px-8">
        <div className="mx-auto max-w-[1120px]">
          <Reveal>
            <NextUp href={`/blog/${next.slug}`} label="Next post" title={next.title} />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
