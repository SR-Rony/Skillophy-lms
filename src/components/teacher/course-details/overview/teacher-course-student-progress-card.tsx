"use client";

import { Heading } from "@/components/shared/heading";
import { TeacherCourseStatRing } from "@/components/teacher/course-details/shared";
import type { TeacherCourseStudentProgressStats } from "@/types/teacher-course-details.types";

const PROGRESS_STATS = [
  {
    key: "attendancePercent" as const,
    label: "Attendance",
    strokeColor: "#9333ea",
    valueColor: "#9333ea",
    backgroundColor: "bg-[#faf5ff]",
  },
  {
    key: "learnersPassedPercent" as const,
    label: "Learners Passed",
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

interface TeacherCourseStudentProgressCardProps {
  stats: TeacherCourseStudentProgressStats;
  onViewProgressDetails: () => void;
}

export function TeacherCourseStudentProgressCard({
  stats,
  onViewProgressDetails,
}: TeacherCourseStudentProgressCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6">
      <svg
        className="pointer-events-none absolute bottom-0 right-0 h-24 w-32 text-[#ead8d2]/40 sm:h-28 sm:w-36"
        viewBox="0 0 160 140"
        fill="none"
        aria-hidden
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <ellipse
            key={index}
            cx="120"
            cy="100"
            rx={24 + index * 14}
            ry={18 + index * 10}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative z-10">
        <Heading as="h3" variant="position-card">
          Student Progress
        </Heading>
        <p className="mt-1.5 text-[13px] leading-relaxed text-[#9ca3af]">
          Your constructive feedback and insights will help other learners
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-2.5">
          {PROGRESS_STATS.map((item) => (
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

        <button
          type="button"
          onClick={onViewProgressDetails}
          className="mt-5 block w-full text-center text-[13px] font-semibold text-[#1a1a1a] underline underline-offset-2 transition-colors hover:text-primary"
        >
          View Progress Details
        </button>
      </div>
    </div>
  );
}
