"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/content";
import { scrollToSection } from "@/lib/utils";

const TIME_FORMAT: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};

export function Footer() {
  const [time, setTime] = useState<string>("");
  const [year] = useState(() => new Date().getFullYear());

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          ...TIME_FORMAT,
          timeZone: "Asia/Jakarta",
        }).format(new Date()),
      );
    };

    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer className="relative px-5 pb-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 border-t border-white/8 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-ink-mute">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-[9px] font-semibold text-accent-soft">
            {profile.initials}
          </span>
          <span>
            {year} · {profile.title}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.16em] text-ink-mute">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
            {time ? `${time} WIB` : "Bandung"}
          </span>
          <span className="hidden sm:inline">Built with Next.js</span>
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-1.5 text-ink-dim transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUp
              size={12}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
