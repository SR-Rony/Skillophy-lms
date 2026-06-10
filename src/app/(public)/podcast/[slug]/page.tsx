import { notFound } from "next/navigation";
import { PodcastDetailPageContent } from "@/components/public/podcast/detail";
import {
  getAllPodcastEpisodes,
  getPodcastEpisodeBySlug,
  getSimilarPodcastEpisodes,
} from "@/components/public/podcast/data/podcast-episodes.data";

interface PodcastEpisodePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPodcastEpisodes().map((episode) => ({ slug: episode.slug }));
}

export async function generateMetadata({ params }: PodcastEpisodePageProps) {
  const { slug } = await params;
  const episode = getPodcastEpisodeBySlug(slug);

  if (!episode) {
    return { title: "Podcast Not Found" };
  }

  return {
    title: `${episode.title} — Podcast`,
    description: episode.description,
  };
}

export default async function PodcastEpisodePage({ params }: PodcastEpisodePageProps) {
  const { slug } = await params;
  const episode = getPodcastEpisodeBySlug(slug);

  if (!episode) {
    notFound();
  }

  const similarEpisodes = getSimilarPodcastEpisodes(slug);

  return <PodcastDetailPageContent episode={episode} similarEpisodes={similarEpisodes} />;
}
