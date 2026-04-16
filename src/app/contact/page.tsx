"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="s-label justify-center">Contact</div>
            <h1 className="section-h text-[var(--white)]">
              Get in<br /><em>Touch.</em>
            </h1>
            <p className="mt-6 text-xl text-[var(--grey)]">Have a question or ready to get started? Drop us a message and we&apos;ll get back to you within one working day.</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="accent-rule" />

      {/* Form + info */}
      <section style={{ background: "var(--dark)", padding: "8rem clamp(2rem,4vw,4rem)" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-display text-2xl text-[var(--white)]">Let&apos;s talk</h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--grey)]">
                  Whether you&apos;re exploring managed AI services or ready to deploy your first agents, we&apos;re here to help.
                </p>
                <div className="mt-10 space-y-6">
                  {[
                    { label: "Email us", value: "hello@velaops.ai" },
                    { label: "Response time", value: "Within one working day" },
                    { label: "Based in", value: "United Kingdom" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{item.label}</p>
                      <p className="mt-1 text-base text-[var(--grey-light)]">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 border border-white/[0.06] p-6">
                  <p className="font-condensed text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--grey)]">What happens next?</p>
                  <div className="mt-4 space-y-3">
                    {["We review your message", "A team member gets back to you", "We schedule a discovery call"].map((step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <span className="font-display text-lg text-[var(--accent)]">{i + 1}</span>
                        <span className="text-base text-[var(--grey)]">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="border border-white/[0.06] p-8 lg:p-10">
                  {submitted ? (
                    <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                      <svg className="h-7 w-7 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      <h2 className="font-display mt-5 text-3xl text-[var(--white)]">Thanks for reaching out!</h2>
                      <p className="mt-3 text-[var(--grey)]">We&apos;ll be in touch within one working day.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid gap-8 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="font-condensed block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--grey)]">Full Name</label>
                          <input type="text" id="name" name="name" required className="mt-3 w-full bg-transparent border-0 border-b border-white/[0.12] pb-3 text-base text-[var(--white)] outline-none transition-colors focus:border-[var(--accent)] placeholder:text-[var(--grey)]" placeholder="Jane Smith" />
                        </div>
                        <div>
                          <label htmlFor="email" className="font-condensed block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--grey)]">Work Email</label>
                          <input type="email" id="email" name="email" required className="mt-3 w-full bg-transparent border-0 border-b border-white/[0.12] pb-3 text-base text-[var(--white)] outline-none transition-colors focus:border-[var(--accent)] placeholder:text-[var(--grey)]" placeholder="jane@company.co.uk" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="company" className="font-condensed block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--grey)]">Company Name</label>
                        <input type="text" id="company" name="company" className="mt-3 w-full bg-transparent border-0 border-b border-white/[0.12] pb-3 text-base text-[var(--white)] outline-none transition-colors focus:border-[var(--accent)] placeholder:text-[var(--grey)]" placeholder="Acme Ltd" />
                      </div>
                      <div>
                        <label htmlFor="message" className="font-condensed block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--grey)]">Message</label>
                        <textarea id="message" name="message" rows={5} required className="mt-3 w-full bg-transparent border-0 border-b border-white/[0.12] pb-3 text-base text-[var(--white)] outline-none transition-colors focus:border-[var(--accent)] placeholder:text-[var(--grey)] resize-none" placeholder="Tell us about your business and what you'd like to achieve..." />
                      </div>
                      <button type="submit" className="btn-submit">Send Message</button>
                      <p className="text-center text-sm text-[var(--grey)]">Or sign up directly at <a href="https://app.velaops.ai/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] underline">app.velaops.ai</a></p>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
