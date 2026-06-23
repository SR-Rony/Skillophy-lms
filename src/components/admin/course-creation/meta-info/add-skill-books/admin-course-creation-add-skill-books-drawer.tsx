"use client";

import { useEffect, useState } from "react";
import { AdminCourseCreationMetaInfoFileUpload } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-file-upload";
import {
  createEmptyAdminCourseAddSkillBookForm,
  isAdminCourseAddSkillBookFormValid,
} from "@/components/admin/course-creation/meta-info/add-skill-books/admin-course-creation-add-skill-books.utils";
import { adminCourseMetaInfoInputClassName } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import type { AdminCourseAddSkillBookForm } from "@/components/admin/course-creation/meta-info/add-skill-books/admin-course-creation-add-skill-books.utils";

interface AdminCourseCreationAddSkillBooksDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminCourseAddSkillBookForm) => void;
}

export function AdminCourseCreationAddSkillBooksDrawer({
  open,
  onOpenChange,
  onSave,
}: AdminCourseCreationAddSkillBooksDrawerProps) {
  const [form, setForm] = useState<AdminCourseAddSkillBookForm>(createEmptyAdminCourseAddSkillBookForm());

  useEffect(() => {
    if (!open) {
      return;
    }

    setForm(createEmptyAdminCourseAddSkillBookForm());
  }, [open]);

  const canSave = isAdminCourseAddSkillBookFormValid(form);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSave) {
      return;
    }

    onSave({
      bookName: form.bookName.trim(),
      authorName: form.authorName.trim(),
      file: form.file,
    });
    onOpenChange(false);
  }

  return (
    <AdminCourseCreationCurriculumDrawer
      open={open}
      onOpenChange={onOpenChange}
      title="Add Skill Books"
      description="Add relevant skill books here to ensure comprehensive content."
      closeAriaLabel="Close add skill books drawer"
      saveLabel="Save Resource"
      saveDisabled={!canSave}
      onSubmit={handleSubmit}
    >
      <div className="space-y-5 sm:space-y-6">
        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Book Name</label>
          <input
            type="text"
            value={form.bookName}
            onChange={(event) => setForm((current) => ({ ...current, bookName: event.target.value }))}
            placeholder="Don't Make Me Think"
            className={adminCourseMetaInfoInputClassName}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Author Name</label>
          <input
            type="text"
            value={form.authorName}
            onChange={(event) => setForm((current) => ({ ...current, authorName: event.target.value }))}
            placeholder="Steve Krug"
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
