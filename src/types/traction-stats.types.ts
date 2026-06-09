import type { ReactNode } from "react";

export interface TractionStatItem {
  id: string;
  value: string;
  label: string;
  icon: ReactNode;
  valueClassName: string;
  cardClassName: string;
  iconWrapClassName?: string;
}

export interface TractionStatsSectionProps {
  items: TractionStatItem[];
  className?: string;
}
