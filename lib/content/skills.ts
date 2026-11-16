import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "TypeScript", level: 92 },
      { name: "Go", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    title: "Frontend",
    icon: "cpu",
    skills: [
      { name: "React", level: 93 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 78 },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Fiber / Express", level: 84 },
      { name: "REST & gRPC", level: 80 },
      { name: "Redis", level: 72 },
    ],
  },
  {
    title: "Data",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: 86 },
      { name: "MySQL", level: 82 },
      { name: "MongoDB", level: 76 },
      { name: "Prisma", level: 80 },
    ],
  },
  {
    title: "Infrastructure",
    icon: "cloud",
    skills: [
      { name: "Docker", level: 84 },
      { name: "GitHub Actions", level: 80 },
      { name: "Nginx", level: 72 },
      { name: "Linux", level: 86 },
    ],
  },
  {
    title: "Practice",
    icon: "tool",
    skills: [
      { name: "Git workflow", level: 92 },
      { name: "Testing", level: 78 },
      { name: "Figma", level: 70 },
      { name: "Docs", level: 85 },
    ],
  },
];

export const techMarquee: string[] = [
  "TypeScript",
  "Go",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Tailwind CSS",
  "Framer Motion",
  "Prisma",
  "Linux",
  "GitHub Actions",
  "MongoDB",
];
