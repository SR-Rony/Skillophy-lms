import type {
  StudentCourseCurriculumModule,
  StudentCourseLessonStatus,
  StudentCourseLessonType,
} from "@/types/student-course-details.types";
import type { TeacherUpcomingLiveClass } from "@/types/teacher-dashboard.types";

export type TeacherCourseDetailsTab =
  | "overview"
  | "assignment"
  | "student-progress"
  | "class-recordings"
  | "resources"
  | "student-feedback";

export interface TeacherCourseCurriculumLesson {
  id: string;
  title: string;
  type: StudentCourseLessonType;
  status: StudentCourseLessonStatus;
}

export interface TeacherCourseCurriculumModule {
  id: string;
  title: string;
  duration: string;
  lessonCount: number;
  lessons: TeacherCourseCurriculumLesson[];
  defaultOpen?: boolean;
  completed?: boolean;
}

export interface TeacherCourseStudentProgressStats {
  attendancePercent: number;
  learnersPassedPercent: number;
  assignmentPercent: number;
}

export interface TeacherCourseAssignmentsSummary {
  pendingCount: number;
  checkHref: string;
}

export interface TeacherCourseDetailsData {
  id: string;
  slug: string;
  title: string;
  image: string;
  courseType: "live";
  completedTopics: number;
  totalTopics: number;
  progressPercent: number;
  upcomingLiveClass: TeacherUpcomingLiveClass | null;
  assignmentsSummary: TeacherCourseAssignmentsSummary | null;
  studentProgress: TeacherCourseStudentProgressStats;
  curriculum: StudentCourseCurriculumModule[];
  supportPhone: string;
}
