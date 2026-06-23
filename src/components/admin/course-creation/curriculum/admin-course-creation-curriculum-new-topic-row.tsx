"use client";

import { Check, GripVertical, X } from "lucide-react";
import { formatAdminCourseCurriculumTopicLabel } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum.utils";

interface AdminCourseCreationCurriculumNewTopicRowProps {
  topicIndex: number;
  value: string;
  onChange: (value: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

export function AdminCourseCreationCurriculumNewTopicRow({
  topicIndex,
  value,
  onChange,
  onConfirm,
  onCancel,
}: AdminCourseCreationCurriculumNewTopicRowProps) {
  const prefix = `Topic ${topicIndex + 1}.`;

  return (
    <article className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <div className="flex items-center gap-3 px-4 py-4 sm:px-5">
        <button
          type="button"
          className="shrink-0 cursor-grab text-[#c4c4c4] transition-colors hover:text-[#757575]"
          aria-label="Drag to reorder topic"
        >
          <GripVertical className="h-4 w-4" aria-hidden />
        </button>

        <div className="flex min-w-0 flex-1 items-center rounded-xl border border-[#1a1a1a] px-3 py-2 focus-within:border-primary">
          <span className="shrink-0 text-[14px] font-semibold text-[#1a1a1a] sm:text-[15px]">
            {prefix}
          </span>
          <input
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                onConfirm();
              }
              if (event.key === "Escape") {
                onCancel();
              }
            }}
            placeholder="Topic title"
            autoFocus
            className="min-w-0 flex-1 bg-transparent pl-2 text-[14px] font-semibold text-[#1a1a1a] caret-primary outline-none sm:text-[15px]"
            aria-label={formatAdminCourseCurriculumTopicLabel(topicIndex, value || "New topic")}
          />

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={onCancel}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa] hover:text-[#1a1a1a]"
              aria-label="Cancel new topic"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-primary transition-colors hover:bg-[#fff5f5]"
              aria-label="Confirm new topic"
            >
              <Check className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
