"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/agents", label: "The Agents" },
  { href: "/how-it-works", label: "Process" },
  { href: "/case-study", label: "Case Study" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[var(--black)]/85 backdrop-blur-lg border-b border-white/[0.06]" : "border-b border-transparent"}`}>
      {/* Gradient fade — only when not scrolled */}
      <div className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`} style={{ background: "linear-gradient(to bottom, rgba(6,11,24,0.9) 0%, transparent 100%)" }} />

      <nav className={`relative mx-auto flex max-w-[1280px] items-center justify-between px-8 lg:px-16 transition-all duration-500 ${scrolled ? "py-4" : "py-8"}`}>
        <Link href="/">
          <Image src="/velaops-logo.png" alt="VelaOps" width={140} height={36} priority />
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

        <a
          href="https://app.velaops.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden border border-[var(--accent)] px-5 py-2 font-condensed text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-[var(--black)] md:inline-flex"
        >
          Get Started
        </a>

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
          <a href="https://app.velaops.ai/" target="_blank" rel="noopener noreferrer" className="mt-4 border border-[var(--accent)] px-6 py-3 font-condensed text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--black)]" onClick={() => setOpen(false)}>
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
