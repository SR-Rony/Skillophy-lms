"use client";

import { useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  GripVertical,
  MessageCircleQuestion,
  MoreVertical,
  Play,
} from "lucide-react";
import { AdminCourseCreationCurriculumActionMenu } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum-action-menu";
import { AdminCourseCreationCurriculumItemRow } from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum-item-row";
import {
  formatAdminCourseCurriculumTopicLabel,
  getAdminCourseCurriculumTopicSummary,
} from "@/components/admin/course-creation/curriculum/admin-course-creation-curriculum.utils";
import type {
  AdminCourseCurriculumItem,
  AdminCourseCurriculumItemType,
  AdminCourseCurriculumTopic,
} from "@/types/admin-course-creation.types";
import { cn } from "@/utils";

interface AdminCourseCreationCurriculumTopicCardProps {
  topic: AdminCourseCurriculumTopic;
  topicIndex: number;
  onToggleExpanded: () => void;
  onRenameTopic: (title: string) => void;
  onCopyTopic: () => void;
  onDeleteTopic: () => void;
  onAddLesson: () => void;
  onAddResource: () => void;
  onAddQuiz: () => void;
  onRenameItem: (itemId: string, title: string) => void;
  onCopyItem: (itemId: string) => void;
  onDeleteItem: (itemId: string) => void;
}

function createDefaultItemTitle(type: AdminCourseCurriculumItemType, topicTitle: string) {
  if (type === "lesson") {
    return "New lesson";
  }
  if (type === "resource") {
    return `Hand note of the ${topicTitle}`;
  }
  return `Quiz on ${topicTitle}`;
}

export function AdminCourseCreationCurriculumTopicCard({
  topic,
  topicIndex,
  onToggleExpanded,
  onRenameTopic,
  onCopyTopic,
  onDeleteTopic,
  onAddLesson,
  onAddResource,
  onAddQuiz,
  onRenameItem,
  onCopyItem,
  onDeleteItem,
}: AdminCourseCreationCurriculumTopicCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [draftTitle, setDraftTitle] = useState(topic.title);

  function handleConfirmRename() {
    const nextTitle = draftTitle.trim();
    if (nextTitle) {
      onRenameTopic(nextTitle);
    } else {
      setDraftTitle(topic.title);
    }
    setIsRenaming(false);
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.04)]">
      <div className="flex items-start gap-3 px-4 py-4 sm:px-5">
        <button
          type="button"
          className="mt-1 shrink-0 cursor-grab text-[#c4c4c4] transition-colors hover:text-[#757575]"
          aria-label="Drag to reorder topic"
        >
          <GripVertical className="h-4 w-4" aria-hidden />
        </button>

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
                  setDraftTitle(topic.title);
                  setIsRenaming(false);
                }
              }}
              onBlur={handleConfirmRename}
              autoFocus
              className="w-full rounded-lg border border-[#ebe8e6] px-3 py-2 text-[14px] font-semibold text-[#1a1a1a] outline-none focus:border-primary sm:text-[15px]"
            />
          ) : (
            <>
              <h3 className="text-[14px] font-semibold text-[#1a1a1a] sm:text-[15px]">
                {formatAdminCourseCurriculumTopicLabel(topicIndex, topic.title)}
              </h3>
              <p className="mt-1 text-[12px] text-[#757575] sm:text-[13px]">
                {getAdminCourseCurriculumTopicSummary(topic)}
              </p>
            </>
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
              aria-label="Topic actions"
            >
              <MoreVertical className="h-4 w-4" aria-hidden />
            </button>

            <AdminCourseCreationCurriculumActionMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              onRename={() => {
                setDraftTitle(topic.title);
                setIsRenaming(true);
              }}
              onCopy={onCopyTopic}
              onDelete={onDeleteTopic}
            />
          </div>

          <button
            type="button"
            onClick={onToggleExpanded}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#757575] transition-colors hover:bg-[#fafafa] hover:text-[#1a1a1a]"
            aria-label={topic.isExpanded ? "Collapse topic" : "Expand topic"}
          >
            {topic.isExpanded ? (
              <ChevronUp className="h-4 w-4" aria-hidden />
            ) : (
              <ChevronDown className="h-4 w-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {topic.isExpanded && topic.items.length > 0 ? (
        <div className="border-t border-[#f0f0f0] px-4 sm:px-5">
          <div className="relative border-l-2 border-primary pl-3 sm:pl-4">
            {topic.items.map((item) => (
              <AdminCourseCreationCurriculumItemRow
                key={item.id}
                item={item}
                onRename={(title) => onRenameItem(item.id, title)}
                onCopy={() => onCopyItem(item.id)}
                onDelete={() => onDeleteItem(item.id)}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-[#f0f0f0] px-4 py-3.5 sm:px-5">
        <button
          type="button"
          onClick={onAddLesson}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition-colors hover:text-[#e63e3e]"
        >
          <Play className="h-3.5 w-3.5" aria-hidden />
          + Add Lesson
        </button>
        <button
          type="button"
          onClick={onAddResource}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition-colors hover:text-[#e63e3e]"
        >
          <BookOpen className="h-3.5 w-3.5" aria-hidden />
          + Add Resources
        </button>
        <button
          type="button"
          onClick={onAddQuiz}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition-colors hover:text-[#e63e3e]"
        >
          <MessageCircleQuestion className="h-3.5 w-3.5" aria-hidden />
          + Add Quiz
        </button>
      </div>
    </article>
  );
}

export function createAdminCourseCurriculumItem(
  type: AdminCourseCurriculumItemType,
  topicTitle: string
): AdminCourseCurriculumItem {
  const id = `item-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

  return {
    id,
    type,
    title: createDefaultItemTitle(type, topicTitle),
    ...(type === "lesson" ? { resourceLabel: "No resource" } : {}),
  };
}
