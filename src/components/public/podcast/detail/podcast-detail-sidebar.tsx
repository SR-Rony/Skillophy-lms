import { Heading } from "@/components/shared/heading";
import { PodcastDetailSimilarItem } from "@/components/public/podcast/detail/podcast-detail-similar-item";
import type { PodcastEpisodeDetail } from "@/types/podcast.types";

interface PodcastDetailSidebarProps {
  similarEpisodes: PodcastEpisodeDetail[];
}

export function PodcastDetailSidebar({ similarEpisodes }: PodcastDetailSidebarProps) {
  if (similarEpisodes.length === 0) {
    return null;
  }

  return (
    <aside className="rounded-[20px] border border-[#ece6e3] bg-white p-5 shadow-[0_16px_40px_rgba(80,37,31,0.08)] sm:p-6">
      <Heading as="h2" variant="course-detail-card" className="tracking-[-0.02em]">
        Similar Podcasts
      </Heading>

      <div className="mt-5 max-h-[520px] overflow-y-auto pr-1 [scrollbar-color:#ece6e3_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#ece6e3] [&::-webkit-scrollbar-track]:bg-transparent">
        <div className="flex flex-col gap-4">
          {similarEpisodes.map((episode) => (
            <PodcastDetailSimilarItem key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </aside>
  );
}
