import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import type { UpcomingCourse } from "@/types/student-course.types";
import { cn } from "@/utils";

interface UpcomingCourseCardProps {
  course: UpcomingCourse;
  className?: string;
}

export function UpcomingCourseCard({ course, className }: UpcomingCourseCardProps) {
  const href = course.href ?? `/courses/${course.slug}`;

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(35,25,22,0.1)]",
        className
      )}
    >
      <Link href={href} className="flex flex-1 flex-col">
        <div className="relative h-[200px] w-full shrink-0 overflow-hidden sm:h-[210px]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
          <span className="inline-flex w-fit rounded-full bg-[#fff4e5] px-3 py-1 text-xs font-semibold text-[#c45a00]">
            {course.category}
          </span>

          <h3 className="mt-3 line-clamp-2 text-[17px] font-bold leading-snug tracking-tight text-[#1a1a1a]">
            {course.title}
          </h3>

          <p className="mt-3 flex items-center gap-2 text-[14px] text-[#9ca3af]">
            <Calendar className="h-4 w-4 shrink-0" aria-hidden />
            {course.startDate}
          </p>
        </div>
      </Link>
    </article>
  );
}
