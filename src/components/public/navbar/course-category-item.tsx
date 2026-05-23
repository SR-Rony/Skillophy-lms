"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils";

interface CourseCategoryItemProps {
  id: string;
  label: string;
  courseCount: number;
  icon: LucideIcon;
  isActive: boolean;
  onClick: (id: string) => void;
}

export function CourseCategoryItem({
  id,
  label,
  courseCount,
  icon: Icon,
  isActive,
  onClick,
}: CourseCategoryItemProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors",
        isActive ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-50"
      )}
      aria-current={isActive ? "true" : undefined}
    >
      <Icon size={20} className="shrink-0" aria-hidden />
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium">{label}</div>
        <div className={cn("text-xs", isActive ? "text-red-500" : "text-gray-500")}>
          {courseCount} courses
        </div>
      </div>
    </button>
  );
}
