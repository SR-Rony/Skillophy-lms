"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { PodcastDetailBackground } from "@/components/public/podcast/detail/podcast-detail-background";
import { PodcastDetailMain } from "@/components/public/podcast/detail/podcast-detail-main";
import { PodcastDetailSidebar } from "@/components/public/podcast/detail/podcast-detail-sidebar";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import type { PodcastEpisodeDetail } from "@/types/podcast.types";

interface PodcastDetailPageContentProps {
  episode: PodcastEpisodeDetail;
  similarEpisodes: PodcastEpisodeDetail[];
}

export function PodcastDetailPageContent({
  episode,
  similarEpisodes,
}: PodcastDetailPageContentProps) {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16">
      <PodcastDetailBackground />

      <Container
        as={motion.div}
        className="relative z-10"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08 }}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <motion.div variants={sectionTitleFadeUpVariants} className="lg:col-span-8">
            <PodcastDetailMain episode={episode} />
          </motion.div>

          <motion.div variants={sectionTitleFadeUpVariants} className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <PodcastDetailSidebar similarEpisodes={similarEpisodes} />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
