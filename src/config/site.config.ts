/**
 * Global site metadata and branding.
 * Single source of truth for public-facing copy.
 */
export const siteConfig = {
  name: "Skillophy",
  tagline: "Learn. Teach. Grow.",
  description:
    "Enterprise-grade learning management platform for students, teachers, and institutions.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  links: {
    twitter: "https://twitter.com/skillophy",
    github: "https://github.com/skillophy",
    support: "/help",
  },
} as const;
