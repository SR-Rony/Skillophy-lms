import type { LucideIcon } from "lucide-react";

export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export interface StatisticsSectionProps {
  stats: StatisticItem[];
  variant?: "dark" | "light";
  className?: string;
}
