"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants";
import { blogService } from "@/services";
import type { BlogCategoryId, BlogListFilters } from "@/types/blog.types";

export function useBlogCategories() {
  return useQuery({
    queryKey: queryKeys.blog.categories,
    queryFn: () => blogService.getCategories(),
  });
}

export function useBlogTotalCount() {
  return useQuery({
    queryKey: queryKeys.blog.totalCount,
    queryFn: () => blogService.getTotalCount(),
  });
}

export function useBlogPostsPage(filters: BlogListFilters) {
  return useQuery({
    queryKey: queryKeys.blog.list(filters),
    queryFn: () => blogService.getPostsPage(filters),
  });
}

export function useBlogPostDetail(slug: string) {
  return useQuery({
    queryKey: queryKeys.blog.detail(slug),
    queryFn: () => blogService.getPostDetailBySlug(slug),
    enabled: Boolean(slug),
  });
}

export function useRelatedBlogPosts(slug: string, limit = 3) {
  return useQuery({
    queryKey: queryKeys.blog.related(slug, limit),
    queryFn: () => blogService.getRelatedPosts(slug, limit),
    enabled: Boolean(slug),
  });
}

export function useBlogPostsFilters(searchQuery: string, categoryId: BlogCategoryId, page: number) {
  return useBlogPostsPage({ query: searchQuery, categoryId, page });
}
