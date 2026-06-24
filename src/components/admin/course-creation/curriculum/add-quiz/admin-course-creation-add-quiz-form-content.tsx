"use client";

import { Plus } from "lucide-react";
import { AdminCourseCreationAddQuizQuestionCard } from "@/components/admin/course-creation/curriculum/add-quiz/admin-course-creation-add-quiz-question-card";
import { adminCourseAddLessonInputClassName } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import type { AdminCourseAddQuizForm, AdminCourseQuizQuestion } from "@/types/admin-course-creation.types";

interface AdminCourseCreationAddQuizFormContentProps {
  form: AdminCourseAddQuizForm;
  onDurationChange: (durationMinutes: string) => void;
  onUpdateQuestion: (questionId: string, updates: Partial<AdminCourseQuizQuestion>) => void;
  onCopyQuestion: (questionId: string) => void;
  onDeleteQuestion: (questionId: string) => void;
  onAddQuestion: () => void;
}

export function AdminCourseCreationAddQuizFormContent({
  form,
  onDurationChange,
  onUpdateQuestion,
  onCopyQuestion,
  onDeleteQuestion,
  onAddQuestion,
}: AdminCourseCreationAddQuizFormContentProps) {
  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="space-y-2">
        <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">
          Quiz Duration (Minute)
        </label>
        <input
          type="text"
          inputMode="numeric"
          value={form.durationMinutes}
          onChange={(event) => onDurationChange(event.target.value)}
          placeholder="20"
          className={adminCourseAddLessonInputClassName}
        />
      </div>

      {form.questions.length > 0 ? (
        <div className="space-y-4 rounded-2xl bg-[#fafafa] p-4 sm:p-5">
          {form.questions.map((question, index) => (
            <AdminCourseCreationAddQuizQuestionCard
              key={question.id}
              question={question}
              questionIndex={index}
              onUpdate={(updates) => onUpdateQuestion(question.id, updates)}
              onCopy={() => onCopyQuestion(question.id)}
              onDelete={() => onDeleteQuestion(question.id)}
            />
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
      ) : (
        <button
          type="button"
          onClick={onAddQuestion}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-[#d1d5db] bg-[#fafafa] px-5 py-4 text-[14px] font-semibold text-primary transition-colors hover:bg-white"
        >
          <Plus className="h-4 w-4" aria-hidden />
          Add Question
        </button>
      )}
    </div>
  );
}
