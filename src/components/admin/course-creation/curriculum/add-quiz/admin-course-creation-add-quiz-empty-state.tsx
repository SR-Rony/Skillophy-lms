"use client";

import { MessageCircleQuestion, Plus } from "lucide-react";

interface AdminCourseCreationAddQuizEmptyStateProps {
  onAddQuestion: () => void;
}

export function AdminCourseCreationAddQuizEmptyState({
  onAddQuestion,
}: AdminCourseCreationAddQuizEmptyStateProps) {
  return (
    <div className="flex flex-col items-center px-2 py-8 text-center sm:py-12">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f39314] shadow-[0_8px_24px_rgba(243,147,20,0.25)]">
        <MessageCircleQuestion className="h-8 w-8 text-white" strokeWidth={2.2} aria-hidden />
      </span>

      <h3 className="mt-5 text-[16px] font-bold text-[#1a1a1a] sm:text-[18px]">No Question Added!</h3>
      <p className="mt-2 max-w-[300px] text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
        You haven&apos;t added any question yet. Please add relevant questions to this topic
      </p>

      <button
        type="button"
        onClick={onAddQuestion}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-[#d1d5db] bg-white px-5 py-4 text-[14px] font-semibold text-primary transition-colors hover:bg-[#fafafa]"
      >
        <Plus className="h-4 w-4" aria-hidden />
        Add Question
      </button>
    </div>
  );
}
