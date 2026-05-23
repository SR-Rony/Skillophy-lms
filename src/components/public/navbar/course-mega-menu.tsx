"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  ChevronRight,
  Play,
  Star,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  megaMenuCategories,
  megaMenuCoursesByCategory,
} from "@/data/mock/mega-menu-courses.mock";
import { ROUTES } from "@/constants";
import { CourseCategoryItem } from "./course-category-item";
import { MegaMenuCourseCard } from "./mega-menu-course-card";

const categoryIcons: Record<string, LucideIcon> = {
  play: Play,
  briefcase: Briefcase,
  wrench: Wrench,
  zap: Zap,
  star: Star,
  "book-open": BookOpen,
};

interface CourseMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CourseMegaMenu({ isOpen, onClose }: CourseMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState(megaMenuCategories[0]?.id ?? "free");
  const activeCourses = megaMenuCoursesByCategory[activeCategory] ?? [];

  useEffect(() => {
    if (!isOpen) return;

    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close courses menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 bg-black/20 md:bg-transparent"
            onClick={onClose}
          />

          <motion.div
            id="course-mega-menu"
            role="dialog"
            aria-label="All courses"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 left-0 z-50 border-t border-gray-200 bg-white shadow-lg"
          >
            <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                <aside className="lg:col-span-3">
                  <div className="space-y-1">
                    {megaMenuCategories.map((category) => {
                      const Icon = categoryIcons[category.iconName] ?? BookOpen;
                      return (
                        <CourseCategoryItem
                          key={category.id}
                          id={category.id}
                          label={category.label}
                          courseCount={category.courseCount}
                          icon={Icon}
                          isActive={activeCategory === category.id}
                          onClick={setActiveCategory}
                        />
                      );
                    })}
                  </div>
                </aside>

                <div className="lg:col-span-9">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {activeCourses.map((course) => (
                      <MegaMenuCourseCard
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        image={course.image}
                        category={course.categoryId}
                      />
                    ))}
                  </motion.div>

                  <div className="mt-6 flex justify-center">
                    <Link
                      href={ROUTES.courses}
                      onClick={onClose}
                      className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
                    >
                      See All Courses
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
