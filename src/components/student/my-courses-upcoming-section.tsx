import type { UpcomingCourse } from "@/types/student-course.types";
import { UpcomingCourseCard } from "./upcoming-course-card";
import { cn } from "@/utils";

interface MyCoursesUpcomingSectionProps {
  title?: string;
  courses: UpcomingCourse[];
  className?: string;
}

function SectionCountBadge({ count }: { count: number }) {
  const label = count === 1 ? "1 course" : `${count} courses`;

  return (
    <span className="inline-flex items-center rounded-full bg-[#f5ebe0] px-3 py-1 text-xs font-semibold text-[#6b5344]">
      {label}
    </span>
  );
}

export function MyCoursesUpcomingSection({
  title = "Upcoming Courses",
  courses,
  className,
}: MyCoursesUpcomingSectionProps) {
  if (courses.length === 0) return null;

  return (
    <section className={cn("space-y-5", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-lg font-bold text-[#1a1a1a] sm:text-xl">{title}</h2>
        <SectionCountBadge count={courses.length} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <UpcomingCourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
