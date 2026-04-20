import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--accent-line)]" style={{ background: "var(--black)", padding: "3rem clamp(2rem,4vw,4rem)" }}>
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/velaops-logo.png" alt="VelaOps" width={100} height={26} />
          <span className="font-condensed text-[0.85rem] font-normal tracking-[0.1em] text-[var(--grey)]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {footerLinks.map((l) => (
            <Link key={l.href} href={l.href} className="font-condensed text-[0.75rem] font-medium uppercase tracking-[0.15em] text-[var(--grey)] transition-colors hover:text-[var(--accent)]">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
