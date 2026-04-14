"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

export default function MagneticButton({
  children,
  className = "",
  href,
  target,
  rel,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  const Tag = href ? "a" : "span";

  return (
    <Tag
      ref={ref as never}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ display: "inline-flex", transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s, border-color 0.3s, color 0.3s" }}
    >
      {children}
    </Tag>
  );
}
