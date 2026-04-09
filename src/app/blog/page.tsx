import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on managed AI services, automation strategies and real-world case studies from the VelaOps team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="s-label justify-center">Insights</div>
            <h1 className="section-h text-[var(--white)]">
              Our<br /><em>Blog.</em>
            </h1>
            <p className="mt-6 text-lg text-[var(--grey)]">Insights on AI operations, automation and growing your business with intelligent agents.</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      <section style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl">
          {posts.length === 0 ? (
            <div className="border border-white/[0.06] p-12 text-center">
              <p className="text-[var(--grey)]">Posts coming soon. Check back shortly.</p>
            </div>
          ) : (
            <div className="space-y-0">
              {posts.map((post) => (
                <ScrollReveal key={post.slug}>
                  <article className="border border-white/[0.06] p-8 transition-all hover:border-[var(--accent-line)] hover:bg-[var(--accent-dim)]">
                    <time className="font-condensed text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--grey)]">{post.date}</time>
                    <h2 className="font-display mt-3 text-2xl text-[var(--white)]">
                      <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-[var(--accent)]">{post.title}</Link>
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--grey)]">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="btn-ghost mt-6 inline-flex text-[10px]">
                      Read more
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </Link>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
