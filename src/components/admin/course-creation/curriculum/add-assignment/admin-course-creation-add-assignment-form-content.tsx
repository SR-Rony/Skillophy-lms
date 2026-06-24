"use client";

import { AdminCourseCreationContentEditor } from "@/components/admin/course-creation/admin-course-creation-content-editor";
import { AdminCourseCreationLiveClassSchedulePicker } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-live-class-schedule-picker";
import type { AdminCourseAddAssignmentForm } from "@/types/admin-course-creation.types";

interface AdminCourseCreationAddAssignmentFormContentProps {
  form: AdminCourseAddAssignmentForm;
  onChange: (updates: Partial<AdminCourseAddAssignmentForm>) => void;
}

export function AdminCourseCreationAddAssignmentFormContent({
  form,
  onChange,
}: AdminCourseCreationAddAssignmentFormContentProps) {
  return (
    <div className="space-y-5 sm:space-y-6">
      <AdminCourseCreationLiveClassSchedulePicker
        label="Last Date of Submission"
        value={form.lastSubmissionDate}
        onChange={(lastSubmissionDate) => onChange({ lastSubmissionDate })}
      />

      <AdminCourseCreationContentEditor
        label="Assignment Tasks"
        value={form.tasks}
        placeholder="Write details about this course..."
        isEditing
        onChange={(tasks) => onChange({ tasks })}
      />
    </div>
  );
}
