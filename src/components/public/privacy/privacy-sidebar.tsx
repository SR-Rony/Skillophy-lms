"use client";

import { BlogDetailsTableOfContents } from "@/components/public/blog/blog-details/sidebar/blog-details-table-of-contents";
import { privacyPageData } from "@/components/public/privacy/data/privacy-page.data";

export function PrivacySidebar() {
  return (
    <aside
      aria-label="Privacy policy table of contents"
      className="lg:sticky lg:top-20 lg:z-20 lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto lg:overscroll-contain"
    >
      <BlogDetailsTableOfContents items={privacyPageData.tableOfContents} />
    </aside>
  );
}
