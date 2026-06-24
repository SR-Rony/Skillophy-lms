"use client";

import { useEffect, useState } from "react";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import { AdminRoleFormContent } from "@/components/admin/role-management/admin-role-form-content";
import {
  createDefaultAdminRoleForm,
  isAdminRoleFormValid,
} from "@/components/admin/role-management/admin-role-form.utils";
import type { AdminRoleForm } from "@/types/admin-role-management.types";

interface AdminAddRoleDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminRoleForm) => void;
}

export function AdminAddRoleDrawer({ open, onOpenChange, onSave }: AdminAddRoleDrawerProps) {
  const [form, setForm] = useState<AdminRoleForm>(createDefaultAdminRoleForm());
  const canSave = isAdminRoleFormValid(form);

  useEffect(() => {
    if (!open) {
      return;
    }

    setForm(createDefaultAdminRoleForm());
  }, [open]);

  function handleChange(updates: Partial<AdminRoleForm>) {
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
      title="Add New Role"
      description="Please specify the new role of your system"
      closeAriaLabel="Close add new role drawer"
      saveLabel="Create Role & Set Permission"
      saveDisabled={!canSave}
      onSubmit={handleSubmit}
    >
      <AdminRoleFormContent form={form} onChange={handleChange} />
    </AdminCourseCreationCurriculumDrawer>
  );
}
