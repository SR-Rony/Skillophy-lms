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
import { Container } from "@/components/shared";
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
  const [activeCategory, setActiveCategory] = useState("skill");
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
            className="absolute left-0 right-0 top-full z-50 bg-transparent"
          >
            <Container className="pb-5 pt-0 sm:pb-7">
              <div className="w-full rounded-b-[18px] bg-white px-3 py-4 shadow-[0_18px_50px_rgba(35,25,22,0.08)] sm:px-5 sm:py-6">
                <h2 className="mb-4 text-[19px] font-black tracking-[-0.03em] text-[#25201f]">
                  Course Categories
                </h2>

                <div className="grid max-h-[calc(100vh-128px)] grid-cols-1 gap-5 overflow-y-auto pr-1 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-7 lg:overflow-hidden lg:pr-0">
                  <aside className="min-h-0">
                    <div className="max-h-[230px] space-y-3 overflow-y-auto pr-2 [scrollbar-color:#2e2b2a_transparent] [scrollbar-width:thin] lg:max-h-[420px] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#2e2b2a] [&::-webkit-scrollbar-track]:bg-transparent">
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
                            href={ROUTES.courseCategory(category.id)}
                            onPreview={setActiveCategory}
                            onNavigate={onClose}
                          />
                        );
                      })}
                    </div>
                  </aside>

                <div className="relative min-h-0">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid max-h-[360px] grid-cols-1 gap-4 overflow-y-auto pb-16 pr-2 [scrollbar-color:#d4ceca_transparent] [scrollbar-width:thin] sm:grid-cols-2 lg:max-h-[420px] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#d4ceca] [&::-webkit-scrollbar-track]:bg-transparent"
                  >
                    {activeCourses.map((course) => (
                      <MegaMenuCourseCard
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        image={course.image}
                        category={course.categoryId}
                        onClick={onClose}
                      />
                    ))}
                  </motion.div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white via-white/92 to-transparent pb-2 pt-12">
                    <Link
                      href={ROUTES.courseCategory(activeCategory)}
                      onClick={onClose}
                      className="pointer-events-auto inline-flex items-center gap-1 text-[12px] font-black text-[#25201f] underline-offset-4 transition hover:text-primary hover:underline"
                    >
                      See All in{" "}
                      {megaMenuCategories.find((c) => c.id === activeCategory)?.label ??
                        "Category"}
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </Container>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
