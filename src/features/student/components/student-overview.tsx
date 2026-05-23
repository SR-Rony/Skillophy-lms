"use client";

import { useCourses } from "@/hooks";
import { CourseCard } from "@/components/public/course-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function StudentOverview() {
  const { data: courses, isLoading } = useCourses();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Continue learning</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-48 w-full" />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {courses?.slice(0, 2).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
