"use client";

import { ArrowUpDown, ChevronDown, ListFilter } from "lucide-react";
import type {
  StudentClassScheduleCourseFilter,
  StudentClassScheduleSortOption,
} from "@/types/student-class-schedule.types";
import { cn } from "@/utils";

interface ClassScheduleToolbarProps {
  courseFilters: StudentClassScheduleCourseFilter[];
  sortOptions: StudentClassScheduleSortOption[];
  selectedCourseId: string;
  selectedSortId: string;
  onCourseChange: (courseId: string) => void;
  onSortChange: (sortId: string) => void;
  className?: string;
}

function ToolbarSelect({
  id,
  label,
  icon,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: { id: string; label: string }[];
}) {
  return (
    <div className="min-w-0 flex-1 sm:flex-none sm:min-w-[220px]">
      <label htmlFor={id} className="mb-2 block text-[12px] font-medium text-[#9ca3af]">
        {label}
      </label>
      <div className="relative border-b-2 border-[#e5e7eb] pb-2.5">
        <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[#6b7280]">
          {icon}
        </span>
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={cn(
            "h-9 w-full min-w-0 cursor-pointer appearance-none bg-transparent",
            "pl-7 pr-8 text-[13px] font-semibold text-[#1a1a1a]",
            "focus:border-primary focus:outline-none"
          )}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7280]"
          aria-hidden
        />
      </div>
    </div>
  );
}

export function ClassScheduleToolbar({
  courseFilters,
  sortOptions,
  selectedCourseId,
  selectedSortId,
  onCourseChange,
  onSortChange,
  className,
}: ClassScheduleToolbarProps) {
  const selectedSortLabel =
    sortOptions.find((option) => option.id === selectedSortId)?.label ?? "Default";

  return (
    <div
      className={cn(
        "flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <ToolbarSelect
        id="class-schedule-course"
        label="Course"
        icon={<ListFilter className="h-4 w-4" aria-hidden />}
        value={selectedCourseId}
        onChange={onCourseChange}
        options={courseFilters}
      />

      <ToolbarSelect
        id="class-schedule-sort"
        label={`Sort: ${selectedSortLabel}`}
        icon={<ArrowUpDown className="h-4 w-4" aria-hidden />}
        value={selectedSortId}
        onChange={onSortChange}
        options={sortOptions.map((option) => ({
          id: option.id,
          label: option.id === "default" ? "Default" : option.label,
        }))}
      />
    </div>
  );
}
