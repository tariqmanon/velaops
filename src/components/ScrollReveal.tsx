"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({
  children,
  className = "",
  stagger = false,
  staggerDelay = 120,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  /** Animate direct children one-by-one instead of the wrapper */
  stagger?: boolean;
  /** Delay between each child in ms (default 120) */
  staggerDelay?: number;
  /** Slide direction: up (default), left, right */
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");

          if (stagger) {
            const items = el.querySelectorAll(":scope > *");
            items.forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay = `${i * staggerDelay}ms`;
              child.classList.add("stagger-visible");
            });
          }

          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, staggerDelay]);

  const dirClass =
    direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "reveal";

  const staggerDir =
    direction === "left" ? "stagger-left" : direction === "right" ? "stagger-right" : "stagger-up";

  return (
    <div ref={ref} className={`${dirClass} ${stagger ? staggerDir : ""} ${className}`}>
      {children}
    </div>
  );
}
