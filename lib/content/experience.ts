import type { ExperienceItem } from "@/lib/types";

export const experiences: ExperienceItem[] = [
  {
    role: "Backend Developer Intern",
    organization: "PT Nusantara Digital",
    period: "Jul 2025 — Present",
    summary:
      "Own the payment and reporting services behind a logistics platform serving ~40k monthly orders.",
    highlights: [
      "Rebuilt the route-optimization endpoint in Go, cutting p95 latency from 1.8s to 240ms.",
      "Introduced contract tests and a CI gate that dropped production regressions to near zero.",
    ],
    tags: ["Go", "PostgreSQL", "Redis", "Docker"],
  },
  {
    role: "Full-Stack Developer",
    organization: "Campus Digital Lab",
    period: "2023 — 2025",
    summary:
      "Shipped internal academic systems used daily by lecturers and 2,000+ students.",
    highlights: [
      "Designed and delivered a thesis-defense scheduling system end to end.",
      "Built an automated transcript pipeline that removed ~30 hours of manual work per term.",
    ],
    tags: ["TypeScript", "Next.js", "MySQL", "Nginx"],
  },
  {
    role: "Freelance Developer",
    organization: "Independent",
    period: "2022 — Present",
    summary:
      "Partner with small businesses to ship point-of-sale, booking, and profile websites.",
    highlights: [
      "Delivered 14 client projects with a 100% on-time handover record.",
      "Built a reusable POS core now powering three separate merchants.",
    ],
    tags: ["React", "Node.js", "Tailwind", "Stripe"],
  },
];
