"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpNarrowWide,
  ChevronDown,
  ListFilter,
  Search,
} from "lucide-react";
import type {
  TeacherCourseResourceSortId,
  TeacherCourseResourceSortOption,
} from "@/types/teacher-course-details.types";
import type { TeacherCourseResourcesCourseOption } from "@/types/teacher-course-resources.types";
import { cn } from "@/utils";

interface TeacherCourseResourcesPageToolbarProps {
  courses: TeacherCourseResourcesCourseOption[];
  sortOptions: TeacherCourseResourceSortOption[];
  selectedCourseId: string;
  selectedSortId: TeacherCourseResourceSortId;
  addResourcesLabel: string;
  onCourseChange: (courseId: string) => void;
  onSortChange: (sortId: TeacherCourseResourceSortId) => void;
  onAddResources: () => void;
}

const toolbarBoxClassName =
  "flex h-11 items-stretch rounded-xl border border-[#ebe8e6] bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)]";

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

  return <ArrowUpDown className={className} strokeWidth={2} aria-hidden />;
}

function CourseFilterControl({
  courses,
  selectedCourseId,
  onCourseChange,
}: {
  courses: TeacherCourseResourcesCourseOption[];
  selectedCourseId: string;
  onCourseChange: (courseId: string) => void;
}) {
  const menuId = useId();
  const searchId = useId();
  const { open, setOpen, containerRef } = useDropdown();
  const [searchQuery, setSearchQuery] = useState("");

  const selectedLabel =
    courses.find((course) => course.id === selectedCourseId)?.label ?? "Select a course";

  const filteredCourses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return courses;
    }

    return courses.filter((course) => course.label.toLowerCase().includes(query));
  }, [courses, searchQuery]);

  function handleOpenToggle() {
    setOpen((current) => {
      if (current) {
        setSearchQuery("");
      }
      return !current;
    });
  }

  function handleSelect(courseId: string) {
    onCourseChange(courseId);
    setSearchQuery("");
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative w-full lg:max-w-[520px] lg:flex-1">
      <div className={toolbarBoxClassName}>
        <div className="flex shrink-0 items-center gap-2.5 px-4 sm:px-5">
          <ListFilter className="h-4 w-4 shrink-0 text-[#6b7280]" strokeWidth={2} aria-hidden />
          <span className="text-[13px] font-medium text-[#6b7280]">Course</span>
        </div>

        <div className="w-px shrink-0 self-stretch bg-[#ebe8e6]" aria-hidden />

        <button
          type="button"
          id={menuId}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={handleOpenToggle}
          className="flex min-w-0 flex-1 items-center justify-between gap-3 px-4 text-left sm:px-5"
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
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-xl border border-[#ebe8e6] bg-white shadow-[0_10px_30px_rgba(35,25,22,0.08)]">
          <div className="border-b border-[#f0ebe8] px-4 py-3 sm:px-5 sm:py-4">
            <label htmlFor={searchId} className="sr-only">
              Search courses
            </label>
            <div className="relative">
              <input
                id={searchId}
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search"
                className="h-11 w-full rounded-xl border border-[#ebe8e6] bg-white px-4 pr-11 text-[13px] font-medium text-[#1a1a1a] placeholder:text-[#9ca3af] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
              />
              <Search
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]"
                aria-hidden
              />
            </div>
          </div>

          <ul className="max-h-[260px] overflow-y-auto py-2" role="listbox">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => {
                const isSelected = course.id === selectedCourseId;

                return (
                  <li key={course.id} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onClick={() => handleSelect(course.id)}
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
              })
            ) : (
              <li className="px-4 py-3 text-[13px] text-[#9ca3af] sm:px-5">No courses found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

function SortFilterControl({
  sortOptions,
  selectedSortId,
  onSortChange,
}: {
  sortOptions: TeacherCourseResourceSortOption[];
  selectedSortId: TeacherCourseResourceSortId;
  onSortChange: (sortId: TeacherCourseResourceSortId) => void;
}) {
  const menuId = useId();
  const { open, setOpen, containerRef } = useDropdown();

  const selectedSortLabel =
    sortOptions.find((option) => option.id === selectedSortId)?.label ?? "Default";

  const visibleSortOptions = sortOptions.filter((option) => option.id !== "default");

  return (
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
  );
}

export function TeacherCourseResourcesPageToolbar({
  courses,
  sortOptions,
  selectedCourseId,
  selectedSortId,
  addResourcesLabel,
  onCourseChange,
  onSortChange,
  onAddResources,
}: TeacherCourseResourcesPageToolbarProps) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <CourseFilterControl
        courses={courses}
        selectedCourseId={selectedCourseId}
        onCourseChange={onCourseChange}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <SortFilterControl
          sortOptions={sortOptions}
          selectedSortId={selectedSortId}
          onSortChange={onSortChange}
        />

        <button
          type="button"
          onClick={onAddResources}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-primary px-5 text-[13px] font-bold text-white shadow-[0_6px_16px_rgba(232,93,76,0.24)] transition-colors hover:bg-primary/90 sm:px-6 sm:text-[14px]"
        >
          {addResourcesLabel}
        </button>
      </div>
    </div>
  );
}
