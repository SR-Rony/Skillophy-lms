"use client";

import { Check } from "lucide-react";
import { AdminCourseCreationVideoPreview } from "@/components/admin/course-creation/admin-course-creation-video-preview";
import { adminCourseAddLessonInputClassName } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import type { AdminCourseAddLessonForm } from "@/types/admin-course-creation.types";
import { cn } from "@/utils";

interface AdminCourseCreationAddLessonVideoTabProps {
  form: AdminCourseAddLessonForm;
  onChange: (updates: Partial<AdminCourseAddLessonForm>) => void;
}

export function AdminCourseCreationAddLessonVideoTab({
  form,
  onChange,
}: AdminCourseCreationAddLessonVideoTabProps) {
  const hasVideoUrl = form.videoUrl.trim().length > 0;

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="space-y-2">
        <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Lesson Video</label>
        <input
          type="url"
          value={form.videoUrl}
          onChange={(event) => onChange({ videoUrl: event.target.value })}
          placeholder="https://www.youtube.com/watch?v=zpdOGUIw9dA"
          className={adminCourseAddLessonInputClassName}
        />
      </div>

      {hasVideoUrl ? (
        <AdminCourseCreationVideoPreview videoUrl={form.videoUrl} className="aspect-video w-full" />
      ) : null}

      <label className="flex cursor-pointer items-center gap-3">
        <span
          className={cn(
            "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors",
            form.isFree ? "border-[#1a1a1a] bg-[#1a1a1a]" : "border-[#d1d5db] bg-white"
          )}
        >
          {form.isFree ? <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden /> : null}
        </span>
        <input
          type="checkbox"
          checked={form.isFree}
          onChange={(event) => onChange({ isFree: event.target.checked })}
          className="sr-only"
        />
        <span className="text-[13px] font-medium text-[#1a1a1a] sm:text-[14px]">
          Make this lesson free
        </span>
      </label>
    </div>
  );
}
