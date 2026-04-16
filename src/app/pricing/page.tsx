import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "VelaOps pricing starts at £299/month. Choose Starter, Growth or Full Stack — all fully managed with no technical expertise required.",
};

const plans = [
  {
    name: "Starter", price: "£299", setup: "£500",
    agents: ["Hunter", "Mailer", "Pulse"],
    features: ["3 AI agents", "Lead generation & outreach", "Weekly performance reports", "Email support", "Monthly review call"],
    popular: false,
  },
  {
    name: "Growth", price: "£599", setup: "£750",
    agents: ["Hunter", "Mailer", "Pulse", "Sparky", "Tracker", "Watch"],
    features: ["6 AI agents", "Everything in Starter", "Content creation & publishing", "Analytics & competitor monitoring", "Priority support", "Fortnightly review calls"],
    popular: true,
  },
  {
    name: "Full Stack", price: "£999", setup: "£1,000",
    agents: ["Hunter", "Mailer", "Pulse", "Sparky", "Tracker", "Watch", "Bolt", "Help"],
    features: ["All 8 AI agents", "Everything in Growth", "Workflow automation", "First-line customer support", "Dedicated account manager", "Weekly review calls"],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="s-label justify-center">Pricing</div>
            <h1 className="section-h text-[var(--white)]">
              Simple, Transparent<br /><em>Pricing.</em>
            </h1>
            <p className="mt-6 text-xl text-[var(--grey)]">No hidden fees. API costs invoiced separately at exact cost — no markup.</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Plans */}
      <section style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <ScrollReveal key={plan.name}>
                <div className={`relative flex flex-col border p-8 h-full transition-all ${plan.popular ? "border-[var(--accent-line)] bg-[var(--accent-dim)]" : "border-white/[0.06] hover:border-[var(--accent-line)]"}`}>
                  {plan.popular && (
                    <span className="font-condensed absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--accent)] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--black)]">Most Popular</span>
                  )}
                  <h3 className="font-condensed text-base font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="font-display text-5xl text-[var(--white)]">{plan.price}</span>
                    <span className="text-[var(--grey)]">/month</span>
                  </div>
                  <p className="mt-2 text-base text-[var(--grey)]">+ {plan.setup} one-off setup fee</p>

                  <div className="mt-6">
                    <p className="font-condensed text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--grey)]">Agents included</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {plan.agents.map((a) => (
                        <span key={a} className="font-condensed border border-[var(--accent-line)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">{a}</span>
                      ))}
                    </div>
                  </div>

                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-base text-[var(--grey-light)]">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="https://app.velaops.ai/" target="_blank" rel="noopener noreferrer"
                    className="mt-8 block border border-[var(--accent-line)] py-3.5 text-center font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-[var(--black)]">
                    Subscribe to {plan.name}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-12 text-center text-base text-[var(--grey)]">
            All plans are billed monthly. API costs are invoiced separately at exact cost with no markup.{" "}
            <Link href="/contact" className="text-[var(--accent)] underline">Contact us</Link> if you have questions.
          </p>
        </div>
      </section>
    </>
  );
}
