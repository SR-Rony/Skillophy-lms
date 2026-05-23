import Image from "next/image";
import type { Course } from "@/types";
import { formatCurrency } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CourseDetailProps {
  course: Course;
}

export function CourseDetail({ course }: CourseDetailProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="mt-2 text-muted-foreground">By {course.instructorName}</p>
          <p className="mt-6 leading-relaxed">{course.description}</p>
        </div>
      </div>
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="text-2xl">{formatCurrency(course.price)}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{course.lessonsCount} lessons</li>
            <li>{course.duration} total</li>
            <li>Level: {course.level}</li>
            <li>Rating: {course.rating}/5</li>
          </ul>
          <Button className="w-full" size="lg">
            Enroll now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
