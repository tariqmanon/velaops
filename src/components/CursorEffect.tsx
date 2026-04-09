"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cur = curRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;

    const move = (e: MouseEvent) => {
      cur.style.left = `${e.clientX}px`;
      cur.style.top = `${e.clientY}px`;
      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
    };

    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      cur.style.display = "none";
      ring.style.display = "none";
      return;
    }

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={curRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
