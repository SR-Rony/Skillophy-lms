"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpNarrowWide,
  ChevronDown,
  FileSpreadsheet,
  FileType,
  ListFilter,
  Search,
} from "lucide-react";
import type {
  AdminTransactionExportId,
  AdminTransactionExportOption,
  AdminTransactionSortId,
  AdminTransactionSortOption,
  AdminTransactionStatusFilterId,
  AdminTransactionStatusOption,
} from "@/types/admin-transaction-management.types";
import { cn } from "@/utils";

interface AdminTransactionManagementToolbarProps {
  searchQuery: string;
  statusOptions: AdminTransactionStatusOption[];
  sortOptions: AdminTransactionSortOption[];
  exportOptions: AdminTransactionExportOption[];
  selectedStatusId: AdminTransactionStatusFilterId;
  selectedSortId: AdminTransactionSortId;
  exportLabel: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (statusId: AdminTransactionStatusFilterId) => void;
  onSortChange: (sortId: AdminTransactionSortId) => void;
  onExport: (exportId: AdminTransactionExportId) => void;
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
  if (sortId.includes("asc")) {
    return <ArrowUpNarrowWide className={className} strokeWidth={2} aria-hidden />;
  }

  if (sortId.includes("desc")) {
    return <ArrowDownWideNarrow className={className} strokeWidth={2} aria-hidden />;
  }

  return <ArrowUpDown className={className} strokeWidth={2} aria-hidden />;
}

function ExportOptionIcon({
  exportId,
  className,
}: {
  exportId: AdminTransactionExportId;
  className?: string;
}) {
  if (exportId === "csv") {
    return <FileSpreadsheet className={className} strokeWidth={2} aria-hidden />;
  }

  return <FileType className={className} strokeWidth={2} aria-hidden />;
}

export function AdminTransactionManagementToolbar({
  searchQuery,
  statusOptions,
  sortOptions,
  exportOptions,
  selectedStatusId,
  selectedSortId,
  exportLabel,
  onSearchChange,
  onStatusChange,
  onSortChange,
  onExport,
}: AdminTransactionManagementToolbarProps) {
  const searchId = useId();
  const statusMenuId = useId();
  const sortMenuId = useId();
  const exportMenuId = useId();
  const statusDropdown = useDropdown();
  const sortDropdown = useDropdown();
  const exportDropdown = useDropdown();

  const selectedStatusLabel =
    statusOptions.find((option) => option.id === selectedStatusId)?.label ?? "All Status";
  const selectedSortLabel =
    sortOptions.find((option) => option.id === selectedSortId)?.label ?? "Default";

  return (
    <div className="border-b border-[#f0f0f0] bg-white px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
        <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <label htmlFor={searchId} className="relative block min-w-0 flex-1 sm:max-w-[280px] xl:max-w-none">
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

          <div ref={statusDropdown.containerRef} className="relative shrink-0">
            <div className={toolbarBoxClassName}>
              <button
                type="button"
                id={statusMenuId}
                aria-haspopup="listbox"
                aria-expanded={statusDropdown.open}
                onClick={() => statusDropdown.setOpen((current) => !current)}
                className="flex items-center gap-2 border-r border-[#ebe8e6] px-3.5"
              >
                <ListFilter className="h-4 w-4 text-[#6b7280]" strokeWidth={2} aria-hidden />
                <span className="text-[13px] font-medium text-[#6b7280]">Status</span>
              </button>
              <button
                type="button"
                aria-labelledby={statusMenuId}
                onClick={() => statusDropdown.setOpen((current) => !current)}
                className="flex items-center gap-2 px-3.5"
              >
                <span className="text-[13px] font-medium text-[#4a4a4a]">{selectedStatusLabel}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-[#6b7280] transition-transform",
                    statusDropdown.open && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
            </div>

            {statusDropdown.open && (
              <ul
                className="absolute left-0 top-[calc(100%+8px)] z-30 min-w-[220px] overflow-hidden rounded-xl border border-[#ebe8e6] bg-white py-2 shadow-[0_10px_30px_rgba(35,25,22,0.08)]"
                role="listbox"
              >
                {statusOptions.map((option) => {
                  const isSelected = option.id === selectedStatusId;

                  return (
                    <li key={option.id} role="option" aria-selected={isSelected}>
                      <button
                        type="button"
                        onClick={() => {
                          onStatusChange(option.id);
                          statusDropdown.setOpen(false);
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

        <div className="flex shrink-0 items-center xl:ml-auto">
          <div ref={exportDropdown.containerRef} className="relative">
            <button
              type="button"
              id={exportMenuId}
              aria-haspopup="menu"
              aria-expanded={exportDropdown.open}
              onClick={() => exportDropdown.setOpen((current) => !current)}
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#f5f5f4] px-4 text-[13px] font-semibold text-[#4a4a4a] transition-colors hover:bg-[#ececec] active:bg-[#e3e3e2]"
            >
              {exportLabel}
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-[#6b7280] transition-transform",
                  exportDropdown.open && "rotate-180"
                )}
                strokeWidth={2}
                aria-hidden
              />
            </button>

            {exportDropdown.open && (
              <ul
                className="absolute right-0 top-[calc(100%+8px)] z-30 min-w-[220px] overflow-hidden rounded-xl border border-[#ebe8e6] bg-white py-2 shadow-[0_10px_30px_rgba(35,25,22,0.08)]"
                role="menu"
                aria-labelledby={exportMenuId}
              >
                {exportOptions.map((option) => (
                  <li key={option.id} role="none">
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        onExport(option.id);
                        exportDropdown.setOpen(false);
                      }}
                      className={cn(menuItemClassName, "text-[#1a1a1a] hover:bg-[#f9f9f9]")}
                    >
                      <ExportOptionIcon
                        exportId={option.id}
                        className="h-4 w-4 shrink-0 text-[#6b7280]"
                      />
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
