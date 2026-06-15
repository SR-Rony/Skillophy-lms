"use client";

import type { PublicCourse } from "@/components/public/public-course-card";
import { PublicCourseCard } from "@/components/public/public-course-card";
import { DashboardEmptyState } from "@/components/shared/dashboard-empty-state";
import { SectionHeader } from "@/components/shared/section-header";
import { ROUTES } from "@/constants";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils";

interface RecommendedCoursesSectionProps {
  courses: PublicCourse[];
  className?: string;
}

export function RecommendedCoursesSection({
  courses,
  className,
}: RecommendedCoursesSectionProps) {
  const hasCourses = courses.length > 0;

  return (
    <section className={cn("space-y-6", className)}>
      <SectionHeader
        title="Recommended Courses"
        badge={hasCourses ? "New" : undefined}
        action={hasCourses ? { label: "View All", href: ROUTES.courses } : undefined}
        theme="light"
      />

      {hasCourses ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <PublicCourseCard
              key={course.id}
              course={course}
              variant="paid"
              className="mx-0 max-w-none"
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-[#e5e7eb] bg-[#fafafa]">
          <DashboardEmptyState
            icon={
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f3f4f6]">
                <BookOpen className="h-8 w-8 text-[#9ca3af]" strokeWidth={1.5} />
              </div>
            }
            title="No courses recommended at this time."
            action={
              <Link
                href={ROUTES.student.courses}
                className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
              >
                Explore Courses
              </Link>
            }
          />
        </div>
      )}
    </section>
  );
}
