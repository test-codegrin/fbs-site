"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";

interface Props {
  children: ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    // 🚫 Disable Lenis on touch devices (FIXES the crash)
    if ("ontouchstart" in window) return;

    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      AOS.refresh();
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}