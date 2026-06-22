import type { PublicCourse } from "@/components/public/public-course-card";
import { PublicCourseCard } from "@/components/public/public-course-card";

interface AdminBestSellingCoursesSectionProps {
  courses: PublicCourse[];
}

export function AdminBestSellingCoursesSection({ courses }: AdminBestSellingCoursesSectionProps) {
  return (
    <section className="space-y-5">
      <h2 className="text-[16px] font-bold text-[#111827] sm:text-[18px]">Best Selling Courses</h2>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <PublicCourseCard
            key={course.id}
            course={course}
            variant="paid"
            className="mx-0 max-w-none"
          />
        ))}
      </div>
    </section>
  );
}
