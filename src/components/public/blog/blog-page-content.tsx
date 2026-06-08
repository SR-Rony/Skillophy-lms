"use client";

import { useState } from "react";
import { BlogPageHero } from "@/components/public/blog/blog-page-hero";
import { BlogPostsSection } from "@/components/public/blog/blog-posts-section";
import { blogPageHeroData } from "@/components/public/blog/data/blog-page-hero.data";
import { useBlogTotalCount } from "@/hooks/use-blog";

export function BlogPageContent() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { data: totalBlogs = blogPageHeroData.fallbackTotalCount } = useBlogTotalCount();

  return (
    <>
      <BlogPageHero
        totalBlogs={totalBlogs}
        searchQuery={searchInput}
        onSearchQueryChange={setSearchInput}
        onSearchSubmit={() => setSearchQuery(searchInput.trim())}
      />
      <BlogPostsSection searchQuery={searchQuery} />
    </>
  );
}
