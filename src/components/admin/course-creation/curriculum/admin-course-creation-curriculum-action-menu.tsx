"use client";

import { useEffect, useRef } from "react";
import { Copy, Pencil, Trash2 } from "lucide-react";

interface AdminCourseCreationCurriculumActionMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onRename: () => void;
  onCopy: () => void;
  onDelete: () => void;
}

export function AdminCourseCreationCurriculumActionMenu({
  isOpen,
  onClose,
  onRename,
  onCopy,
  onDelete,
}: AdminCourseCreationCurriculumActionMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        onClose();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className="absolute right-0 top-full z-20 mt-1 min-w-[148px] overflow-hidden rounded-xl border border-[#ebe8e6] bg-white py-1 shadow-[0_12px_40px_rgba(35,25,22,0.12)]"
      role="menu"
    >
      <button
        type="button"
        role="menuitem"
        onClick={() => {
          onRename();
          onClose();
        }}
        className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] font-medium text-[#1a1a1a] transition-colors hover:bg-[#fafafa]"
      >
        <Pencil className="h-4 w-4 text-[#757575]" aria-hidden />
        Rename
      </button>
      <button
        type="button"
        role="menuitem"
        onClick={() => {
          onCopy();
          onClose();
        }}
        className="group/copy flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] font-medium text-[#1a1a1a] transition-colors hover:bg-[#fff5f5] hover:text-primary"
      >
        <Copy className="h-4 w-4 text-[#757575] transition-colors group-hover/copy:text-primary" aria-hidden />
        Copy
      </button>
      <button
        type="button"
        role="menuitem"
        onClick={() => {
          onDelete();
          onClose();
        }}
        className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] font-medium text-[#1a1a1a] transition-colors hover:bg-[#fafafa]"
      >
        <Trash2 className="h-4 w-4 text-[#757575]" aria-hidden />
        Delete
      </button>
    </div>
  );
}
