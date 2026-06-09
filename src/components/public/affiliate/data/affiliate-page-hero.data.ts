import { ROUTES } from "@/constants";

export const affiliatePageHeroData = {
  label: "Join At Skillophy",
  title: "Partner with Us as an Edutech Affiliate",
  description:
    "With a mix of experience and stories, become suitable for life's work for the new generation, have a mentality like the new generation.",
  ctaLabel: "Start Earning",
  ctaHref: ROUTES.auth.register,
  imageSrc: "/images/Affillate.png",
  imageAlt: "Affiliate partner working on a laptop and smiling",
  statValue: "300+",
  statLabel: "Successful Affiliate",
  avatarSeeds: ["aff-1", "aff-2", "aff-3", "aff-4"],
} as const;
