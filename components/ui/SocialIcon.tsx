import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import type { SocialLink } from "@/lib/types";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  instagram: Instagram,
} as const;

type SocialIconProps = {
  name: SocialLink["icon"];
  size?: number;
  className?: string;
};

export function SocialIcon({ name, size = 16, className }: SocialIconProps) {
  const Icon = iconMap[name] ?? Mail;
  return <Icon size={size} strokeWidth={1.7} className={className} />;
}
