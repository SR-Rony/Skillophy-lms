"use client";

import { Heading } from "@/components/shared/heading";

import { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  CircleHelp,
  Clock,
  PlayCircle,
} from "lucide-react";
import type {
  CourseDetailsCurriculumModule,
  CourseDetailsLessonType,
} from "@/components/public/course-details/types";
import { cn } from "@/utils";

const LESSON_ICONS: Record<
  CourseDetailsLessonType,
  { icon: typeof PlayCircle; className: string }
> = {
  video: { icon: PlayCircle, className: "text-primary" },
  reading: { icon: BookOpen, className: "text-[#22c55e]" },
  quiz: { icon: CircleHelp, className: "text-[#9a908c]" },
};

const INITIAL_VISIBLE_MODULES = 3;

interface CurriculumSectionProps {
  modules: CourseDetailsCurriculumModule[];
}

export function CurriculumSection({ modules }: CurriculumSectionProps) {
  const [openModules, setOpenModules] = useState<string[]>(
    modules.filter((module) => module.defaultOpen).map((module) => module.id)
  );
  const [showAllModules, setShowAllModules] = useState(false);

  const visibleModules = showAllModules
    ? modules
    : modules.slice(0, INITIAL_VISIBLE_MODULES);
  const hasMoreModules = modules.length > INITIAL_VISIBLE_MODULES;

  const toggleModule = (id: string) => {
    setOpenModules((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  return (
    <section id="curriculum" className="scroll-mt-28">
      <Heading as="h2" variant="course-detail-section">
        Course Curriculum
      </Heading>

      <div className="mt-5 space-y-3">
        {visibleModules.map((module) => {
          const isOpen = openModules.includes(module.id);
          const lessonCount = module.lessons.length;

          return (
            <div
              key={module.id}
              className={cn(
                "overflow-hidden rounded-[16px] border border-[#ece6e3] transition-shadow",
                isOpen && "shadow-[0_10px_28px_rgba(35,25,22,0.08)]"
              )}
            >
              <button
                type="button"
                onClick={() => toggleModule(module.id)}
                className={cn(
                  "flex w-full items-start justify-between gap-4 bg-white px-4 py-4 text-left sm:px-5 sm:py-5",
                  isOpen ? "rounded-t-[16px] border-b border-[#ece6e3]" : "rounded-[16px]"
                )}
              >
                <div className="min-w-0">
                  <p className="text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-[16px]">
                    {module.title}
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] font-medium text-[#6f6562]">
                    <span className="inline-flex items-center gap-1.5">
                      <PlayCircle className="h-4 w-4 text-[#6f6562]" aria-hidden />
                      {lessonCount} lessons
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-[#6f6562]" aria-hidden />
                      {module.duration}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={cn(
                    "mt-1 h-5 w-5 shrink-0 text-[#6f6562] transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>

              {isOpen && (
                <ul className="rounded-b-[16px] bg-white px-4 py-1 sm:px-5">
                  {module.lessons.map((lesson, index) => {
                    const LessonIcon = LESSON_ICONS[lesson.type].icon;
                    const isLast = index === module.lessons.length - 1;

                    return (
                      <li
                        key={lesson.title}
                        className={cn(
                          "flex items-center justify-between gap-4 border-t border-[#f0ebe8] py-3.5 first:border-t-0",
                          isLast && "pb-4"
                        )}
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <LessonIcon
                            className={cn(
                              "h-[18px] w-[18px] shrink-0",
                              LESSON_ICONS[lesson.type].className
                            )}
                            aria-hidden
                          />
                          <span
                            className={cn(
                              "text-[14px] leading-snug",
                              lesson.preview ? "font-medium text-[#1a1a1a]" : "text-[#6f6562]"
                            )}
                          >
                            {lesson.title}
                          </span>
                        </span>
                        {lesson.preview && (
                          <button
                            type="button"
                            className="shrink-0 text-[13px] font-bold text-primary transition hover:text-primary/70"
                          >
                            Preview
                          </button>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {hasMoreModules && !showAllModules && (
        <button
          type="button"
          onClick={() => setShowAllModules(true)}
          className="mx-auto mt-5 block text-[14px] font-semibold text-[#6f6562] transition hover:text-primary"
        >
          See More
        </button>
      )}
    </section>
  );
}
