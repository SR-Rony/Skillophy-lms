"use client";

import { useCourses } from "@/hooks";
import { CourseCard } from "@/components/public/course-card";
import { CourseCardSkeleton } from "@/components/public/public-course-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function StudentOverview() {
  const { data: courses, isLoading } = useCourses();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Continue learning</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <CourseCardSkeleton />
        ) : (
          <div className="grid justify-items-center gap-6 sm:grid-cols-2">
            {courses?.slice(0, 2).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
