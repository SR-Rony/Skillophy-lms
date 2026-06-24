"use client";

import { ChevronDown, ListFilter } from "lucide-react";
import { AdminCourseCreationActiveStatus } from "@/components/admin/course-creation/admin-course-creation-active-status";
import { adminCourseAddLessonInputClassName } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import type { AdminRoleOption } from "@/types/admin-role-management.types";
import { cn } from "@/utils";

interface AdminRolePermissionsControlsProps {
  selectedRoleId: string;
  roleOptions: AdminRoleOption[];
  isActive: boolean;
  onRoleChange: (roleId: string) => void;
  onActiveChange: (isActive: boolean) => void;
}

export function AdminRolePermissionsControls({
  selectedRoleId,
  roleOptions,
  isActive,
  onRoleChange,
  onActiveChange,
}: AdminRolePermissionsControlsProps) {
  const selectedRoleLabel =
    roleOptions.find((option) => option.value === selectedRoleId)?.label ?? "Select role";

  return (
    <div className="flex flex-col gap-4 border-b border-[#f0f0f0] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
      <div className="relative w-full sm:max-w-[280px]">
        <div className="flex h-10 items-stretch overflow-hidden rounded-xl border border-[#ebe8e6] bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)]">
          <div className="flex items-center gap-2 border-r border-[#ebe8e6] px-3.5">
            <ListFilter className="h-4 w-4 text-[#6b7280]" strokeWidth={2} aria-hidden />
            <span className="text-[13px] font-medium text-[#6b7280]">Role</span>
          </div>

          <div className="relative min-w-0 flex-1">
            <select
              value={selectedRoleId}
              onChange={(event) => onRoleChange(event.target.value)}
              aria-label="Select role"
              className={cn(
                adminCourseAddLessonInputClassName,
                "h-full rounded-none border-0 px-3.5 shadow-none focus:ring-0"
              )}
            >
              {roleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#757575]"
              aria-hidden
            />
          </div>
        </div>
        <span className="sr-only">Selected role: {selectedRoleLabel}</span>
      </div>

      <AdminCourseCreationActiveStatus
        isActive={isActive}
        isEditing
        onChange={onActiveChange}
      />
    </div>
  );
}
