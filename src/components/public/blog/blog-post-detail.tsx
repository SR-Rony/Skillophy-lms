"use client";

import { BlogDetailsContentSection } from "@/components/public/blog/blog-details";
import type { BlogPostDetail } from "@/types/blog.types";

interface BlogPostDetailProps {
  post: BlogPostDetail;
}

export function BlogPostDetail({ post }: BlogPostDetailProps) {
  return <BlogDetailsContentSection post={post} />;
}
