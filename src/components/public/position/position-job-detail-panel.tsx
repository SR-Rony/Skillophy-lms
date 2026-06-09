"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";
import { positionJobTypeLabels } from "@/types/position.types";
import type { PositionJobDetail } from "@/types/position.types";

interface PositionJobDetailPanelProps {
  job: PositionJobDetail;
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-[14px] bg-[#faf8f7] px-4 py-4 ring-1 ring-[#f0e8e4]">
      <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#9a908c]">
        {label}
      </p>
      <p className="mt-2 text-[15px] font-semibold text-[#24201f]">{value}</p>
    </div>
  );
}

function BulletList({ items }: { items: PositionJobDetail["lookingFor"] }) {
  return (
    <ul className="mt-5 space-y-4">
      {items.map(({ term, description }) => (
        <li
          key={term}
          className="relative pl-5 text-[14px] leading-[1.75] text-[#6f6562] before:absolute before:left-0 before:top-[0.62em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/70 sm:text-[15px]"
        >
          <span className="font-semibold text-[#24201f]">{term}: </span>
          {description}
        </li>
      ))}
    </ul>
  );
}

export function PositionJobDetailPanel({ job }: PositionJobDetailPanelProps) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-[#eee1de] bg-white shadow-[0_18px_48px_rgba(80,37,31,0.08)]">
      <div className="border-b border-[#f3ebe8] bg-[linear-gradient(180deg,#fffdfa_0%,#ffffff_100%)] px-6 py-6 sm:px-8 sm:py-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.03em] text-[#24201f] sm:text-[34px]">
              {job.title}
            </h2>
            <p className="mt-3 text-[14px] font-medium text-[#6f6562] sm:text-[15px]">
              Category:{" "}
              <span className="text-[#24201f]">{job.categoryLabel}</span>
            </p>
          </div>

          <Button asChild variant="publicCta" size="publicCta" className="shrink-0 self-start">
            <Link href="#">Apply Now</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 border-b border-[#f3ebe8] px-6 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <InfoItem label="Job Type" value={positionJobTypeLabels[job.jobType]} />
        <InfoItem label="Salary" value={job.compensation} />
        <InfoItem label="Deadline" value={job.deadline} />
        <InfoItem label="Vacancy" value={job.vacancy} />
      </div>

      <div className="px-6 py-7 sm:px-8">
        <SectionBlock title="Description">
          <p className="text-[14px] leading-[1.8] text-[#6f6562] sm:text-[15px]">
            {job.fullDescription}
          </p>
        </SectionBlock>

        <SectionBlock title="What We Are Looking For" className="mt-8">
          <BulletList items={job.lookingFor} />
        </SectionBlock>

        <SectionBlock title="What do we offer" className="mt-8">
          <BulletList items={job.offerings} />
        </SectionBlock>
      </div>

      <div className="flex justify-end border-t border-[#f3ebe8] bg-[#faf8f7] px-6 py-5 sm:px-8">
        <Button asChild variant="publicCta" size="publicCta">
          <Link href="#">Apply Now</Link>
        </Button>
      </div>
    </article>
  );
}

function SectionBlock({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn(className)}>
      <h3 className="text-[18px] font-bold tracking-[-0.01em] text-[#24201f] sm:text-[20px]">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}
