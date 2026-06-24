"use client";

import { useEffect, useState } from "react";
import { AdminCourseCreationAddAssignmentFormContent } from "@/components/admin/course-creation/curriculum/add-assignment/admin-course-creation-add-assignment-form-content";
import {
  createEmptyAdminCourseAddAssignmentForm,
  isAdminCourseAddAssignmentFormValid,
} from "@/components/admin/course-creation/curriculum/add-assignment/admin-course-creation-add-assignment.utils";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import type { AdminCourseAddAssignmentForm } from "@/types/admin-course-creation.types";

interface AdminCourseCreationAddAssignmentDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminCourseAddAssignmentForm) => void;
}

export function AdminCourseCreationAddAssignmentDrawer({
  open,
  onOpenChange,
  onSave,
}: AdminCourseCreationAddAssignmentDrawerProps) {
  const [form, setForm] = useState<AdminCourseAddAssignmentForm>(
    createEmptyAdminCourseAddAssignmentForm()
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    setForm(createEmptyAdminCourseAddAssignmentForm());
  }, [open]);

  const canSave = isAdminCourseAddAssignmentFormValid(form);

  function handleChange(updates: Partial<AdminCourseAddAssignmentForm>) {
    setForm((current) => ({ ...current, ...updates }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSave) {
      return;
    }

    onSave(form);
    onOpenChange(false);
  }

  return (
    <AdminCourseCreationCurriculumDrawer
      open={open}
      onOpenChange={onOpenChange}
      title="Add Assignment"
      description="Create this lesson's assignment here"
      closeAriaLabel="Close add assignment drawer"
      saveLabel="Save Assignment"
      saveDisabled={!canSave}
      onSubmit={handleSubmit}
    >
      <AdminCourseCreationAddAssignmentFormContent form={form} onChange={handleChange} />
    </AdminCourseCreationCurriculumDrawer>
  );
}
