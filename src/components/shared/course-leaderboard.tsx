import Image from "next/image";
import { Trophy } from "lucide-react";
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
  }
> = {
  1: {
    label: "First",
    cardClassName: "bg-[#fff0f3]",
    badgeClassName: "bg-primary text-white",
    medalClassName: "bg-[#fbbf24] text-white",
  },
  2: {
    label: "Second",
    cardClassName: "bg-[#eff6ff]",
    badgeClassName: "bg-[#3b82f6] text-white",
    medalClassName: "bg-[#94a3b8] text-white",
  },
  3: {
    label: "Third",
    cardClassName: "bg-[#f5f3ff]",
    badgeClassName: "bg-[#8b5cf6] text-white",
    medalClassName: "bg-[#d97706] text-white",
  },
};

function formatLeaderboardScore(entry: { score: number; scoreLabel?: string }) {
  return entry.scoreLabel ?? `${entry.score}%`;
}

function buildLeaderboardTableRows(
  entries: CourseLeaderboardEntry[],
  columnCount: number
): (CourseLeaderboardEntry | null)[][] {
  const rowCount = Math.ceil(entries.length / columnCount);

  return Array.from({ length: rowCount }, (_, rowIndex) =>
    Array.from({ length: columnCount }, (_, colIndex) => {
      const index = colIndex * rowCount + rowIndex;
      return entries[index] ?? null;
    })
  );
}

function LeaderboardPodiumCard({ entry }: { entry: CourseLeaderboardTopEntry }) {
  const config = PODIUM_CONFIG[entry.place];

  return (
    <article
      className={cn(
        "relative flex flex-col items-center rounded-2xl px-4 pb-6 pt-5 text-center sm:px-5 sm:pb-7 sm:pt-6",
        config.cardClassName
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[12px] font-bold sm:text-[13px]",
          config.badgeClassName
        )}
      >
        <Trophy className="h-3.5 w-3.5" aria-hidden />
        {config.label}
      </span>

      <div className="relative mt-5">
        <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full border-4 border-white shadow-[0_8px_24px_rgba(35,25,22,0.12)] sm:h-[80px] sm:w-[80px]">
          <Image
            src={entry.avatar}
            alt={entry.name}
            fill
            unoptimized
            className="object-cover"
            sizes="80px"
          />
        </div>
        <span
          className={cn(
            "absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[11px] font-black shadow-sm",
            config.medalClassName
          )}
          aria-hidden
        >
          {entry.place}
        </span>
      </div>

      <p className="mt-4 text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">{entry.name}</p>
      <p className="mt-1 text-[14px] font-semibold text-[#6b7280] sm:text-[15px]">
        {formatLeaderboardScore(entry)}
      </p>
    </article>
  );
}

function LeaderboardOtherCell({ entry }: { entry: CourseLeaderboardEntry }) {
  return (
    <div
      className={cn(
        "flex min-h-[68px] items-center gap-3 rounded-xl bg-white px-3 py-3 transition-colors duration-200",
        "hover:bg-[#fff4e5] sm:gap-3.5 sm:px-4 sm:py-3.5"
      )}
    >
      <span className="w-5 shrink-0 text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">
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

      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-bold leading-snug text-[#1a1a1a] sm:text-[15px]">
          {entry.name}
        </p>
        <p className="mt-0.5 text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
          {formatLeaderboardScore(entry)}
        </p>
      </div>
    </div>
  );
}

function LeaderboardOthersTable({ entries }: { entries: CourseLeaderboardEntry[] }) {
  const desktopRows = buildLeaderboardTableRows(entries, 3);
  const tabletRows = buildLeaderboardTableRows(entries, 2);

  return (
    <>
      <div className="hidden lg:block">
        <table className="w-full border-separate border-spacing-2">
          <caption className="sr-only">Other learners ranked below the top three</caption>
          <tbody>
            {desktopRows.map((row, rowIndex) => (
              <tr key={`desktop-row-${rowIndex}`}>
                {row.map((entry, colIndex) => (
                  <td key={`desktop-${rowIndex}-${colIndex}`} className="w-1/3 p-0 align-top">
                    {entry ? <LeaderboardOtherCell entry={entry} /> : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="hidden md:block lg:hidden">
        <table className="w-full border-separate border-spacing-2">
          <caption className="sr-only">Other learners ranked below the top three</caption>
          <tbody>
            {tabletRows.map((row, rowIndex) => (
              <tr key={`tablet-row-${rowIndex}`}>
                {row.map((entry, colIndex) => (
                  <td key={`tablet-${rowIndex}-${colIndex}`} className="w-1/2 p-0 align-top">
                    {entry ? <LeaderboardOtherCell entry={entry} /> : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden">
        <table className="w-full border-separate border-spacing-2">
          <caption className="sr-only">Other learners ranked below the top three</caption>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td className="p-0">
                  <LeaderboardOtherCell entry={entry} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export interface CourseLeaderboardProps {
  data: CourseLeaderboardData;
  className?: string;
}

export function CourseLeaderboard({ data, className }: CourseLeaderboardProps) {
  const orderedTopThree = [1, 2, 3]
    .map((place) => data.topThree.find((entry) => entry.place === place))
    .filter(Boolean) as CourseLeaderboardTopEntry[];

  return (
    <div className={cn("space-y-6 sm:space-y-8", className)}>
      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {orderedTopThree.map((entry) => (
          <LeaderboardPodiumCard key={entry.id} entry={entry} />
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-[#fafafa] p-3 shadow-[0_8px_30px_rgba(35,25,22,0.06)] sm:p-4">
        <Heading as="h2" variant="dashboard-section" className="px-1 sm:px-2">
          Other Learners
        </Heading>

        <div className="mt-4 sm:mt-5">
          <LeaderboardOthersTable entries={data.others} />
        </div>
      </div>
    </div>
  );
}
