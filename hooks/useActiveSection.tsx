"use client";

import { useEffect, useState } from "react";
import type { NavSectionId } from "@/lib/types";
import { sectionIds } from "@/lib/sections";

/**
 * Tracks which section currently owns the viewport.
 * A section becomes active once its top passes 40% of the viewport height.
 */
export function useActiveSection(): NavSectionId {
  const [active, setActive] = useState<NavSectionId>("home");

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const marker = window.innerHeight * 0.4;
      let current: NavSectionId = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return active;
}
