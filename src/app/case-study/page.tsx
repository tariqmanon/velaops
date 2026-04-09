import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Case Study — Lolerflow",
  description: "How Lolerflow runs 80% of its go-to-market autonomously with 9 AI agents and just 3–4 hours of founder time per week.",
};

const timeline = [
  { week: "Week 1", title: "Discovery & Setup", desc: "We mapped Lolerflow's GTM process, identified bottlenecks and designed a 9-agent network covering lead gen, outreach, content and reporting." },
  { week: "Week 2", title: "Agent Deployment", desc: "All 9 agents went live — Hunter for prospecting, Mailer for outreach sequences, Sparky for content and Pulse for performance dashboards." },
  { week: "Week 4", title: "Optimisation", desc: "After two weeks of data, we fine-tuned targeting criteria, email copy and content schedules. Open rates jumped 35%." },
  { week: "Month 2+", title: "Autonomous Operations", desc: "The system now handles 80% of GTM with minimal oversight. The founder reviews dashboards and approves strategy — 3–4 hours a week." },
];

const results = [
  { stat: "80%", label: "of go-to-market automated" },
  { stat: "9", label: "AI agents running in parallel" },
  { stat: "3–4 hrs/wk", label: "founder time investment" },
  { stat: "35%", label: "increase in email open rates" },
];

export default function CaseStudyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="s-label justify-center">Case Study</div>
            <h1 className="section-h text-[var(--white)]">
              Lolerflow: 80% GTM<br /><em>on Autopilot.</em>
            </h1>
            <p className="mt-6 text-lg text-[var(--grey)]">How a SaaS founder reclaimed their week by letting VelaOps run the go-to-market machine.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Results bar */}
      <section style={{ background: "var(--dark2)", borderTop: "1px solid var(--accent-line)", borderBottom: "1px solid var(--accent-line)" }}>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-14 text-center md:grid-cols-4">
          {results.map((r) => (
            <ScrollReveal key={r.label}>
              <p className="font-display text-4xl text-[var(--accent)] lg:text-5xl">{r.stat}</p>
              <p className="font-condensed mt-2 text-xs uppercase tracking-[0.15em] text-[var(--grey)]">{r.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <section style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="s-label">The Challenge</div>
            <h2 className="section-h text-[var(--white)]">25+ hours a week<br /><em>on GTM.</em></h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--grey)]">
              Lolerflow&apos;s founder was spending 25+ hours a week on go-to-market tasks — prospecting, writing emails, creating content, tracking metrics. With a small team and limited budget, hiring a full marketing department wasn&apos;t an option. They needed a way to scale GTM without scaling headcount.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Timeline */}
      <section style={{ background: "var(--dark2)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="s-label">The Journey</div>
            <h2 className="section-h text-[var(--white)]">From setup<br /><em>to autopilot.</em></h2>
          </ScrollReveal>
          <div className="mt-14 space-y-0">
            {timeline.map((t) => (
              <ScrollReveal key={t.week}>
                <div className="flex gap-6 border-l border-[var(--accent-line)] py-8 pl-8 transition-colors hover:bg-[var(--accent-dim)]">
                  <div className="flex-shrink-0">
                    <span className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{t.week}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[var(--white)]">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--grey)]">{t.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Quote */}
      <section style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <div className="border-l-2 border-[var(--accent)] pl-10 py-4">
              <blockquote className="font-display text-2xl italic leading-relaxed text-[var(--white)] lg:text-3xl">
                &ldquo;VelaOps gave me my week back. I went from 25 hours of GTM grind to 3–4 hours of strategic oversight. The agents just work.&rdquo;
              </blockquote>
              <p className="font-condensed mt-6 text-xs uppercase tracking-[0.2em] text-[var(--grey)]">— Lolerflow Founder</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* CTA */}
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="section-h text-[var(--white)]">Want results<br /><em>like Lolerflow.</em></h2>
            <p className="mt-4 text-[var(--grey)]">Get your own AI agent network up and running within a week.</p>
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
