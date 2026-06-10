import type { PodcastCategory, PodcastEpisode } from "@/types/podcast.types";

const PODCAST_IMAGE =
  "https://images.unsplash.com/photo-1590602847861-f357de6020df?w=900&auto=format&fit=crop&q=80";
const PODCAST_IMAGE_ALT =
  "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900&auto=format&fit=crop&q=80";

function createEpisode(
  categoryId: string,
  categorySlug: string,
  index: number,
  title: string,
  description: string,
  image: string,
): PodcastEpisode {
  return {
    id: `${categorySlug}-episode-${index}`,
    slug: `${categorySlug}-episode-${index}`,
    title,
    description,
    image,
    seasonLabel: `Season 1 Episode ${index}`,
    categoryId,
  };
}

const productManagementEpisodes: PodcastEpisode[] = [
  createEpisode(
    "product-management",
    "product-management",
    1,
    "Product Management for Freshers",
    "In this episode, Maisha discusses how fresh graduates can break into product management with practical frameworks and real Skillophy classroom stories.",
    PODCAST_IMAGE,
  ),
  createEpisode(
    "product-management",
    "product-management",
    2,
    "Roadmapping with Confidence",
    "Learn how to translate learner feedback into a roadmap your team can actually ship, featuring insights from Skillophy mentors.",
    PODCAST_IMAGE_ALT,
  ),
  createEpisode(
    "product-management",
    "product-management",
    3,
    "Stakeholder Communication 101",
    "Maisha shares communication habits that help product managers align teams, learners, and leadership without losing momentum.",
    PODCAST_IMAGE,
  ),
];

const webDevelopmentEpisodes: PodcastEpisode[] = [
  createEpisode(
    "web-development",
    "web-development",
    1,
    "Modern Web Development Basics",
    "From HTML foundations to component thinking, this episode helps beginners understand how Skillophy structures practical web learning paths.",
    PODCAST_IMAGE_ALT,
  ),
  createEpisode(
    "web-development",
    "web-development",
    2,
    "Frontend Career Roadmaps",
    "Explore the skills, projects, and portfolio milestones that help aspiring developers move from tutorials to paid opportunities.",
    PODCAST_IMAGE,
  ),
  createEpisode(
    "web-development",
    "web-development",
    3,
    "Building Your First Portfolio",
    "Maisha talks with a Skillophy graduate about turning course projects into a portfolio that recruiters actually notice.",
    PODCAST_IMAGE_ALT,
  ),
];

const categoryTemplates: Omit<PodcastCategory, "episodes">[] = [
  { id: "product-management", slug: "product-management", title: "Product Management" },
  { id: "web-development", slug: "web-development", title: "Web Development" },
  { id: "ui-ux-design", slug: "ui-ux-design", title: "UI/UX Design" },
  { id: "digital-marketing", slug: "digital-marketing", title: "Digital Marketing" },
  { id: "data-analytics", slug: "data-analytics", title: "Data Analytics" },
  { id: "career-growth", slug: "career-growth", title: "Career Growth" },
  { id: "english-skills", slug: "english-skills", title: "English Skills" },
  { id: "leadership", slug: "leadership", title: "Leadership" },
  { id: "entrepreneurship", slug: "entrepreneurship", title: "Entrepreneurship" },
  { id: "academic-success", slug: "academic-success", title: "Academic Success" },
];

const templateEpisodes: Record<string, PodcastEpisode[]> = {
  "product-management": productManagementEpisodes,
  "web-development": webDevelopmentEpisodes,
};

function buildCategoryEpisodes(category: Omit<PodcastCategory, "episodes">): PodcastEpisode[] {
  if (templateEpisodes[category.id]) {
    return templateEpisodes[category.id];
  }

  return Array.from({ length: 3 }, (_, index) =>
    createEpisode(
      category.id,
      category.slug,
      index + 1,
      `${category.title} Insights ${index + 1}`,
      `Maisha Afrose explores ${category.title.toLowerCase()} strategies, learner stories, and actionable advice from the Skillophy community.`,
      index % 2 === 0 ? PODCAST_IMAGE : PODCAST_IMAGE_ALT,
    ),
  );
}

export const podcastCategories: PodcastCategory[] = Array.from({ length: 20 }, (_, pageIndex) => {
  const template = categoryTemplates[pageIndex % categoryTemplates.length];
  const suffix = pageIndex >= categoryTemplates.length ? `-${pageIndex + 1}` : "";

  return {
    id: `${template.id}${suffix}`,
    slug: `${template.slug}${suffix}`,
    title: pageIndex >= categoryTemplates.length ? `${template.title} ${pageIndex + 1}` : template.title,
    episodes: buildCategoryEpisodes({
      id: `${template.id}${suffix}`,
      slug: `${template.slug}${suffix}`,
      title: template.title,
    }).map((episode) => ({
      ...episode,
      id: `${episode.id}${suffix}`,
      slug: `${episode.slug}${suffix}`,
      categoryId: `${template.id}${suffix}`,
    })),
  };
});

export function filterPodcastCategories(
  categories: PodcastCategory[],
  searchQuery: string,
): PodcastCategory[] {
  const query = searchQuery.trim().toLowerCase();
  if (!query) {
    return categories;
  }

  return categories
    .map((category) => {
      const episodes = category.episodes.filter(
        (episode) =>
          episode.title.toLowerCase().includes(query) ||
          episode.description.toLowerCase().includes(query) ||
          episode.seasonLabel.toLowerCase().includes(query) ||
          category.title.toLowerCase().includes(query),
      );

      return episodes.length > 0 ? { ...category, episodes } : null;
    })
    .filter((category): category is PodcastCategory => category !== null);
}

export const PODCAST_EPISODES_PER_ROW = 3;

export function getAllPodcastEpisodes() {
  return podcastCategories.flatMap((category) =>
    category.episodes.map((episode) => ({
      ...episode,
      categoryTitle: category.title,
      categorySlug: category.slug,
    })),
  );
}

export function getPodcastEpisodeBySlug(slug: string) {
  return getAllPodcastEpisodes().find((episode) => episode.slug === slug);
}

export function getSimilarPodcastEpisodes(currentSlug: string, limit = 12) {
  const currentEpisode = getPodcastEpisodeBySlug(currentSlug);
  if (!currentEpisode) {
    return [];
  }

  const sameCategory = getAllPodcastEpisodes().filter(
    (episode) => episode.categoryId === currentEpisode.categoryId && episode.slug !== currentSlug,
  );

  const otherEpisodes = getAllPodcastEpisodes().filter(
    (episode) => episode.categoryId !== currentEpisode.categoryId && episode.slug !== currentSlug,
  );

  return [...sameCategory, ...otherEpisodes].slice(0, limit);
}
