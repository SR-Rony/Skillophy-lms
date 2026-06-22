"use client";

import { StudentCourseSupportContact } from "@/components/student/course-details/student-course-details-shared";
import { TeacherCourseJoinGroupCard } from "./teacher-course-join-group-card";
import { TeacherCourseLiveCurriculum } from "./teacher-course-live-curriculum";
import { TeacherCourseStatisticsCard } from "./teacher-course-statistics-card";
import { TeacherCourseStudentEnrolmentChart } from "./teacher-course-student-enrolment-chart";
import type { TeacherCourseRecordedDetailsData } from "@/types/teacher-course-details.types";
import { cn } from "@/utils";

interface TeacherCourseRecordedOverviewTabProps {
  course: TeacherCourseRecordedDetailsData;
  showMobileCurriculum: boolean;
  onHideMobileCurriculum: () => void;
}

export function TeacherCourseRecordedOverviewTab({
  course,
  showMobileCurriculum,
  onHideMobileCurriculum,
}: TeacherCourseRecordedOverviewTabProps) {
  const { statistics, monthlyEnrollment } = course.recordedOverview;

  return (
    <>
      {showMobileCurriculum && (
        <div className="lg:hidden">
          <button
            type="button"
            onClick={onHideMobileCurriculum}
            className="mb-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#6b7280] transition-colors hover:text-[#1a1a1a]"
          >
            ← Back to Overview
          </button>
          <TeacherCourseLiveCurriculum modules={course.curriculum} courseSlug={course.slug} />
        </div>
      )}

      <div
        className={cn(
          "grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-6 xl:gap-8",
          showMobileCurriculum && "hidden lg:grid"
        )}
      >
        <aside className="min-w-0 space-y-4 sm:space-y-5">
          <TeacherCourseStatisticsCard statistics={statistics} />
          <TeacherCourseStudentEnrolmentChart monthlyEnrollment={monthlyEnrollment} />
          <TeacherCourseJoinGroupCard />
        </aside>

        <div className="hidden min-w-0 lg:sticky lg:top-6 lg:block lg:self-start">
          <TeacherCourseLiveCurriculum modules={course.curriculum} courseSlug={course.slug} />
        </div>
      </div>

      <div className={cn("mt-6 sm:mt-8", showMobileCurriculum && "hidden lg:block")}>
        <StudentCourseSupportContact phone={course.supportPhone} />
      </div>
    </>
  );
}

export function TeacherCourseRecordedCurriculumMobileButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#ebe8e6] bg-white px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <button
        type="button"
        onClick={onClick}
        className="w-full rounded-xl border border-[#1a1a1a] bg-white py-3.5 text-sm font-bold text-[#1a1a1a] transition-colors hover:bg-[#fafafa]"
      >
        See Course Curriculum
      </button>
    </div>
  );
}
