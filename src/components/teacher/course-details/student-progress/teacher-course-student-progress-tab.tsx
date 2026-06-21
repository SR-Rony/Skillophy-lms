"use client";

import { TeacherCourseClassAttendanceChart } from "./teacher-course-class-attendance-chart";
import { TeacherCourseLeaderboardPanel } from "./teacher-course-leaderboard-panel";
import { TeacherCourseStudentProgressSummary } from "./teacher-course-student-progress-summary";
import type { TeacherCourseDetailsData } from "@/types/teacher-course-details.types";

interface TeacherCourseStudentProgressTabProps {
  course: TeacherCourseDetailsData;
}

export function TeacherCourseStudentProgressTab({ course }: TeacherCourseStudentProgressTabProps) {
  const { studentProgress, studentProgressTab } = course;

  return (
    <section className="bg-white pb-10 sm:pb-12 md:pb-14">
      <div className="mx-auto w-full max-w-[1320px] px-4 pt-4 sm:px-6 sm:pt-6 md:pt-8 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-start lg:gap-6 xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-8">
          <div className="space-y-5">
            <TeacherCourseStudentProgressSummary stats={studentProgress} />
            <TeacherCourseClassAttendanceChart topics={studentProgressTab.topicAttendance} />
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <TeacherCourseLeaderboardPanel data={studentProgressTab.leaderboard} />
          </aside>
        </div>
      </div>
    </section>
  );
}
