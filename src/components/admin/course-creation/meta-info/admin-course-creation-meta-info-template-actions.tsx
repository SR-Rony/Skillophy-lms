"use client";

import { ChevronDown, LayoutTemplate, Plus } from "lucide-react";
import {
  adminCourseMetaInfoActionButtonClassName,
} from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";
import { cn } from "@/utils";

interface AdminCourseCreationMetaInfoTemplateActionsProps {
  onCreateFromBlank?: () => void;
}

export function AdminCourseCreationMetaInfoTemplateActions({
  onCreateFromBlank,
}: AdminCourseCreationMetaInfoTemplateActionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <button
        type="button"
        className={cn(
          adminCourseMetaInfoActionButtonClassName,
          "w-full min-w-0 text-primary sm:w-auto sm:min-w-[248px]"
        )}
      >
        <LayoutTemplate className="h-5 w-5 shrink-0 text-primary" aria-hidden />
        <span>Create from Template</span>
        <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-[#9ca3af]" aria-hidden />
      </button>

      <button
        type="button"
        onClick={onCreateFromBlank}
        className={cn(
          adminCourseMetaInfoActionButtonClassName,
          "w-full text-[#1a1a1a] sm:w-auto sm:min-w-[220px]"
        )}
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#1a1a1a]">
          <Plus className="h-3.5 w-3.5" aria-hidden />
        </span>
        <span>Create from Blank</span>
      </button>
    </div>
  );
}
