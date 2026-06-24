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
  onSave: (form: AdminSupportTicketForm) => void;
}

export function AdminAddSupportTicketDrawer({
  open,
  onOpenChange,
  onSave,
}: AdminAddSupportTicketDrawerProps) {
  const [form, setForm] = useState<AdminSupportTicketForm>(createDefaultAdminSupportTicketForm());
  const canSave = isAdminSupportTicketFormValid(form);

  useEffect(() => {
    if (!open) {
      return;
    }

    setForm(createDefaultAdminSupportTicketForm());
  }, [open]);

  function handleChange(updates: Partial<AdminSupportTicketForm>) {
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
      title="Add New Ticket"
      description="You can share your problem by creating a ticket here."
      closeAriaLabel="Close add new ticket drawer"
      saveLabel="Submit"
      saveDisabled={!canSave}
      onSubmit={handleSubmit}
    >
      <AdminSupportTicketFormContent form={form} onChange={handleChange} />
    </AdminCourseCreationCurriculumDrawer>
  );
}
