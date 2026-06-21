"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import {
  CourseVideoPlayer,
  CourseVideoTabPanel,
} from "@/components/student/course-video/student-course-video-shared";
import { CourseVideoReportButton } from "@/components/student/course-video/student-course-video-report-button";
import { TeacherCourseLiveCurriculum } from "@/components/teacher/course-details/overview";
import { ROUTES } from "@/constants";
import type { TeacherCourseDetailsData } from "@/types/teacher-course-details.types";
import type { StudentLiveVideoSession } from "@/types/student-live-video.types";
import type { CourseVideoTab } from "@/components/student/course-video/student-course-video-shared";
import { cn } from "@/utils";

const teacherCourseVideoTabs: { id: CourseVideoTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "resource", label: "Resource" },
];

interface TeacherLiveVideoPageProps {
  course: TeacherCourseDetailsData;
  session: StudentLiveVideoSession;
}

export function TeacherLiveVideoPage({ course, session }: TeacherLiveVideoPageProps) {
  const [activeTab, setActiveTab] = useState<CourseVideoTab>("overview");

  return (
    <div className="-mx-4 -mt-4 bg-white pb-10 pt-6 text-[#1a1a1a] md:-mx-6 md:-mt-6 sm:pb-12 sm:pt-8 lg:-mx-8 lg:-mt-8 lg:pb-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
          <Link
            href={ROUTES.teacher.courseDetails(course.slug)}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#6b7280] transition-colors hover:text-[#1a1a1a] sm:text-[14px]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Go Back
          </Link>

          <CourseVideoReportButton />
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_400px]">
          <div className="min-w-0 space-y-5 sm:space-y-6">
            <CourseVideoPlayer
              thumbnail={session.thumbnail}
              title={session.title}
              playingLabel="Live video player placeholder"
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <h1 className="text-[22px] font-bold leading-snug text-[#1a1a1a] sm:text-[26px] lg:text-[28px]">
                {session.title}
              </h1>

              <div className="flex shrink-0 items-center gap-4 text-[13px] font-semibold sm:text-[14px]">
                {session.previousLesson ? (
                  <Link
                    href={session.previousLesson.href}
                    className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden />
                    Previous
                  </Link>
                ) : (
                  <span className="text-[#c4c4c4]">Previous</span>
                )}
                {session.nextLesson ? (
                  <Link
                    href={session.nextLesson.href}
                    className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  </Link>
                ) : (
                  <span className="text-[#c4c4c4]">Next</span>
                )}
              </div>
            </div>

            <div>
              <nav
                aria-label="Live class sections"
                className="flex gap-6 border-b border-[#ebe8e6] sm:gap-8"
              >
                {teacherCourseVideoTabs.map((tab) => {
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "border-b-[3px] pb-3 text-[14px] font-semibold transition-colors sm:text-[15px]",
                        isActive
                          ? "border-primary text-primary"
                          : "border-transparent text-[#6f6562] hover:text-[#1a1a1a]"
                      )}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </nav>

              <div className="pt-6 sm:pt-8">
                <CourseVideoTabPanel activeTab={activeTab} session={session} />
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <TeacherCourseLiveCurriculum
              modules={course.curriculum}
              courseSlug={course.slug}
              activeLessonId={session.lessonId}
              variant="video"
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
