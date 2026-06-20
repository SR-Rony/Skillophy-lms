"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import type { StudentResourceNoteItem } from "@/types/student-resources.types";
import { cn } from "@/utils";

interface MyResourcesNoteItemProps {
  note: StudentResourceNoteItem;
  className?: string;
}

function NoteTimeBadge({ timestamp }: { timestamp: string }) {
  return (
    <span className="inline-flex min-w-[52px] items-center justify-center rounded-full bg-[#FDE7E3] px-3.5 py-1.5 text-[13px] font-semibold tabular-nums text-[#1a1a1a]">
      {timestamp}
    </span>
  );
}

export function MyResourcesNoteItem({ note, className }: MyResourcesNoteItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.content);
  const [draftContent, setDraftContent] = useState(note.content);

  function handleSave() {
    setContent(draftContent);
    setIsEditing(false);
  }

  function handleCancel() {
    setDraftContent(content);
    setIsEditing(false);
  }

  function handleEdit() {
    setDraftContent(content);
    setIsEditing(true);
  }

  return (
    <article className={cn("flex items-start gap-3 sm:gap-4", className)}>
      <div className="flex w-[52px] shrink-0 justify-center pt-1 sm:w-[56px] sm:pt-1.5">
        <NoteTimeBadge timestamp={note.timestamp} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-[16px]">
              {note.lessonTitle}
            </h3>
            <p className="mt-1.5 text-[13px] font-medium leading-snug text-[#757575] sm:text-[14px]">
              {note.topicTitle}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-0.5">
            <button
              type="button"
              aria-label="Edit note"
              aria-pressed={isEditing}
              onClick={handleEdit}
              className="flex h-9 w-9 items-center justify-center text-[#b0b7c3] transition-colors hover:text-[#1a1a1a]"
            >
              <Pencil className="h-[17px] w-[17px]" strokeWidth={1.5} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Delete note"
              className="flex h-9 w-9 items-center justify-center text-[#b0b7c3] transition-colors hover:text-[#1a1a1a]"
            >
              <Trash2 className="h-[17px] w-[17px]" strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </div>

        <div className="mt-3 sm:mt-4">
          {isEditing ? (
            <>
              <div className="rounded-2xl border border-[#ebe8e6] bg-white px-4 py-4 sm:px-5 sm:py-5">
                <textarea
                  value={draftContent}
                  onChange={(event) => setDraftContent(event.target.value)}
                  rows={3}
                  autoFocus
                  className="min-h-[72px] w-full resize-none bg-transparent text-[14px] leading-[1.7] text-[#1a1a1a] focus:outline-none sm:min-h-[80px] sm:text-[15px]"
                />
              </div>

              <div className="mt-3 flex justify-end gap-2.5 sm:mt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="inline-flex min-w-[96px] items-center justify-center rounded-xl border border-[#ebe8e6] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#fafafa]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex min-w-[96px] items-center justify-center rounded-xl bg-[#1a1a1a] px-5 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-[#ebe8e6] bg-white px-4 py-4 shadow-[0_8px_28px_rgba(35,25,22,0.05)] sm:px-5 sm:py-5">
              <p className="text-[14px] leading-[1.75] text-[#1a1a1a] sm:text-[15px]">{content}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
