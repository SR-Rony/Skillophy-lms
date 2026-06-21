"use client";

import { Pencil, Trash2 } from "lucide-react";
import { TeacherCourseResourceFileIcon } from "./teacher-course-resource-file-icon";
import type { TeacherCourseResourceItem } from "@/types/teacher-course-details.types";

interface TeacherCourseResourceCardProps {
  material: TeacherCourseResourceItem;
  onEdit?: (material: TeacherCourseResourceItem) => void;
  onDelete?: (material: TeacherCourseResourceItem) => void;
}

export function TeacherCourseResourceCard({
  material,
  onEdit,
  onDelete,
}: TeacherCourseResourceCardProps) {
  return (
    <article className="flex items-center gap-3 rounded-2xl border border-[#ebe8e6] bg-[#fafafa] p-3.5 shadow-[0_1px_2px_rgba(35,25,22,0.04)] sm:gap-4 sm:p-4">
      <TeacherCourseResourceFileIcon fileType={material.fileType} />

      <p className="min-w-0 flex-1 truncate text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
        {material.title}
      </p>

      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <button
          type="button"
          onClick={() => onDelete?.(material)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#9ca3af] transition-colors hover:bg-white hover:text-[#6b7280]"
          aria-label={`Delete ${material.title}`}
        >
          <Trash2 className="h-4 w-4" strokeWidth={2} aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => onEdit?.(material)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-primary transition-colors hover:bg-[#fff5f5]"
          aria-label={`Edit ${material.title}`}
        >
          <Pencil className="h-4 w-4" strokeWidth={2} aria-hidden />
        </button>
      </div>
    </article>
  );
}
