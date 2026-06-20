import Image from "next/image";
import type { StudentMessageCourse } from "@/types/student-messages.types";
import { cn } from "@/utils";

interface StudentMessagesChatHeaderProps {
  course: StudentMessageCourse;
  className?: string;
}

export function StudentMessagesChatHeader({ course, className }: StudentMessagesChatHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-b border-[#f3f4f6] bg-[#fafafa] px-4 py-4 sm:gap-4 sm:px-5 sm:py-5",
        className
      )}
    >
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full sm:h-12 sm:w-12">
        <Image
          src={course.headerAvatar}
          alt=""
          fill
          className="object-cover"
          sizes="48px"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[14px] font-bold text-[#1a1a1a] sm:text-[15px]">
          {course.title}
        </h3>
        <p className="mt-0.5 text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
          {course.lastSeenLabel}
        </p>
      </div>
    </div>
  );
}
