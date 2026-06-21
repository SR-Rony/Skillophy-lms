import { ChevronDown, SlidersHorizontal } from "lucide-react";
import type { TeacherDashboardCourseFilter } from "@/types/teacher-dashboard.types";

interface TeacherCourseFilterProps {
  courseFilters: TeacherDashboardCourseFilter[];
  selectedCourseId: string;
}

export function TeacherCourseFilter({ courseFilters, selectedCourseId }: TeacherCourseFilterProps) {
  const selectedCourse =
    courseFilters.find((course) => course.id === selectedCourseId) ?? courseFilters[0];

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg border border-[#e8e4e1] bg-white px-3 py-2 text-[12px] font-semibold text-[#4a4a4a] shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors hover:border-[#ddd8d6] sm:text-[13px]"
      >
        <SlidersHorizontal className="h-4 w-4 text-[#6b7280]" strokeWidth={2} />
        Course
      </button>

      <label className="relative min-w-0">
        <select
          defaultValue={selectedCourse?.id}
          className="appearance-none rounded-lg border border-[#e8e4e1] bg-white py-2 pl-3 pr-9 text-[12px] font-semibold text-[#1a1a1a] shadow-[0_1px_2px_rgba(15,23,42,0.04)] outline-none transition-colors focus:border-primary sm:max-w-[240px] sm:text-[13px]"
        >
          {courseFilters.map((course) => (
            <option key={course.id} value={course.id}>
              {course.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]"
          strokeWidth={2}
        />
      </label>
    </div>
  );
}
