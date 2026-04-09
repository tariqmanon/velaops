import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--accent-line)]" style={{ background: "var(--black)", padding: "2rem clamp(2rem,4vw,4rem)" }}>
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-condensed text-[0.75rem] font-light tracking-[0.1em] text-[var(--grey)]">
          &copy; {new Date().getFullYear()} VelaOps. All rights reserved.
        </span>
        <div className="flex gap-8">
          {[
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
            { href: "https://linkedin.com", label: "LinkedIn" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="font-condensed text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[var(--grey)] transition-colors hover:text-[var(--accent)]">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
