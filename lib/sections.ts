import type { NavSectionId } from "@/lib/types";

export type NavItem = {
  id: NavSectionId;
  label: string;
  index: string;
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home", index: "01" },
  { id: "profile", label: "Profile", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "projects", label: "Projects", index: "04" },
  { id: "skills", label: "Skills", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
];

export const sectionIds: NavSectionId[] = navItems.map((item) => item.id);
