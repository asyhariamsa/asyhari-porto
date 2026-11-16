import type { ProfileFact, SocialLink, Stat } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  GANTI DATA DI FILE INI DENGAN DATA KAMU.
 *  Semua teks hero, kontak, dan fakta profil ada di sini.
 * ─────────────────────────────────────────────────────────────
 */
export const profile = {
  firstName: "Raka",
  lastName: "Pratama",
  initials: "RP",
  eyebrow: "Full-Stack Developer · Open to work",
  title: "Raka Pratama",
  tagline:
    "I build fast, resilient web products — from database schema to the last pixel.",
  intro:
    "Final-year Computer Science student focused on backend systems and product engineering. I care about clean architecture, performance budgets, and interfaces that feel effortless to use.",
  email: "hello@example.com",
  location: "Bandung, Indonesia",
  availability: "Available for freelance & internship",
  resumeHref: "#",
} as const;

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Email", href: "mailto:hello@example.com", icon: "mail" },
];

export const heroStats: Stat[] = [
  { value: "3+", label: "Years building" },
  { value: "20+", label: "Projects shipped" },
  { value: "12", label: "Technologies" },
];

export const profileFacts: ProfileFact[] = [
  {
    icon: "graduation",
    label: "Education",
    value: "Universitas Teknologi Bandung",
    detail: "B.Sc. Computer Science · GPA 3.62 / 4.00",
  },
  {
    icon: "location",
