"use client";

import { AdminCourseCreationAddBookResourceDrawer } from "@/components/admin/course-creation/meta-info/shared/admin-course-creation-add-book-resource-drawer";
import type { AdminCourseAddBookResourceForm } from "@/components/admin/course-creation/meta-info/shared/admin-course-creation-add-book-resource.utils";

const ACADEMIC_GUIDES_DRAWER_COPY = {
  title: "Add Academic Guides",
  description: "Add relevant academic guides here to support structured learning.",
  closeAriaLabel: "Close add academic guides drawer",
  nameLabel: "Guide Name",
  namePlaceholder: "Class 9-10 English Guide",
  publisherLabel: "Publisher Name",
  publisherPlaceholder: "NCTB",
} as const;

interface AdminCourseCreationAddAcademicGuidesDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminCourseAddBookResourceForm) => void;
}

export function AdminCourseCreationAddAcademicGuidesDrawer({
  open,
  onOpenChange,
  onSave,
}: AdminCourseCreationAddAcademicGuidesDrawerProps) {
  return (
    <AdminCourseCreationAddBookResourceDrawer
      open={open}
      onOpenChange={onOpenChange}
      onSave={onSave}
      copy={ACADEMIC_GUIDES_DRAWER_COPY}
    />
  );
}
