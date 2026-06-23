"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, LayoutTemplate, Plus } from "lucide-react";
import { AdminCourseCreationMetaInfoTemplateMenu } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-template-menu";
import type { AdminCourseCreationMetaInfoTemplateMenuItem } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-template-menu";
import {
  adminCourseMetaInfoActionButtonClassName,
} from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";
import { cn } from "@/utils";

interface AdminCourseCreationMetaInfoTemplateActionsProps {
  templates: AdminCourseCreationMetaInfoTemplateMenuItem[];
  selectedTemplateIds: string[];
  onToggleTemplate: (templateId: string, selected: boolean) => void;
  onCreateFromBlank?: () => void;
}

export function AdminCourseCreationMetaInfoTemplateActions({
  templates,
  selectedTemplateIds,
  onToggleTemplate,
  onCreateFromBlank,
}: AdminCourseCreationMetaInfoTemplateActionsProps) {
  const [isTemplateMenuOpen, setIsTemplateMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isTemplateMenuOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsTemplateMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [isTemplateMenuOpen]);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <div ref={containerRef} className="relative w-full sm:w-auto sm:min-w-[248px]">
        <button
          type="button"
          onClick={() => setIsTemplateMenuOpen((current) => !current)}
          aria-expanded={isTemplateMenuOpen}
          aria-haspopup="listbox"
          className={cn(
            adminCourseMetaInfoActionButtonClassName,
            "w-full min-w-0 text-primary sm:w-full",
            isTemplateMenuOpen && "border-primary/20 bg-[#fff5f5]"
          )}
        >
          <LayoutTemplate className="h-5 w-5 shrink-0 text-primary" aria-hidden />
          <span>Create from Template</span>
          <ChevronDown
            className={cn(
              "ml-auto h-4 w-4 shrink-0 text-[#9ca3af] transition-transform",
              isTemplateMenuOpen && "rotate-180"
            )}
            aria-hidden
          />
        </button>

        <AdminCourseCreationMetaInfoTemplateMenu
          open={isTemplateMenuOpen}
          onOpenChange={setIsTemplateMenuOpen}
          items={templates}
          selectedIds={selectedTemplateIds}
          onToggle={onToggleTemplate}
        />
      </div>

      <button
        type="button"
        onClick={onCreateFromBlank}
        className={cn(
          adminCourseMetaInfoActionButtonClassName,
          "w-full text-[#1a1a1a] sm:w-auto sm:min-w-[220px]"
        )}
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#1a1a1a]">
          <Plus className="h-3.5 w-3.5" aria-hidden />
        </span>
        <span>Create from Blank</span>
      </button>
    </div>
  );
}
