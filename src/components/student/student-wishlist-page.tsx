"use client";

import { Container } from "@/components/shared";
import { MyCoursesWishlistSection } from "@/components/student/my-courses-wishlist-section";
import { StudentDashboardPageHero } from "@/components/student/student-dashboard-page-hero";
import type { PublicCourse } from "@/components/public/public-course-card";

interface StudentWishlistPageProps {
  courses: PublicCourse[];
}

export function StudentWishlistPage({ courses }: StudentWishlistPageProps) {
  return (
    <>
      <StudentDashboardPageHero
        title="Wishlist"
        description="Courses you saved for later. Enroll when you are ready to start learning."
      />

      <Container className="py-8 md:py-10">
        {courses.length > 0 ? (
          <MyCoursesWishlistSection courses={courses} />
        ) : (
          <div className="rounded-2xl border border-dashed border-[#e5e7eb] bg-[#fafafa] px-6 py-16 text-center">
            <p className="text-[15px] font-semibold text-[#1a1a1a]">Your wishlist is empty</p>
            <p className="mt-2 text-[14px] text-[#6b7280]">
              Browse courses and save the ones you want to take later.
            </p>
          </div>
        )}
      </Container>
    </>
  );
}
