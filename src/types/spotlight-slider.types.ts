import type { ReactNode } from "react";
import type { ItemsPerPageConfig } from "@/components/public/course-slider";

export type EmployeeSpotlightTheme = "chalkboard" | "ocean";

export interface EmployeeSpotlight {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  theme: EmployeeSpotlightTheme;
  readMoreHref?: string;
}

export interface SpotlightSliderSectionProps<T> {
  label?: string;
  title: string;
  description: string;
  items: T[];
  getItemKey: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  ariaLabelPrefix: string;
  itemsPerPage?: ItemsPerPageConfig;
  slideDotCount?: number;
  className?: string;
  titleClassName?: string;
}
