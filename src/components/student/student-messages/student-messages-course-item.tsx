import Image from "next/image";
import type { StudentMessageCourse } from "@/types/student-messages.types";
import { cn } from "@/utils";

interface StudentMessagesCourseItemProps {
  course: StudentMessageCourse;
  isActive: boolean;
  onSelect: (courseId: string) => void;
}

export function StudentMessagesCourseItem({
  course,
  isActive,
  onSelect,
}: StudentMessagesCourseItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(course.id)}
      className={cn(
        "relative flex w-full items-start gap-3 border-b border-b-[#f0f0f0] border-l-[3px] px-4 py-4 text-left transition-colors sm:px-5",
        isActive
          ? "border-l-primary bg-[#FDE7E3]"
          : "border-l-transparent bg-white hover:bg-[#fafafa]"
      )}
    >
      <div className="relative shrink-0">
        <div className="relative h-11 w-11 overflow-hidden rounded-full sm:h-12 sm:w-12">
          <Image
            src={course.thumbnail}
            alt=""
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        {course.hasUnread ? (
          <span
            className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-primary"
            aria-hidden
          />
        ) : null}
      </div>

      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-[13px] font-bold leading-snug text-[#1a1a1a] sm:text-[14px]">
          {course.title}
        </p>
        <p className="mt-1 text-[12px] font-medium text-[#9ca3af] sm:text-[13px]">
          {course.lastActivityDate}
        </p>
      </div>
    </button>
  );
}
