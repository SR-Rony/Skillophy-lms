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
        "flex w-full items-center gap-4 rounded-[10px] border bg-white px-4 py-3 text-left shadow-[0_10px_24px_rgba(35,25,22,0.04)] transition duration-300",
        isActive
          ? "border-[#f2c3c0] bg-[#fff4f2] text-[#8a2525]"
          : "border-[#eee7e4] text-[#302927] hover:-translate-y-0.5 hover:border-[#f2c3c0]"
      )}
      aria-current={isActive ? "true" : undefined}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#554a47]">
        <Icon size={21} strokeWidth={1.7} aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[14px] font-black leading-none">{label}</div>
        <div className={cn("mt-1 text-[11px] font-semibold", isActive ? "text-[#8a2525]" : "text-[#6f6562]")}>
          {courseCount} courses
        </div>
      </div>
    </button>
  );
}
