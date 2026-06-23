"use client";

import { useRef } from "react";
import { Upload } from "lucide-react";
import { AdminCourseCreationAddResourcesUploadFileCard } from "@/components/admin/course-creation/curriculum/add-resources/admin-course-creation-add-resources-upload-file-card";
import { createAdminCourseResourceFileFromFile } from "@/components/admin/course-creation/curriculum/shared/admin-course-creation-resource-file.utils";
import type { AdminCourseAddResourceForm } from "@/types/admin-course-creation.types";

interface AdminCourseCreationAddResourcesUploadTabProps {
  form: AdminCourseAddResourceForm;
  onChange: (updates: Partial<AdminCourseAddResourceForm>) => void;
}

export function AdminCourseCreationAddResourcesUploadTab({
  form,
  onChange,
}: AdminCourseCreationAddResourcesUploadTabProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFiles(files: FileList | null) {
    if (!files?.length) {
      return;
    }

    const nextResources = Array.from(files).map((file, index) =>
      createAdminCourseResourceFileFromFile(file, index === 0 ? 100 : 40, index === 0)
    );

    onChange({ resources: [...form.resources, ...nextResources] });
  }

  function handleDeleteResource(resourceId: string) {
    onChange({
      resources: form.resources.filter((resource) => resource.id !== resourceId),
    });
  }

  return (
    <div className="space-y-4 sm:space-y-5">
      <div
        className="rounded-2xl border border-dashed border-[#d1d5db] bg-[#fafafa] px-5 py-8 text-center sm:px-6 sm:py-10"
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          handleFiles(event.dataTransfer.files);
        }}
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fff5f5]">
          <Upload className="h-5 w-5 text-primary" aria-hidden />
        </span>

        <p className="mt-4 text-[13px] text-[#757575] sm:text-[14px]">
          Drag &amp; Drop or{" "}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="font-semibold text-primary transition-colors hover:text-[#e63e3e]"
          >
            Choose file
          </button>{" "}
          to upload
        </p>

        <p className="mt-2 text-[12px] text-[#9ca3af] sm:text-[13px]">
          Supported formats: PDF, DOC, TXT, RTF
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,.txt,.rtf"
          multiple
          className="sr-only"
          onChange={(event) => {
            handleFiles(event.target.files);
            event.target.value = "";
          }}
        />
      </div>

      {form.resources.length > 0 ? (
        <div className="space-y-3">
          {form.resources.map((resource) => (
            <AdminCourseCreationAddResourcesUploadFileCard
              key={resource.id}
              file={resource}
              onDelete={() => handleDeleteResource(resource.id)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
