"use client";

import { AdminCourseCreationTeacherSelect } from "@/components/admin/course-creation/admin-course-creation-teacher-select";
import {
  adminCourseAddLessonInputClassName,
  adminCourseAddLessonTextareaClassName,
} from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import type {
  AdminCourseAddLessonForm,
  AdminCourseCreationTeacher,
} from "@/types/admin-course-creation.types";

interface AdminCourseCreationAddLessonOverviewTabProps {
  form: AdminCourseAddLessonForm;
  teachers: AdminCourseCreationTeacher[];
  maxTeachers: number;
  onChange: (updates: Partial<AdminCourseAddLessonForm>) => void;
}

export function AdminCourseCreationAddLessonOverviewTab({
  form,
  teachers,
  maxTeachers,
  onChange,
}: AdminCourseCreationAddLessonOverviewTabProps) {
  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="space-y-2">
        <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">
          Lesson Title <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          value={form.title}
          onChange={(event) => onChange({ title: event.target.value })}
          placeholder="The basics of user experience design"
          className={adminCourseAddLessonInputClassName}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Description</label>
        <textarea
          value={form.description}
          onChange={(event) => onChange({ description: event.target.value })}
          placeholder="Write description about this lesson..."
          className={adminCourseAddLessonTextareaClassName}
        />
      </div>

      <AdminCourseCreationTeacherSelect
        label="Select Teacher"
        teachers={teachers}
        selectedIds={form.teacherIds}
        maxTeachers={maxTeachers}
        isEditing
        onChange={(teacherIds) => onChange({ teacherIds })}
      />
    </div>
  );
}
