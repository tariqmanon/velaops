"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/agents", label: "The Agents" },
  { href: "/how-it-works", label: "Process" },
  { href: "/case-study", label: "Case Study" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Gradient fade */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,11,24,0.9) 0%, transparent 100%)" }} />

      <nav className="relative mx-auto flex max-w-[1280px] items-center justify-between px-8 py-8 lg:px-16">
        <Link href="/" className="font-display text-[1.6rem] font-light uppercase tracking-[0.15em] text-[var(--white)]">
          Vela<em className="not-italic text-[var(--accent)]">Ops</em>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-condensed text-[0.75rem] font-medium uppercase tracking-[0.2em] text-[var(--grey-light)] transition-colors hover:text-[var(--accent)]"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden items-center gap-3 font-condensed text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[var(--grey)] md:flex"
        >
          <span className="h-px w-5 bg-[var(--accent-line)]" />
          hello@velaops.ai
        </Link>

        {/* Mobile toggle */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center text-[var(--white)] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`block h-px w-full bg-current transition-all duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`block h-px w-full bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-full bg-current transition-all duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="absolute inset-0 bg-[var(--black)]/95 backdrop-blur-lg" onClick={() => setOpen(false)} />
        <div className={`relative flex h-full flex-col items-center justify-center gap-8 transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-8"}`}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="font-display text-2xl font-light italic text-[var(--white)] hover:text-[var(--accent)]" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-4 font-condensed text-sm uppercase tracking-[0.2em] text-[var(--grey)] hover:text-[var(--accent)]" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
