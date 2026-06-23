"use client";

import { AdminCourseCreationAddResourcesOverviewCard } from "@/components/admin/course-creation/curriculum/add-resources/admin-course-creation-add-resources-overview-card";
import type { AdminCourseAddResourceForm } from "@/types/admin-course-creation.types";

interface AdminCourseCreationAddResourcesOverviewTabProps {
  form: AdminCourseAddResourceForm;
  onChange: (updates: Partial<AdminCourseAddResourceForm>) => void;
}

export function AdminCourseCreationAddResourcesOverviewTab({
  form,
  onChange,
}: AdminCourseCreationAddResourcesOverviewTabProps) {
  const completedResources = form.resources.filter((resource) => resource.progress >= 100);

  function handleDeleteResource(resourceId: string) {
    onChange({
      resources: form.resources.filter((resource) => resource.id !== resourceId),
    });
  }

  function handleToggleFreeDownloadable(resourceId: string, isFreeDownloadable: boolean) {
    onChange({
      resources: form.resources.map((resource) =>
        resource.id === resourceId ? { ...resource, isFreeDownloadable } : resource
      ),
    });
  }

  if (completedResources.length === 0) {
    return (
      <p className="text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
        Upload resources first, then manage free download settings here.
      </p>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {completedResources.map((resource) => (
        <AdminCourseCreationAddResourcesOverviewCard
          key={resource.id}
          file={resource}
          onToggleFreeDownloadable={(isFreeDownloadable) =>
            handleToggleFreeDownloadable(resource.id, isFreeDownloadable)
          }
          onDelete={() => handleDeleteResource(resource.id)}
        />
      ))}
    </div>
  );
}
