"use client";

import { CourseCategoryPageHero } from "@/components/public/all-courses/course-category-page-hero";

interface AllCoursesPageHeroProps {
  totalCourses: number;
}

export function AllCoursesPageHero({ totalCourses }: AllCoursesPageHeroProps) {
  return (
    <CourseCategoryPageHero
      totalCourses={totalCourses}
      title="All Courses"
      description="Stay ahead of the curve by joining our live batch now! In today's fast-paced world, staying competitive means staying informed and continuously honing your skills. Our live batch offers you the opportunity to immerse yourself."
    />
  );
}
