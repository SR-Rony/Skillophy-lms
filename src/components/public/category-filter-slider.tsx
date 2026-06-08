"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, type LucideIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";

const CATEGORY_VISIBLE_COUNT = {
  default: 2,
  md: 3,
  lg: 5,
} as const;

type VisibleCategoryCounts = {
  default: number;
  md: number;
  lg: number;
};

function useVisibleCategoryCount(visibleCounts: VisibleCategoryCounts) {
  const [visibleCount, setVisibleCount] = useState<number>(visibleCounts.default);

  useEffect(() => {
    const mediaQueries = [
      { query: "(min-width: 1024px)", value: visibleCounts.lg },
      { query: "(min-width: 768px)", value: visibleCounts.md },
    ];

    const updateVisibleCount = () => {
      const matchedQuery = mediaQueries.find(({ query }) => window.matchMedia(query).matches);
      setVisibleCount(matchedQuery?.value ?? visibleCounts.default);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [visibleCounts]);

  return visibleCount;
}

export interface CategoryFilterItem {
  id: string;
  label: string;
  itemCount: number;
  filterLabel?: string;
  icon?: LucideIcon;
  hasNotification?: boolean;
}

interface CategoryFilterSliderProps {
  categories: CategoryFilterItem[];
  activeCategoryId: string;
  onCategoryChange?: (categoryId: string) => void;
  getCategoryHref?: (categoryId: string) => string;
  countLabel?: string;
  theme?: "light" | "dark";
  className?: string;
  nextButtonAriaLabel?: string;
  visibleCounts?: {
    default: number;
    md: number;
    lg: number;
  };
  gridColumnsClassName?: string;
}

export function CategoryFilterSlider({
  categories,
  activeCategoryId,
  onCategoryChange,
  getCategoryHref,
  countLabel = "courses",
  theme = "light",
  className,
  nextButtonAriaLabel = "Show next category",
  visibleCounts = CATEGORY_VISIBLE_COUNT,
  gridColumnsClassName = "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
}: CategoryFilterSliderProps) {
  const [categorySlideIndex, setCategorySlideIndex] = useState(0);
  const visibleCount = useVisibleCategoryCount(visibleCounts);
  const isDark = theme === "dark";

  const visibleCategories = useMemo(() => {
    if (categories.length === 0) {
      return [];
    }

    const slotCount = Math.min(visibleCount, categories.length);

    return Array.from({ length: slotCount }, (_, index) => {
      const categoryIndex = (categorySlideIndex + index) % categories.length;
      return categories[categoryIndex];
    });
  }, [categories, categorySlideIndex, visibleCount]);

  const canSlideCategories = categories.length > visibleCount;

  const nextCategory = () => {
    if (!canSlideCategories) {
      return;
    }

    setCategorySlideIndex((currentIndex) => (currentIndex + 1) % categories.length);
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex-1 overflow-hidden pb-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${categorySlideIndex}-${visibleCount}`}
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -36 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className={cn("grid gap-4", gridColumnsClassName)}
          >
            {visibleCategories.map((category) => {
              const { id, label, itemCount, filterLabel, icon: Icon, hasNotification } = category;
              const isActive = id === activeCategoryId;
                const href = getCategoryHref?.(id);
                const tabClassName = cn(
                  "relative flex min-h-[58px] items-center rounded-[10px] border px-4 py-3 text-left shadow-[0_12px_28px_rgba(55,41,38,0.05)] transition duration-300",
                  Icon && "gap-3",
                  isDark
                    ? isActive
                      ? "border-white bg-white text-[#1f1514] shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
                      : "border-white/10 bg-white text-[#302927] hover:-translate-y-0.5 hover:border-primary/30"
                    : isActive
                      ? "border-primary/25 bg-primary/5 text-primary-dark"
                      : "border-[#eee5e2] bg-white text-[#302927] hover:-translate-y-0.5 hover:border-primary/25"
                );
                const tabContent = (
                  <>
                    {hasNotification && (
                      <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary" />
                    )}
                    {Icon && <Icon className="h-5 w-5 shrink-0 stroke-[1.7]" />}
                    <span>
                      <span className="block text-[13px] font-extrabold leading-none">
                        {filterLabel ?? label}
                      </span>
                      <span
                        className={cn(
                          "mt-1 block text-[11px] font-semibold",
                          isActive ? "text-primary" : "text-[#6f6562]"
                        )}
                      >
                        {itemCount} {countLabel}
                      </span>
                    </span>
                  </>
                );

                if (href) {
                  return (
                    <Link key={id} href={href} className={tabClassName}>
                      {tabContent}
                    </Link>
                  );
                }

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => onCategoryChange?.(id)}
                    className={tabClassName}
                  >
                    {tabContent}
                  </button>
                );
              })}
          </motion.div>
        </AnimatePresence>
      </div>

      <Button
        type="button"
        variant="publicIcon"
        size="publicIcon"
        aria-label={nextButtonAriaLabel}
        onClick={nextCategory}
        disabled={!canSlideCategories}
        className="shrink-0"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
