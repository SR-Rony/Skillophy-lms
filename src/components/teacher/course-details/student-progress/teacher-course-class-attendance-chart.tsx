"use client";

import { Heading } from "@/components/shared/heading";
import type { TeacherCourseTopicAttendance } from "@/types/teacher-course-details.types";

const Y_AXIS_TICKS = [100, 80, 60, 40, 20, 0];
const CHART_HEIGHT = 220;

interface TeacherCourseClassAttendanceChartProps {
  topics: TeacherCourseTopicAttendance[];
}

export function TeacherCourseClassAttendanceChart({
  topics,
}: TeacherCourseClassAttendanceChartProps) {
  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-white p-5 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-6">
      <Heading as="h2" variant="dashboard-section">
        Class Attendance
      </Heading>

      <div className="mt-6 flex gap-3 sm:gap-4">
        <div
          className="flex shrink-0 flex-col justify-between pb-8 text-[11px] font-medium text-[#9ca3af] sm:text-[12px]"
          style={{ height: CHART_HEIGHT }}
        >
          {Y_AXIS_TICKS.map((tick) => (
            <span key={tick}>{tick}%</span>
          ))}
        </div>

        <div className="min-w-0 flex-1">
          <div
            className="relative border-b border-l border-[#ececec]"
            style={{ height: CHART_HEIGHT }}
          >
            {Y_AXIS_TICKS.slice(0, -1).map((tick) => (
              <div
                key={tick}
                className="absolute inset-x-0 border-t border-dashed border-[#f0ebe8]"
                style={{ bottom: `${(tick / 100) * CHART_HEIGHT}px` }}
              />
            ))}

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-1 px-1 sm:gap-2 sm:px-2">
              {topics.map((item) => (
                <div key={item.topic} className="flex flex-1 justify-center">
                  <div
                    className="w-full max-w-[24px] rounded-t-md bg-[#f97316] sm:max-w-[28px]"
                    style={{
                      height: `${Math.max(4, (item.attendancePercent / 100) * CHART_HEIGHT)}px`,
                    }}
                    title={`Topic ${item.topic}: ${item.attendancePercent}%`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex justify-between px-1 sm:px-2">
            {topics.map((item) => (
              <span
                key={item.topic}
                className="flex-1 text-center text-[11px] font-medium text-[#9ca3af] sm:text-[12px]"
              >
                {item.topic}
              </span>
            ))}
          </div>
          <p className="mt-2 text-center text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
            Topic
          </p>
        </div>
      </div>
    </div>
  );
}
