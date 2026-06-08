export const blogPageHeroData = {
  fallbackTotalCount: 56,
  label: (total: number) => `Total ${total}+ Blogs`,
  title: "Explore Our Blogs & Informative Content",
  description:
    "Stay ahead of the curve by joining our live batch now! In today's fast-paced world, staying competitive means staying informed and continuously honing your skills. Our live batch offers you the opportunity to immerse yourself.",
  searchPlaceholder: "Search..",
} as const;

/** @deprecated Use blogPageHeroData.fallbackTotalCount or blogService.getTotalCount() */
export const TOTAL_BLOGS_COUNT = blogPageHeroData.fallbackTotalCount;
