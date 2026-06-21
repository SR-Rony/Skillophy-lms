"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import { MyCoursesSeamBackground } from "@/components/student/my-courses-seam-background";
import { teacherCourseDetailsBackHref } from "@/data/mock/teacher-course-details.mock";
import type {
  TeacherCourseDetailsData,
  TeacherCourseDetailsTab,
} from "@/types/teacher-course-details.types";
import { cn } from "@/utils";

const teacherLiveCourseDetailsTabs: { id: TeacherCourseDetailsTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "assignment", label: "Assignment" },
  { id: "student-progress", label: "Student Progress" },
  { id: "class-recordings", label: "Class Recordings" },
  { id: "resources", label: "Resources" },
  { id: "student-feedback", label: "Student Feedback" },
];

interface TeacherCourseDetailsHeroProps {
  course: TeacherCourseDetailsData;
  activeTab: TeacherCourseDetailsTab;
  onTabChange: (tab: TeacherCourseDetailsTab) => void;
}

export function TeacherCourseDetailsHero({
  course,
  activeTab,
  onTabChange,
}: TeacherCourseDetailsHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#f3f4f6] bg-white">
      <MyCoursesSeamBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 pb-0 pt-6 md:px-6 md:pt-8 lg:px-8 lg:pt-10">
        <Link
          href={teacherCourseDetailsBackHref}
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Go Back
        </Link>

        <div className="mt-5 flex flex-col gap-8 lg:mt-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="min-w-0 flex-1">
            <Heading as="h1" variant="dashboard-page-compact">
              {course.title}
            </Heading>

            <div className="mt-4 max-w-xl space-y-2.5 sm:mt-5">
              <p className="text-[13px] text-[#9ca3af]">
                <span className="font-semibold text-[#1a1a1a]">{course.completedTopics}</span> of{" "}
                <span className="font-semibold text-[#1a1a1a]">{course.totalTopics}</span> topics
                have been done
              </p>
              <div className="flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#ececec]">
                  <div
                    className="h-full rounded-full bg-[#1a1a1a] transition-all"
                    style={{ width: `${course.progressPercent}%` }}
                  />
                </div>
                <span className="shrink-0 text-[13px] font-bold text-[#1a1a1a]">
                  {course.progressPercent}%
                </span>
              </div>
            </div>
          </div>

          <div className="relative hidden h-[220px] w-[300px] shrink-0 overflow-hidden rounded-2xl lg:block">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              sizes="300px"
              priority
            />
          </div>
        </div>

        <nav
          aria-label="Course sections"
          className="scrollbar-hide -mx-1 mt-6 flex w-full gap-0 overflow-x-auto sm:mt-8 lg:mt-10"
        >
          {teacherLiveCourseDetailsTabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "min-w-0 shrink-0 border-b-[3px] px-3 py-3 text-center text-[12px] font-semibold transition-colors sm:px-4 sm:text-[13px] lg:flex-1 lg:px-2 lg:text-[14px]",
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-[#1a1a1a] hover:text-[#4a4a4a]"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
