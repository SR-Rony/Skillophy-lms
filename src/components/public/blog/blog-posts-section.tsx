"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { CategoryFilterBar } from "@/components/public/category-filter-bar";
import { BlogPostCard } from "@/components/public/blog/blog-post-card";
import { BlogPagination } from "@/components/public/blog/blog-pagination";
import { BlogPostCardSkeleton } from "@/components/public/blog/blog-post-card-skeleton";
import { useBlogCategories, useBlogPostsFilters } from "@/hooks/use-blog";
import type { BlogCategoryId } from "@/types/blog.types";

interface BlogPostsSectionProps {
  searchQuery: string;
}

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
      <Container
        as={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.div variants={sectionTitleFadeUpVariants} className="mb-8 lg:mb-10">
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
        </motion.div>

        {isPageLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {Array.from({ length: 6 }).map((_, index) => (
              <BlogPostCardSkeleton key={index} />
            ))}
          </div>
        ) : isError ? (
          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="rounded-[24px] bg-white px-6 py-14 text-center"
          >
            <p className="text-[18px] font-bold text-[#282221]">Unable to load blogs</p>
            <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-[#6f6562]">
              Please try again in a moment.
            </p>
          </motion.div>
        ) : total > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {totalPages > 1 && (
              <motion.div variants={sectionTitleFadeUpVariants} className="mt-12 lg:mt-14">
                <BlogPagination
                  currentPage={safePage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </motion.div>
            )}
          </>
        ) : (
          <motion.div
            variants={sectionTitleFadeUpVariants}
            className="rounded-[24px] bg-white px-6 py-14 text-center"
          >
            <p className="text-[18px] font-bold text-[#282221]">No blogs found</p>
            <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-[#6f6562]">
              Try a different search term or category to explore more articles.
            </p>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
