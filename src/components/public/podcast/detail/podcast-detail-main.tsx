"use client";

import { Heading } from "@/components/shared/heading";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import { PodcastDetailShareSection } from "@/components/public/podcast/detail/podcast-detail-share-section";
import { ROUTES } from "@/constants";
import type { PodcastEpisodeDetail } from "@/types/podcast.types";

interface PodcastDetailMainProps {
  episode: PodcastEpisodeDetail;
}

export function PodcastDetailMain({ episode }: PodcastDetailMainProps) {
  return (
    <div className="min-w-0">
      <Link
        href={ROUTES.podcast}
        className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#6f6562] transition hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Go Back
      </Link>

      <Heading as="h1" variant="page-hero-large">
        {episode.categoryTitle}
      </Heading>

      <div className="relative mt-8 overflow-hidden rounded-[20px] border border-[#ece6e3] bg-white shadow-[0_16px_40px_rgba(80,37,31,0.08)]">
        <div className="relative aspect-[16/10] w-full min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]">
          <Image
            src={episode.image}
            alt={episode.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 92vw, 760px"
          />
          <button
            type="button"
            aria-label={`Play ${episode.title}`}
            className="absolute left-1/2 top-1/2 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_0_14px_rgba(255,77,77,0.2)] transition hover:scale-105 hover:bg-primary/90 sm:h-[72px] sm:w-[72px]"
          >
            <Play className="ml-1 h-6 w-6 fill-current" aria-hidden />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-[13px] font-medium leading-none text-[#6b7280] sm:text-[14px]">
          {episode.seasonLabel}
        </p>
        <Heading as="h2" variant="podcast-title">
          {episode.title}
        </Heading>
        <p className="mt-4 max-w-[720px] text-[15px] leading-[1.75] text-[#4b5563] sm:text-[16px]">
          {episode.description}
        </p>
      </div>

      <div className="mt-10">
        <PodcastDetailShareSection />
      </div>
    </div>
  );
}
