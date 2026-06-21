"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  Clock,
  Eye,
  PlayCircle,
} from "lucide-react";
import { Heading } from "@/components/shared/heading";
import { ROUTES } from "@/constants";
import type {
  StudentCourseCurriculumLesson,
  StudentCourseCurriculumModule,
} from "@/types/student-course-details.types";
import { cn } from "@/utils";

const LESSON_ICONS = {
  "live-class": { icon: PlayCircle, className: "text-primary" },
  video: { icon: PlayCircle, className: "text-primary" },
  reading: { icon: BookOpen, className: "text-[#22c55e]" },
  quiz: { icon: CircleHelp, className: "text-[#3b82f6]" },
  assignment: { icon: ClipboardList, className: "text-[#a855f7]" },
} as const;

interface TeacherCourseLiveCurriculumProps {
  modules: StudentCourseCurriculumModule[];
  courseSlug?: string;
  activeLessonId?: string;
  variant?: "overview" | "video";
}

function getLessonHref(lesson: StudentCourseCurriculumLesson, courseSlug?: string) {
  if (lesson.href) {
    return lesson.href;
  }

  if (!courseSlug) {
    return undefined;
  }

  if (lesson.type === "live-class" || lesson.type === "video") {
    return ROUTES.teacher.courseLive(courseSlug, lesson.id);
  }

  return undefined;
}

function TeacherLessonRow({
  lesson,
  courseSlug,
  activeLessonId,
}: {
  lesson: StudentCourseCurriculumLesson;
  courseSlug?: string;
  activeLessonId?: string;
}) {
  const isCompleted = lesson.status === "completed";
  const isCurrent = lesson.status === "current" || lesson.id === activeLessonId;
  const LessonIcon = isCompleted ? CheckCircle2 : LESSON_ICONS[lesson.type].icon;
  const iconClassName = isCompleted
    ? "text-[#22c55e]"
    : isCurrent
      ? "text-primary"
      : LESSON_ICONS[lesson.type].className;
  const href = getLessonHref(lesson, courseSlug);

  const content = (
    <>
      <LessonIcon className={cn("h-[18px] w-[18px] shrink-0", iconClassName)} aria-hidden />
      <span
        className={cn(
          "text-[14px] leading-snug",
          isCurrent || isCompleted ? "font-medium text-[#1a1a1a]" : "text-[#6f6562]"
        )}
      >
        {lesson.title}
      </span>
    </>
  );

  return (
    <li
      className={cn(
        "border-t border-[#f0ebe8] first:border-t-0",
        isCurrent && "-mx-2 rounded-lg border-l-4 border-primary bg-[#fff5f3] px-2"
      )}
    >
      {href ? (
        <Link
          href={href}
          className="flex items-center gap-3 py-3.5 transition-colors hover:text-primary"
        >
          {content}
        </Link>
      ) : (
        <div className="flex items-center gap-3 py-3.5">{content}</div>
      )}
    </li>
  );
}

export function TeacherCourseLiveCurriculum({
  modules,
  courseSlug,
  activeLessonId,
  variant = "overview",
}: TeacherCourseLiveCurriculumProps) {
  const [openModules, setOpenModules] = useState<string[]>(() => {
    const defaults = modules.filter((module) => module.defaultOpen).map((module) => module.id);

    if (!activeLessonId) {
      return defaults;
    }

    const activeModule = modules.find((module) =>
      module.lessons.some((lesson) => lesson.id === activeLessonId)
    );

    if (activeModule && !defaults.includes(activeModule.id)) {
      return [...defaults, activeModule.id];
    }

    return defaults;
  });

  const toggleModule = (id: string) => {
    setOpenModules((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  };

  const isVideoVariant = variant === "video";

  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6">
      <Heading as="h2" variant="dashboard-section">
        Course Curriculum
      </Heading>

      <div className="mt-5 max-h-none space-y-3 overflow-visible pr-1 lg:max-h-[640px] lg:overflow-y-auto lg:[scrollbar-color:#1a1a1a_#ececec] lg:[scrollbar-width:thin]">
        {modules.map((module) => {
          const isOpen = openModules.includes(module.id);
          const isLiveModule = module.liveClassCount != null || module.assignmentCount != null;

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
                  {module.completed && (
                    <span className="mb-2 inline-flex rounded-full bg-[#ecfdf3] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#16a34a]">
                      Completed
                    </span>
                  )}
                  <p className="text-[15px] font-bold leading-snug text-[#1a1a1a]">{module.title}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-medium text-[#6f6562]">
                    {isVideoVariant && isLiveModule ? (
                      <>
                        {module.liveClassCount != null && (
                          <span className="inline-flex items-center gap-1.5">
                            <PlayCircle className="h-4 w-4" aria-hidden />
                            {module.liveClassCount} LIVE class
                          </span>
                        )}
                        {module.assignmentCount != null && (
                          <span className="inline-flex items-center gap-1.5">
                            <ClipboardList className="h-4 w-4" aria-hidden />
                            {module.assignmentCount} assignment
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        <span className="inline-flex items-center gap-1.5">
                          <Eye className="h-4 w-4" aria-hidden />
                          {module.lessons.length} lessons
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-4 w-4" aria-hidden />
                          {module.duration}
                        </span>
                      </>
                    )}
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
                    <TeacherLessonRow
                      key={lesson.id}
                      lesson={lesson}
                      courseSlug={courseSlug}
                      activeLessonId={activeLessonId}
                    />
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
