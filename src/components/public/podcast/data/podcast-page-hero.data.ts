export const podcastPageHeroData = {
  fallbackTotalCount: 56,
  label: (total: number) => `Total ${total}+ Podcasts`,
  title: "Explore Our Podcast Content",
  description:
    "Stay ahead of the curve by joining our live batch now! In today's fast-paced world, staying competitive means staying informed and continuously honing your skills. Our live batch offers you the opportunity to immerse yourself.",
  searchPlaceholder: "Search..",
  searchAriaLabel: "Search podcasts",
} as const;

export const TOTAL_PODCASTS_COUNT = podcastPageHeroData.fallbackTotalCount;
