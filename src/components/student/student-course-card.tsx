import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { StudentEnrolledCourse } from "@/types/student-course.types";
import { ROUTES } from "@/constants";
import { cn } from "@/utils";

interface StudentCourseCardProps {
  course: StudentEnrolledCourse;
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

function CourseProgress({
  completedLessons,
  totalLessons,
  progressPercent,
}: {
  completedLessons: number;
  totalLessons: number;
  progressPercent: number;
}) {
  return (
    <div className="space-y-2.5">
      <p className="text-[13px] text-[#9ca3af]">
        <span className="font-semibold text-[#1a1a1a]">{completedLessons}</span> of{" "}
        <span className="font-semibold text-[#1a1a1a]">{totalLessons}</span> has done
      </p>
      <div className="flex items-center gap-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#ececec]">
          <div
            className="h-full rounded-full bg-[#1a1a1a] transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="shrink-0 text-[13px] font-bold text-[#1a1a1a]">{progressPercent}%</span>
      </div>
    </div>
  );
}

export function StudentCourseCard({ course, className }: StudentCourseCardProps) {
  const isCompleted = Boolean(course.completedOn);
  const isLive = course.type === "live" && !isCompleted;
  const detailsHref = ROUTES.student.courseDetails(course.slug);
  const actionHref = isCompleted
    ? (course.certificateHref ?? ROUTES.student.certificates)
    : (course.continueHref ?? detailsHref);
  const actionLabel = isCompleted ? "Get Certificate" : "Continue";

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(35,25,22,0.1)]",
        className
      )}
    >
      <Link
        href={detailsHref}
        className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label={`View ${course.title}`}
      />

      <div className="relative z-10 flex flex-1 flex-col pointer-events-none">
        <div className="relative h-[200px] w-full shrink-0 overflow-hidden sm:h-[210px]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          {isLive && <LiveBadge />}
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
          <h3
            className={cn(
              "line-clamp-2 font-bold leading-snug tracking-tight text-[#1a1a1a]",
              isCompleted ? "text-[17px]" : "min-h-[52px] text-[17px]"
            )}
          >
            {course.title}
          </h3>

          <div className={cn("flex-1", isCompleted ? "mt-2" : "mt-3")}>
            {isCompleted ? (
              <p className="text-[14px] leading-relaxed text-[#9ca3af]">
                Completed on {course.completedOn}
              </p>
            ) : isLive && course.description ? (
              <p className="text-[13px] leading-relaxed text-[#9ca3af]">{course.description}</p>
            ) : (
              course.completedLessons != null &&
              course.totalLessons != null &&
              course.progressPercent != null && (
                <CourseProgress
                  completedLessons={course.completedLessons}
                  totalLessons={course.totalLessons}
                  progressPercent={course.progressPercent}
                />
              )
            )}
          </div>

          <Link
            href={actionHref}
            className={cn(
              "pointer-events-auto inline-flex w-full items-center justify-center rounded-xl bg-primary py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90",
              isCompleted ? "mt-5" : "mt-5 gap-1"
            )}
          >
            {actionLabel}
            {!isCompleted && <ChevronRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />}
          </Link>
        </div>
      </div>
    </article>
  );
}
