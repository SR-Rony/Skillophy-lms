"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils";

export interface AdminCourseCreationMetaInfoTemplateMenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface AdminCourseCreationMetaInfoTemplateMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: AdminCourseCreationMetaInfoTemplateMenuItem[];
  selectedIds: string[];
  onToggle: (id: string, selected: boolean) => void;
}

export function AdminCourseCreationMetaInfoTemplateMenu({
  open,
  onOpenChange,
  items,
  selectedIds,
  onToggle,
}: AdminCourseCreationMetaInfoTemplateMenuProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return items;
    }

    return items.filter((item) => item.label.toLowerCase().includes(query));
  }, [items, searchQuery]);

  useEffect(() => {
    if (!open) {
      setSearchQuery("");
      return;
    }

    searchInputRef.current?.focus();
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="absolute left-0 top-[calc(100%+8px)] z-30 w-full min-w-[280px] overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_18px_48px_rgba(35,25,22,0.14)] sm:min-w-[320px]"
    >
      <div className="border-b border-[#f0f0f0] bg-[#fafafa] px-4 py-3.5">
        <div className="relative">
          <input
            ref={searchInputRef}
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search"
            className="h-11 w-full rounded-full border border-[#dcdcdc] bg-white py-2 pl-4 pr-12 text-[14px] font-medium text-[#1a1a1a] outline-none placeholder:font-normal placeholder:text-[#9ca3af] focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
          />
          <Search
            className="pointer-events-none absolute right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#6b7280]"
            strokeWidth={2}
            aria-hidden
          />
        </div>
      </div>

      <ul className="max-h-[240px] overflow-y-auto py-1">
        {filteredItems.length === 0 ? (
          <li className="px-4 py-6 text-center text-[13px] text-[#9ca3af] sm:text-[14px]">No templates found</li>
        ) : (
          filteredItems.map((item) => {
            const isSelected = selectedIds.includes(item.id);
            const Icon = item.icon;

            return (
              <li key={item.id} className="border-b border-[#f0f0f0] last:border-b-0">
                <button
                  type="button"
                  onClick={() => onToggle(item.id, !isSelected)}
                  className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-[#fafafa]"
                >
                  <span
                    className={cn(
                      "flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border transition-colors",
                      isSelected ? "border-[#1a1a1a] bg-[#1a1a1a]" : "border-[#d1d5db] bg-white"
                    )}
                  >
                    {isSelected ? <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden /> : null}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#ebe8e6] bg-[#fafafa]">
                    <Icon className="h-4 w-4 text-[#757575]" aria-hidden />
                  </span>

                  <span className="min-w-0 flex-1 text-[13px] font-medium text-[#1a1a1a] sm:text-[14px]">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
