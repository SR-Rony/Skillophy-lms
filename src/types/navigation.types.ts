import type { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  badge?: string | number;
  disabled?: boolean;
  external?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
