"use client";

import { useEffect, useState } from "react";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import { AdminTemplateFormContent } from "@/components/admin/template-management/admin-template-form-content";
import {
  createDefaultAdminTemplateForm,
  isAdminTemplateFormValid,
} from "@/components/admin/template-management/admin-template-form.utils";
import type { AdminTemplateForm } from "@/types/admin-template-management.types";

interface AdminAddTemplateDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminTemplateForm) => void;
}

export function AdminAddTemplateDrawer({
  open,
  onOpenChange,
  onSave,
}: AdminAddTemplateDrawerProps) {
  const [form, setForm] = useState<AdminTemplateForm>(createDefaultAdminTemplateForm());
  const canSave = isAdminTemplateFormValid(form);

  useEffect(() => {
    if (!open) {
      return;
    }

    setForm(createDefaultAdminTemplateForm());
  }, [open]);

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
      title="Add New Template"
      description="Select the type of template you want to create"
      closeAriaLabel="Close add new template drawer"
      saveLabel="Save Template"
      saveDisabled={!canSave}
      onSubmit={handleSubmit}
    >
      <AdminTemplateFormContent form={form} onChange={setForm} />
    </AdminCourseCreationCurriculumDrawer>
  );
}
