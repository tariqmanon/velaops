import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArticleSchema } from "@/components/StructuredData";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        date={post.date}
        slug={slug}
      />
      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <time className="font-condensed text-xs uppercase tracking-[0.2em] text-[var(--grey)]">{post.date}</time>
            <h1 className="font-display mt-4 text-4xl italic text-[var(--white)] sm:text-5xl">{post.title}</h1>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Content */}
      <article style={{ background: "var(--dark)", padding: "6rem clamp(2rem,4vw,4rem)" }}>
        <div className="prose prose-lg prose-invert mx-auto max-w-3xl prose-headings:font-[family-name:var(--font-display)]">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </>
  );
}
