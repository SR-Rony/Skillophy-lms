import type {
  StudentCourseCurriculumModule,
  StudentCourseLessonStatus,
  StudentCourseLessonType,
} from "@/types/student-course-details.types";
import type { CourseLeaderboardData } from "@/types/course-leaderboard.types";
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

export type TeacherCourseAssignmentStatus = "pending" | "submitted" | "approved";

export interface TeacherCourseAssignmentSubmission {
  id: string;
  studentName: string;
  studentAvatar: string;
  topicLabel: string;
  topicTitle: string;
  submittedAt: string;
  status: TeacherCourseAssignmentStatus;
  checkHref?: string;
  assignmentHref?: string;
  assessment?: {
    marks?: number;
    feedback?: string;
  };
}

export interface TeacherCourseAssignmentsEmptyState {
  heading: string;
  message: string;
  actionLabel: string;
  actionHref: string;
}

export interface TeacherCourseAssignmentsTabData {
  submissions: TeacherCourseAssignmentSubmission[];
  emptyState: TeacherCourseAssignmentsEmptyState;
  courseFilterLabel: string;
  sortLabel: string;
}

export interface TeacherCourseTopicAttendance {
  topic: number;
  attendancePercent: number;
}

export interface TeacherCourseStudentProgressTabData {
  topicAttendance: TeacherCourseTopicAttendance[];
  leaderboard: CourseLeaderboardData;
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
  studentProgressTab: TeacherCourseStudentProgressTabData;
  assignments: TeacherCourseAssignmentsTabData;
  curriculum: StudentCourseCurriculumModule[];
  supportPhone: string;
}
