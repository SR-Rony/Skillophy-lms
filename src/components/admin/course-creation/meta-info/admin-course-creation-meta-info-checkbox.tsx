"use client";

import { Check } from "lucide-react";
import { cn } from "@/utils";

interface AdminCourseCreationMetaInfoCheckboxProps {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}

export function AdminCourseCreationMetaInfoCheckbox({
  checked,
  label,
  onChange,
}: AdminCourseCreationMetaInfoCheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5">
      <span
        className={cn(
          "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors",
          checked ? "border-[#1a1a1a] bg-[#1a1a1a]" : "border-[#d1d5db] bg-white"
        )}
      >
        {checked ? <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden /> : null}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="sr-only"
      />
      <span className="text-[12px] font-medium text-[#1a1a1a] sm:text-[13px]">{label}</span>
    </label>
  );
}
