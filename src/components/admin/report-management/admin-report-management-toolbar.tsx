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
import type {
  AdminReportSortId,
  AdminReportSortOption,
  AdminReportTypeFilterId,
  AdminReportTypeOption,
} from "@/types/admin-report-management.types";
import { cn } from "@/utils";

interface AdminReportManagementToolbarProps {
  searchQuery: string;
  typeOptions: AdminReportTypeOption[];
  sortOptions: AdminReportSortOption[];
  selectedTypeId: AdminReportTypeFilterId;
  selectedSortId: AdminReportSortId;
  markResolvedLabel: string;
  onSearchChange: (value: string) => void;
  onTypeChange: (typeId: AdminReportTypeFilterId) => void;
  onSortChange: (sortId: AdminReportSortId) => void;
  onMarkResolved: () => void;
}

const controlClassName =
  "flex h-10 items-stretch rounded-xl border border-[#ebe8e6] bg-white shadow-[0_1px_2px_rgba(35,25,22,0.04)]";

const menuItemClassName =
  "flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[13px] font-medium transition-colors";

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
  if (sortId.includes("desc") || sortId === "newest") {
    return <ArrowDownWideNarrow className={className} strokeWidth={2} aria-hidden />;
  }

  if (sortId.includes("asc") && sortId !== "status-asc" && sortId !== "course-asc") {
    return <ArrowUpNarrowWide className={className} strokeWidth={2} aria-hidden />;
  }

  return <ArrowUpDown className={className} strokeWidth={2} aria-hidden />;
}

export function AdminReportManagementToolbar({
  searchQuery,
  typeOptions,
  sortOptions,
  selectedTypeId,
  selectedSortId,
  markResolvedLabel,
  onSearchChange,
  onTypeChange,
  onSortChange,
  onMarkResolved,
}: AdminReportManagementToolbarProps) {
  const searchId = useId();
  const typeMenuId = useId();
  const sortMenuId = useId();
  const typeDropdown = useDropdown();
  const sortDropdown = useDropdown();

  const selectedTypeLabel =
    typeOptions.find((option) => option.id === selectedTypeId)?.label ?? "All Type";
  const selectedSortLabel =
    sortOptions.find((option) => option.id === selectedSortId)?.label ?? "Default";

  return (
    <div className="border-b border-[#f0f0f0] bg-white px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_auto_auto] xl:items-center">
          <label htmlFor={searchId} className="relative block min-w-0 sm:col-span-2 xl:col-span-1">
            <input
              id={searchId}
              type="search"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search..."
              className="h-10 w-full rounded-xl border border-[#ebe8e6] bg-white py-2 pl-4 pr-11 text-[13px] font-medium text-[#1a1a1a] shadow-[0_1px_2px_rgba(35,25,22,0.04)] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-primary/30 focus:ring-2 focus:ring-primary/10"
            />
            <Search
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9ca3af]"
              strokeWidth={2}
              aria-hidden
            />
          </label>

          <div ref={typeDropdown.containerRef} className="relative min-w-0">
            <div className={controlClassName}>
              <button
                type="button"
                id={typeMenuId}
                aria-haspopup="listbox"
                aria-expanded={typeDropdown.open}
                onClick={() => typeDropdown.setOpen((current) => !current)}
                className="flex items-center gap-2 border-r border-[#ebe8e6] px-3.5"
              >
                <ListFilter className="h-4 w-4 text-[#6b7280]" strokeWidth={2} aria-hidden />
                <span className="text-[13px] font-medium text-[#6b7280]">Type</span>
              </button>
              <button
                type="button"
                aria-labelledby={typeMenuId}
                onClick={() => typeDropdown.setOpen((current) => !current)}
                className="flex min-w-0 flex-1 items-center justify-between gap-2 px-3.5"
              >
                <span className="truncate text-[13px] font-medium text-[#4a4a4a]">
                  {selectedTypeLabel}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-[#6b7280] transition-transform",
                    typeDropdown.open && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
            </div>

            {typeDropdown.open && (
              <ul
                className="absolute left-0 top-[calc(100%+8px)] z-30 min-w-full overflow-hidden rounded-xl border border-[#ebe8e6] bg-white py-2 shadow-[0_10px_30px_rgba(35,25,22,0.08)] sm:min-w-[220px]"
                role="listbox"
              >
                {typeOptions.map((option) => {
                  const isSelected = option.id === selectedTypeId;

                  return (
                    <li key={option.id} role="option" aria-selected={isSelected}>
                      <button
                        type="button"
                        onClick={() => {
                          onTypeChange(option.id);
                          typeDropdown.setOpen(false);
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

          <div ref={sortDropdown.containerRef} className="relative min-w-0">
            <div className={controlClassName}>
              <button
                type="button"
                id={sortMenuId}
                aria-haspopup="listbox"
                aria-expanded={sortDropdown.open}
                onClick={() => sortDropdown.setOpen((current) => !current)}
                className="flex w-full items-center gap-2.5 px-3.5"
              >
                <ArrowUpDown className="h-4 w-4 shrink-0 text-[#6b7280]" strokeWidth={2} aria-hidden />
                <span className="text-[13px] font-medium text-[#6b7280]">Sort:</span>
                <span className="truncate text-[13px] font-medium text-[#4a4a4a]">
                  {selectedSortLabel}
                </span>
                <ChevronDown
                  className={cn(
                    "ml-auto h-4 w-4 shrink-0 text-[#6b7280] transition-transform",
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

        <div className="flex shrink-0 items-center xl:ml-auto">
          <button
            type="button"
            onClick={onMarkResolved}
            className="inline-flex h-10 w-full items-center justify-center rounded-xl bg-primary px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#e63e3e] active:bg-[#d93636] sm:w-auto"
          >
            {markResolvedLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
