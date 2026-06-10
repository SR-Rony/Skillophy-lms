"use client";

import { InnerPageSearchHero } from "@/components/public/inner-page-search-hero";
import { helpPageHeroData } from "@/components/public/help/data/help-page-hero.data";

interface HelpPageHeroProps {
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  onSearchSubmit: () => void;
}

export function HelpPageHero({
  searchQuery,
  onSearchQueryChange,
  onSearchSubmit,
}: HelpPageHeroProps) {
  return (
    <InnerPageSearchHero
      label=""
      title={helpPageHeroData.title}
      description=""
      showLabel={false}
      showDescription={false}
      searchPlaceholder={helpPageHeroData.searchPlaceholder}
      searchQuery={searchQuery}
      onSearchQueryChange={onSearchQueryChange}
      onSearchSubmit={onSearchSubmit}
      searchAriaLabel={helpPageHeroData.searchAriaLabel}
      scrollTargetId="help-faq"
    />
  );
}
