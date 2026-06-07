"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils";

interface CourseCategoryItemProps {
  id: string;
  label: string;
  courseCount: number;
  icon: LucideIcon;
  isActive: boolean;
  onClick?: (id: string) => void;
  href?: string;
  onNavigate?: () => void;
  onPreview?: (id: string) => void;
  size?: "default" | "large";
}

const categoryItemClassName = (
  isActive: boolean,
  size: "default" | "large"
) =>
  cn(
    "flex w-full items-center gap-4 rounded-[10px] border bg-white px-4 text-left shadow-[0_10px_24px_rgba(35,25,22,0.04)] transition duration-300",
    size === "large" ? "min-h-[72px] py-4" : "py-3",
    isActive
      ? "border-primary/25 bg-primary/5 text-primary-dark"
      : "border-[#eee7e4] text-[#302927] hover:-translate-y-0.5 hover:border-primary/25"
  );

function CategoryItemContent({
  label,
  courseCount,
  icon: Icon,
  isActive,
  size,
}: Pick<CourseCategoryItemProps, "label" | "courseCount" | "icon" | "isActive" | "size">) {
  return (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#554a47]">
        <Icon size={21} strokeWidth={1.7} aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <div
          className={cn(
            "font-black leading-none",
            size === "large" ? "text-[19px]" : "text-[14px]"
          )}
        >
          {label}
        </div>
        <div
          className={cn(
            "mt-1 text-[11px] font-semibold",
            isActive ? "text-primary-dark" : "text-[#6f6562]"
          )}
        >
          {courseCount} courses
        </div>
      </div>
    </>
  );
}

export function CourseCategoryItem({
  id,
  label,
  courseCount,
  icon,
  isActive,
  onClick,
  href,
  onNavigate,
  onPreview,
  size = "default",
}: CourseCategoryItemProps) {
  const className = categoryItemClassName(isActive, size);

  if (href) {
    return (
      <Link
        href={href}
        onMouseEnter={() => onPreview?.(id)}
        onFocus={() => onPreview?.(id)}
        onClick={onNavigate}
        className={className}
        aria-current={isActive ? "page" : undefined}
      >
        <CategoryItemContent
          label={label}
          courseCount={courseCount}
          icon={icon}
          isActive={isActive}
          size={size}
        />
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onClick?.(id)}
      className={className}
      aria-current={isActive ? "true" : undefined}
    >
      <CategoryItemContent
        label={label}
        courseCount={courseCount}
        icon={icon}
        isActive={isActive}
        size={size}
      />
    </button>
  );
}
