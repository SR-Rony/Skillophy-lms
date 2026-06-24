"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpNarrowWide,
  ChevronDown,
  Plus,
  Search,
} from "lucide-react";
import type {
  AdminCategorySortId,
  AdminCategorySortOption,
} from "@/types/admin-category-management.types";
import { cn } from "@/utils";

interface AdminCategoryManagementToolbarProps {
  searchQuery: string;
  sortOptions: AdminCategorySortOption[];
  selectedSortId: AdminCategorySortId;
  addNewLabel: string;
  onSearchChange: (value: string) => void;
  onSortChange: (sortId: AdminCategorySortId) => void;
  onAddNew: () => void;
}

const toolbarBoxClassName =
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
  if (sortId.includes("asc") && sortId !== "count-asc") {
    return <ArrowUpNarrowWide className={className} strokeWidth={2} aria-hidden />;
  }

  if (sortId.includes("desc")) {
    return <ArrowDownWideNarrow className={className} strokeWidth={2} aria-hidden />;
  }

  return <ArrowUpDown className={className} strokeWidth={2} aria-hidden />;
}

export function AdminCategoryManagementToolbar({
  searchQuery,
  sortOptions,
  selectedSortId,
  addNewLabel,
  onSearchChange,
  onSortChange,
  onAddNew,
}: AdminCategoryManagementToolbarProps) {
  const searchId = useId();
  const sortMenuId = useId();
  const sortDropdown = useDropdown();

  const selectedSortLabel =
    sortOptions.find((option) => option.id === selectedSortId)?.label ?? "Default";

  return (
    <div className="border-b border-[#f0f0f0] bg-white px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <label htmlFor={searchId} className="relative block min-w-0 flex-1 sm:max-w-[280px]">
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

          <div ref={sortDropdown.containerRef} className="relative shrink-0">
            <div className={toolbarBoxClassName}>
              <button
                type="button"
                id={sortMenuId}
                aria-haspopup="listbox"
                aria-expanded={sortDropdown.open}
                onClick={() => sortDropdown.setOpen((current) => !current)}
                className="flex items-center gap-2.5 px-3.5"
              >
                <ArrowUpDown className="h-4 w-4 text-[#6b7280]" strokeWidth={2} aria-hidden />
                <span className="text-[13px] font-medium text-[#6b7280]">Sort:</span>
                <span className="text-[13px] font-medium text-[#4a4a4a]">{selectedSortLabel}</span>
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
                className="absolute left-0 top-[calc(100%+8px)] z-30 min-w-[220px] overflow-hidden rounded-xl border border-[#ebe8e6] bg-white py-2 shadow-[0_10px_30px_rgba(35,25,22,0.08)]"
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

        <button
          type="button"
          onClick={onAddNew}
          className="inline-flex h-10 shrink-0 items-center gap-2 self-start rounded-xl bg-primary px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#e63e3e] active:bg-[#d93636] lg:self-auto"
        >
          {addNewLabel}
          <Plus className="h-4 w-4" strokeWidth={2.5} aria-hidden />
        </button>
      </div>
    </div>
  );
}
