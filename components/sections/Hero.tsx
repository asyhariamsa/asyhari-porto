"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { heroStats, profile, socials } from "@/lib/content";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { HeroMark } from "@/components/sections/HeroMark";
import { scrollToSection } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.085, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-28 pt-32 sm:px-8"
    >
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1fr_auto]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-ink-dim backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {profile.eyebrow}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 text-[clamp(3rem,9vw,7.2rem)] font-semibold leading-[0.88] tracking-[-0.045em]"
          >
            <span className="block text-ink-dim/65">{profile.firstName}</span>
            <span className="block text-ink">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-[32rem] text-balance text-[15px] leading-relaxed text-ink-dim sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <MagneticLink href="#projects" variant="solid">
              View projects
              <ArrowUpRight size={15} strokeWidth={2} />
            </MagneticLink>

            {socials.map((social) => (
              <MagneticLink key={social.label} href={social.href} external>
                <SocialIcon name={social.icon} size={14} />
                {social.label}
              </MagneticLink>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-white/8 pt-7"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2.5">
                <span className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-ink-mute">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <HeroMark className="hidden lg:block" />
      </div>

      <div className="absolute inset-x-0 bottom-6 flex items-center justify-between px-5 sm:px-8">
        <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-ink-mute">
          <MapPin size={12} className="text-accent" />
          {profile.location}
        </span>

        <motion.button
          type="button"
          onClick={() => scrollToSection("profile")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink-mute transition-colors hover:text-ink"
          aria-label="Scroll to profile"
        >
          Scroll
          <ArrowDown size={13} className="animate-float text-accent" />
        </motion.button>
      </div>
    </section>
  );
}
