"use client";

import { Heading } from "@/components/shared/heading";
import { TeacherCourseStatRing } from "@/components/teacher/course-details/shared";
import type { TeacherCourseStudentProgressStats } from "@/types/teacher-course-details.types";

const TAB_PROGRESS_STATS = [
  {
    key: "attendancePercent" as const,
    label: "Attendance",
    strokeColor: "#9333ea",
    valueColor: "#9333ea",
    backgroundColor: "bg-[#faf5ff]",
  },
  {
    key: "learnersPassedPercent" as const,
    label: "Students Passed",
    strokeColor: "#3b82f6",
    valueColor: "#2563eb",
    backgroundColor: "bg-[#eff6ff]",
  },
  {
    key: "assignmentPercent" as const,
    label: "Assignment",
    strokeColor: "#6366f1",
    valueColor: "#6366f1",
    backgroundColor: "bg-[#eef2ff]",
  },
];

interface TeacherCourseStudentProgressSummaryProps {
  stats: TeacherCourseStudentProgressStats;
}

export function TeacherCourseStudentProgressSummary({
  stats,
}: TeacherCourseStudentProgressSummaryProps) {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6">
      <Heading as="h2" variant="dashboard-section">
        Student Progress
      </Heading>

      <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
        {TAB_PROGRESS_STATS.map((item) => (
          <TeacherCourseStatRing
            key={item.key}
            value={stats[item.key]}
            label={item.label}
            strokeColor={item.strokeColor}
            valueColor={item.valueColor}
            backgroundColor={item.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
}
