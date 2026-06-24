"use client";

import { useEffect, useState } from "react";
import { AdminPromoFormContent } from "@/components/admin/promo-management/admin-promo-form-content";
import {
  createAdminPromoFormFromPromo,
  createEmptyAdminPromoForm,
  isAdminPromoFormValid,
} from "@/components/admin/promo-management/admin-promo-form.utils";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import type {
  AdminPromo,
  AdminPromoCourseOption,
  AdminPromoDrawerMode,
  AdminPromoForm,
  AdminPromoUserOption,
} from "@/types/admin-promo-management.types";

interface AdminPromoDrawerProps {
  open: boolean;
  mode: AdminPromoDrawerMode;
  promo?: AdminPromo | null;
  courseOptions: AdminPromoCourseOption[];
  userOptions: AdminPromoUserOption[];
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminPromoForm) => void;
}

const drawerCopy = {
  add: {
    title: "Add Promo & Discounts",
    description: "Create and customize course categories here",
    saveLabel: "Save Promo",
    closeAriaLabel: "Close add promo drawer",
  },
  edit: {
    title: "Edit Promo & Discounts",
    description: "You can edit promo & discounts here",
    saveLabel: "Save Changes",
    closeAriaLabel: "Close edit promo drawer",
  },
} as const;

export function AdminPromoDrawer({
  open,
  mode,
  promo,
  courseOptions,
  userOptions,
  onOpenChange,
  onSave,
}: AdminPromoDrawerProps) {
  const [form, setForm] = useState<AdminPromoForm>(createEmptyAdminPromoForm());
  const copy = drawerCopy[mode];
  const canSave = isAdminPromoFormValid(form);

  useEffect(() => {
    if (!open) {
      return;
    }

    if (mode === "edit" && promo) {
      setForm(createAdminPromoFormFromPromo(promo));
      return;
    }

    setForm(createEmptyAdminPromoForm());
  }, [open, mode, promo]);

  function handleChange(updates: Partial<AdminPromoForm>) {
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
      description={copy.description}
      closeAriaLabel={copy.closeAriaLabel}
      saveLabel={copy.saveLabel}
      saveDisabled={!canSave}
      onSubmit={handleSubmit}
    >
      <AdminPromoFormContent
        form={form}
        courseOptions={courseOptions}
        userOptions={userOptions}
        onChange={handleChange}
      />
    </AdminCourseCreationCurriculumDrawer>
  );
}
