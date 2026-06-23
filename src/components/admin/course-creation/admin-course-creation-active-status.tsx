"use client";

import { cn } from "@/utils";

interface AdminCourseCreationActiveStatusProps {
  isActive: boolean;
  isEditing: boolean;
  onChange: (isActive: boolean) => void;
}

export function AdminCourseCreationActiveStatus({
  isActive,
  isEditing,
  onChange,
}: AdminCourseCreationActiveStatusProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[14px] font-semibold text-[#1a1a1a] sm:text-[15px]">Active Status:</span>
      <button
        type="button"
        role="switch"
        aria-checked={isActive}
        disabled={!isEditing}
        onClick={() => onChange(!isActive)}
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors",
          isActive ? "bg-primary" : "bg-[#d1d5db]",
          isEditing ? "cursor-pointer" : "cursor-default opacity-100"
        )}
      >
        <span
          className={cn(
            "inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform",
            isActive ? "translate-x-[22px]" : "translate-x-0.5"
          )}
        />
      </button>
    </div>
  );
}
