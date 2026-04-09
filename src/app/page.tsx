import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const agents = [
  { num: "01", name: "Hunter", role: "Prospect Research", desc: "Finds, qualifies, and delivers targeted prospect contact lists every week, built around your ideal customer profile.", tier: "Starter" },
  { num: "02", name: "Mailer", role: "Email Outreach", desc: "Drafts, sequences, and schedules personalised email campaigns for your review and approval before anything sends.", tier: "Starter" },
  { num: "03", name: "Pulse", role: "Revenue Reporting", desc: "Pulls data from your tools and delivers a clean, actionable weekly revenue and pipeline summary every Monday.", tier: "Starter" },
  { num: "04", name: "Sparky", role: "Social Content", desc: "Writes LinkedIn posts, threads, and captions aligned to your brand voice, ready for you to approve and publish.", tier: "Growth" },
  { num: "05", name: "Tracker", role: "CRM Sync", desc: "Keeps your pipeline clean and up-to-date without manual data entry — contacts, statuses, and follow-ups, handled.", tier: "Growth" },
  { num: "06", name: "Watch", role: "Competitor Intelligence", desc: "Monitors your competitors and surfaces changes to their strategy, messaging, or pricing on a weekly basis.", tier: "Growth" },
  { num: "07", name: "Help", role: "Customer Support", desc: "Drafts responses to inbound customer queries for your review — fast, on-brand, and never sent without approval.", tier: "Full Stack" },
  { num: "08", name: "Bolt", role: "Code Maintenance", desc: "Handles minor updates, bug fixes, and routine technical tasks on your web properties without developer involvement.", tier: "Full Stack" },
];

const plans = [
  { name: "Starter", price: "299", setup: "£500", features: ["Hunter — prospect research", "Mailer — email outreach", "Pulse — revenue reporting", "Weekly output delivery", "Discovery call included"], featured: false },
  { name: "Growth", price: "599", setup: "£750", features: ["Everything in Starter", "Sparky — social content", "Tracker — CRM sync", "Watch — competitor intel", "Priority support"], featured: true },
  { name: "Full Stack", price: "999", setup: "£1,000", features: ["All 8 agents active", "Bolt — code maintenance", "Help — customer support", "Custom agent naming", "White-label dashboard"], featured: false },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden" style={{ padding: "0 clamp(2rem,4vw,4rem) 5rem" }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,179,198,0.04) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 90% 60%, rgba(139,92,246,0.03) 0%, transparent 60%)" }} />
        <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,179,198,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,179,198,0.03) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        {/* AI Network Visual */}
        <div className="anim-drift pointer-events-none absolute right-[6%] top-1/2 hidden w-[520px] -translate-y-[55%] opacity-50 lg:block">
          <svg viewBox="0 0 520 520" fill="none">
            <defs><radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#00B3C6" stopOpacity="0.15" /><stop offset="100%" stopColor="#00B3C6" stopOpacity="0" /></radialGradient></defs>
            <circle cx="260" cy="260" r="200" fill="url(#glow)" />
            <circle cx="260" cy="260" r="198" stroke="#00B3C6" strokeOpacity="0.12" strokeWidth="1" />
            <circle cx="260" cy="260" r="140" stroke="#00B3C6" strokeOpacity="0.08" strokeWidth="1" />
            <circle cx="260" cy="260" r="80" stroke="#00B3C6" strokeOpacity="0.15" strokeWidth="1" />
            {[[260,62],[396,138],[440,295],[360,430],[160,430],[80,295],[124,138]].map(([cx,cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 6 : 5} fill={i % 2 === 0 ? "#00B3C6" : "#8b5cf6"} opacity={0.4 + (i % 3) * 0.15} />
            ))}
            <circle cx="260" cy="260" r="16" stroke="#00B3C6" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />
            <circle cx="260" cy="260" r="6" fill="#00B3C6" opacity="0.8" />
            {[[260,62],[396,138],[440,295],[360,430],[160,430],[80,295],[124,138]].map(([x,y], i) => (
              <line key={`l${i}`} x1={x} y1={y} x2={260} y2={260} stroke="#00B3C6" strokeOpacity="0.1" strokeWidth="1" />
            ))}
          </svg>
        </div>

        <div className="relative z-10">
          <div className="anim-eyebrow s-label">Managed AI Operations</div>
          <h1 className="anim-hero-h1 font-display max-w-5xl text-[clamp(4rem,9vw,9rem)] font-light italic leading-[0.9] text-[var(--white)]">
            We are<br /><em className="text-[var(--accent)]">intelligence.</em>
          </h1>
          <div className="anim-sub mt-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <p className="max-w-[440px] text-base font-light leading-[1.75] text-[var(--grey-light)]">
              Every operation is designed around your output, time, and ambitions — so you can focus on what truly matters, while AI takes care of everything else.
            </p>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <a href="https://app.velaops.ai/" target="_blank" rel="noopener noreferrer" className="btn-ghost">Start the journey →</a>
              <a href="#about" className="btn-plain">Discover more ↓</a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute inset-x-0 bottom-0 flex border-t border-[var(--accent-line)]">
          {[
            { n: "5,000+", l: "Operations completed" },
            { n: "8", l: "Dedicated AI agents" },
            { n: "3–4 hrs", l: "Your weekly commitment" },
            { n: "£299", l: "Starting per month" },
          ].map((s) => (
            <div key={s.l} className="flex flex-1 flex-col gap-0.5 border-r border-[var(--accent-line)] px-8 py-5 last:border-r-0">
              <span className="font-display text-[1.8rem] font-light text-[var(--white)]">{s.n}</span>
              <span className="font-condensed text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[var(--grey)]">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="accent-rule" />

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="relative overflow-hidden py-32" style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="absolute left-1/2 top-0 hidden h-full w-px lg:block" style={{ background: "linear-gradient(to bottom, transparent, var(--accent-line) 30%, var(--accent-line) 70%, transparent)" }} />
        <ScrollReveal className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-2 lg:gap-32">
          <div>
            <div className="s-label">About VelaOps</div>
            <h2 className="section-h">VelaOps® is a managed AI<br />operations service for<br /><em>UK businesses.</em></h2>
            <p className="mt-8 text-lg font-light leading-[1.9] text-[var(--grey-light)]">From UK founders and operators to global industries — our clients trust us to deliver consistent, high-quality AI outputs on time, every time. No technical knowledge required.</p>
          </div>
          <div className="flex flex-col gap-6">
            {[
              { t: "Direct Access to AI Operations", d: "Run your go-to-market operation beyond boundaries. Our agent stacks ensure seamless, personalised output every week." },
              { t: "Your Freedom to Focus", d: "We value your time above all. VelaOps gives you the freedom to lead, grow, and decide — without operational burden." },
              { t: "Precision and Excellence", d: "Each detail — from prompt engineering to weekly delivery — reflects our dedication to quality. Every output is reviewed." },
              { t: "UK-Wide, Personal Touch", d: "Operations serving businesses across the UK. We manage everything, guaranteeing a smooth and effortless experience." },
            ].map((b) => (
              <div key={b.t} className="relative border border-white/[0.06] p-8 transition-colors hover:border-[var(--accent-line)]">
                <div className="absolute -top-px left-8 h-px w-10 bg-[var(--accent)]" />
                <h3 className="font-display text-xl font-normal text-[var(--white)]">{b.t}</h3>
                <p className="mt-3 text-sm font-light leading-[1.8] text-[var(--grey)]">{b.d}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <div className="accent-rule" />

      {/* ═══ AGENTS ═══ */}
      <section id="agents" className="py-32" style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-[1280px]">
          <ScrollReveal className="mb-24 grid items-end gap-16 border-b border-[var(--accent-line)] pb-16 lg:grid-cols-2 lg:gap-32">
            <div>
              <div className="s-label">The Stack</div>
              <h2 className="section-h">Eight agents.<br /><em>One team.</em></h2>
            </div>
            <div>
              <p className="text-base font-light leading-[1.85] text-[var(--grey-light)]">Each agent handles a specific function — from finding prospects to monitoring competitors. Together, they run your go-to-market operation, every single week.</p>
              <a href="https://app.velaops.ai/" target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8 inline-flex">Request your agent stack →</a>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid border border-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
              {agents.map((a, i) => (
                <div key={a.name} className={`border-b border-r border-white/[0.06] p-8 transition-colors hover:bg-[var(--accent-dim)] ${i % 4 === 3 ? "border-r-0" : ""} ${i >= 4 ? "lg:border-b-0" : ""}`}>
                  <div className="font-condensed text-[0.65rem] font-semibold tracking-[0.2em] text-[var(--accent)] opacity-60">{a.num}</div>
                  <div className="mt-4 font-display text-[1.8rem] font-light text-[var(--white)]">{a.name}</div>
                  <div className="font-condensed text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">{a.role}</div>
                  <p className="mt-4 text-[0.85rem] font-light leading-[1.7] text-[var(--grey)]">{a.desc}</p>
                  <div className="absolute right-6 top-6 font-condensed text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[var(--grey)] opacity-50">{a.tier}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how" className="py-32" style={{ background: "var(--dark2)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-[1280px]">
          <ScrollReveal>
            <div className="s-label">Process</div>
            <h2 className="section-h max-w-[600px]">A better way<br />to <em>operate.</em></h2>
          </ScrollReveal>

          <ScrollReveal className="mt-24 grid border-t border-[var(--accent-line)] md:grid-cols-3">
            {[
              { n: "01 — Discovery", t: "We audit your operations", d: "A 30-minute call to understand your business, your goals, and where AI can make the biggest impact. Plain English, no jargon.", details: ["One call, 30 minutes", "No technical knowledge needed", "Full written brief produced"] },
              { n: "02 — Build", t: "We build your agent stack", d: "Custom agents configured for your business, connected to your tools, live within 1–2 weeks. You don't touch a single line of code.", details: ["Live in 1–2 weeks", "Connected to your existing tools", "Full testing before go-live"] },
              { n: "03 — Operations", t: "We run it for you", d: "Agents work every week, outputs delivered for your review, we handle all technical maintenance. Your weekly time: 30–60 minutes.", details: ["Weekly output delivery", "You review and approve", "We maintain everything"] },
            ].map((s, i) => (
              <div key={s.n} className={`relative p-12 ${i < 2 ? "border-r border-[var(--accent-line)]" : ""}`}>
                <div className="absolute -top-px left-12 font-condensed text-[0.65rem] font-bold tracking-[0.2em] text-[var(--accent)]" style={{ background: "var(--dark2)", padding: "0 0.5rem", transform: "translateY(-50%)" }}>{s.n}</div>
                <h3 className="font-display text-[1.8rem] font-light text-[var(--white)]">{s.t}</h3>
                <p className="mt-4 text-sm font-light leading-[1.8] text-[var(--grey)]">{s.d}</p>
                <div className="mt-6 flex flex-col gap-2">
                  {s.details.map((d) => (
                    <span key={d} className="flex items-center gap-2.5 font-condensed text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--grey)]">
                      <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />{d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* ═══ CASE STUDY ═══ */}
      <section className="py-32" style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-[1280px]">
          <ScrollReveal>
            <div className="s-label">Case Study</div>
            <h2 className="section-h">We built the<br />proof <em>ourselves.</em></h2>
          </ScrollReveal>

          <ScrollReveal className="mt-16 grid gap-20 border border-[var(--accent-line)] p-12 lg:grid-cols-2 lg:p-20">
            <div>
              <div className="font-condensed text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[var(--accent)]">Lolerflow &middot; SaaS Go-to-Market</div>
              <p className="mt-4 text-base font-light leading-[1.85] text-[var(--grey-light)]">Lolerflow is running on a full VelaOps agent stack. 80% of go-to-market runs autonomously, every week.</p>
              <div className="mt-8 border-l-2 border-[var(--accent)] pl-6">
                <p className="font-display text-lg font-light italic leading-[1.7] text-[var(--grey-light)]">&ldquo;All of this produced by 9 AI agents in 6 weeks. The agents handle the work. I handle the direction.&rdquo;</p>
                <cite className="mt-4 block font-condensed text-[0.7rem] font-medium uppercase tracking-[0.15em] text-[var(--grey)] not-italic">— Lolerflow Founder</cite>
              </div>
              <Link href="/case-study" className="btn-ghost mt-8 inline-flex">Read the full case study →</Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { n: "820+", l: "Prospect contacts generated" },
                { n: "24", l: "SEO pages published" },
                { n: "32", l: "Content pieces produced" },
                { n: "9", l: "Agents running in parallel" },
              ].map((s) => (
                <div key={s.l} className="border-t border-[var(--accent-line)] pt-5">
                  <div className="font-display text-[3.5rem] font-light leading-none text-[var(--white)]">{s.n}</div>
                  <div className="mt-2 font-condensed text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[var(--grey)]">{s.l}</div>
                </div>
              ))}
              <div className="col-span-2 border-t border-[var(--accent-line)] pt-5">
                <div className="font-display text-[3.5rem] font-light leading-none text-[var(--white)]">3–4 <span className="text-[1.8rem] text-[var(--accent)]">hrs/wk</span></div>
                <div className="mt-2 font-condensed text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[var(--grey)]">Founder time required to manage everything</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* ═══ PRICING ═══ */}
      <section className="py-32" style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-[1280px]">
          <ScrollReveal className="mx-auto mb-20 max-w-[600px] text-center">
            <div className="s-label justify-center">Pricing</div>
            <h2 className="section-h">Simple, transparent<br /><em>pricing.</em></h2>
            <p className="mt-6 text-[0.95rem] font-light leading-[1.8] text-[var(--grey)]">One monthly fee. API usage billed at exact cost — never marked up, never bundled. No surprises.</p>
          </ScrollReveal>

          <ScrollReveal className="grid border border-[var(--accent-line)] md:grid-cols-3">
            {plans.map((p, i) => (
              <div key={p.name} className={`relative p-14 transition-colors ${i < 2 ? "border-r border-[var(--accent-line)]" : ""} ${p.featured ? "bg-[var(--accent-dim)]" : ""}`}>
                {p.featured && <div className="absolute right-6 top-6 border border-[var(--accent-line)] px-2.5 py-1 font-condensed text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[var(--accent)]">Most popular</div>}
                <div className="font-condensed text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--accent)]">{p.name}</div>
                <div className="mt-4 font-display text-[4.5rem] font-light leading-none text-[var(--white)]"><sup className="text-xl align-super">£</sup>{p.price}</div>
                <div className="mt-1 border-b border-white/[0.06] pb-6 text-sm font-light text-[var(--grey)]">per month &middot; + {p.setup} one-time setup</div>
                <ul className="mt-6 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[0.85rem] font-light text-[var(--grey-light)]">
                      <span className="mt-1.5 text-xs text-[var(--accent)]">—</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="https://app.velaops.ai/" target="_blank" rel="noopener noreferrer" className={`mt-10 block border border-[var(--accent-line)] p-4 text-center font-condensed text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-[var(--black)] ${p.featured ? "!bg-[var(--accent)] !text-[var(--black)]" : ""}`}>
                  Get started
                </a>
              </div>
            ))}
          </ScrollReveal>
          <p className="mt-8 text-center text-sm font-light text-[var(--grey)]">API costs billed at <strong className="font-normal text-[var(--accent-light)]">exact cost — zero markup, always.</strong></p>
        </div>
      </section>

      <div className="accent-rule" />

      {/* ═══ CONTACT CTA ═══ */}
      <section className="py-32" style={{ background: "var(--dark2)", borderTop: "1px solid var(--accent-line)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-[1280px]">
          <ScrollReveal className="grid gap-16 lg:grid-cols-2 lg:gap-32">
            <div>
              <div className="s-label">Get started</div>
              <h2 className="section-h">Fly beyond<br />what&apos;s <em>manual.</em></h2>
              <p className="mt-6 max-w-[400px] text-base font-light leading-[1.85] text-[var(--grey-light)]">Send us a message and we&apos;ll respond within one business day. A 30-minute discovery call is the first step — no commitment required.</p>
              <div className="mt-8 flex flex-col gap-4">
                <span className="flex items-center gap-4 text-sm font-light text-[var(--grey-light)]"><span className="h-px w-5 bg-[var(--accent-line)]" />hello@velaops.ai</span>
                <span className="flex items-center gap-4 text-sm font-light text-[var(--grey-light)]"><span className="h-px w-5 bg-[var(--accent-line)]" />velaops.ai</span>
                <span className="flex items-center gap-4 text-sm font-light text-[var(--grey-light)]"><span className="h-px w-5 bg-[var(--accent-line)]" />Serving UK businesses nationwide</span>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <p className="font-display text-2xl font-light italic text-[var(--white)]">Ready to start? <Link href="/contact" className="text-[var(--accent)] underline decoration-[var(--accent-line)] underline-offset-4 hover:decoration-[var(--accent)]">Get in touch</Link></p>
              <a href="https://app.velaops.ai/" target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex self-start">Start for £299/month →</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
