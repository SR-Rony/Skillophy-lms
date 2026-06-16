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
}

export interface StudentCourseDetailsData {
  id: string;
  slug: string;
  title: string;
  image: string;
  completedTopics: number;
  totalTopics: number;
  progressPercent: number;
  totalScore: number;
  scoreMessage: string;
  continueLesson: {
    title: string;
    href: string;
  };
  curriculum: StudentCourseCurriculumModule[];
  certificateHref?: string;
  supportPhone: string;
}
