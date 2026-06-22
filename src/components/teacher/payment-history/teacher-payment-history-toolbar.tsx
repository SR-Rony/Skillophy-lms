"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpNarrowWide,
  ChevronDown,
  ListFilter,
} from "lucide-react";
import type {
  TeacherPaymentHistoryCourseOption,
  TeacherPaymentHistorySortId,
  TeacherPaymentHistorySortOption,
} from "@/types/teacher-payment-history.types";
import { cn } from "@/utils";

interface TeacherPaymentHistoryToolbarProps {
  courses: TeacherPaymentHistoryCourseOption[];
  sortOptions: TeacherPaymentHistorySortOption[];
  selectedCourseId: string;
  selectedSortId: TeacherPaymentHistorySortId;
  exportLabel: string;
  onCourseChange: (courseId: string) => void;
  onSortChange: (sortId: TeacherPaymentHistorySortId) => void;
  onExport: () => void;
}

const toolbarBoxClassName =
  "flex h-11 items-stretch rounded-xl border border-[#ebe8e6] bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)]";

const menuItemClassName =
  "flex w-full items-center px-4 py-2.5 text-left text-[13px] font-medium transition-colors sm:px-5 sm:py-3";

function useDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

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

function SortOptionIcon({ sortId, className }: { sortId: string; className?: string }) {
  if (sortId === "date-asc" || sortId === "amount-asc") {
    return <ArrowUpNarrowWide className={className} strokeWidth={2} aria-hidden />;
  }

  if (sortId === "date-desc" || sortId === "amount-desc") {
    return <ArrowDownWideNarrow className={className} strokeWidth={2} aria-hidden />;
  }

  return <ArrowUpDown className={className} strokeWidth={2} aria-hidden />;
}

export function TeacherPaymentHistoryToolbar({
  courses,
  sortOptions,
  selectedCourseId,
  selectedSortId,
  exportLabel,
  onCourseChange,
  onSortChange,
  onExport,
}: TeacherPaymentHistoryToolbarProps) {
  const courseMenuId = useId();
  const sortMenuId = useId();
  const courseDropdown = useDropdown();
  const sortDropdown = useDropdown();

  const selectedCourseLabel =
    courses.find((course) => course.id === selectedCourseId)?.label ?? "All courses";
  const selectedSortLabel =
    sortOptions.find((option) => option.id === selectedSortId)?.label ?? "Default";

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center lg:max-w-[560px]">
        <div ref={courseDropdown.containerRef} className="relative w-full flex-1">
          <div className={toolbarBoxClassName}>
            <div className="flex shrink-0 items-center gap-2.5 px-4 sm:px-5">
              <ListFilter className="h-4 w-4 shrink-0 text-[#6b7280]" strokeWidth={2} aria-hidden />
              <span className="text-[13px] font-medium text-[#6b7280]">Course</span>
            </div>
            <div className="w-px shrink-0 self-stretch bg-[#ebe8e6]" aria-hidden />
            <button
              type="button"
              id={courseMenuId}
              aria-haspopup="listbox"
              aria-expanded={courseDropdown.open}
              onClick={() => courseDropdown.setOpen((current) => !current)}
              className="flex min-w-0 flex-1 items-center justify-between gap-3 px-4 text-left sm:px-5"
            >
              <span className="truncate text-[13px] font-semibold text-[#1a1a1a]">
                {selectedCourseLabel}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-[#6b7280] transition-transform",
                  courseDropdown.open && "rotate-180"
                )}
                aria-hidden
              />
            </button>
          </div>

          {courseDropdown.open && (
            <ul
              className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 max-h-[260px] overflow-y-auto rounded-xl border border-[#ebe8e6] bg-white py-2 shadow-[0_10px_30px_rgba(35,25,22,0.08)]"
              role="listbox"
            >
              {courses.map((course) => {
                const isSelected = course.id === selectedCourseId;

                return (
                  <li key={course.id} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onClick={() => {
                        onCourseChange(course.id);
                        courseDropdown.setOpen(false);
                      }}
                      className={cn(
                        menuItemClassName,
                        isSelected
                          ? "bg-[#fff5f5] font-semibold text-primary"
                          : "text-[#1a1a1a] hover:bg-[#f9f9f9]"
                      )}
                    >
                      {course.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:justify-end">
        <div ref={sortDropdown.containerRef} className="relative">
          <div className={toolbarBoxClassName}>
            <button
              type="button"
              id={sortMenuId}
              aria-haspopup="listbox"
              aria-expanded={sortDropdown.open}
              onClick={() => sortDropdown.setOpen((current) => !current)}
              className="flex items-center gap-2.5 px-4 sm:px-5"
            >
              <span className="text-[13px] font-medium text-[#6b7280]">Sort:</span>
              <span className="text-[13px] font-semibold text-[#1a1a1a]">{selectedSortLabel}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-[#6b7280] transition-transform",
                  sortDropdown.open && "rotate-180"
                )}
                aria-hidden
              />
            </button>
          </div>

          {sortDropdown.open && (
            <ul
              className="absolute right-0 top-[calc(100%+8px)] z-30 min-w-[220px] overflow-hidden rounded-xl border border-[#ebe8e6] bg-white py-2 shadow-[0_10px_30px_rgba(35,25,22,0.08)]"
              role="listbox"
            >
              {sortOptions.map((option) => {
                const isSelected = option.id === selectedSortId;

                return (
                  <li key={option.id} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onClick={() => {
                        onSortChange(option.id);
                        sortDropdown.setOpen(false);
                      }}
                      className={cn(
                        menuItemClassName,
                        "gap-2.5",
                        isSelected
                          ? "bg-[#fff5f5] font-semibold text-primary"
                          : "text-[#1a1a1a] hover:bg-[#f9f9f9]"
                      )}
                    >
                      <SortOptionIcon sortId={option.id} className="h-4 w-4 shrink-0" />
                      {option.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <button
          type="button"
          onClick={onExport}
          className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 sm:px-6"
        >
          {exportLabel}
          <ChevronDown className="h-4 w-4" strokeWidth={2} aria-hidden />
        </button>
      </div>
    </div>
  );
}
