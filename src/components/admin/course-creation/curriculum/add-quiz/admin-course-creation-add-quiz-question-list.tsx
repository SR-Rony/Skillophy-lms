"use client";

import { Plus, Trash2 } from "lucide-react";
import { adminCourseAddLessonInputClassName } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import type { AdminCourseQuizQuestion } from "@/types/admin-course-creation.types";

interface AdminCourseCreationAddQuizQuestionListProps {
  questions: AdminCourseQuizQuestion[];
  onChange: (questionId: string, prompt: string) => void;
  onDelete: (questionId: string) => void;
  onAddQuestion: () => void;
}

export function AdminCourseCreationAddQuizQuestionList({
  questions,
  onChange,
  onDelete,
  onAddQuestion,
}: AdminCourseCreationAddQuizQuestionListProps) {
  return (
    <div className="space-y-4">
      {questions.map((question, index) => (
        <div
          key={question.id}
          className="rounded-xl border border-[#ebe8e6] bg-white p-4"
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
              Question {index + 1}
            </p>
            <button
              type="button"
              onClick={() => onDelete(question.id)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa] hover:text-[#1a1a1a]"
              aria-label={`Delete question ${index + 1}`}
            >
              <Trash2 className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <input
            type="text"
            value={question.prompt}
            onChange={(event) => onChange(question.id, event.target.value)}
            placeholder="Write your question here..."
            className={adminCourseAddLessonInputClassName}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={onAddQuestion}
        className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-[#d1d5db] bg-white px-5 py-4 text-[14px] font-semibold text-primary transition-colors hover:bg-[#fafafa]"
      >
        <Plus className="h-4 w-4" aria-hidden />
        Add Question
      </button>
    </div>
  );
}
