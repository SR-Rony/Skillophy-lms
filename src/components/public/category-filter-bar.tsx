"use client";

import {
  CategoryFilterSlider,
  type CategoryFilterItem,
} from "@/components/public/category-filter-slider";

export type CategoryFilterBarItem = CategoryFilterItem;

interface CategoryFilterBarProps {
  categories: CategoryFilterBarItem[];
  activeCategoryId: string;
  onCategoryChange?: (categoryId: string) => void;
  getCategoryHref?: (categoryId: string) => string;
  countLabel?: string;
  theme?: "light" | "dark";
  className?: string;
  nextButtonAriaLabel?: string;
}

export function CategoryFilterBar({
  categories,
  activeCategoryId,
  onCategoryChange,
  getCategoryHref,
  countLabel = "items",
  theme = "light",
  className,
  nextButtonAriaLabel = "Show next category",
}: CategoryFilterBarProps) {
  return (
    <CategoryFilterSlider
      categories={categories}
      activeCategoryId={activeCategoryId}
      onCategoryChange={onCategoryChange}
      getCategoryHref={getCategoryHref}
      countLabel={countLabel}
      theme={theme}
      className={className}
      nextButtonAriaLabel={nextButtonAriaLabel}
    />
  );
}
