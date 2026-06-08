import { env } from "@/config";
import { BLOG_PAGE_SIZE, getBlogPaginationMeta } from "@/features/blog/utils/pagination";
import { getBlogPostDetailBySlug } from "@/data/mock/blog-post-detail.mock";
import {
  blogCategories,
  blogPosts,
  filterBlogPosts,
  getAdjacentBlogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/data/mock/blog-posts.mock";
import type {
  BlogCategory,
  BlogListFilters,
  BlogPost,
  BlogPostDetail,
  BlogPostsPageResult,
} from "@/types/blog.types";
import { sleep } from "@/utils";
// import { apiClient } from "./api-client";

export const blogService = {
  async getCategories(): Promise<BlogCategory[]> {
    if (env.useMockApi) {
      await sleep(200);
      return blogCategories;
    }

    // return apiClient.get<BlogCategory[]>("/blog/categories").then((response) => response.data);
    return [];
  },

  async getTotalCount(): Promise<number> {
    if (env.useMockApi) {
      await sleep(100);
      return blogPosts.length;
    }

    // return apiClient.get<{ total: number }>("/blog/posts/count").then((response) => response.data.total);
    return 0;
  },

  async getPostsPage(filters: BlogListFilters = {}): Promise<BlogPostsPageResult> {
    const { query, categoryId = "all", page = 1 } = filters;

    if (env.useMockApi) {
      await sleep(300);
      const filteredPosts = filterBlogPosts(blogPosts, { query, categoryId });
      const { totalPages, currentPage, startIndex, endIndex, pageSize } = getBlogPaginationMeta(
        filteredPosts.length,
        page
      );

      return {
        posts: filteredPosts.slice(startIndex, endIndex),
        total: filteredPosts.length,
        totalPages,
        currentPage,
        pageSize,
      };
    }

    // return apiClient
    //   .get<BlogPostsPageResult>("/blog/posts", { params: { query, categoryId, page, pageSize: BLOG_PAGE_SIZE } })
    //   .then((response) => response.data);
    return {
      posts: [],
      total: 0,
      totalPages: 1,
      currentPage: 1,
      pageSize: BLOG_PAGE_SIZE,
    };
  },

  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    if (env.useMockApi) {
      await sleep(200);
      return getBlogPostBySlug(slug) ?? null;
    }

    // return apiClient.get<BlogPost>(`/blog/posts/${slug}`).then((response) => response.data);
    return null;
  },

  async getPostDetailBySlug(slug: string): Promise<BlogPostDetail | null> {
    if (env.useMockApi) {
      await sleep(300);
      return getBlogPostDetailBySlug(slug, getBlogPostBySlug) ?? null;
    }

    // return apiClient.get<BlogPostDetail>(`/blog/posts/${slug}/detail`).then((response) => response.data);
    return null;
  },

  async getRelatedPosts(slug: string, limit = 3): Promise<BlogPost[]> {
    if (env.useMockApi) {
      await sleep(200);
      return getRelatedBlogPosts(slug, limit);
    }

    // return apiClient
    //   .get<BlogPost[]>(`/blog/posts/${slug}/related`, { params: { limit } })
    //   .then((response) => response.data);
    return [];
  },

  async getAdjacentPosts(slug: string) {
    if (env.useMockApi) {
      await sleep(100);
      return getAdjacentBlogPosts(slug);
    }

    // return apiClient.get(`/blog/posts/${slug}/adjacent`).then((response) => response.data);
    return { previousPost: undefined, nextPost: undefined };
  },
};
