"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import type { StudentLiveVideoNote } from "@/types/student-live-video.types";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface CourseVideoNotesSectionProps {
  lessonTitle: string;
  moduleTitle: string;
  currentTimestamp: string;
  initialNotes: StudentLiveVideoNote[];
}

function NoteTimestampBadge({ timestamp }: { timestamp: string }) {
  return (
    <span className="inline-flex min-w-[52px] items-center justify-center rounded-lg border border-[#ebe8e6] bg-white px-3 py-1.5 text-[13px] font-semibold tabular-nums text-[#1a1a1a] shadow-[0_2px_8px_rgba(35,25,22,0.04)] sm:min-w-[56px] sm:px-3.5 sm:py-2 sm:text-[14px]">
      {timestamp}
    </span>
  );
}

function NoteContentBubble({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative pl-3 sm:pl-4", className)}>
      <span
        className="absolute left-0 top-5 h-3 w-3 rotate-45 border-b border-l border-[#ebe8e6] bg-white sm:top-6"
        aria-hidden
      />
      <div className="rounded-2xl border border-[#ebe8e6] bg-white px-4 py-4 shadow-[0_8px_28px_rgba(35,25,22,0.05)] sm:px-5 sm:py-5">
        {children}
      </div>
    </div>
  );
}

interface CourseVideoNoteItemProps {
  note: StudentLiveVideoNote;
  isEditing: boolean;
  draftContent: string;
  onDraftChange: (value: string) => void;
  onEdit: () => void;
  onDelete: () => void;
  onSave: () => void;
  onCancel: () => void;
}

function CourseVideoNoteItem({
  note,
  isEditing,
  draftContent,
  onDraftChange,
  onEdit,
  onDelete,
  onSave,
  onCancel,
}: CourseVideoNoteItemProps) {
  return (
    <article className="flex items-start gap-3 sm:gap-4">
      <div className="flex w-[52px] shrink-0 justify-center pt-1 sm:w-[56px] sm:pt-1.5">
        <NoteTimestampBadge timestamp={note.timestamp} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-[14px] font-semibold leading-snug text-[#9ca3af] sm:text-[15px]">
              {note.lessonTitle}
            </h3>
            <p className="mt-1 text-[13px] font-medium leading-snug text-[#6f6562] sm:text-[14px]">
              {note.moduleTitle}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-0.5">
            <button
              type="button"
              aria-label="Edit note"
              aria-pressed={isEditing}
              onClick={onEdit}
              className="flex h-9 w-9 items-center justify-center text-[#b0b7c3] transition-colors hover:text-[#1a1a1a]"
            >
              <Pencil className="h-[17px] w-[17px]" strokeWidth={1.5} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Delete note"
              onClick={onDelete}
              className="flex h-9 w-9 items-center justify-center text-[#b0b7c3] transition-colors hover:text-[#1a1a1a]"
            >
              <Trash2 className="h-[17px] w-[17px]" strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </div>

        <div className="mt-3 sm:mt-4">
          {isEditing ? (
            <>
              <NoteContentBubble>
                <textarea
                  value={draftContent}
                  onChange={(event) => onDraftChange(event.target.value)}
                  rows={3}
                  autoFocus
                  placeholder="Write your note here..."
                  className="min-h-[72px] w-full resize-none bg-transparent text-[14px] leading-[1.7] text-[#1a1a1a] placeholder:text-[#b0b7c3] focus:outline-none sm:min-h-[80px] sm:text-[15px]"
                />
              </NoteContentBubble>

              <div className="mt-3 flex justify-end gap-2.5 sm:mt-4">
                <button
                  type="button"
                  onClick={onCancel}
                  className="inline-flex min-w-[96px] items-center justify-center rounded-xl border border-[#ebe8e6] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:bg-[#fafafa]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={onSave}
                  className="inline-flex min-w-[96px] items-center justify-center rounded-xl bg-[#1a1a1a] px-5 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Save
                </button>
              </div>
            </>
          ) : (
            <NoteContentBubble>
              <p className="text-[14px] leading-[1.75] text-[#1a1a1a] sm:text-[15px]">{note.content}</p>
            </NoteContentBubble>
          )}
        </div>
      </div>
    </article>
  );
}

export function CourseVideoNotesSection({
  lessonTitle,
  moduleTitle,
  currentTimestamp,
  initialNotes,
}: CourseVideoNotesSectionProps) {
  const [notes, setNotes] = useState(initialNotes);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [draftContent, setDraftContent] = useState("");
  const [isCreatingNote, setIsCreatingNote] = useState(false);

  function startEditing(note: StudentLiveVideoNote, isNew = false) {
    setEditingNoteId(note.id);
    setDraftContent(note.content);
    setIsCreatingNote(isNew);
  }

  function handleCreateNote() {
    if (editingNoteId) {
      return;
    }

    const newNote: StudentLiveVideoNote = {
      id: `note-${Date.now()}`,
      timestamp: currentTimestamp,
      lessonTitle,
      moduleTitle,
      content: "",
    };

    setNotes((current) => [newNote, ...current]);
    startEditing(newNote, true);
  }

  function handleSave(noteId: string) {
    const trimmedContent = draftContent.trim();

    if (isCreatingNote && !trimmedContent) {
      setNotes((current) => current.filter((note) => note.id !== noteId));
    } else {
      setNotes((current) =>
        current.map((note) =>
          note.id === noteId ? { ...note, content: trimmedContent || note.content } : note
        )
      );
    }

    setEditingNoteId(null);
    setDraftContent("");
    setIsCreatingNote(false);
  }

  function handleCancel(noteId: string) {
    if (isCreatingNote) {
      setNotes((current) => current.filter((note) => note.id !== noteId));
    }

    setEditingNoteId(null);
    setDraftContent("");
    setIsCreatingNote(false);
  }

  function handleDelete(noteId: string) {
    setNotes((current) => current.filter((note) => note.id !== noteId));

    if (editingNoteId === noteId) {
      setEditingNoteId(null);
      setDraftContent("");
      setIsCreatingNote(false);
    }
  }

  return (
    <div>
      <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
        <button
          type="button"
          onClick={handleCreateNote}
          disabled={Boolean(editingNoteId)}
          className={cn(
            "flex min-w-0 flex-1 items-center justify-between gap-3 rounded-full border border-[#1a1a1a] px-4 py-3 text-left transition-colors sm:px-5 sm:py-3.5",
            editingNoteId
              ? "cursor-not-allowed border-[#d1d5db] text-[#9ca3af]"
              : "hover:bg-[#fafafa]"
          )}
        >
          <span className="truncate text-[13px] font-medium text-[#1a1a1a] sm:text-[14px]">
            Create new note at {currentTimestamp}
          </span>
          <Plus className="h-4 w-4 shrink-0 text-[#1a1a1a]" aria-hidden />
        </button>

        <Link
          href={ROUTES.student.resources}
          className="shrink-0 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:text-primary sm:text-[14px]"
        >
          All Notes
        </Link>
      </div>

      <div className="space-y-8 sm:space-y-10">
        {notes.map((note) => (
          <CourseVideoNoteItem
            key={note.id}
            note={note}
            isEditing={editingNoteId === note.id}
            draftContent={editingNoteId === note.id ? draftContent : note.content}
            onDraftChange={setDraftContent}
            onEdit={() => startEditing(note)}
            onDelete={() => handleDelete(note.id)}
            onSave={() => handleSave(note.id)}
            onCancel={() => handleCancel(note.id)}
          />
        ))}
      </div>
    </div>
  );
}
