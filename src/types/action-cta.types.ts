import type { ReactNode } from "react";

export type ActionCtaTheme = "teal" | "purple" | "blue";

export interface ActionCtaItem {
  id: string;
  title: string;
  href: string;
  theme: ActionCtaTheme;
  icon: ReactNode;
}

export interface ActionCtaSectionProps {
  items: ActionCtaItem[];
  className?: string;
}
