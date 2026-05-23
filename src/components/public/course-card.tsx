import Image from "next/image";
import Link from "next/link";
import { Star, Users } from "lucide-react";
import type { Course } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/utils";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.slug}`}>
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="relative aspect-video">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="line-clamp-2 text-lg">{course.title}</CardTitle>
          <p className="text-sm text-muted-foreground">{course.instructorName}</p>
        </CardHeader>
        <CardContent className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {course.rating}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {course.studentsCount}
            </span>
          </div>
          <span className="font-semibold text-primary">{formatCurrency(course.price)}</span>
        </CardContent>
      </Card>
    </Link>
  );
}
