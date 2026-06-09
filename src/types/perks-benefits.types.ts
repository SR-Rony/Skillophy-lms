import type { ReactNode } from "react";

export interface PerksBenefitItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface PerksBenefitsSectionProps {
  label?: string;
  title: string;
  description: string;
  items: PerksBenefitItem[];
  className?: string;
}
