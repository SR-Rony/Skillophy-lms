"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { cn } from "@/utils";
import type { JobOpening, JobType } from "@/types/career.types";

const jobTypeStyles: Record<
  JobType,
  { label: string; className: string }
> = {
  "full-time": {
    label: "Full-Time",
    className: "bg-[#fff0e6] text-[#d97706]",
  },
  "part-time": {
    label: "Part-Time",
    className: "bg-[#f0edff] text-[#6366f1]",
  },
};

interface JobOpeningCardProps {
  job: JobOpening;
  className?: string;
  href?: string;
}

export function JobOpeningCard({ job, className, href }: JobOpeningCardProps) {
  const { label, className: badgeClassName } = jobTypeStyles[job.jobType];

  const cardClassName = cn(
    "group flex h-full flex-col rounded-[18px] border border-[#eee1de] bg-white p-5 shadow-[0_18px_38px_rgba(80,37,31,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#f0c6c1] hover:shadow-[0_28px_55px_rgba(80,37,31,0.12)] sm:p-6",
    href && "cursor-pointer",
    className,
  );

  const content = (
    <>
      <div className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#6f6562]">
        <Clock className="h-3.5 w-3.5 shrink-0 text-[#9a908c]" aria-hidden />
        {job.postedAt}
      </div>

      <h3 className="mt-3 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-[#24201f] sm:text-[19px]">
        {job.title}
      </h3>

      <p className="mt-2 line-clamp-2 flex-1 text-[14px] leading-[1.65] text-[#6f6562]">
        {job.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#f3ebe8] pt-5">
        <span className="text-[15px] font-bold leading-none text-[#24201f] sm:text-[16px]">
          {job.compensation}
        </span>
        <span
          className={cn(
            "inline-flex shrink-0 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em]",
            badgeClassName,
          )}
        >
          {label}
        </span>
      </div>
    </>
  );

  return (
    <motion.article
      variants={sectionTitleFadeUpVariants}
      initial="hidden"
      animate="visible"
      className={cardClassName}
    >
      {href ? (
        <Link href={href} className="flex h-full flex-col">
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.article>
  );
}
