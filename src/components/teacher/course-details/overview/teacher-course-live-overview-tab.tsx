"use client";

import { StudentCourseSupportContact } from "@/components/student/course-details/student-course-details-shared";
import { TeacherCourseAssignmentsCard } from "./teacher-course-assignments-card";
import { TeacherCourseAssignmentsEmptyCard } from "./teacher-course-assignments-empty-card";
import { TeacherCourseJoinGroupCard } from "./teacher-course-join-group-card";
import { TeacherCourseLiveCurriculum } from "./teacher-course-live-curriculum";
import { TeacherCourseScheduleEmptyCard } from "./teacher-course-schedule-empty-card";
import { TeacherCourseStudentProgressCard } from "./teacher-course-student-progress-card";
import { TeacherCourseUpcomingLiveClassCard } from "./teacher-course-upcoming-live-class-card";
import type { TeacherCourseDetailsData } from "@/types/teacher-course-details.types";
import { cn } from "@/utils";

interface TeacherCourseLiveOverviewTabProps {
  course: TeacherCourseDetailsData;
  onViewProgressDetails: () => void;
  onCheckAssignment: () => void;
  showMobileCurriculum: boolean;
  onHideMobileCurriculum: () => void;
}

export function TeacherCourseLiveOverviewTab({
  course,
  onViewProgressDetails,
  onCheckAssignment,
  showMobileCurriculum,
  onHideMobileCurriculum,
}: TeacherCourseLiveOverviewTabProps) {
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
          <TeacherCourseLiveCurriculum modules={course.curriculum} />
        </div>
      )}

      <div
        className={cn(
          "grid gap-4 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-start lg:gap-6 xl:gap-8",
          showMobileCurriculum && "hidden lg:grid"
        )}
      >
        <aside className="space-y-3">
          {course.upcomingLiveClass ? (
            <TeacherCourseUpcomingLiveClassCard liveClass={course.upcomingLiveClass} />
          ) : (
            <TeacherCourseScheduleEmptyCard />
          )}

          {course.assignmentsSummary && course.assignmentsSummary.pendingCount > 0 ? (
            <TeacherCourseAssignmentsCard
              summary={course.assignmentsSummary}
              onCheckAssignment={onCheckAssignment}
            />
          ) : (
            <TeacherCourseAssignmentsEmptyCard />
          )}

          <TeacherCourseStudentProgressCard
            stats={course.studentProgress}
            onViewProgressDetails={onViewProgressDetails}
          />

          <TeacherCourseJoinGroupCard />
          <StudentCourseSupportContact phone={course.supportPhone} />
        </aside>

        <div className="hidden lg:block">
          <TeacherCourseLiveCurriculum modules={course.curriculum} />
        </div>
      </div>
    </>
  );
}

export function TeacherCourseLiveCurriculumMobileButton({ onClick }: { onClick: () => void }) {
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
