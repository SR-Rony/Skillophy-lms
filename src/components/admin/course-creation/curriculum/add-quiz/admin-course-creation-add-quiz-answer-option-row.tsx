"use client";

import { useState } from "react";
import { AdminCourseCreationCurriculumActionMenu } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum-action-menu";
import { adminCourseAddLessonInputClassName } from "@/components/admin/course-creation/curriculum/add-lesson/admin-course-creation-add-lesson.utils";
import type { AdminCourseQuizAnswerOption } from "@/types/admin-course-creation.types";
import { cn } from "@/utils";

interface AdminCourseCreationAddQuizAnswerOptionRowProps {
  option: AdminCourseQuizAnswerOption;
  isCorrect: boolean;
  onSelect: () => void;
  onRename: (text: string) => void;
  onCopy: () => void;
  onDelete: () => void;
}

export function AdminCourseCreationAddQuizAnswerOptionRow({
  option,
  isCorrect,
  onSelect,
  onRename,
  onCopy,
  onDelete,
}: AdminCourseCreationAddQuizAnswerOptionRowProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [draftText, setDraftText] = useState(option.text);

  function handleConfirmRename() {
    const nextText = draftText.trim();
    if (nextText) {
      onRename(nextText);
    } else {
      setDraftText(option.text);
    }
    setIsRenaming(false);
  }

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border border-[#ebe8e6] bg-white px-3 py-3 sm:px-4",
        isCorrect && "border-l-[3px] border-l-primary pl-[calc(0.75rem-1px)] sm:pl-[calc(1rem-1px)]"
      )}
    >
      <button
        type="button"
        onClick={onSelect}
        className="flex shrink-0 items-center justify-center"
        aria-label={isCorrect ? "Correct answer" : "Mark as correct answer"}
      >
        <span
          className={cn(
            "flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 transition-colors",
            isCorrect ? "border-primary bg-primary" : "border-[#d1d5db] bg-white"
          )}
        >
          {isCorrect ? <span className="h-2 w-2 rounded-full bg-white" /> : null}
        </span>
      </button>

      <div className="min-w-0 flex-1">
        {isRenaming ? (
          <input
            type="text"
            value={draftText}
            onChange={(event) => setDraftText(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleConfirmRename();
              }
              if (event.key === "Escape") {
                setDraftText(option.text);
                setIsRenaming(false);
              }
            }}
            onBlur={handleConfirmRename}
            autoFocus
            className="w-full rounded-lg border border-[#ebe8e6] px-3 py-2 text-[13px] font-medium text-[#1a1a1a] outline-none focus:border-primary sm:text-[14px]"
          />
        ) : (
          <p className="text-[13px] font-medium text-[#1a1a1a] sm:text-[14px]">
            {option.text || "Answer option"}
          </p>
        )}
      </div>

      <div className="relative shrink-0">
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className={cn(
            "inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa] hover:text-[#1a1a1a]",
            isMenuOpen && "bg-[#fafafa] text-[#1a1a1a]"
          )}
          aria-label="Answer option actions"
        >
          <span className="text-lg leading-none">⋯</span>
        </button>

        <AdminCourseCreationCurriculumActionMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onRename={() => {
            setDraftText(option.text);
            setIsRenaming(true);
          }}
          onCopy={onCopy}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}
