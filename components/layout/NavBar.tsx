"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/lib/sections";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn, scrollToSection } from "@/lib/utils";
import { profile } from "@/lib/content";

export function NavBar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const activeItem = navItems.find((item) => item.id === active) ?? navItems[0];

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="relative flex max-w-full items-center rounded-full border border-white/10 bg-[#0a0a0d]/75 p-1.5 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
      >
        <button
          type="button"
          onClick={() => go("home")}
          aria-label={`${profile.initials} — back to top`}
          className="mr-1 hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-semibold tracking-tight text-accent-soft transition-colors hover:border-accent/40 sm:grid"
        >
          {profile.initials}
        </button>

        <ul className="hidden items-center sm:flex">
          {navItems.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(item.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300",
                    isActive ? "text-ink" : "text-ink-mute hover:text-ink-dim",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.07]"
                    />
                  ) : null}
                  <span className="relative">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Open section menu"
          className="flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium text-ink sm:hidden"
        >
          <span className="text-accent">{activeItem.index}</span>
          {activeItem.label}
          <ChevronDown
            size={14}
            className={cn("transition-transform duration-300", open && "rotate-180")}
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[4.5rem] w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0f]/95 p-2 backdrop-blur-2xl sm:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm transition-colors",
                  item.id === active
                    ? "bg-white/[0.06] text-ink"
                    : "text-ink-mute hover:bg-white/[0.03] hover:text-ink-dim",
                )}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
                  {item.index}
                </span>
                {item.label}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
