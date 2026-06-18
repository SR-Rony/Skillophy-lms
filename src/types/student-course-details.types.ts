export type StudentCourseStatus = "ongoing" | "completed";
export type StudentCourseType = "recorded" | "live";

export type StudentCourseDetailsTab = "overview" | "progress" | "certificate";

export type StudentCourseLessonStatus = "completed" | "current" | "available";

export interface StudentCourseCurriculumLesson {
  id: string;
  title: string;
  type: "video" | "reading" | "quiz";
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
  curriculum: StudentCourseCurriculumModule[];
  certificateHref?: string;
  certificateInfo?: StudentCourseCertificateInfo;
  supportPhone: string;
}
