"use client";

import { useEffect, useState } from "react";
import { AdminCourseCreationAddLessonOverviewTab } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson-overview-tab";
import { AdminCourseCreationAddLessonResourceTab } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson-resource-tab";
import { AdminCourseCreationAddLessonVideoTab } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson-video-tab";
import { createEmptyAdminCourseAddLessonForm } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import { AdminCourseCreationCurriculumDrawerTabs } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer-tabs";
import type {
  AdminCourseAddLessonForm,
  AdminCourseAddLessonTabId,
  AdminCourseCreationTeacher,
} from "@/types/admin-course-creation.types";

const LESSON_TABS = [
  { id: "overview", label: "Overview" },
  { id: "lesson-video", label: "Lesson Video" },
  { id: "resource", label: "Resource" },
] as const;

interface AdminCourseCreationAddLessonDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  teachers: AdminCourseCreationTeacher[];
  maxTeachers: number;
  onSave: (form: AdminCourseAddLessonForm) => void;
}

export function AdminCourseCreationAddLessonDrawer({
  open,
  onOpenChange,
  teachers,
  maxTeachers,
  onSave,
}: AdminCourseCreationAddLessonDrawerProps) {
  const [activeTabId, setActiveTabId] = useState<AdminCourseAddLessonTabId>("overview");
  const [form, setForm] = useState<AdminCourseAddLessonForm>(createEmptyAdminCourseAddLessonForm());

  useEffect(() => {
    if (!open) {
      return;
    }

    setActiveTabId("overview");
    setForm(createEmptyAdminCourseAddLessonForm());
  }, [open]);

  function handleChange(updates: Partial<AdminCourseAddLessonForm>) {
    setForm((current) => ({ ...current, ...updates }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = form.title.trim();
    if (!title) {
      setActiveTabId("overview");
      return;
    }

    onSave({ ...form, title });
    onOpenChange(false);
  }

  return (
    <AdminCourseCreationCurriculumDrawer
      open={open}
      onOpenChange={onOpenChange}
      title="Add Lesson"
      description="Create and customize course topic here"
      closeAriaLabel="Close add lesson drawer"
      saveLabel="Save Lesson"
      onSubmit={handleSubmit}
      tabs={
        <AdminCourseCreationCurriculumDrawerTabs
          tabs={[...LESSON_TABS]}
          activeTabId={activeTabId}
          onChange={setActiveTabId}
        />
      }
    >
      {activeTabId === "overview" ? (
        <AdminCourseCreationAddLessonOverviewTab
          form={form}
          teachers={teachers}
          maxTeachers={maxTeachers}
          onChange={handleChange}
        />
      ) : null}

      {activeTabId === "lesson-video" ? (
        <AdminCourseCreationAddLessonVideoTab form={form} onChange={handleChange} />
      ) : null}

      {activeTabId === "resource" ? (
        <AdminCourseCreationAddLessonResourceTab form={form} onChange={handleChange} />
      ) : null}
    </AdminCourseCreationCurriculumDrawer>
  );
}
