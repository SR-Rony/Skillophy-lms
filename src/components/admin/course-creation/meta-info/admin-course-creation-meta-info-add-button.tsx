"use client";

import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { adminCourseMetaInfoAddButtonClassName } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";
import { cn } from "@/utils";

interface AdminCourseCreationMetaInfoAddButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export function AdminCourseCreationMetaInfoAddButton({
  children,
  onClick,
  className,
}: AdminCourseCreationMetaInfoAddButtonProps) {
  return (
    <button type="button" onClick={onClick} className={cn(adminCourseMetaInfoAddButtonClassName, className)}>
      <Plus className="h-4 w-4 shrink-0" aria-hidden />
      {children}
    </button>
  );
}
