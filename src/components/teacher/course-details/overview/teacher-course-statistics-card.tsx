"use client";

import { Heading } from "@/components/shared/heading";
import type { TeacherCourseStatisticsData } from "@/types/teacher-course-details.types";

const SIZE = 168;
const CENTER = SIZE / 2;
const RADIUS = 62;
const STROKE = 14;

interface TeacherCourseStatisticsCardProps {
  statistics: TeacherCourseStatisticsData;
}

export function TeacherCourseStatisticsCard({ statistics }: TeacherCourseStatisticsCardProps) {
  const circumference = 2 * Math.PI * RADIUS;
  const completedOffset =
    circumference - (statistics.completionPercent / 100) * circumference;

  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6">
      <Heading as="h2" variant="dashboard-section">
        Course Statistics
      </Heading>

      <div className="mt-6 flex flex-col items-center">
        <div className="relative flex h-[168px] w-[168px] items-center justify-center">
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            aria-hidden
          >
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke="#ffe4e6"
              strokeWidth={STROKE}
            />
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke="#ff4747"
              strokeWidth={STROKE}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={completedOffset}
            />
          </svg>
          <span className="text-[34px] font-bold leading-none text-[#1a1a1a] sm:text-[38px]">
            {statistics.completionPercent}%
          </span>
        </div>

        <div className="mt-6 grid w-full max-w-[280px] grid-cols-2 gap-4 sm:gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffe4e6]" aria-hidden />
              <span className="text-[12px] font-medium text-[#6b7280] sm:text-[13px]">
                Enrolled Learners
              </span>
            </div>
            <p className="mt-2 text-[22px] font-bold text-[#1a1a1a] sm:text-[24px]">
              {statistics.enrolledLearners.toLocaleString()}
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
              <span className="text-[12px] font-medium text-[#6b7280] sm:text-[13px]">
                Completed Learners
              </span>
            </div>
            <p className="mt-2 text-[22px] font-bold text-[#1a1a1a] sm:text-[24px]">
              {statistics.completedLearners.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
