"use client";

import { useEffect, useState } from "react";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import { AdminJobOpeningFormContent } from "@/components/admin/job-opening-management/admin-job-opening-form-content";
import {
  createAdminJobOpeningFormFromJob,
  createDefaultAdminJobOpeningForm,
  isAdminJobOpeningFormValid,
} from "@/components/admin/job-opening-management/admin-job-opening-form.utils";
import type {
  AdminJobOpening,
  AdminJobOpeningDrawerMode,
  AdminJobOpeningForm,
  AdminJobOpeningFormOptions,
} from "@/types/admin-job-opening-management.types";

interface AdminJobOpeningDrawerProps {
  open: boolean;
  mode: AdminJobOpeningDrawerMode;
  jobOpening?: AdminJobOpening | null;
  formOptions: AdminJobOpeningFormOptions;
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminJobOpeningForm) => void;
}

const drawerCopy = {
  add: {
    title: "Add New Job",
    saveLabel: "Add New Job",
    closeAriaLabel: "Close add new job drawer",
  },
  edit: {
    title: "Edit Job",
    saveLabel: "Save Changes",
    closeAriaLabel: "Close edit job drawer",
  },
} as const;

export function AdminJobOpeningDrawer({
  open,
  mode,
  jobOpening,
  formOptions,
  onOpenChange,
  onSave,
}: AdminJobOpeningDrawerProps) {
  const [form, setForm] = useState<AdminJobOpeningForm>(createDefaultAdminJobOpeningForm());
  const copy = drawerCopy[mode];
  const canSave = isAdminJobOpeningFormValid(form);

  useEffect(() => {
    if (!open) {
      return;
    }

    if (mode === "edit" && jobOpening) {
      setForm(createAdminJobOpeningFormFromJob(jobOpening));
      return;
    }

    setForm(createDefaultAdminJobOpeningForm());
  }, [open, mode, jobOpening]);

  function handleChange(updates: Partial<AdminJobOpeningForm>) {
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
      title={copy.title}
      description="You can add new job position here for your company"
      closeAriaLabel={copy.closeAriaLabel}
      saveLabel={copy.saveLabel}
      saveDisabled={!canSave}
      onSubmit={handleSubmit}
    >
      <AdminJobOpeningFormContent
        form={form}
        formOptions={formOptions}
        onChange={handleChange}
      />
    </AdminCourseCreationCurriculumDrawer>
  );
}
