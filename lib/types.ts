export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter" | "instagram";
};

export type Stat = {
  value: string;
  label: string;
};

export type ProfileFact = {
  icon: "graduation" | "location" | "briefcase" | "calendar";
  label: string;
  value: string;
  detail?: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  accent?: boolean;
};

export type SkillGroup = {
  title: string;
  icon: "code" | "server" | "database" | "cloud" | "tool" | "cpu";
  skills: { name: string; level: number }[];
};

export type NavSectionId =
  | "home"
  | "profile"
  | "experience"
  | "projects"
  | "skills"
  | "contact";
