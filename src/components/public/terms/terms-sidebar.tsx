"use client";

import { BlogDetailsTableOfContents } from "@/components/public/blog/blog-details/sidebar/blog-details-table-of-contents";
import { termsPageData } from "@/components/public/terms/data/terms-page.data";

export function TermsSidebar() {
  return (
    <aside
      aria-label="Terms table of contents"
      className="lg:sticky lg:top-20 lg:z-20 lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto lg:overscroll-contain"
    >
      <BlogDetailsTableOfContents items={termsPageData.tableOfContents} />
    </aside>
  );
}
