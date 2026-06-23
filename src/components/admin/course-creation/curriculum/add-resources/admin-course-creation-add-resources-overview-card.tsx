"use client";

import { Check, Trash2 } from "lucide-react";
import type { AdminCourseResourceFile } from "@/types/admin-course-creation.types";
import { cn } from "@/utils";

interface AdminCourseCreationAddResourcesOverviewCardProps {
  file: AdminCourseResourceFile;
  onToggleFreeDownloadable: (isFreeDownloadable: boolean) => void;
  onDelete: () => void;
}

function getFileTypeLabel(type: AdminCourseResourceFile["type"]) {
  return type.toUpperCase();
}

export function AdminCourseCreationAddResourcesOverviewCard({
  file,
  onToggleFreeDownloadable,
  onDelete,
}: AdminCourseCreationAddResourcesOverviewCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#ebe8e6] bg-white">
      <div className="flex items-start gap-3 p-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#fafafa] text-[11px] font-bold text-[#757575]">
          {getFileTypeLabel(file.type)}
        </span>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
            {file.name}
          </p>
          <p className="mt-0.5 text-[12px] text-[#9ca3af] sm:text-[13px]">{file.sizeLabel}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[#f0f0f0] px-4 py-3">
        <label className="flex min-w-0 cursor-pointer items-center gap-2.5">
          <span
            className={cn(
              "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors",
              file.isFreeDownloadable
                ? "border-[#1a1a1a] bg-[#1a1a1a]"
                : "border-[#d1d5db] bg-white"
            )}
          >
            {file.isFreeDownloadable ? (
              <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
            ) : null}
          </span>
          <input
            type="checkbox"
            checked={file.isFreeDownloadable}
            onChange={(event) => onToggleFreeDownloadable(event.target.checked)}
            className="sr-only"
          />
          <span className="text-[12px] font-medium text-[#1a1a1a] sm:text-[13px]">
            Make this Free Downloadable
          </span>
        </label>

        <button
          type="button"
          onClick={onDelete}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa] hover:text-[#1a1a1a]"
          aria-label={`Delete ${file.name}`}
        >
          <Trash2 className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </div>
  );
}
