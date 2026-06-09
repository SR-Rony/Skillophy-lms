"use client";

import { Clock } from "lucide-react";
import { cn } from "@/utils";
import type { PositionJobDetail } from "@/types/position.types";
import { positionJobTypeLabels } from "@/types/position.types";
import type { JobType } from "@/types/career.types";

const jobTypeStyles: Record<JobType, string> = {
  "full-time": "bg-[#fff0e6] text-[#d97706]",
  "part-time": "bg-[#f0edff] text-[#6366f1]",
};

interface PositionJobListCardProps {
  job: PositionJobDetail;
  isActive: boolean;
  onSelect: () => void;
}

export function PositionJobListCard({ job, isActive, onSelect }: PositionJobListCardProps) {
  const badgeClassName = jobTypeStyles[job.jobType];

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={isActive ? "true" : undefined}
      className={cn(
        "flex w-full flex-col rounded-[18px] border p-5 text-left transition duration-300 sm:p-6",
        isActive
          ? "border-primary/25 bg-[#fce8e3] shadow-[0_14px_32px_rgba(80,37,31,0.08)] ring-1 ring-primary/10"
          : "border-[#eee1de] bg-white shadow-[0_8px_24px_rgba(80,37,31,0.04)] hover:border-[#f0c6c1] hover:shadow-[0_14px_32px_rgba(80,37,31,0.07)]",
      )}
    >
      <div className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#6f6562]">
        <Clock className="h-3.5 w-3.5 shrink-0 text-[#9a908c]" aria-hidden />
        {job.postedAt}
      </div>

      <h3
        className={cn(
          "mt-3 text-[17px] font-bold leading-[1.3] tracking-[-0.01em] sm:text-[18px]",
          isActive ? "text-[#24201f]" : "text-[#302927]",
        )}
      >
        {job.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-[14px] leading-[1.65] text-[#6f6562]">
        {job.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#f3ebe8] pt-4">
        <span className="text-[15px] font-bold leading-none text-[#24201f]">
          {job.compensation}
        </span>
        <span
          className={cn(
            "inline-flex shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.05em]",
            badgeClassName,
          )}
        >
          {positionJobTypeLabels[job.jobType]}
        </span>
      </div>
    </button>
  );
}
