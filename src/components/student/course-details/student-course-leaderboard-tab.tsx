"use client";

import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { CourseLeaderboard } from "@/components/shared/course-leaderboard";
import { Container } from "@/components/shared";
import { liveCourseLeaderboardMock } from "@/data/mock/course-leaderboard.mock";

interface StudentCourseLeaderboardTabProps {
  course: StudentCourseDetailsData;
}

export function StudentCourseLeaderboardTab({ course }: StudentCourseLeaderboardTabProps) {
  const leaderboard = course.leaderboard ?? liveCourseLeaderboardMock;

  return (
    <section className="bg-white pb-10 sm:pb-12 md:pb-14">
      <Container className="px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
        <CourseLeaderboard data={leaderboard} />
      </Container>
    </section>
  );
}
