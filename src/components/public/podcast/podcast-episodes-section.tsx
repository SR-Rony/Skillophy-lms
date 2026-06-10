"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { BlogPagination } from "@/components/public/blog/blog-pagination";
import { PodcastCategoryRow } from "@/components/public/podcast/podcast-category-row";
import {
  filterPodcastCategories,
  podcastCategories,
} from "@/components/public/podcast/data/podcast-episodes.data";
import { getPodcastPaginationMeta } from "@/components/public/podcast/utils/podcast-pagination";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";

interface PodcastEpisodesSectionProps {
  searchQuery: string;
}

const podcastGridVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export function PodcastEpisodesSection({ searchQuery }: PodcastEpisodesSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCategories = useMemo(
    () => filterPodcastCategories(podcastCategories, searchQuery.trim()),
    [searchQuery],
  );

  const { totalPages, currentPage: safePage, startIndex, endIndex } = getPodcastPaginationMeta(
    filteredCategories.length,
    currentPage,
  );

  const visibleCategories = filteredCategories.slice(startIndex, endIndex);
  const listKey = `${searchQuery}-${safePage}`;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <section id="podcast-episodes" className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        {visibleCategories.length > 0 ? (
          <>
            <motion.div
              key={listKey}
              className="space-y-12 sm:space-y-14 lg:space-y-16"
              variants={podcastGridVariants}
              initial="hidden"
              animate="visible"
            >
              {visibleCategories.map((category) => (
                <motion.div key={category.id} variants={sectionTitleFadeUpVariants}>
                  <PodcastCategoryRow category={category} />
                </motion.div>
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
            <p className="text-[18px] font-bold text-[#282221]">No podcasts found</p>
            <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-[#6f6562]">
              Try a different search term to explore more episodes.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
