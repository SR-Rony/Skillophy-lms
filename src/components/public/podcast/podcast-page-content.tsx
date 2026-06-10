"use client";

import { useState } from "react";
import { PodcastEpisodesSection } from "@/components/public/podcast/podcast-episodes-section";
import { PodcastPageHero } from "@/components/public/podcast/podcast-page-hero";
import { TOTAL_PODCASTS_COUNT } from "@/components/public/podcast/data/podcast-page-hero.data";

export function PodcastPageContent() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <PodcastPageHero
        totalPodcasts={TOTAL_PODCASTS_COUNT}
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        onSearchSubmit={() => {
          setSearchQuery((value) => value.trim());
        }}
      />
      <PodcastEpisodesSection searchQuery={searchQuery} />
    </>
  );
}
