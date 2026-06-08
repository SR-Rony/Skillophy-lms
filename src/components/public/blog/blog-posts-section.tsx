"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { CategoryFilterBar } from "@/components/public/category-filter-bar";
import { BlogPostCard } from "@/components/public/blog/blog-post-card";
import { BlogPagination } from "@/components/public/blog/blog-pagination";
import { BlogPostCardSkeleton } from "@/components/public/blog/blog-post-card-skeleton";
import { useBlogCategories, useBlogPostsFilters } from "@/hooks/use-blog";
import type { BlogCategoryId } from "@/types/blog.types";

interface BlogPostsSectionProps {
  searchQuery: string;
}

const blogGridVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export function BlogPostsSection({ searchQuery }: BlogPostsSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<BlogCategoryId>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: categories = [], isLoading: isCategoriesLoading } = useBlogCategories();
  const { data, isLoading, isError } = useBlogPostsFilters(
    searchQuery,
    activeCategoryId,
    currentPage
  );

  const posts = data?.posts ?? [];
  const totalPages = data?.totalPages ?? 1;
  const safePage = data?.currentPage ?? 1;
  const total = data?.total ?? 0;
  const postsGridKey = `${searchQuery}-${activeCategoryId}-${safePage}`;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategoryId]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  function handleCategoryChange(categoryId: string) {
    setActiveCategoryId(categoryId as BlogCategoryId);
    setCurrentPage(1);
  }

  const isPageLoading = isLoading || isCategoriesLoading;

  return (
    <section id="blog-posts" className="bg-white py-12 sm:py-16 lg:py-20">
      <Container className="space-y-0">
        <div className="mb-8 lg:mb-10">
          {!isCategoriesLoading && categories.length > 0 ? (
            <CategoryFilterBar
              categories={categories.map((category) => ({
                id: category.id,
                label: category.label,
                itemCount: category.itemCount,
              }))}
              activeCategoryId={activeCategoryId}
              onCategoryChange={handleCategoryChange}
              countLabel="blogs"
              nextButtonAriaLabel="Show next blog category"
            />
          ) : null}
        </div>

        {isPageLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {Array.from({ length: 6 }).map((_, index) => (
              <BlogPostCardSkeleton key={index} />
            ))}
          </div>
        ) : isError ? (
          <div className="rounded-[24px] bg-white px-6 py-14 text-center">
            <p className="text-[18px] font-bold text-[#282221]">Unable to load blogs</p>
            <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-[#6f6562]">
              Please try again in a moment.
            </p>
          </div>
        ) : total > 0 ? (
          <>
            <motion.div
              key={postsGridKey}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
              variants={blogGridVariants}
              initial="hidden"
              animate="visible"
            >
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </motion.div>

            {totalPages > 1 && (
              <div className="mt-12 lg:mt-14">
                <BlogPagination
                  currentPage={safePage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </>
        ) : (
          <div className="rounded-[24px] bg-white px-6 py-14 text-center">
            <p className="text-[18px] font-bold text-[#282221]">No blogs found</p>
            <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-[#6f6562]">
              Try a different search term or category to explore more articles.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
