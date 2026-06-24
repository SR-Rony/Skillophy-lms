"use client";

import { useState } from "react";
import {
  BookOpen,
  ClipboardList,
  GripVertical,
  MessageCircleQuestion,
  MoreVertical,
  Play,
} from "lucide-react";
import { AdminCourseCreationCurriculumActionMenu } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum-action-menu";
import type { AdminCourseCurriculumItem } from "@/types/admin-course-creation.types";
import { cn } from "@/utils";

interface AdminCourseCreationCurriculumItemRowProps {
  item: AdminCourseCurriculumItem;
  onRename: (title: string) => void;
  onCopy: () => void;
  onDelete: () => void;
}

function AdminCourseCreationCurriculumItemIcon({
  type,
}: {
  type: AdminCourseCurriculumItem["type"];
}) {
  if (type === "lesson") {
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ebe8e6] bg-[#fafafa]">
        <Play className="h-3.5 w-3.5 fill-[#1a1a1a] text-[#1a1a1a]" aria-hidden />
      </span>
    );
  }

  if (type === "resource") {
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ebe8e6] bg-[#fafafa]">
        <BookOpen className="h-3.5 w-3.5 text-[#1a1a1a]" aria-hidden />
      </span>
    );
  }

  if (type === "assignment") {
    return (
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ebe8e6] bg-[#fafafa]">
        <ClipboardList className="h-3.5 w-3.5 text-[#1a1a1a]" aria-hidden />
      </span>
    );
  }

  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ebe8e6] bg-[#fafafa]">
      <MessageCircleQuestion className="h-3.5 w-3.5 text-[#1a1a1a]" aria-hidden />
    </span>
  );
}

export function AdminCourseCreationCurriculumItemRow({
  item,
  onRename,
  onCopy,
  onDelete,
}: AdminCourseCreationCurriculumItemRowProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [draftTitle, setDraftTitle] = useState(item.title);

  function handleConfirmRename() {
    const nextTitle = draftTitle.trim();
    if (nextTitle) {
      onRename(nextTitle);
    } else {
      setDraftTitle(item.title);
    }
    setIsRenaming(false);
  }

  return (
    <div className="flex items-center gap-3 border-b border-[#f0f0f0] py-3 last:border-b-0">
      <button
        type="button"
        className="shrink-0 cursor-grab text-[#c4c4c4] transition-colors hover:text-[#757575]"
        aria-label="Drag to reorder"
      >
        <GripVertical className="h-4 w-4" aria-hidden />
      </button>

      <AdminCourseCreationCurriculumItemIcon type={item.type} />

      <div className="min-w-0 flex-1">
        {isRenaming ? (
          <input
            type="text"
            value={draftTitle}
            onChange={(event) => setDraftTitle(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleConfirmRename();
              }
              if (event.key === "Escape") {
                setDraftTitle(item.title);
                setIsRenaming(false);
              }
            }}
            onBlur={handleConfirmRename}
            autoFocus
            className="w-full rounded-lg border border-[#ebe8e6] px-3 py-2 text-[13px] font-medium text-[#1a1a1a] outline-none focus:border-primary sm:text-[14px]"
          />
        ) : (
          <p className="truncate text-[13px] font-medium text-[#1a1a1a] sm:text-[14px]">
            {item.title}
            {item.type === "lesson" && item.resourceLabel ? (
              <span className="font-normal text-[#757575]"> • {item.resourceLabel}</span>
            ) : null}
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
          aria-label="Item actions"
        >
          <MoreVertical className="h-4 w-4" aria-hidden />
        </button>

        <AdminCourseCreationCurriculumActionMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onRename={() => {
            setDraftTitle(item.title);
            setIsRenaming(true);
          }}
          onCopy={onCopy}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}
