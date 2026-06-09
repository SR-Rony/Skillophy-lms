import type { ReactNode } from "react";

export interface FeatureHighlightItem {
  id: string;
  title: string;
  description?: string;
  icon: ReactNode;
  glowClass: string;
}

export interface FeatureHighlightSectionProps {
  title: string;
  description: string;
  items: FeatureHighlightItem[];
  className?: string;
}
