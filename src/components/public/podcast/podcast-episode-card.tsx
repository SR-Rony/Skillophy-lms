"use client";

import { Heading } from "@/components/shared/heading";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { ROUTES } from "@/constants";
import type { PodcastEpisode } from "@/types/podcast.types";

interface PodcastEpisodeCardProps {
  episode: PodcastEpisode;
}

export function PodcastEpisodeCard({ episode }: PodcastEpisodeCardProps) {
  return (
    <motion.article
      variants={sectionTitleFadeUpVariants}
      initial="hidden"
      animate="visible"
      className="group h-full overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition duration-300 hover:shadow-[0_8px_30px_rgba(15,23,42,0.1)]"
    >
      <Link href={ROUTES.podcastEpisode(episode.slug)} className="flex h-full flex-col">
        <div className="relative h-[210px] overflow-hidden sm:h-[220px]">
          <Image
            src={episode.image}
            alt={episode.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 380px"
          />
          <span className="absolute left-1/2 top-1/2 flex h-[56px] w-[56px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_0_14px_rgba(255,77,77,0.2)] transition group-hover:scale-105 sm:h-[60px] sm:w-[60px]">
            <Play className="ml-1 h-5 w-5 fill-current" aria-hidden />
          </span>
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
          <p className="text-[12px] font-medium leading-none text-[#6b7280]">{episode.seasonLabel}</p>

          <Heading as="h3" variant="card-title" className="mt-3 line-clamp-2">
            {episode.title}
          </Heading>

          <p className="mt-3 line-clamp-3 text-[14px] leading-[1.65] text-[#4b5563]">
            {episode.description}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
