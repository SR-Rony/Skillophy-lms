"use client";

import { useId } from "react";
import { AdminCourseCreationActiveStatus } from "@/components/admin/course-creation/admin-course-creation-active-status";
import { adminCourseAddLessonInputClassName } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import type { AdminCategoryForm } from "@/types/admin-category-management.types";

interface AdminCategoryFormContentProps {
  form: AdminCategoryForm;
  onChange: (updates: Partial<AdminCategoryForm>) => void;
}

export function AdminCategoryFormContent({ form, onChange }: AdminCategoryFormContentProps) {
  const nameInputId = useId();

  return (
    <div className="space-y-5 sm:space-y-6">
      <AdminCourseCreationActiveStatus
        isActive={form.isActive}
        isEditing
        onChange={(isActive) => onChange({ isActive })}
      />

      <div className="space-y-2">
        <label
          htmlFor={nameInputId}
          className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
        >
          Category name
        </label>
        <input
          id={nameInputId}
          type="text"
          value={form.name}
          onChange={(event) => onChange({ name: event.target.value })}
          placeholder="Skill Development"
          className={adminCourseAddLessonInputClassName}
        />
      </div>
    </div>
  );
}
