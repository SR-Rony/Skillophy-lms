"use client";

import Link from "next/link";
import { AccordionPanel } from "@/components/shared/accordion-panel";
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
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <nav aria-label="Help article navigation">
        <AccordionPanel
          defaultOpenIds={[activeCategoryId]}
          items={categories.map((category) => ({
            id: category.id,
            title: category.title,
            content: (
              <ul className="space-y-1">
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
            ),
          }))}
        />
      </nav>
    </aside>
  );
}
