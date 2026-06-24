"use client";

import { useEffect, useState } from "react";
import { AdminCourseCreationAddResourcesUploadTab } from "@/components/admin/course-creation/curriculum/add-resources/admin-course-creation-add-resources-upload-tab";
import {
  createDemoAdminCourseAddResourceForm,
} from "@/components/admin/course-creation/curriculum/add-resources/admin-course-creation-add-resources.utils";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import type { AdminCourseAddResourceForm } from "@/types/admin-course-creation.types";

interface AdminCourseCreationAddResourcesDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminCourseAddResourceForm) => void;
}

export function AdminCourseCreationAddResourcesDrawer({
  open,
  onOpenChange,
  onSave,
}: AdminCourseCreationAddResourcesDrawerProps) {
  const [form, setForm] = useState<AdminCourseAddResourceForm>(createDemoAdminCourseAddResourceForm());

  useEffect(() => {
    if (!open) {
      return;
    }

    setForm(createDemoAdminCourseAddResourceForm());
  }, [open]);

  function handleChange(updates: Partial<AdminCourseAddResourceForm>) {
    setForm((current) => ({ ...current, ...updates }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const completedResources = form.resources.filter((resource) => resource.progress >= 100);
    if (completedResources.length === 0) {
      return;
    }

    onSave({ ...form, resources: completedResources });
    onOpenChange(false);
  }

  const canSave = form.resources.some((resource) => resource.progress >= 100);

  return (
    <AdminCourseCreationCurriculumDrawer
      open={open}
      onOpenChange={onOpenChange}
      title="Add Resources"
      description="Add relevant resources here to ensure comprehensive content."
      closeAriaLabel="Close add resources drawer"
      saveLabel="Save Resource"
      saveDisabled={!canSave}
      onSubmit={handleSubmit}
    >
      <AdminCourseCreationAddResourcesUploadTab form={form} onChange={handleChange} />
    </AdminCourseCreationCurriculumDrawer>
  );
}
