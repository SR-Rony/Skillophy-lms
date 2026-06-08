import type { BlogPostDetailContent } from "./blog-detail.types";

export type BlogCategoryId =
  | "all"
  | "professional"
  | "popular"
  | "skill-development-it"
  | "academic"
  | "latest"
  | "creative-lifestyle";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  categoryId: Exclude<BlogCategoryId, "all">;
  categoryLabel: string;
  author: string;
  authorTitle: string;
  authorAvatar: string;
  lastUpdated: string;
  readTimeLabel: string;
}

export interface BlogCategory {
  id: BlogCategoryId;
  label: string;
  itemCount: number;
}

export interface BlogListFilters {
  query?: string;
  categoryId?: BlogCategoryId;
  page?: number;
}

export interface BlogPostsPageResult {
  posts: BlogPost[];
  total: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

/** Full blog detail payload — list fields + rich article content. */
export type BlogPostDetail = BlogPost & BlogPostDetailContent;
