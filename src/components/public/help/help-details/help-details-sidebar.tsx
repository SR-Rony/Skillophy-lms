"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { HelpArticleNavCategory } from "@/components/public/help/help-details/data/help-details.data";
import type { HelpTopicId } from "@/components/public/help/data/help-topics.data";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils";

interface HelpDetailsSidebarProps {
  categories: HelpArticleNavCategory[];
  activeCategoryId: HelpTopicId;
  activeSlug: string;
}

export function HelpDetailsSidebar({
  categories,
  activeCategoryId,
  activeSlug,
}: HelpDetailsSidebarProps) {
  const [openCategoryId, setOpenCategoryId] = useState<HelpTopicId | null>(activeCategoryId);

  const toggleCategory = (categoryId: HelpTopicId) => {
    setOpenCategoryId((current) => (current === categoryId ? null : categoryId));
  };

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <nav
        aria-label="Help article navigation"
        className="overflow-hidden rounded-[16px] border border-[#ece6e3] bg-white"
      >
        {categories.map((category, index) => {
          const isOpen = openCategoryId === category.id;

          return (
            <div key={category.id} className={cn(index > 0 && "border-t border-[#ece6e3]")}>
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                aria-expanded={isOpen}
                className={cn(
                  "flex w-full cursor-pointer items-start justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-6 sm:py-6",
                  isOpen
                    ? "border-l-4 border-primary bg-primary/5 pl-4 sm:pl-5"
                    : "border-l-4 border-transparent bg-white hover:bg-[#faf9f8]",
                )}
              >
                <div className="min-w-0 flex-1">
                  <span className="block text-[15px] font-bold leading-snug text-[#1a1a1a] sm:text-[16px]">
                    {category.title}
                  </span>

                  {isOpen && (
                    <ul className="mt-3 space-y-1">
                      {category.articles.map((article) => {
                        const isActive = article.slug === activeSlug;

                        return (
                          <li key={article.id}>
                            <Link
                              href={ROUTES.helpArticle(article.slug)}
                              className={cn(
                                "flex items-start gap-2 rounded-[8px] py-1.5 text-[13px] leading-snug transition-colors sm:text-[14px]",
                                isActive
                                  ? "font-semibold text-primary"
                                  : "font-normal text-[#6f6562] hover:text-[#24201f]",
                              )}
                            >
                              {isActive && (
                                <span
                                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                                  aria-hidden
                                />
                              )}
                              <span className={cn(!isActive && "pl-3.5")}>{article.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>

                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors",
                    isOpen
                      ? "bg-primary text-white shadow-[0_8px_18px] shadow-primary/24"
                      : "border border-[#e8e4e1] bg-[#f7f7f7] text-[#9a908c]",
                  )}
                  aria-hidden
                >
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </span>
              </button>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
