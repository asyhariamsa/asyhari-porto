import type { ProjectItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    title: "Sagara",
    description:
      "Fleet operations dashboard that streams live vehicle telemetry and surfaces route anomalies in real time.",
    tags: ["Next.js", "Go", "PostgreSQL"],
    href: "https://github.com",
    accent: true,
  },
  {
    title: "Lontar",
    description:
      "Automated academic transcript generator — queues renders, signs PDFs, and archives to object storage.",
    tags: ["Go", "Chromedp", "S3"],
    href: "https://github.com",
  },
  {
    title: "Warung POS",
    description:
      "Offline-first point of sale for small merchants, syncing orders back to the cloud when connectivity returns.",
    tags: ["React", "IndexedDB", "Node.js"],
    href: "https://github.com",
  },
  {
    title: "Kelas Bot",
    description:
      "Chatbot that answers class scheduling questions and automates attendance reminders for lecturers.",
    tags: ["TypeScript", "Redis", "LLM"],
    href: "https://github.com",
  },
  {
    title: "Syncro",
    description:
      "Collaboration workspace with granular permissions, presence indicators, and a conflict-free editor.",
    tags: ["React", "Yjs", "WebSocket"],
    href: "https://github.com",
  },
  {
    title: "Nadi",
    description:
      "Lightweight uptime monitor with heartbeat alerts and a public status page for side projects.",
    tags: ["Go", "SQLite", "Docker"],
    href: "https://github.com",
  },
];
