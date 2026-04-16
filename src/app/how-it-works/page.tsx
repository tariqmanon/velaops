import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how VelaOps builds and manages custom AI agent networks for your business in three simple steps.",
};

const steps = [
  { num: "01", title: "Discovery Call", desc: "We learn about your business, goals and current workflows. No jargon — just a straightforward conversation about where AI agents can make the biggest impact." },
  { num: "02", title: "We Build Your Agent Network", desc: "Our team designs and deploys a custom set of AI agents tailored to your needs — from lead generation and email outreach to content creation and reporting." },
  { num: "03", title: "We Manage Everything", desc: "Your agents run day and night. We monitor performance, optimise prompts, handle errors and deliver weekly reports. You focus on your business." },
];

const benefits = [
  { title: "Weekly Reports", desc: "Clear dashboards showing exactly what your agents delivered — no guesswork." },
  { title: "Dedicated Support", desc: "A real person you can email or call — not a chatbot. We're here when you need us." },
  { title: "Continuous Optimisation", desc: "We improve your agents over time based on real performance data — they get smarter every week." },
];

const faqs = [
  { q: "Do I need any technical knowledge?", a: "Not at all. VelaOps is fully managed — we handle every aspect of building and running your AI agents." },
  { q: "How quickly can I get started?", a: "Most clients have their first agents live within 5-7 working days of signing up." },
  { q: "What happens if something goes wrong?", a: "We monitor all agents continuously. If an issue arises, our team resolves it — usually before you even notice." },
  { q: "Can I scale up or change agents later?", a: "Absolutely. You can upgrade your plan or request new agents at any time. We'll reconfigure your network to match." },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="s-label justify-center">Simple Process</div>
            <h1 className="section-h text-[var(--white)]">
              How It<br /><em>Works.</em>
            </h1>
            <p className="mt-6 text-xl text-[var(--grey)]">Three simple steps to an AI-powered operation — no expertise required.</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Steps */}
      <section style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px border border-white/[0.06] md:grid-cols-3">
            {steps.map((s) => (
              <ScrollReveal key={s.num}>
                <div className="border border-white/[0.06] p-10 transition-all hover:border-[var(--accent-line)] hover:bg-[var(--accent-dim)] h-full flex flex-col">
                  <span className="font-display text-5xl text-[var(--accent)]">{s.num}</span>
                  <h2 className="font-display mt-6 text-2xl text-[var(--white)]">{s.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-[var(--grey)]">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Benefits */}
      <section style={{ background: "var(--dark2)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="s-label">Included</div>
            <h2 className="section-h text-[var(--white)]">What you get with<br /><em>every plan.</em></h2>
          </ScrollReveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {benefits.map((b) => (
              <ScrollReveal key={b.title}>
                <div>
                  <svg className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <h3 className="font-display mt-4 text-xl text-[var(--white)]">{b.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[var(--grey)]">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="accent-rule" />

      {/* FAQ */}
      <section style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="s-label">FAQ</div>
            <h2 className="section-h text-[var(--white)]">Frequently asked<br /><em>questions.</em></h2>
          </ScrollReveal>
          <div className="mt-16 divide-y divide-white/[0.06]">
            {faqs.map((faq) => (
              <ScrollReveal key={faq.q}>
                <div className="py-8">
                  <h3 className="font-display text-lg text-[var(--white)]">{faq.q}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[var(--grey)]">{faq.a}</p>
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
            <h2 className="section-h text-[var(--white)]">Ready to<br /><em>get started.</em></h2>
            <p className="mt-4 text-base text-[var(--grey)]">Sign up today and have your first agents live within a week.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a href="https://app.velaops.ai/" target="_blank" rel="noopener noreferrer" className="btn-ghost">Get Started</a>
              <Link href="/pricing" className="btn-ghost">View Pricing</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
