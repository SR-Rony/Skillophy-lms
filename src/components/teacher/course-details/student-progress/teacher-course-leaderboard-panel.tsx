"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import type {
  CourseLeaderboardData,
  CourseLeaderboardEntry,
  CourseLeaderboardTopEntry,
  LeaderboardPodiumPlace,
} from "@/types/course-leaderboard.types";
import { cn } from "@/utils";

const PODIUM_CONFIG: Record<
  LeaderboardPodiumPlace,
  {
    label: string;
    cardClassName: string;
    badgeClassName: string;
    medalClassName: string;
    medalRibbonClassName: string;
    avatarBorderClassName: string;
    sparkleCount: number;
  }
> = {
  1: {
    label: "First",
    cardClassName: "bg-[#fff5f5]",
    badgeClassName: "bg-primary text-white",
    medalClassName: "bg-primary text-white",
    medalRibbonClassName: "bg-primary",
    avatarBorderClassName: "border-[#93c5fd]",
    sparkleCount: 1,
  },
  2: {
    label: "Second",
    cardClassName: "bg-[#eff6ff]",
    badgeClassName: "bg-[#3b82f6] text-white",
    medalClassName: "bg-[#3b82f6] text-white",
    medalRibbonClassName: "bg-[#3b82f6]",
    avatarBorderClassName: "border-white",
    sparkleCount: 2,
  },
  3: {
    label: "Third",
    cardClassName: "bg-[#f5f3ff]",
    badgeClassName: "bg-[#8b5cf6] text-white",
    medalClassName: "bg-[#8b5cf6] text-white",
    medalRibbonClassName: "bg-[#8b5cf6]",
    avatarBorderClassName: "border-white",
    sparkleCount: 1,
  },
};

function formatScore(entry: { score: number; scoreLabel?: string }) {
  return entry.scoreLabel ?? `${entry.score}%`;
}

function PodiumSparkles({ count }: { count: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: count }).map((_, index) => (
        <Sparkles key={index} className="h-3 w-3 fill-white/20 text-white" strokeWidth={2.25} />
      ))}
    </span>
  );
}

function RankMedalBadge({
  place,
  medalClassName,
  medalRibbonClassName,
}: {
  place: LeaderboardPodiumPlace;
  medalClassName: string;
  medalRibbonClassName: string;
}) {
  return (
    <div className="absolute -bottom-1 -right-1 flex flex-col items-center">
      <span
        className={cn(
          "relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[10px] font-black shadow-[0_2px_8px_rgba(15,23,42,0.18)] sm:h-7 sm:w-7 sm:text-[11px]",
          medalClassName
        )}
      >
        {place}
      </span>
      <span
        className={cn("-mt-1 h-2.5 w-4 rounded-b-[3px] shadow-sm", medalRibbonClassName)}
        aria-hidden
      />
    </div>
  );
}

function LeaderboardPodiumCard({ entry }: { entry: CourseLeaderboardTopEntry }) {
  const config = PODIUM_CONFIG[entry.place];

  return (
    <article
      className={cn(
        "relative flex h-full min-h-[212px] flex-col items-center rounded-[18px] px-3 pb-5 pt-4 text-center sm:min-h-[228px] sm:px-4 sm:pb-6 sm:pt-5",
        config.cardClassName
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold sm:gap-1.5 sm:px-3.5 sm:text-[12px]",
          config.badgeClassName
        )}
      >
        {config.label}
        <PodiumSparkles count={config.sparkleCount} />
      </span>

      <div className="relative mt-5 sm:mt-6">
        <div
          className={cn(
            "relative h-[68px] w-[68px] overflow-hidden rounded-full border-[3px] shadow-[0_8px_24px_rgba(35,25,22,0.12)] sm:h-[76px] sm:w-[76px]",
            config.avatarBorderClassName
          )}
        >
          <Image
            src={entry.avatar}
            alt={entry.name}
            fill
            unoptimized
            className="object-cover"
            sizes="76px"
          />
        </div>
        <RankMedalBadge
          place={entry.place}
          medalClassName={config.medalClassName}
          medalRibbonClassName={config.medalRibbonClassName}
        />
      </div>

      <p className="mt-4 text-[13px] font-bold leading-snug text-[#1a1a1a] sm:mt-5 sm:text-[14px]">
        {entry.name}
      </p>
      <p className="mt-1 text-[12px] font-medium text-[#6b7280] sm:text-[13px]">
        {formatScore(entry)}
      </p>
    </article>
  );
}

function LeaderboardListRow({ entry }: { entry: CourseLeaderboardEntry }) {
  return (
    <div className="flex items-center gap-3 border-b border-[#f0ebe8] py-4 last:border-b-0 sm:gap-4">
      <span className="w-6 shrink-0 text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">
        {entry.rank}
      </span>

      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#ece6e3] bg-[#fafafa] sm:h-11 sm:w-11">
        <Image
          src={entry.avatar}
          alt={entry.name}
          fill
          unoptimized
          className="object-cover"
          sizes="44px"
        />
      </div>

      <p className="min-w-0 flex-1 truncate text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">
        {entry.name}
      </p>

      <span className="shrink-0 text-[13px] font-medium text-[#6b7280] sm:text-[14px]">
        {formatScore(entry)}
      </span>
    </div>
  );
}

interface TeacherCourseLeaderboardPanelProps {
  data: CourseLeaderboardData;
}

export function TeacherCourseLeaderboardPanel({ data }: TeacherCourseLeaderboardPanelProps) {
  const orderedTopThree = [1, 2, 3]
    .map((place) => data.topThree.find((entry) => entry.place === place))
    .filter(Boolean) as CourseLeaderboardTopEntry[];

  return (
    <div className="rounded-2xl border border-[#ebe8e6] bg-[#fafafa] p-4 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-5">
      <Heading as="h2" variant="dashboard-section">
        Leaderboard
      </Heading>

      <div className="mt-4 grid grid-cols-3 items-stretch gap-2 sm:mt-5 sm:gap-3">
        {orderedTopThree.map((entry) => (
          <LeaderboardPodiumCard key={entry.id} entry={entry} />
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white sm:mt-5">
        <div className="max-h-[340px] overflow-y-auto px-4 py-1 sm:max-h-[380px] sm:px-5 [scrollbar-color:#4b5563_#ececec] [scrollbar-width:thin]">
          {data.others.map((entry) => (
            <LeaderboardListRow key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}
