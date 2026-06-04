"use client";

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

function useVisibleCategoryCount() {
  const [visibleCount, setVisibleCount] = useState<number>(CATEGORY_VISIBLE_COUNT.default);

  useEffect(() => {
    const mediaQueries = [
      { query: "(min-width: 1024px)", value: CATEGORY_VISIBLE_COUNT.lg },
      { query: "(min-width: 768px)", value: CATEGORY_VISIBLE_COUNT.md },
    ];

    const updateVisibleCount = () => {
      const matchedQuery = mediaQueries.find(({ query }) => window.matchMedia(query).matches);
      setVisibleCount(matchedQuery?.value ?? CATEGORY_VISIBLE_COUNT.default);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

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
  onCategoryChange: (categoryId: string) => void;
  countLabel?: string;
  theme?: "light" | "dark";
  className?: string;
  nextButtonAriaLabel?: string;
}

export function CategoryFilterSlider({
  categories,
  activeCategoryId,
  onCategoryChange,
  countLabel = "courses",
  theme = "light",
  className,
  nextButtonAriaLabel = "Show next category",
}: CategoryFilterSliderProps) {
  const [categorySlideIndex, setCategorySlideIndex] = useState(0);
  const visibleCount = useVisibleCategoryCount();
  const isDark = theme === "dark";

  const visibleCategories = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, index) => {
        const categoryIndex = (categorySlideIndex + index) % categories.length;
        return categories[categoryIndex];
      }),
    [categories, categorySlideIndex, visibleCount]
  );

  const nextCategory = () => {
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
            className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
          >
            {visibleCategories.map(
              ({ id, label, itemCount, filterLabel, icon: Icon, hasNotification }) => {
                const isActive = id === activeCategoryId;

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => onCategoryChange(id)}
                    className={cn(
                      "relative flex min-h-[58px] items-center rounded-[10px] border px-4 py-3 text-left shadow-[0_12px_28px_rgba(55,41,38,0.05)] transition duration-300",
                      Icon && "gap-3",
                      isDark
                        ? isActive
                          ? "border-[#ff4747]/40 bg-white text-[#1f1514]"
                          : "border-white/10 bg-white text-[#302927] hover:-translate-y-0.5 hover:border-[#ff4747]/30"
                        : isActive
                          ? "border-[#f1b8b4] bg-[#fff4f2] text-[#8a2525]"
                          : "border-[#eee5e2] bg-white text-[#302927] hover:-translate-y-0.5 hover:border-[#f1b8b4]"
                    )}
                  >
                    {hasNotification && (
                      <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#ff4747]" />
                    )}
                    {Icon && <Icon className="h-5 w-5 shrink-0 stroke-[1.7]" />}
                    <span>
                      <span className="block text-[13px] font-extrabold leading-none">
                        {filterLabel ?? label}
                      </span>
                      <span className="mt-1 block text-[11px] font-semibold text-[#6f6562]">
                        {itemCount} {countLabel}
                      </span>
                    </span>
                  </button>
                );
              }
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <Button
        type="button"
        variant="publicIcon"
        size="publicIcon"
        aria-label={nextButtonAriaLabel}
        onClick={nextCategory}
        className="shrink-0"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
