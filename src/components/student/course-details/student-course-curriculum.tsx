"use client";

import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock,
  PlayCircle,
} from "lucide-react";
import type {
  StudentCourseCurriculumLesson,
  StudentCourseCurriculumModule,
} from "@/types/student-course-details.types";
import { cn } from "@/utils";

const LESSON_ICONS = {
  video: { icon: PlayCircle, className: "text-primary" },
  reading: { icon: BookOpen, className: "text-[#22c55e]" },
  quiz: { icon: CircleHelp, className: "text-[#3b82f6]" },
} as const;

interface StudentCourseCurriculumProps {
  modules: StudentCourseCurriculumModule[];
  isCourseCompleted?: boolean;
}

function LessonRow({ lesson }: { lesson: StudentCourseCurriculumLesson }) {
  const isCompleted = lesson.status === "completed";
  const isCurrent = lesson.status === "current";
  const LessonIcon = isCompleted ? CheckCircle2 : LESSON_ICONS[lesson.type].icon;
  const iconClassName = isCompleted
    ? "text-[#22c55e]"
    : LESSON_ICONS[lesson.type].className;

  return (
    <li
      className={cn(
        "flex items-center gap-3 border-t border-[#f0ebe8] py-3.5 first:border-t-0",
        isCurrent && "rounded-lg bg-[#fff5f3] px-2 -mx-2"
      )}
    >
      <LessonIcon className={cn("h-[18px] w-[18px] shrink-0", iconClassName)} aria-hidden />
      <span
        className={cn(
          "text-[14px] leading-snug",
          isCurrent || isCompleted ? "font-medium text-[#1a1a1a]" : "text-[#6f6562]"
        )}
      >
        {lesson.title}
      </span>
    </li>
  );
}

export function StudentCourseCurriculum({
  modules,
  isCourseCompleted = false,
}: StudentCourseCurriculumProps) {
  const [openModules, setOpenModules] = useState<string[]>(
    isCourseCompleted
      ? []
      : modules.filter((module) => module.defaultOpen).map((module) => module.id)
  );

  const toggleModule = (id: string) => {
    setOpenModules((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6">
      <h2 className="text-lg font-bold text-[#1a1a1a] sm:text-xl">Course Curriculum</h2>

      <div className="mt-5 max-h-none space-y-3 overflow-visible pr-1 lg:max-h-[640px] lg:overflow-y-auto">
        {modules.map((module) => {
          const isOpen = openModules.includes(module.id);
          const lessonCount = module.lessons.length;

          return (
            <div
              key={module.id}
              className={cn(
                "overflow-hidden rounded-xl border border-[#ece6e3]",
                isOpen && "shadow-[0_6px_20px_rgba(35,25,22,0.06)]"
              )}
            >
              <button
                type="button"
                onClick={() => toggleModule(module.id)}
                className={cn(
                  "flex w-full items-start justify-between gap-4 bg-white px-4 py-4 text-left sm:px-5",
                  isOpen && "border-b border-[#ece6e3]"
                )}
              >
                <div className="min-w-0">
                  {(isCourseCompleted || module.completed) && (
                    <span className="mb-2 inline-flex rounded-full bg-[#ecfdf3] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#16a34a]">
                      Completed
                    </span>
                  )}
                  <p className="text-[15px] font-bold leading-snug text-[#1a1a1a]">{module.title}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-medium text-[#6f6562]">
                    <span className="inline-flex items-center gap-1.5">
                      <PlayCircle className="h-4 w-4" aria-hidden />
                      {lessonCount} lessons
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" aria-hidden />
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
                <ul className="bg-white px-4 pb-2 sm:px-5">
                  {module.lessons.map((lesson) => (
                    <LessonRow key={lesson.id} lesson={lesson} />
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
