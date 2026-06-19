import type { AssignmentProgressRow } from "@/types/assignment-progress-table.types";
import type { CourseLeaderboardData } from "@/types/course-leaderboard.types";

export type StudentCourseStatus = "ongoing" | "completed";
export type StudentCourseType = "recorded" | "live";

export type StudentCourseDetailsTab =
  | "overview"
  | "assignment"
  | "progress"
  | "leaderboard"
  | "certificate";

export type StudentCourseLessonStatus = "completed" | "current" | "available";

export type StudentCourseLessonType =
  | "video"
  | "reading"
  | "quiz"
  | "live-class"
  | "assignment";

export interface StudentCourseCurriculumLesson {
  id: string;
  title: string;
  type: StudentCourseLessonType;
  status: StudentCourseLessonStatus;
  href?: string;
}

export interface StudentCourseCurriculumModule {
  id: string;
  title: string;
  duration: string;
  lessons: StudentCourseCurriculumLesson[];
  defaultOpen?: boolean;
  completed?: boolean;
  liveClassCount?: number;
  assignmentCount?: number;
}

export interface StudentUpcomingLiveClass {
  month: string;
  day: string | number;
  label: string;
  title: string;
  datetime: string;
  joinUrl: string;
}

export interface StudentLiveCourseStats {
  classAttendancePercent: number;
  rank: number;
  totalStudents: number;
}

export type StudentCourseTopicStatus = "completed" | "ongoing" | "locked";

export interface StudentCourseProgressTopic {
  id: string;
  label: string;
  title: string;
  status: StudentCourseTopicStatus;
  quizScore?: number | null;
  progressPercent: number;
  href: string;
}

export interface StudentCourseCertificateInfo {
  studentName: string;
  studentAvatar: string;
  certificateId: string;
  verificationId?: string;
}

export interface StudentCourseDetailsData {
  id: string;
  slug: string;
  title: string;
  image: string;
  courseType: StudentCourseType;
  status: StudentCourseStatus;
  completedTopics: number;
  totalTopics: number;
  progressPercent: number;
  totalScore: number;
  scoreMessage?: string;
  progressSubtext?: string;
  progressTopics?: StudentCourseProgressTopic[];
  completedOn?: string;
  whatNextItems?: string[];
  continueLesson?: {
    title: string;
    href: string;
  };
  upcomingLiveClass?: StudentUpcomingLiveClass;
  liveStats?: StudentLiveCourseStats;
  assignments?: AssignmentProgressRow[];
  leaderboard?: CourseLeaderboardData;
  curriculum: StudentCourseCurriculumModule[];
  certificateHref?: string;
  certificateInfo?: StudentCourseCertificateInfo;
  supportPhone: string;
}
