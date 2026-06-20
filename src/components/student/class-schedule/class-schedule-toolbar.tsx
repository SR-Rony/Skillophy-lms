"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpDown, ChevronDown, ListFilter } from "lucide-react";
import type {
  StudentClassScheduleCourseFilter,
  StudentClassScheduleSortOption,
} from "@/types/student-class-schedule.types";
import { cn } from "@/utils";

interface ClassScheduleToolbarProps {
  courseFilters: StudentClassScheduleCourseFilter[];
  sortOptions: StudentClassScheduleSortOption[];
  selectedCourseId: string;
  selectedSortId: string;
  onCourseChange: (courseId: string) => void;
  onSortChange: (sortId: string) => void;
  className?: string;
}

interface DropdownOption {
  id: string;
  label: string;
}

const toolbarBoxClassName =
  "flex h-11 items-stretch rounded-xl border border-[#ebe8e6] bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)]";

const menuPanelClassName =
  "absolute top-[calc(100%+8px)] z-30 overflow-hidden rounded-xl border border-[#ebe8e6] bg-white py-2 shadow-[0_10px_30px_rgba(35,25,22,0.08)]";

const menuItemClassName =
  "flex w-full items-center px-4 py-2.5 text-left text-[13px] font-medium transition-colors sm:px-5 sm:py-3";

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

function ToolbarDropdownMenu({
  options,
  value,
  onSelect,
  onClose,
  className,
}: {
  options: DropdownOption[];
  value: string;
  onSelect: (id: string) => void;
  onClose: () => void;
  className?: string;
}) {
  return (
    <ul className={cn(menuPanelClassName, className)} role="listbox">
      {options.map((option) => {
        const isSelected = option.id === value;

        return (
          <li key={option.id} role="option" aria-selected={isSelected}>
            <button
              type="button"
              onClick={() => {
                onSelect(option.id);
                onClose();
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
  );
}

function CourseFilterControl({
  courseFilters,
  selectedCourseId,
  onCourseChange,
}: {
  courseFilters: StudentClassScheduleCourseFilter[];
  selectedCourseId: string;
  onCourseChange: (courseId: string) => void;
}) {
  const menuId = useId();
  const { open, setOpen, containerRef } = useDropdown();
  const selectedLabel =
    courseFilters.find((filter) => filter.id === selectedCourseId)?.label ?? "All Courses";

  return (
    <div className={cn(toolbarBoxClassName, "w-full sm:max-w-[420px] sm:flex-1")}>
      <div className="flex shrink-0 items-center gap-2.5 px-4 sm:px-5">
        <ListFilter className="h-4 w-4 shrink-0 text-[#6b7280]" strokeWidth={2} aria-hidden />
        <span className="text-[13px] font-medium text-[#6b7280]">Course</span>
      </div>

      <div className="w-px shrink-0 self-stretch bg-[#ebe8e6]" aria-hidden />

      <div ref={containerRef} className="relative min-w-0 flex-1">
        <button
          type="button"
          id={menuId}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="flex h-full w-full items-center justify-between gap-3 px-4 text-left sm:px-5"
        >
          <span className="truncate text-[13px] font-semibold text-[#1a1a1a]">{selectedLabel}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-[#6b7280] transition-transform",
              open && "rotate-180"
            )}
            aria-hidden
          />
        </button>

        {open && (
          <ToolbarDropdownMenu
            options={courseFilters}
            value={selectedCourseId}
            onSelect={onCourseChange}
            onClose={() => setOpen(false)}
            className="left-0 right-0 min-w-full"
          />
        )}
      </div>
    </div>
  );
}

function SortFilterControl({
  sortOptions,
  selectedSortId,
  onSortChange,
}: {
  sortOptions: StudentClassScheduleSortOption[];
  selectedSortId: string;
  onSortChange: (sortId: string) => void;
}) {
  const menuId = useId();
  const { open, setOpen, containerRef } = useDropdown();
  const selectedSortLabel =
    sortOptions.find((option) => option.id === selectedSortId)?.label ?? "Default";

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-11 w-full items-center rounded-xl border border-[#ebe8e6] bg-white px-4 shadow-[0_1px_2px_rgba(35,25,22,0.04)] sm:w-auto sm:min-w-[220px] sm:px-5"
      )}
    >
      <button
        type="button"
        id={menuId}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center gap-2.5 text-left"
      >
        <ArrowUpDown className="h-4 w-4 shrink-0 text-[#6b7280]" strokeWidth={2} aria-hidden />
        <span className="text-[13px] font-semibold text-[#1a1a1a]">Sort: {selectedSortLabel}</span>
        <ChevronDown
          className={cn(
            "ml-auto h-4 w-4 shrink-0 text-[#6b7280] transition-transform",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open && (
        <ToolbarDropdownMenu
          options={sortOptions}
          value={selectedSortId}
          onSelect={onSortChange}
          onClose={() => setOpen(false)}
          className="left-0 right-0 min-w-full sm:min-w-[220px]"
        />
      )}
    </div>
  );
}

export function ClassScheduleToolbar({
  courseFilters,
  sortOptions,
  selectedCourseId,
  selectedSortId,
  onCourseChange,
  onSortChange,
  className,
}: ClassScheduleToolbarProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      <CourseFilterControl
        courseFilters={courseFilters}
        selectedCourseId={selectedCourseId}
        onCourseChange={onCourseChange}
      />

      <SortFilterControl
        sortOptions={sortOptions}
        selectedSortId={selectedSortId}
        onSortChange={onSortChange}
      />
    </div>
  );
}
