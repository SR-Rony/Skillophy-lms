"use client";

import { useEffect, useState } from "react";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import { AdminSupportTicketFormContent } from "@/components/admin/support-management/admin-support-ticket-form-content";
import {
  createDefaultAdminSupportTicketForm,
  isAdminSupportTicketFormValid,
} from "@/components/admin/support-management/admin-support-ticket-form.utils";
import type { AdminSupportTicketForm } from "@/types/admin-support-management.types";

interface AdminAddSupportTicketDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminSupportTicketForm) => void | Promise<void>;
  isSaving?: boolean;
}

export function AdminAddSupportTicketDrawer({
  open,
  onOpenChange,
  onSave,
  isSaving = false,
}: AdminAddSupportTicketDrawerProps) {
  const [form, setForm] = useState<AdminSupportTicketForm>(createDefaultAdminSupportTicketForm());
  const canSave = isAdminSupportTicketFormValid(form) && !isSaving;

  useEffect(() => {
    if (!open) {
      return;
    }

    setForm(createDefaultAdminSupportTicketForm());
  }, [open]);

  function handleChange(updates: Partial<AdminSupportTicketForm>) {
    setForm((current) => ({ ...current, ...updates }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSave) {
      return;
    }

    await onSave(form);
  }

  return (
    <AdminCourseCreationCurriculumDrawer
      open={open}
      onOpenChange={onOpenChange}
      title="Add New Ticket"
      description="You can share your problem by creating a ticket here."
      closeAriaLabel="Close add new ticket drawer"
      saveLabel={isSaving ? "Submitting..." : "Submit"}
      saveDisabled={!canSave}
      onSubmit={handleSubmit}
    >
      <AdminSupportTicketFormContent form={form} onChange={handleChange} />
    </AdminCourseCreationCurriculumDrawer>
  );
}
