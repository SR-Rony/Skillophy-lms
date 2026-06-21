"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils";

interface StudentNotificationsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

function buildPageItems(currentPage: number, totalPages: number): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pageSet = new Set<number>([
    1,
    2,
    3,
    totalPages - 2,
    totalPages - 1,
    totalPages,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ]);

  const sortedPages = [...pageSet]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  const items: (number | "ellipsis")[] = [];

  sortedPages.forEach((page, index) => {
    if (index > 0 && page - sortedPages[index - 1] > 1) {
      items.push("ellipsis");
    }
    items.push(page);
  });

  return items;
}

export function StudentNotificationsPagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: StudentNotificationsPaginationProps) {
  const pageItems = buildPageItems(currentPage, totalPages);
  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <nav
      aria-label="Notifications pagination"
      className={cn("flex flex-wrap items-center justify-center gap-2 sm:gap-3", className)}
    >
      <button
        type="button"
        disabled={!canGoPrevious}
        onClick={() => onPageChange(currentPage - 1)}
        className={cn(
          "inline-flex items-center gap-1.5 px-2 text-[14px] font-medium transition sm:text-[15px]",
          canGoPrevious
            ? "text-[#6f6562] hover:text-primary"
            : "cursor-not-allowed text-[#c4bbb8]"
        )}
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </button>

      <div className="flex items-center gap-1.5 sm:gap-2">
        {pageItems.map((item, index) =>
          item === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="min-w-8 px-1 text-center text-[14px] font-medium text-[#9a908c] sm:text-[15px]"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => onPageChange(item)}
              aria-current={item === currentPage ? "page" : undefined}
              className={cn(
                "flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-[14px] font-semibold transition sm:text-[15px]",
                item === currentPage
                  ? "bg-[#fff0f0] text-primary"
                  : "text-[#6f6562] hover:bg-[#f7f7f6] hover:text-[#1a1a1a]"
              )}
            >
              {item}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        disabled={!canGoNext}
        onClick={() => onPageChange(currentPage + 1)}
        className={cn(
          "inline-flex items-center gap-1.5 px-2 text-[14px] font-medium transition sm:text-[15px]",
          canGoNext
            ? "text-[#6f6562] hover:text-primary"
            : "cursor-not-allowed text-[#c4bbb8]"
        )}
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
