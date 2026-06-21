"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import type {
  TeacherCourseFeedbackRatingFilterId,
  TeacherCourseFeedbackRatingFilterOption,
} from "@/types/teacher-course-details.types";
import { cn } from "@/utils";

interface TeacherCourseStudentFeedbackRatingsFilterProps {
  options: TeacherCourseFeedbackRatingFilterOption[];
  selectedFilterId: TeacherCourseFeedbackRatingFilterId;
  onFilterChange: (filterId: TeacherCourseFeedbackRatingFilterId) => void;
}

const menuItemClassName =
  "flex w-full items-center whitespace-nowrap px-4 py-2.5 text-left text-[13px] font-medium transition-colors";

function useDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return { open, setOpen, containerRef };
}

export function TeacherCourseStudentFeedbackRatingsFilter({
  options,
  selectedFilterId,
  onFilterChange,
}: TeacherCourseStudentFeedbackRatingsFilterProps) {
  const menuId = useId();
  const { open, setOpen, containerRef } = useDropdown();

  const selectedLabel =
    options.find((option) => option.id === selectedFilterId)?.label ?? "All Ratings";

  return (
    <div
      ref={containerRef}
      className="relative inline-flex h-11 w-fit min-w-[228px] items-stretch overflow-visible rounded-xl border border-[#ebe8e6] bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)]"
    >
      <div className="flex shrink-0 items-center gap-2.5 px-3.5 sm:px-4">
        <Menu className="h-4 w-4 shrink-0 text-[#374151]" strokeWidth={2} aria-hidden />
        <span className="text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">Ratings</span>
      </div>

      <span className="h-5 w-px shrink-0 self-center bg-[#ebe8e6]" aria-hidden />

      <button
        type="button"
        id={menuId}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex min-w-0 flex-1 items-center gap-2 px-3.5 text-left sm:px-4"
      >
        <span className="truncate text-[13px] font-medium text-[#374151] sm:text-[14px]">
          {selectedLabel}
        </span>
        <ChevronDown
          className={cn(
            "ml-auto h-4 w-4 shrink-0 text-[#6b7280] transition-transform",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open && (
        <ul
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 w-full overflow-hidden rounded-xl border border-[#ebe8e6] bg-white py-1.5 shadow-[0_10px_30px_rgba(35,25,22,0.08)]"
          role="listbox"
          aria-labelledby={menuId}
        >
          {options.map((option) => {
            const isSelected = option.id === selectedFilterId;

            return (
              <li key={option.id} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    onFilterChange(option.id);
                    setOpen(false);
                  }}
                  className={cn(
                    menuItemClassName,
                    isSelected
                      ? "bg-[#fff5f5] font-semibold text-primary"
                      : "text-[#1a1a1a] hover:bg-[#f9f9f9]"
                  )}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
