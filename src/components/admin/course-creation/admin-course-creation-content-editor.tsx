"use client";

import {
  AlignCenter,
  AlignLeft,
  Bold,
  Image as ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Smile,
  Underline,
} from "lucide-react";
import {
  AccountSettingsField,
  accountSettingsTextareaClassName,
} from "@/components/student/account-settings/account-settings-field";
import { cn } from "@/utils";

interface AdminCourseCreationContentEditorProps {
  label: string;
  value: string;
  placeholder: string;
  isEditing: boolean;
  onChange: (value: string) => void;
  className?: string;
}

const toolbarButtonClassName =
  "inline-flex h-8 w-8 items-center justify-center rounded-md text-[#6b7280] transition-colors hover:bg-[#ececec] hover:text-[#1a1a1a] active:bg-[#e3e3e2] disabled:pointer-events-none disabled:opacity-40";

export function AdminCourseCreationContentEditor({
  label,
  value,
  placeholder,
  isEditing,
  onChange,
  className,
}: AdminCourseCreationContentEditorProps) {
  return (
    <AccountSettingsField label={label} className={className}>
      <div className="overflow-hidden rounded-xl bg-[#f5f5f5]">
        <div className="flex flex-wrap items-center gap-0.5 border-b border-[#ebe8e6] px-2 py-2">
          <button type="button" disabled={!isEditing} className={toolbarButtonClassName} aria-label="Bold">
            <Bold className="h-4 w-4" aria-hidden />
          </button>
          <button type="button" disabled={!isEditing} className={toolbarButtonClassName} aria-label="Italic">
            <Italic className="h-4 w-4" aria-hidden />
          </button>
          <button type="button" disabled={!isEditing} className={toolbarButtonClassName} aria-label="Underline">
            <Underline className="h-4 w-4" aria-hidden />
          </button>
          <span className="mx-1 h-5 w-px bg-[#e5e7eb]" aria-hidden />
          <button type="button" disabled={!isEditing} className={toolbarButtonClassName} aria-label="Align left">
            <AlignLeft className="h-4 w-4" aria-hidden />
          </button>
          <button type="button" disabled={!isEditing} className={toolbarButtonClassName} aria-label="Align center">
            <AlignCenter className="h-4 w-4" aria-hidden />
          </button>
          <button type="button" disabled={!isEditing} className={toolbarButtonClassName} aria-label="Bullet list">
            <List className="h-4 w-4" aria-hidden />
          </button>
          <button type="button" disabled={!isEditing} className={toolbarButtonClassName} aria-label="Numbered list">
            <ListOrdered className="h-4 w-4" aria-hidden />
          </button>
          <span className="mx-1 h-5 w-px bg-[#e5e7eb]" aria-hidden />
          <button type="button" disabled={!isEditing} className={toolbarButtonClassName} aria-label="Insert link">
            <Link2 className="h-4 w-4" aria-hidden />
          </button>
          <button type="button" disabled={!isEditing} className={toolbarButtonClassName} aria-label="Insert image">
            <ImageIcon className="h-4 w-4" aria-hidden />
          </button>
          <button type="button" disabled={!isEditing} className={toolbarButtonClassName} aria-label="Insert emoji">
            <Smile className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          disabled={!isEditing}
          className={cn(
            accountSettingsTextareaClassName,
            "min-h-[180px] rounded-none bg-transparent focus:ring-0 sm:min-h-[200px]"
          )}
        />
      </div>
    </AccountSettingsField>
  );
}
