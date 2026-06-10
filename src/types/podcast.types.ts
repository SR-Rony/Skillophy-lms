export interface PodcastEpisode {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  seasonLabel: string;
  categoryId: string;
}

export interface PodcastEpisodeDetail extends PodcastEpisode {
  categoryTitle: string;
  categorySlug: string;
}

export interface PodcastCategory {
  id: string;
  slug: string;
  title: string;
  episodes: PodcastEpisode[];
}
