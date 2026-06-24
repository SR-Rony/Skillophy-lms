"use client";

import { Trash2 } from "lucide-react";
import type { AdminCourseResourceFile } from "@/types/admin-course-creation.types";

interface AdminCourseCreationAddResourcesUploadFileCardProps {
  file: AdminCourseResourceFile;
  onDelete: () => void;
}

function getFileTypeLabel(type: AdminCourseResourceFile["type"]) {
  return type.toUpperCase();
}

export function AdminCourseCreationAddResourcesUploadFileCard({
  file,
  onDelete,
}: AdminCourseCreationAddResourcesUploadFileCardProps) {
  return (
    <div className="relative rounded-xl border border-[#ebe8e6] bg-white p-4">
      <button
        type="button"
        onClick={onDelete}
        className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa] hover:text-[#1a1a1a]"
        aria-label={`Delete ${file.name}`}
      >
        <Trash2 className="h-4 w-4" aria-hidden />
      </button>

      <div className="flex items-start gap-3 pr-8">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ebe8e6] bg-[#fafafa] text-[10px] font-bold text-[#757575]">
          {getFileTypeLabel(file.type)}
        </span>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
            {file.name}
          </p>
          <p className="mt-0.5 text-[12px] text-[#9ca3af] sm:text-[13px]">{file.sizeLabel}</p>

          <div className="mt-3 flex items-center gap-3">
            <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[#f0f0f0]">
              <div
                className="h-full rounded-full bg-[#1a1a1a] transition-all"
                style={{ width: `${file.progress}%` }}
              />
            </div>
            <span className="shrink-0 text-[12px] font-semibold text-[#1a1a1a] sm:text-[13px]">
              {file.progress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
