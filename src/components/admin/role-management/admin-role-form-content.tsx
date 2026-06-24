"use client";

import { useId } from "react";
import { adminCourseAddLessonInputClassName } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import type { AdminRoleForm } from "@/types/admin-role-management.types";

interface AdminRoleFormContentProps {
  form: AdminRoleForm;
  onChange: (updates: Partial<AdminRoleForm>) => void;
}

export function AdminRoleFormContent({ form, onChange }: AdminRoleFormContentProps) {
  const nameInputId = useId();

  return (
    <div className="space-y-2">
      <label
        htmlFor={nameInputId}
        className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]"
      >
        Role Name
      </label>
      <input
        id={nameInputId}
        type="text"
        value={form.name}
        onChange={(event) => onChange({ name: event.target.value })}
        placeholder="Moderator"
        className={adminCourseAddLessonInputClassName}
      />
    </div>
  );
}
