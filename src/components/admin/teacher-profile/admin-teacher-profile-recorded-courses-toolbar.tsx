"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpNarrowWide,
  ChevronDown,
  ListFilter,
  Search,
} from "lucide-react";
import { cn } from "@/utils";

interface AdminTeacherProfileCourseSortOption<T extends string> {
  id: T;
  label: string;
}

interface AdminTeacherProfileRecordedCoursesToolbarProps<T extends string> {
  searchQuery: string;
  sortOptions: AdminTeacherProfileCourseSortOption<T>[];
  selectedSortId: T;
  onSearchChange: (value: string) => void;
  onSortChange: (sortId: T) => void;
}

const toolbarBoxClassName =
  "flex h-10 items-stretch rounded-xl border border-[#ebe8e6] bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)]";

const menuItemClassName =
  "flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] font-medium transition-colors";

function SortOptionIcon({ sortId, className }: { sortId: string; className?: string }) {
  if (sortId.includes("asc")) {
    return <ArrowUpNarrowWide className={className} strokeWidth={2} aria-hidden />;
  }

  if (sortId.includes("desc")) {
    return <ArrowDownWideNarrow className={className} strokeWidth={2} aria-hidden />;
  }

  return <ArrowUpDown className={className} strokeWidth={2} aria-hidden />;
}

export function AdminTeacherProfileRecordedCoursesToolbar<T extends string>({
  searchQuery,
  sortOptions,
  selectedSortId,
  onSearchChange,
  onSortChange,
}: AdminTeacherProfileRecordedCoursesToolbarProps<T>) {
  const searchId = useId();
  const sortMenuId = useId();
  const [sortOpen, setSortOpen] = useState(false);
  const sortContainerRef = useRef<HTMLDivElement>(null);

  const selectedSortLabel =
    sortOptions.find((option) => option.id === selectedSortId)?.label ?? "Default";

  useEffect(() => {
    if (!sortOpen) {
      return;
    }

    function handlePointerDown(event: MouseEvent) {
      if (!sortContainerRef.current?.contains(event.target as Node)) {
        setSortOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSortOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [sortOpen]);

  return (
    <div className="flex flex-col gap-3 border-b border-[#f0f0f0] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <label htmlFor={searchId} className="relative block min-w-0 flex-1 sm:max-w-[360px]">
        <input
          id={searchId}
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search..."
          className="h-10 w-full rounded-xl border border-[#ebe8e6] bg-white py-2 pl-4 pr-11 text-[13px] font-medium text-[#1a1a1a] shadow-[0_1px_2px_rgba(35,25,22,0.04)] outline-none placeholder:text-[#9ca3af]"
        />
        <Search
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]"
          strokeWidth={2}
          aria-hidden
        />
      </label>

      <div ref={sortContainerRef} className="relative shrink-0">
        <div className={toolbarBoxClassName}>
          <button
            type="button"
            id={sortMenuId}
            aria-haspopup="listbox"
            aria-expanded={sortOpen}
            onClick={() => setSortOpen((current) => !current)}
            className="flex items-center gap-2.5 px-3.5"
          >
            <ListFilter className="h-4 w-4 text-[#6b7280]" strokeWidth={2} aria-hidden />
            <span className="text-[13px] font-medium text-[#6b7280]">Sort:</span>
            <span className="text-[13px] font-semibold text-[#1a1a1a]">{selectedSortLabel}</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-[#6b7280] transition-transform",
                sortOpen && "rotate-180"
              )}
              aria-hidden
            />
          </button>
        </div>

        {sortOpen && (
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
                      setSortOpen(false);
                    }}
                    className={cn(
                      menuItemClassName,
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
    </div>
  );
}
