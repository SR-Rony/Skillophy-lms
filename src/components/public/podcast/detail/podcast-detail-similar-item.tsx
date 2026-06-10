import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants";
import type { PodcastEpisodeDetail } from "@/types/podcast.types";

interface PodcastDetailSimilarItemProps {
  episode: PodcastEpisodeDetail;
}

export function PodcastDetailSimilarItem({ episode }: PodcastDetailSimilarItemProps) {
  return (
    <Link
      href={ROUTES.podcastEpisode(episode.slug)}
      className="group flex gap-4 rounded-[16px] border border-[#ece6e3] bg-white p-3 shadow-[0_8px_22px_rgba(80,37,31,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_14px_30px_rgba(255,71,71,0.12)]"
    >
      <div className="relative h-[72px] w-[96px] shrink-0 overflow-hidden rounded-[12px] border border-[#ece6e3] bg-[#f8f7f6] shadow-[0_6px_16px_rgba(80,37,31,0.08)] transition duration-300 group-hover:border-primary sm:h-[78px] sm:w-[104px]">
        <Image
          src={episode.image}
          alt={episode.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.04]"
          sizes="104px"
        />
      </div>

      <div className="min-w-0 flex-1 py-1">
        <p className="text-[12px] font-medium leading-none text-[#6b7280]">{episode.seasonLabel}</p>
        <h3 className="mt-2 line-clamp-2 text-[15px] font-bold leading-[1.35] text-[#111827] transition group-hover:text-primary">
          {episode.title}
        </h3>
      </div>
    </Link>
  );
}
