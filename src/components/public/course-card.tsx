import type { Course } from "@/types";
import { PublicCourseCard, type PublicCourse } from "@/components/public/public-course-card";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const publicCourse: PublicCourse = {
    id: course.id,
    title: course.title,
    slug: course.slug,
    image: course.thumbnail,
    instructor: {
      name: course.instructorName,
      avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(
        course.instructorName
      )}`,
    },
    lessons: course.lessonsCount,
    rating: course.rating,
    price: course.price,
    originalPrice: course.originalPrice,
  };

  return <PublicCourseCard course={publicCourse} variant={course.price > 0 ? "paid" : "free"} />;
}
