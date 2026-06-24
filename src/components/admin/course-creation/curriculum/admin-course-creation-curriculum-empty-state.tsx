"use client";

import { BookOpen, Pencil, Plus } from "lucide-react";

interface AdminCourseCreationCurriculumEmptyStateProps {
  onAddTopic: () => void;
}

export function AdminCourseCreationCurriculumEmptyState({
  onAddTopic,
}: AdminCourseCreationCurriculumEmptyStateProps) {
  return (
    <div className="flex flex-col items-center px-4 py-10 text-center sm:px-6 sm:py-14">
      <span className="relative flex h-[88px] w-[88px] items-center justify-center sm:h-[96px] sm:w-[96px]">
        <span className="absolute inset-0 rounded-[28px] bg-[#4f8df7] shadow-[0_14px_32px_rgba(79,141,247,0.28)]" />
        <BookOpen className="relative h-10 w-10 text-white" strokeWidth={1.8} aria-hidden />
        <span className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#f5c542] shadow-[0_6px_16px_rgba(245,197,66,0.35)]">
          <Pencil className="h-4 w-4 text-[#7a5b00]" strokeWidth={2.2} aria-hidden />
        </span>
      </span>

      <h3 className="mt-6 text-[18px] font-bold text-[#1a1a1a] sm:text-[20px]">No Course Topic!</h3>
      <p className="mt-2 max-w-[420px] text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
        You haven&apos;t added any course topics yet. Please add relevant topics to ensure the course
        content is organised.
      </p>

      <button
        type="button"
        onClick={onAddTopic}
        className="mt-8 flex w-full max-w-[760px] items-center justify-center gap-2 rounded-2xl border border-[#ebe8e6] bg-white px-5 py-4 text-[14px] font-semibold text-primary shadow-[0_8px_30px_rgba(35,25,22,0.04)] transition-colors hover:bg-[#fafafa]"
      >
        <Plus className="h-4 w-4" aria-hidden />
        Add New Topic
      </button>
    </div>
  );
}
