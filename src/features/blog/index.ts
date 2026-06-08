/**
 * Blog feature — types, hooks, and data access.
 * UI lives under components/public/blog; swap mock/API in services/blog.service.ts.
 */
export { blogService } from "@/services/blog.service";
export {
  useBlogCategories,
  useBlogPostDetail,
  useBlogPostsFilters,
  useBlogPostsPage,
  useBlogTotalCount,
  useRelatedBlogPosts,
} from "@/hooks/use-blog";
export type {
  BlogCategory,
  BlogCategoryId,
  BlogListFilters,
  BlogPost,
  BlogPostDetail,
  BlogPostsPageResult,
} from "@/types/blog.types";
export type {
  BlogArticleBlock,
  BlogAuthorBio,
  BlogComment,
  BlogComparisonGallery,
  BlogEngagementStats,
  BlogImageGalleryItem,
  BlogPostDetailContent,
  BlogPostNavLink,
  BlogTableOfContentsItem,
} from "@/types/blog-detail.types";
