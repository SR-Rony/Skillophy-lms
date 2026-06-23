"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp, Plus, X } from "lucide-react";
import { AdminCourseCreationAddQuizAnswerOptionRow } from "@/components/admin/course-creation/curriculum/add-quiz/admin-course-creation-add-quiz-answer-option-row";
import {
  createAdminCourseQuizAnswerOption,
  formatAdminCourseQuizQuestionLabel,
} from "@/components/admin/course-creation/curriculum/add-quiz/admin-course-creation-add-quiz.utils";
import { AdminCourseCreationCurriculumActionMenu } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum-action-menu";
import {
  adminCourseAddLessonInputClassName,
  adminCourseAddLessonTextareaClassName,
} from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import type { AdminCourseQuizQuestion } from "@/types/admin-course-creation.types";
import { cn } from "@/utils";

interface AdminCourseCreationAddQuizQuestionCardProps {
  question: AdminCourseQuizQuestion;
  questionIndex: number;
  onUpdate: (updates: Partial<AdminCourseQuizQuestion>) => void;
  onCopy: () => void;
  onDelete: () => void;
}

export function AdminCourseCreationAddQuizQuestionCard({
  question,
  questionIndex,
  onUpdate,
  onCopy,
  onDelete,
}: AdminCourseCreationAddQuizQuestionCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [draftPrompt, setDraftPrompt] = useState(question.prompt);
  const prefix = `Q ${questionIndex + 1}.`;

  function handleConfirmPrompt() {
    const nextPrompt = draftPrompt.trim();
    if (nextPrompt) {
      onUpdate({ prompt: nextPrompt, isEditing: false });
    } else {
      setDraftPrompt(question.prompt);
      onUpdate({ isEditing: false });
    }
  }

  function handleAddOption() {
    const nextOption = createAdminCourseQuizAnswerOption();
    onUpdate({
      options: [...question.options, nextOption],
      correctOptionId: question.correctOptionId ?? nextOption.id,
    });
  }

  function handleUpdateOption(optionId: string, text: string) {
    onUpdate({
      options: question.options.map((option) =>
        option.id === optionId ? { ...option, text } : option
      ),
    });
  }

  function handleCopyOption(optionId: string) {
    const sourceIndex = question.options.findIndex((option) => option.id === optionId);
    if (sourceIndex === -1) {
      return;
    }

    const source = question.options[sourceIndex];
    const copiedOption = createAdminCourseQuizAnswerOption(`${source.text} (Copy)`);
    const nextOptions = [...question.options];
    nextOptions.splice(sourceIndex + 1, 0, copiedOption);

    onUpdate({ options: nextOptions });
  }

  function handleDeleteOption(optionId: string) {
    const nextOptions = question.options.filter((option) => option.id !== optionId);
    if (nextOptions.length === 0) {
      const fallbackOption = createAdminCourseQuizAnswerOption();
      onUpdate({
        options: [fallbackOption],
        correctOptionId: fallbackOption.id,
      });
      return;
    }

    onUpdate({
      options: nextOptions,
      correctOptionId:
        question.correctOptionId === optionId ? nextOptions[0].id : question.correctOptionId,
    });
  }

  return (
    <article className="overflow-hidden rounded-xl border border-[#ebe8e6] bg-white">
      <div className="flex items-start gap-3 px-4 py-4 sm:px-5">
        <div className="min-w-0 flex-1">
          {question.isEditing ? (
            <div className="flex min-w-0 items-center rounded-xl border border-[#1a1a1a] px-3 py-2 focus-within:border-primary">
              <span className="shrink-0 text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
                {prefix}
              </span>
              <input
                type="text"
                value={draftPrompt}
                onChange={(event) => setDraftPrompt(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleConfirmPrompt();
                  }
                  if (event.key === "Escape") {
                    setDraftPrompt(question.prompt);
                    onUpdate({ isEditing: false });
                  }
                }}
                placeholder="Write your question here..."
                autoFocus
                className="min-w-0 flex-1 bg-transparent pl-2 text-[13px] font-semibold text-[#1a1a1a] caret-primary outline-none sm:text-[14px]"
              />
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setDraftPrompt(question.prompt);
                    onUpdate({ isEditing: false });
                  }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa]"
                  aria-label="Cancel question edit"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={handleConfirmPrompt}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-primary transition-colors hover:bg-[#fff5f5]"
                  aria-label="Confirm question edit"
                >
                  <Check className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>
          ) : (
            <h3 className="text-[13px] font-semibold leading-relaxed text-[#1a1a1a] sm:text-[14px]">
              {formatAdminCourseQuizQuestionLabel(questionIndex, question.prompt || "Untitled question")}
            </h3>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className={cn(
                "inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa] hover:text-[#1a1a1a]",
                isMenuOpen && "bg-[#fafafa] text-[#1a1a1a]"
              )}
              aria-label="Question actions"
            >
              <span className="text-lg leading-none">⋯</span>
            </button>

            <AdminCourseCreationCurriculumActionMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              onRename={() => {
                setDraftPrompt(question.prompt);
                onUpdate({ isEditing: true });
              }}
              onCopy={onCopy}
              onDelete={onDelete}
            />
          </div>

          <button
            type="button"
            onClick={() => onUpdate({ isExpanded: !question.isExpanded })}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa] hover:text-[#1a1a1a]"
            aria-label={question.isExpanded ? "Collapse question" : "Expand question"}
          >
            {question.isExpanded ? (
              <ChevronUp className="h-4 w-4" aria-hidden />
            ) : (
              <ChevronDown className="h-4 w-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {question.isExpanded ? (
        <div className="space-y-4 border-t border-[#f0f0f0] px-4 py-4 sm:px-5 sm:py-5">
          <div className="space-y-3">
            {question.options.map((option) => (
              <AdminCourseCreationAddQuizAnswerOptionRow
                key={option.id}
                option={option}
                isCorrect={question.correctOptionId === option.id}
                onSelect={() => onUpdate({ correctOptionId: option.id })}
                onRename={(text) => handleUpdateOption(option.id, text)}
                onCopy={() => handleCopyOption(option.id)}
                onDelete={() => handleDeleteOption(option.id)}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleAddOption}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition-colors hover:text-[#e63e3e]"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden />
            Add Answer Option
          </button>

          <div className="space-y-2">
            <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">
              Correct Answer Description
            </label>
            <textarea
              value={question.correctAnswerDescription}
              onChange={(event) => onUpdate({ correctAnswerDescription: event.target.value })}
              placeholder="Write the description..."
              className={cn(adminCourseAddLessonTextareaClassName, "min-h-[120px] sm:min-h-[140px]")}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">
              Question Mark (Point)
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={question.points}
              onChange={(event) => onUpdate({ points: event.target.value })}
              placeholder="Enter mark..."
              className={cn(adminCourseAddLessonInputClassName, "max-w-[160px]")}
            />
          </div>
        </div>
      ) : null}
    </article>
  );
}
