"use client";

import { FileText, Trash2 } from "lucide-react";
import type { AdminCourseLessonResourceFile } from "@/types/admin-course-creation.types";
import { cn } from "@/utils";

interface AdminCourseCreationAddLessonResourceFileCardProps {
  file: AdminCourseLessonResourceFile;
  onDelete: () => void;
}

function getFileTypeLabel(type: AdminCourseLessonResourceFile["type"]) {
  return type.toUpperCase();
}

export function AdminCourseCreationAddLessonResourceFileCard({
  file,
  onDelete,
}: AdminCourseCreationAddLessonResourceFileCardProps) {
  return (
    <div className="rounded-xl border border-[#ebe8e6] bg-white p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fafafa]">
          <FileText className="h-5 w-5 text-[#757575]" aria-hidden />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
                {file.name}
              </p>
              <p className="mt-0.5 text-[12px] text-[#9ca3af] sm:text-[13px]">
                {file.sizeLabel} · {getFileTypeLabel(file.type)}
              </p>
            </div>

            <button
              type="button"
              onClick={onDelete}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa] hover:text-[#1a1a1a]"
              aria-label={`Delete ${file.name}`}
            >
              <Trash2 className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[#f0f0f0]">
              <div
                className={cn(
                  "h-full rounded-full bg-[#1a1a1a] transition-all",
                  file.progress < 100 && "bg-[#1a1a1a]"
                )}
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
