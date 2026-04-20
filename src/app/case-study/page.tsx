import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Case Study — Lolerflow",
  description:
    "How Lolerflow — a UK SaaS for LOLER inspection management — runs 80% of its go-to-market autonomously with 9 AI agents and just 3–4 hours of founder time a week.",
};

const timeline = [
  {
    week: "Week 1",
    title: "Discovery & GTM audit",
    desc: "We mapped Lolerflow's niche B2B market — UK lifting inspection companies — and identified where manual prospecting, content and follow-up were eating founder time. Designed a 9-agent stack around LOLER compliance buyers.",
  },
  {
    week: "Week 2",
    title: "Agent deployment",
    desc: "Hunter went live targeting inspection firms and H&S managers across the UK. Mailer started personalised sequences referencing LOLER-specific pain points. Sparky began publishing compliance content. Pulse delivered the first weekly dashboard.",
  },
  {
    week: "Week 4",
    title: "Optimisation round",
    desc: "Two weeks of live data let us sharpen the ICP to inspection companies with 3+ inspectors, rewrite outreach around the £36k admin overhead stat, and prioritise the content topics prospects were actually searching.",
  },
  {
    week: "Month 2+",
    title: "Autonomous operations",
    desc: "The system now runs 80% of GTM on autopilot. The founder reviews the weekly Pulse report, approves new content angles, and takes warm meetings. Everything else — handled.",
  },
];

const results = [
  { stat: "80%", label: "of go-to-market automated" },
  { stat: "9", label: "AI agents running in parallel" },
  { stat: "3–4 hrs/wk", label: "founder time investment" },
  { stat: "35%", label: "lift in email open rates" },
];

const deliverables = [
  { n: "820+", l: "UK lifting firms contacted" },
  { n: "24", l: "LOLER-focused SEO pages published" },
  { n: "32", l: "Long-form content pieces produced" },
  { n: "9", l: "Agents running in parallel" },
];

export default function CaseStudyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="s-label justify-center">Case Study · SaaS</div>
            <h1 className="section-h text-[var(--white)]">
              Lolerflow: 80% GTM<br />
              <em>on Autopilot.</em>
            </h1>
            <p className="mt-6 text-xl text-[var(--grey)]">
              A UK SaaS founder building LOLER inspection software reclaimed their week by letting VelaOps run the entire go-to-market machine.
            </p>
            <p className="mt-4 text-base text-[var(--grey)]">
              <a href="https://www.lolerflow.co.uk/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] underline underline-offset-4 hover:text-[var(--accent-light)]">
                lolerflow.co.uk
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Results bar */}
      <section style={{ background: "var(--dark2)", borderTop: "1px solid var(--accent-line)", borderBottom: "1px solid var(--accent-line)" }}>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-14 text-center md:grid-cols-4">
          {results.map((r) => (
            <ScrollReveal key={r.label}>
              <p className="font-display text-4xl text-[var(--accent)] lg:text-5xl">{r.stat}</p>
              <p className="font-condensed mt-2 text-sm uppercase tracking-[0.15em] text-[var(--grey)]">{r.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About the company */}
      <section style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="s-label">About Lolerflow</div>
            <h2 className="section-h text-[var(--white)]">
              Purpose-built software for<br />
              <em>UK lifting inspections.</em>
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-[var(--grey)]">
              Lolerflow is a SaaS platform that helps UK inspection companies run LOLER thorough examinations from a phone — fully offline — and generates Schedule&nbsp;1 compliant reports the moment the inspection is signed. Flat rate £250/month, unlimited users, QR-coded assets, and automated reminders before examination dates expire.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[var(--grey)]">
              Their market is narrow and technical: inspection firms, duty holders, and H&amp;S managers responsible for lifting equipment compliance. Selling into it means credibility with real-world operators — not generic SaaS copy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Challenge */}
      <section style={{ background: "var(--dark2)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="s-label">The Challenge</div>
            <h2 className="section-h text-[var(--white)]">
              25+ hours a week<br />
              <em>on GTM.</em>
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-[var(--grey)]">
              The founder was sinking 25+ hours a week into go-to-market work — finding inspection firms, writing cold outreach, producing compliance content and tracking what actually moved the needle. A specialised product for a specialised audience means every prospect needs a credible, informed message. Hiring a marketing team wasn&apos;t viable at their stage, and generic tools didn&apos;t understand the domain.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[var(--grey)]">
              They needed GTM output at agency scale, with founder-level judgement — on a bootstrapped budget.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Timeline */}
      <section style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="s-label">The Journey</div>
            <h2 className="section-h text-[var(--white)]">
              From setup<br />
              <em>to autopilot.</em>
            </h2>
          </ScrollReveal>
          <div className="mt-14 space-y-0">
            {timeline.map((t) => (
              <ScrollReveal key={t.week}>
                <div className="flex gap-6 border-l border-[var(--accent-line)] py-8 pl-8 transition-colors hover:bg-[var(--accent-dim)]">
                  <div className="flex-shrink-0">
                    <span className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{t.week}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[var(--white)]">{t.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-[var(--grey)]">{t.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Deliverables */}
      <section style={{ background: "var(--dark2)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="s-label">What got delivered</div>
            <h2 className="section-h text-[var(--white)]">
              Output, not<br />
              <em>busywork.</em>
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
            {deliverables.map((d) => (
              <ScrollReveal key={d.l}>
                <div className="border-t border-[var(--accent-line)] pt-5">
                  <div className="font-display text-5xl text-[var(--white)]">{d.n}</div>
                  <p className="font-condensed mt-3 text-sm uppercase tracking-[0.15em] text-[var(--grey)]">{d.l}</p>
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
            <div className="border-l-2 border-[var(--accent)] py-4 pl-10">
              <blockquote className="font-display text-2xl italic leading-relaxed text-[var(--white)] lg:text-3xl">
                &ldquo;VelaOps gave me my week back. I went from 25 hours of GTM grind to 3–4 hours of strategic oversight. The agents just work — and they understand our market.&rdquo;
              </blockquote>
              <p className="font-condensed mt-6 text-sm uppercase tracking-[0.2em] text-[var(--grey)]">— Lolerflow Founder</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* CTA */}
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="section-h text-[var(--white)]">
              Want results<br />
              <em>like Lolerflow?</em>
            </h2>
            <p className="mt-4 text-base text-[var(--grey)]">Get your own AI agent network up and running within a week.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a href="https://app.velaops.ai/" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Get Started
              </a>
              <Link href="/pricing" className="btn-ghost">
                View Pricing
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
