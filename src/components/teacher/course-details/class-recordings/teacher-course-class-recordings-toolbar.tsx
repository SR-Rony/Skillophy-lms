"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpNarrowWide,
  CalendarDays,
  ChevronDown,
  Search,
} from "lucide-react";
import type {
  TeacherCourseRecordingSortId,
  TeacherCourseRecordingSortOption,
} from "@/types/teacher-course-details.types";
import { cn } from "@/utils";

interface TeacherCourseClassRecordingsToolbarProps {
  searchQuery: string;
  sortOptions: TeacherCourseRecordingSortOption[];
  selectedSortId: TeacherCourseRecordingSortId;
  onSearchChange: (value: string) => void;
  onSortChange: (sortId: TeacherCourseRecordingSortId) => void;
}

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

function SortOptionIcon({ sortId, className }: { sortId: string; className?: string }) {
  if (sortId === "topic-asc") {
    return <ArrowUpNarrowWide className={className} strokeWidth={2} aria-hidden />;
  }

  if (sortId === "topic-desc") {
    return <ArrowDownWideNarrow className={className} strokeWidth={2} aria-hidden />;
  }

  return <CalendarDays className={className} strokeWidth={2} aria-hidden />;
}

export function TeacherCourseClassRecordingsToolbar({
  searchQuery,
  sortOptions,
  selectedSortId,
  onSearchChange,
  onSortChange,
}: TeacherCourseClassRecordingsToolbarProps) {
  const searchId = useId();
  const menuId = useId();
  const { open, setOpen, containerRef } = useDropdown();

  const selectedSortLabel =
    sortOptions.find((option) => option.id === selectedSortId)?.label ?? "Default";

  const visibleSortOptions = sortOptions.filter((option) => option.id !== "default");

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <label htmlFor={searchId} className="relative block min-w-0 flex-1">
        <input
          id={searchId}
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search..."
          className="h-11 w-full rounded-xl border border-[#ebe8e6] bg-white py-2 pl-4 pr-11 text-[13px] font-medium text-[#1a1a1a] shadow-[0_1px_2px_rgba(35,25,22,0.04)] outline-none placeholder:text-[#9ca3af] sm:text-[14px]"
        />
        <Search
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]"
          strokeWidth={2}
          aria-hidden
        />
      </label>

      <div
        ref={containerRef}
        className="relative flex h-11 w-full items-center rounded-xl border border-[#ebe8e6] bg-white px-4 shadow-[0_1px_2px_rgba(35,25,22,0.04)] sm:w-auto sm:min-w-[220px] sm:px-5"
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
          <ul
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-xl border border-[#ebe8e6] bg-white py-2 shadow-[0_10px_30px_rgba(35,25,22,0.08)] sm:min-w-[240px]"
            role="listbox"
          >
            {visibleSortOptions.map((option) => {
              const isSelected = option.id === selectedSortId;

              return (
                <li key={option.id} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => {
                      onSortChange(option.id);
                      setOpen(false);
                    }}
                    className={cn(
                      menuItemClassName,
                      "gap-3",
                      isSelected
                        ? "bg-[#fff5f5] font-semibold text-primary"
                        : "text-[#1a1a1a] hover:bg-[#f9f9f9]"
                    )}
                  >
                    <SortOptionIcon
                      sortId={option.id}
                      className={cn(
                        "h-4 w-4 shrink-0",
                        isSelected ? "text-primary" : "text-[#6b7280]"
                      )}
                    />
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
