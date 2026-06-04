"use client";

import { CategoryFilterSlider } from "@/components/public/category-filter-slider";
import { ROUTES } from "@/constants";
import type { AllCoursesCategory, CategoryId } from "@/data/mock/all-courses-categories";

interface AllCoursesCategoryFilterProps {
  categories: AllCoursesCategory[];
  activeCategoryId: CategoryId;
  onCategoryChange?: (categoryId: CategoryId) => void;
  linkToCategoryPages?: boolean;
  theme?: "light" | "dark";
  className?: string;
}

export function AllCoursesCategoryFilter({
  categories,
  activeCategoryId,
  onCategoryChange,
  linkToCategoryPages = false,
  theme = "light",
  className,
}: AllCoursesCategoryFilterProps) {
  return (
    <CategoryFilterSlider
      categories={categories.map((category) => ({
        id: category.id,
        label: category.label,
        filterLabel: category.filterLabel,
        itemCount: category.courses.length,
        icon: category.icon,
        hasNotification: category.hasNotification,
      }))}
      activeCategoryId={activeCategoryId}
      onCategoryChange={
        linkToCategoryPages ? undefined : (id) => onCategoryChange?.(id as CategoryId)
      }
      getCategoryHref={
        linkToCategoryPages ? (id) => ROUTES.courseCategory(id) : undefined
      }
      countLabel="courses"
      theme={theme}
      className={className}
      nextButtonAriaLabel="Show next course category"
    />
  );
}
