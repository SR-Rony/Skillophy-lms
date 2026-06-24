"use client";

import { useEffect, useState } from "react";
import { AdminCategoryFormContent } from "@/components/admin/category-management/admin-category-form-content";
import {
  createAdminCategoryFormFromCategory,
  createEmptyAdminCategoryForm,
  isAdminCategoryFormValid,
} from "@/components/admin/category-management/admin-category-form.utils";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import type {
  AdminCategory,
  AdminCategoryDrawerMode,
  AdminCategoryForm,
} from "@/types/admin-category-management.types";

interface AdminCategoryDrawerProps {
  open: boolean;
  mode: AdminCategoryDrawerMode;
  category?: AdminCategory | null;
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminCategoryForm) => void;
}

const drawerCopy = {
  add: {
    title: "Add Categories",
    saveLabel: "Save Category",
    closeAriaLabel: "Close add category drawer",
  },
  edit: {
    title: "Edit Category",
    saveLabel: "Save Changes",
    closeAriaLabel: "Close edit category drawer",
  },
} as const;

export function AdminCategoryDrawer({
  open,
  mode,
  category,
  onOpenChange,
  onSave,
}: AdminCategoryDrawerProps) {
  const [form, setForm] = useState<AdminCategoryForm>(createEmptyAdminCategoryForm());
  const copy = drawerCopy[mode];
  const canSave = isAdminCategoryFormValid(form);

  useEffect(() => {
    if (!open) {
      return;
    }

    if (mode === "edit" && category) {
      setForm(createAdminCategoryFormFromCategory(category));
      return;
    }

    setForm(createEmptyAdminCategoryForm());
  }, [open, mode, category]);

  function handleChange(updates: Partial<AdminCategoryForm>) {
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
      description="Create and customize course categories here"
      closeAriaLabel={copy.closeAriaLabel}
      saveLabel={copy.saveLabel}
      saveDisabled={!canSave}
      onSubmit={handleSubmit}
    >
      <AdminCategoryFormContent form={form} onChange={handleChange} />
    </AdminCourseCreationCurriculumDrawer>
  );
}
