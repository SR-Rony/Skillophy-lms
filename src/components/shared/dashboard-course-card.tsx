import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";
import { Heading } from "@/components/shared/heading";
import { cn } from "@/utils";

export interface DashboardCourseCardData {
  id: string;
  title: string;
  image: string;
  learners: number;
  href: string;
  isLive?: boolean;
  actionLabel?: string;
}

interface DashboardCourseCardProps {
  course: DashboardCourseCardData;
  className?: string;
}

function LiveBadge() {
  return (
    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
      <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden />
      Live
    </span>
  );
}

export function DashboardCourseCard({ course, className }: DashboardCourseCardProps) {
  const actionLabel = course.actionLabel ?? "View Details";

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(35,25,22,0.1)]",
        className
      )}
    >
      <Link
        href={course.href}
        className="relative block h-[200px] w-full shrink-0 overflow-hidden sm:h-[210px]"
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {course.isLive && <LiveBadge />}
      </Link>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <Heading as="h3" variant="dashboard-card" className="mt-0">
          {course.title}
        </Heading>

        <p className="mt-3 inline-flex items-center gap-2 text-[13px] text-[#6b7280] sm:text-[14px]">
          <Users className="h-4 w-4 shrink-0 text-[#9ca3af]" strokeWidth={2} />
          <span>{course.learners.toLocaleString()} learners</span>
        </p>

        <Link
          href={course.href}
          className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-primary py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90"
        >
          {actionLabel}
        </Link>
      </div>
    </article>
  );
}
