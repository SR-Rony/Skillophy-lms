"use client";

import { useEffect, useState } from "react";
import { AdminCourseCreationAddResourcesOverviewTab } from "@/components/admin/course-creation/curriculum/add-resources/admin-course-creation-add-resources-overview-tab";
import { AdminCourseCreationAddResourcesUploadTab } from "@/components/admin/course-creation/curriculum/add-resources/admin-course-creation-add-resources-upload-tab";
import { createEmptyAdminCourseAddResourceForm } from "@/components/admin/course-creation/curriculum/add-resources/admin-course-creation-add-resources.utils";
import { AdminCourseCreationCurriculumDrawer } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer";
import { AdminCourseCreationCurriculumDrawerTabs } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-curriculum-drawer-tabs";
import type {
  AdminCourseAddResourceForm,
  AdminCourseAddResourceTabId,
} from "@/types/admin-course-creation.types";

const RESOURCE_TABS = [
  { id: "overview", label: "Overview" },
  { id: "upload", label: "Upload" },
] as const;

interface AdminCourseCreationAddResourcesDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (form: AdminCourseAddResourceForm) => void;
}

export function AdminCourseCreationAddResourcesDrawer({
  open,
  onOpenChange,
  onSave,
}: AdminCourseCreationAddResourcesDrawerProps) {
  const [activeTabId, setActiveTabId] = useState<AdminCourseAddResourceTabId>("overview");
  const [form, setForm] = useState<AdminCourseAddResourceForm>(createEmptyAdminCourseAddResourceForm());

  useEffect(() => {
    if (!open) {
      return;
    }

    setActiveTabId("overview");
    setForm(createEmptyAdminCourseAddResourceForm());
  }, [open]);

  function handleChange(updates: Partial<AdminCourseAddResourceForm>) {
    setForm((current) => ({ ...current, ...updates }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const completedResources = form.resources.filter((resource) => resource.progress >= 100);
    if (completedResources.length === 0) {
      setActiveTabId("upload");
      return;
    }

    onSave({ ...form, resources: completedResources });
    onOpenChange(false);
  }

  return (
    <AdminCourseCreationCurriculumDrawer
      open={open}
      onOpenChange={onOpenChange}
      title="Add Resources"
      description="Add relevant resources here to ensure comprehensive content."
      closeAriaLabel="Close add resources drawer"
      saveLabel="Save Resource"
      onSubmit={handleSubmit}
      tabs={
        <AdminCourseCreationCurriculumDrawerTabs
          tabs={[...RESOURCE_TABS]}
          activeTabId={activeTabId}
          onChange={setActiveTabId}
        />
      }
    >
      {activeTabId === "overview" ? (
        <AdminCourseCreationAddResourcesOverviewTab form={form} onChange={handleChange} />
      ) : null}

      {activeTabId === "upload" ? (
        <AdminCourseCreationAddResourcesUploadTab form={form} onChange={handleChange} />
      ) : null}
    </AdminCourseCreationCurriculumDrawer>
  );
}
