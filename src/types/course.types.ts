import type { CourseLevel, CourseStatus } from "@/enums";

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  instructorId: string;
  instructorName: string;
  level: CourseLevel;
  status: CourseStatus;
  price: number;
  originalPrice?: number;
  rating: number;
  studentsCount: number;
  lessonsCount: number;
  duration: string;
  tags: string[];
  createdAt: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description?: string;
  videoUrl: string;
  duration: number;
  order: number;
  isFree: boolean;
}

export interface Enrollment {
  id: string;
  courseId: string;
  userId: string;
  progress: number;
  enrolledAt: string;
  completedAt?: string;
}
