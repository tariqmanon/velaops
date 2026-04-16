import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "Meet the VelaOps AI agents — Hunter, Mailer, Pulse, Sparky, Tracker, Watch, Bolt and Help. Each one built to handle a specific business function.",
};

const agents = [
  { name: "Hunter", badge: "Lead Gen", desc: "Finds and qualifies prospects that match your ideal customer profile. Scours directories, social platforms and databases so you don't have to.", tier: "Starter" },
  { name: "Mailer", badge: "Outreach", desc: "Crafts and sends personalised email sequences. Follows up automatically, tracks opens and replies, and flags hot leads for your attention.", tier: "Starter" },
  { name: "Pulse", badge: "Reporting", desc: "Generates weekly performance dashboards covering all agent activity, key metrics and actionable insights — delivered straight to your inbox.", tier: "Starter" },
  { name: "Sparky", badge: "Content", desc: "Creates blog posts, social media content and marketing copy in your brand voice. Publishes on schedule and adapts based on engagement data.", tier: "Growth" },
  { name: "Tracker", badge: "Analytics", desc: "Monitors your web traffic, conversion funnels and campaign performance. Surfaces trends and anomalies so you can act fast.", tier: "Growth" },
  { name: "Watch", badge: "Monitoring", desc: "Keeps an eye on competitors, industry news and market trends. Sends you a concise briefing so you're always one step ahead.", tier: "Growth" },
  { name: "Bolt", badge: "Automation", desc: "Connects your tools and automates repetitive workflows — CRM updates, data entry, notifications. The glue that holds your stack together.", tier: "Full Stack" },
  { name: "Help", badge: "Support", desc: "Handles first-line customer enquiries via email and chat. Resolves common questions instantly and escalates complex issues to your team.", tier: "Full Stack" },
];

function tierLabel(tier: string) {
  return tier;
}

export default function AgentsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="s-label justify-center">Your Team</div>
            <h1 className="section-h text-[var(--white)]">
              Meet Your<br /><em>AI Agents.</em>
            </h1>
            <p className="mt-6 text-xl text-[var(--grey)]">
              Eight specialised agents, each built to handle a core business function. Pick a plan and we&apos;ll set them up for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Agent grid */}
      <section style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 border border-white/[0.06]">
            {agents.map((a, i) => (
              <ScrollReveal key={a.name}>
                <div className="border border-white/[0.06] p-8 transition-all hover:border-[var(--accent-line)] hover:bg-[var(--accent-dim)] h-full flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-condensed text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--grey)]">
                      {a.badge}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-2xl text-[var(--white)]">{a.name}</h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-[var(--grey)]">{a.desc}</p>
                  <span className="font-condensed mt-6 inline-block self-start border border-[var(--accent-line)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                    {tierLabel(a.tier)}
                  </span>
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
            <h2 className="section-h text-[var(--white)]">
              Ready to deploy<br /><em>your agent team.</em>
            </h2>
            <p className="mt-4 text-base text-[var(--grey)]">Choose a plan and we&apos;ll have your agents running within a week.</p>
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
