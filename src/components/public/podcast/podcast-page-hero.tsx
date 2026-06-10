"use client";

import { InnerPageSearchHero } from "@/components/public/inner-page-search-hero";
import { podcastPageHeroData } from "@/components/public/podcast/data/podcast-page-hero.data";

interface PodcastPageHeroProps {
  totalPodcasts?: number;
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
}

export function PodcastPageHero({
  totalPodcasts,
  searchQuery,
  onSearchQueryChange,
  onSearchSubmit,
}: PodcastPageHeroProps) {
  const label =
    totalPodcasts != null
      ? podcastPageHeroData.label(totalPodcasts)
      : podcastPageHeroData.label(podcastPageHeroData.fallbackTotalCount);

  return (
    <InnerPageSearchHero
      label={label}
      title={podcastPageHeroData.title}
      description={podcastPageHeroData.description}
      searchPlaceholder={podcastPageHeroData.searchPlaceholder}
      searchQuery={searchQuery}
      onSearchQueryChange={onSearchQueryChange}
      onSearchSubmit={onSearchSubmit}
      searchAriaLabel={podcastPageHeroData.searchAriaLabel}
      scrollTargetId="podcast-episodes"
    />
  );
}
