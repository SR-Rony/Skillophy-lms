import { DashboardCoursesSection } from "@/components/shared/dashboard-courses-section";
import { StudentCourseCard } from "./student-course-card";
import type { StudentEnrolledCourse } from "@/types/student-course.types";

interface MyCoursesSectionProps {
  title: string;
  courses: StudentEnrolledCourse[];
  className?: string;
}

export function MyCoursesSection({ title, courses, className }: MyCoursesSectionProps) {
  if (courses.length === 0) return null;

  return (
    <DashboardCoursesSection title={title} count={courses.length} className={className}>
      {courses.map((course) => (
        <StudentCourseCard key={course.id} course={course} />
      ))}
    </DashboardCoursesSection>
  );
}
