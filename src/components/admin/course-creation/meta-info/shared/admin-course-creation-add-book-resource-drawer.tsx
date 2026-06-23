"use client";

import { useEffect, useState } from "react";
import { AdminCourseCreationMetaInfoFileUpload } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-file-upload";
import {
  createEmptyAdminCourseAddBookResourceForm,
  isAdminCourseAddBookResourceFormValid,
  type AdminCourseAddBookResourceForm,
} from "@/components/admin/course-creation/meta-info/shared/admin-course-creation-add-book-resource.utils";
import { adminCourseMetaInfoInputClassName } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";

export interface AdminCourseAddBookResourceDrawerCopy {
  title: string;
  description: string;
  closeAriaLabel: string;
  nameLabel: string;
  namePlaceholder: string;
  publisherLabel: string;
  publisherPlaceholder: string;
}

interface AdminCourseCreationAddBookResourceDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminCourseAddBookResourceForm) => void;
  copy: AdminCourseAddBookResourceDrawerCopy;
}

export function AdminCourseCreationAddBookResourceDrawer({
  open,
  onOpenChange,
  onSave,
  copy,
}: AdminCourseCreationAddBookResourceDrawerProps) {
  const [form, setForm] = useState<AdminCourseAddBookResourceForm>(createEmptyAdminCourseAddBookResourceForm());

  useEffect(() => {
    if (!open) {
      return;
    }

    setForm(createEmptyAdminCourseAddBookResourceForm());
  }, [open]);

  const canSave = isAdminCourseAddBookResourceFormValid(form);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSave) {
      return;
    }

    onSave({
      name: form.name.trim(),
      publisherName: form.publisherName.trim(),
      file: form.file,
    });
    onOpenChange(false);
  }

  return (
    <AdminCourseCreationCurriculumDrawer
      open={open}
      onOpenChange={onOpenChange}
      title={copy.title}
      description={copy.description}
      closeAriaLabel={copy.closeAriaLabel}
      saveLabel="Save Resource"
      saveDisabled={!canSave}
      onSubmit={handleSubmit}
    >
      <div className="space-y-5 sm:space-y-6">
        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">{copy.nameLabel}</label>
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            placeholder={copy.namePlaceholder}
            className={adminCourseMetaInfoInputClassName}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">{copy.publisherLabel}</label>
          <input
            type="text"
            value={form.publisherName}
            onChange={(event) => setForm((current) => ({ ...current, publisherName: event.target.value }))}
            placeholder={copy.publisherPlaceholder}
            className={adminCourseMetaInfoInputClassName}
            required
          />
        </div>

        <AdminCourseCreationMetaInfoFileUpload
          file={form.file}
          onChange={(file) => setForm((current) => ({ ...current, file }))}
        />
      </div>
    </AdminCourseCreationCurriculumDrawer>
  );
}
