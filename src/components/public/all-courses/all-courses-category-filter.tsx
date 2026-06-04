"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  VISIBLE_CATEGORY_COUNT,
  type AllCoursesCategory,
  type CategoryId,
} from "@/data/mock/all-courses-categories";
import { cn } from "@/utils";

interface AllCoursesCategoryFilterProps {
  categories: AllCoursesCategory[];
  activeCategoryId: CategoryId;
  onCategoryChange: (categoryId: CategoryId) => void;
  theme?: "light" | "dark";
  className?: string;
}

export function AllCoursesCategoryFilter({
  categories,
  activeCategoryId,
  onCategoryChange,
  theme = "light",
  className,
}: AllCoursesCategoryFilterProps) {
  const [categorySlideIndex, setCategorySlideIndex] = useState(0);
  const isDark = theme === "dark";

  const visibleCategories = useMemo(
    () =>
      Array.from({ length: VISIBLE_CATEGORY_COUNT }, (_, index) => {
        const categoryIndex = (categorySlideIndex + index) % categories.length;
        return categories[categoryIndex];
      }),
    [categories, categorySlideIndex]
  );

  const nextCategory = () => {
    setCategorySlideIndex((currentIndex) => (currentIndex + 1) % categories.length);
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex-1 overflow-hidden pb-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={categorySlideIndex}
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -36 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {visibleCategories.map(({ id, label, icon: Icon, courses, filterLabel, hasNotification }) => {
              const isActive = id === activeCategoryId;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onCategoryChange(id)}
                  className={cn(
                    "relative flex min-h-[58px] items-center gap-3 rounded-[10px] border px-4 py-3 text-left shadow-[0_12px_28px_rgba(55,41,38,0.05)] transition duration-300",
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
                  <Icon className="h-5 w-5 shrink-0 stroke-[1.7]" />
                  <span>
                    <span className="block text-[13px] font-extrabold leading-none">
                      {filterLabel ?? label}
                    </span>
                    <span className="mt-1 block text-[11px] font-semibold text-[#6f6562]">
                      {courses.length} courses
                    </span>
                  </span>
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
        aria-label="Show next course category"
        onClick={nextCategory}
        className="hidden shrink-0 sm:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
