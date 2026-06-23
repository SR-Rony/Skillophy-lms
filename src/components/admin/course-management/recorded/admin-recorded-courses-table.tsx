"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { AdminRecordedCourseStatusBadge } from "@/components/admin/course-management/recorded/admin-recorded-course-status-badge";
import {
  formatAdminRecordedCourseLearners,
  formatAdminRecordedCoursePrice,
  formatAdminRecordedCourseRating,
} from "@/components/admin/course-management/admin-course-management.utils";
import type { AdminRecordedCourse } from "@/types/admin-course-management.types";
import { cn } from "@/utils";

const checkboxClassName =
  "h-4 w-4 rounded border-[#d1d5db] text-primary accent-primary focus:ring-primary/20";

interface AdminRecordedCoursesTableProps {
  courses: AdminRecordedCourse[];
  selectedIds: Set<string>;
  onToggleRow: (courseId: string) => void;
  onToggleAll: (courseIds: string[]) => void;
}

function AdminRecordedCoursesTableRow({
  course,
  isSelected,
  onToggle,
}: {
  course: AdminRecordedCourse;
  isSelected: boolean;
  onToggle: () => void;
}) {
  return (
    <tr
      className={cn(
        "border-b border-[#f3f4f6] last:border-b-0 transition-colors",
        isSelected ? "bg-[#fff5f5]" : "bg-white hover:bg-[#fafafa]"
      )}
    >
      <td className="w-11 px-4 py-3 sm:px-5">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
          aria-label={`Select ${course.title}`}
          className={checkboxClassName}
        />
      </td>
      <td className="min-w-[280px] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
            <Image
              src={course.thumbnail}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="36px"
            />
          </div>
          <p className="min-w-0 text-[13px] font-semibold leading-snug text-[#1a1a1a] sm:text-[14px]">
            {course.title}
          </p>
        </div>
      </td>
      <td className="min-w-[180px] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
            <Image
              src={course.teacherAvatar}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="32px"
            />
          </div>
          <p className="truncate text-[13px] font-medium text-[#1a1a1a] sm:text-[14px]">
            {course.teacherName}
          </p>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium text-[#757575] sm:px-5">
        {course.category}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-medium tabular-nums text-[#757575] sm:px-5">
        {formatAdminRecordedCourseLearners(course.totalLearners)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-semibold tabular-nums text-[#1a1a1a] sm:px-5">
        {formatAdminRecordedCoursePrice(course.price)}
      </td>
      <td className="px-4 py-3 sm:px-5">
        <AdminRecordedCourseStatusBadge status={course.status} />
      </td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
        <div className="flex items-center gap-1.5">
          <Star className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" aria-hidden />
          <span className="text-[13px] font-semibold tabular-nums text-[#1a1a1a] sm:text-[14px]">
            {formatAdminRecordedCourseRating(course.rating)}
          </span>
        </div>
      </td>
    </tr>
  );
}

export function AdminRecordedCoursesTable({
  courses,
  selectedIds,
  onToggleRow,
  onToggleAll,
}: AdminRecordedCoursesTableProps) {
  const courseIds = courses.map((course) => course.id);
  const allSelected = courseIds.length > 0 && courseIds.every((id) => selectedIds.has(id));
  const someSelected = courseIds.some((id) => selectedIds.has(id));

  return (
    <div className="overflow-x-auto bg-white">
      <table className="w-full min-w-[1120px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#ebe8e6] bg-white">
            <th className="w-11 px-4 py-3.5 sm:px-5">
              <input
                type="checkbox"
                checked={allSelected}
                ref={(input) => {
                  if (input) {
                    input.indeterminate = !allSelected && someSelected;
                  }
                }}
                onChange={() => onToggleAll(courseIds)}
                aria-label="Select all courses on this page"
                className={checkboxClassName}
              />
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Course Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Teacher
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Category
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Total Learners
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Price
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Status
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-5 sm:text-[14px]">
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <AdminRecordedCoursesTableRow
              key={course.id}
              course={course}
              isSelected={selectedIds.has(course.id)}
              onToggle={() => onToggleRow(course.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
