"use client";

import Link from "next/link";
import { PodcastEpisodeCard } from "@/components/public/podcast/podcast-episode-card";
import { PODCAST_EPISODES_PER_ROW } from "@/components/public/podcast/data/podcast-episodes.data";
import { ROUTES } from "@/constants";
import type { PodcastCategory } from "@/types/podcast.types";

interface PodcastCategoryRowProps {
  category: PodcastCategory;
}

export function PodcastCategoryRow({ category }: PodcastCategoryRowProps) {
  const visibleEpisodes = category.episodes.slice(0, PODCAST_EPISODES_PER_ROW);

  return (
    <section className="scroll-mt-36">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#1a1a1a] sm:text-[24px]">
          {category.title}
        </h2>

        <Link
          href={`${ROUTES.podcast}?category=${category.slug}`}
          className="text-[14px] font-bold text-primary underline decoration-primary underline-offset-4 transition hover:text-primary/90"
        >
          See All
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {visibleEpisodes.map((episode) => (
          <PodcastEpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  );
}
