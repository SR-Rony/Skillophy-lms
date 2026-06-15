import type { PublicCourse } from "@/components/public/public-course-card";

export type MyCoursesTab = "ongoing" | "completed" | "wishlists" | "recommended";

export type StudentCourseType = "recorded" | "live";

export interface StudentEnrolledCourse {
  id: string;
  title: string;
  slug: string;
  image: string;
  type: StudentCourseType;
  completedLessons?: number;
  totalLessons?: number;
  progressPercent?: number;
  description?: string;
  continueHref?: string;
  completedOn?: string;
  certificateHref?: string;
}

export interface UpcomingCourse {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  startDate: string;
  href?: string;
}

export interface MyCoursesTabData {
  recorded: StudentEnrolledCourse[];
  live: StudentEnrolledCourse[];
  wishlist?: PublicCourse[];
  upcoming?: UpcomingCourse[];
  recommended?: PublicCourse[];
}
