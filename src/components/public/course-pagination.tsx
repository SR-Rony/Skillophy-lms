"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils";

const PAGE_SIZE = 12;

interface CoursePaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
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

export function getCoursePaginationMeta(totalItems: number, currentPage: number) {
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safePage - 1) * PAGE_SIZE;

  return {
    totalPages,
    currentPage: safePage,
    pageSize: PAGE_SIZE,
    startIndex,
    endIndex: startIndex + PAGE_SIZE,
  };
}

export function CoursePagination({
  currentPage,
  totalPages,
  basePath,
  className,
}: CoursePaginationProps) {
  const pageItems = buildPageItems(currentPage, totalPages);
  const previousPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const pageHref = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  return (
    <nav
      aria-label="Course list pagination"
      className={cn("flex flex-wrap items-center justify-center gap-2 sm:gap-3", className)}
    >
      {previousPage ? (
        <Link
          href={pageHref(previousPage)}
          className="inline-flex items-center gap-1.5 px-2 text-[15px] font-medium text-[#6f6562] transition hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Link>
      ) : (
        <span className="inline-flex cursor-not-allowed items-center gap-1.5 px-2 text-[15px] font-medium text-[#c4bbb8]">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </span>
      )}

      <div className="flex items-center gap-1.5 sm:gap-2">
        {pageItems.map((item, index) =>
          item === "ellipsis" ? (
            <span
              key={`ellipsis-${index}`}
              className="min-w-8 px-1 text-center text-[15px] font-medium text-[#9a908c]"
            >
              ...
            </span>
          ) : (
            <Link
              key={item}
              href={pageHref(item)}
              aria-current={item === currentPage ? "page" : undefined}
              className={cn(
                "flex h-9 min-w-9 items-center justify-center rounded-[8px] px-2 text-[15px] font-semibold transition",
                item === currentPage
                  ? "bg-primary text-white shadow-[0_6px_16px] shadow-primary/22"
                  : "text-[#6f6562] hover:bg-white hover:text-[#1a1a1a]"
              )}
            >
              {item}
            </Link>
          )
        )}
      </div>

      {nextPage ? (
        <Link
          href={pageHref(nextPage)}
          className="inline-flex items-center gap-1.5 px-2 text-[15px] font-medium text-[#6f6562] transition hover:text-primary"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <span className="inline-flex cursor-not-allowed items-center gap-1.5 px-2 text-[15px] font-medium text-[#c4bbb8]">
          Next
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </nav>
  );
}
