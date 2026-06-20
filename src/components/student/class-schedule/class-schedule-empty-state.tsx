import Image from "next/image";
import Link from "next/link";
import type { StudentClassScheduleEmptyState } from "@/types/student-class-schedule.types";

function ClassScheduleEmptyIllustration() {
  return (
    <Image
      src="/images/clander.png"
      alt=""
      width={160}
      height={160}
      className="h-auto w-[140px] object-contain sm:w-[160px]"
      priority
    />
  );
}

interface ClassScheduleEmptyStateProps {
  emptyState: StudentClassScheduleEmptyState;
}

export function ClassScheduleEmptyState({ emptyState }: ClassScheduleEmptyStateProps) {
  return (
    <div className="flex flex-col items-center px-4 py-14 text-center sm:py-16 md:py-20">
      <ClassScheduleEmptyIllustration />
      <h2 className="mt-8 text-[22px] font-bold text-[#1a1a1a] sm:text-[24px]">
        {emptyState.heading}
      </h2>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-[#9ca3af] sm:text-[15px]">
        {emptyState.message}
      </p>
      <Link
        href={emptyState.actionHref}
        className="mt-8 inline-flex min-w-[180px] items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:min-w-[200px] sm:text-[15px]"
      >
        {emptyState.actionLabel}
      </Link>
    </div>
  );
}
