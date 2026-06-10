"use client";

import { InnerPageSearchHero } from "@/components/public/inner-page-search-hero";
import { blogPageHeroData } from "@/components/public/blog/data/blog-page-hero.data";

interface BlogPageHeroProps {
  totalBlogs?: number;
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
}

export function BlogPageHero({
  totalBlogs,
  searchQuery,
  onSearchQueryChange,
  onSearchSubmit,
}: BlogPageHeroProps) {
  const label =
    totalBlogs != null
      ? blogPageHeroData.label(totalBlogs)
      : blogPageHeroData.label(blogPageHeroData.fallbackTotalCount);

  return (
    <InnerPageSearchHero
      label={label}
      title={blogPageHeroData.title}
      description={blogPageHeroData.description}
      searchPlaceholder={blogPageHeroData.searchPlaceholder}
      searchQuery={searchQuery}
      onSearchQueryChange={onSearchQueryChange}
      onSearchSubmit={onSearchSubmit}
      searchAriaLabel="Search blog posts"
      scrollTargetId="blog-posts"
    />
  );
}
