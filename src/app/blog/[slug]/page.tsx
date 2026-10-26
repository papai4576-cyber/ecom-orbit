import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
      <article className="section tone-white">
        <div className="narrow">
          <Reveal className="mb-12 flex flex-col gap-4">
            <Link href="/blog" className="text-[15px] text-[var(--link)] hover:underline w-fit">
              ← Back to blog
            </Link>
            <span className="eyebrow">{post.category}</span>
            <h1 className="h2 !text-[clamp(34px,5.4vw,56px)]">{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
          </Reveal>

          <StaggerGroup className="flex flex-col gap-6">
            {post.bodyOutline.map((paragraph) => (
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
    </PageShell>
  );
}
