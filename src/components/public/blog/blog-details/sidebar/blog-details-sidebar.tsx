import { BlogDetailsShareCard } from "./blog-details-share-card";
import { BlogDetailsSidebarAd } from "./blog-details-sidebar-ad";
import { BlogDetailsTableOfContents } from "./blog-details-table-of-contents";
import type { BlogTableOfContentsItem } from "@/types/blog-detail.types";

interface BlogDetailsSidebarProps {
  tableOfContents: BlogTableOfContentsItem[];
}

export function BlogDetailsSidebar({ tableOfContents }: BlogDetailsSidebarProps) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start lg:space-y-6">
      <BlogDetailsTableOfContents items={tableOfContents} />
      <BlogDetailsShareCard />
      <BlogDetailsSidebarAd />
    </aside>
  );
}
