import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "VelaOps is built by operators, for operators. Meet the team running your managed AI agent stack.",
};

const principles = [
  {
    t: "Operators, not consultants",
    d: "We've run GTM teams, written outreach sequences, and shipped content. We know what good output looks like because we've had to produce it ourselves.",
  },
  {
    t: "Output over features",
    d: "We don't sell software. We sell weekly deliverables — qualified prospect lists, sequences ready to send, dashboards that mean something.",
  },
  {
    t: "Transparent by default",
    d: "Flat monthly fees. API costs at exact cost. Every agent's output reviewed before it reaches your inbox. No surprises.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="s-label justify-center">About</div>
            <h1 className="section-h text-[var(--white)]">
              Built by operators,<br />
              <em>for operators.</em>
            </h1>
            <p className="mt-6 text-xl text-[var(--grey)]">
              We started VelaOps because we were tired of watching capable founders drown in go-to-market admin that AI can already do better.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Founder story */}
      <section style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="s-label">The story</div>
            <h2 className="section-h text-[var(--white)]">Why we built<br /><em>VelaOps.</em></h2>
            <div className="mt-10 space-y-6 text-lg font-normal leading-[1.9] text-[var(--grey-light)]">
              <p>
                {/* FOUNDER_STORY_PLACEHOLDER — Replace with 2-3 paragraphs about your background and why you built VelaOps */}
                After years of running and advising UK SaaS and services businesses, we kept seeing the same pattern: brilliant founders stuck in 25-hour weeks of prospecting, writing emails, and chasing metrics — work that kept their business alive but stopped them from growing it.
              </p>
              <p>
                AI agents can now do most of that work reliably, but getting eight different agents configured, connected to your tools, and producing quality output every week is a full-time job in itself. So we built VelaOps: a managed service that runs the whole stack for you. You get the output. We handle everything else.
              </p>
              <p>
                We&apos;re based in the UK, we serve UK businesses, and we&apos;ve built this for the kind of operators we&apos;ve always worked with — people who care more about results than about the tools that produce them.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Principles */}
      <section style={{ background: "var(--dark2)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="s-label">How we work</div>
            <h2 className="section-h text-[var(--white)]">Three principles,<br /><em>every engagement.</em></h2>
          </ScrollReveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {principles.map((p) => (
              <ScrollReveal key={p.t}>
                <div>
                  <h3 className="font-display text-2xl text-[var(--white)]">{p.t}</h3>
                  <p className="mt-4 text-base leading-relaxed text-[var(--grey)]">{p.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="accent-rule" />

      {/* CTA */}
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="section-h text-[var(--white)]">Want to talk<br /><em>directly with us?</em></h2>
            <p className="mt-4 text-base text-[var(--grey)]">
              Book a 30-minute discovery call. No sales script, just a conversation about your business.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Link href="/contact" className="btn-ghost">Book your free discovery call</Link>
              <Link href="/case-study" className="btn-ghost">Read our case study</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
