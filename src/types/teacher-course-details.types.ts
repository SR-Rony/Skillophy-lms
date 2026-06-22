import type {
  StudentCourseCurriculumModule,
  StudentCourseLessonStatus,
  StudentCourseLessonType,
} from "@/types/student-course-details.types";
import type {
  StudentLiveVideoDiscussionMessage,
  StudentLiveVideoDiscussionUser,
} from "@/types/student-live-video.types";
import type { CourseLeaderboardData } from "@/types/course-leaderboard.types";
import type { TeacherUpcomingLiveClass } from "@/types/teacher-dashboard.types";

export type TeacherCourseDetailsTabLive =
  | "overview"
  | "assignment"
  | "student-progress"
  | "class-recordings"
  | "resources"
  | "student-feedback";

export type TeacherCourseDetailsTabRecorded =
  | "overview"
  | "discussion"
  | "resources"
  | "student-feedback";

export type TeacherCourseDetailsTab =
  | TeacherCourseDetailsTabLive
  | TeacherCourseDetailsTabRecorded;

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

export type TeacherCourseRecordingSortId =
  | "default"
  | "class-date"
  | "topic-asc"
  | "topic-desc";

export interface TeacherCourseRecordingSortOption {
  id: TeacherCourseRecordingSortId;
  label: string;
}

export interface TeacherCourseClassRecording {
  id: string;
  title: string;
  classDate: string;
  classDateIso: string;
  classTime: string;
  duration: string;
  recordingUrl: string;
}

export interface TeacherCourseRecordingTopicGroup {
  id: string;
  topicLabel: string;
  topicTitle: string;
  recordings: TeacherCourseClassRecording[];
}

export interface TeacherCourseClassRecordingsTabData {
  sortOptions: TeacherCourseRecordingSortOption[];
  topicGroups: TeacherCourseRecordingTopicGroup[];
}

export type TeacherCourseResourceSortId = "default" | "topic-asc" | "topic-desc";

export type TeacherCourseResourceFileType = "pdf" | "ppt" | "txt" | "zip";

export interface TeacherCourseResourceSortOption {
  id: TeacherCourseResourceSortId;
  label: string;
}

export interface TeacherCourseResourceItem {
  id: string;
  title: string;
  fileType: TeacherCourseResourceFileType;
  downloadUrl?: string;
}

export interface TeacherCourseResourceTopicGroup {
  id: string;
  topicLabel: string;
  topicTitle: string;
  materials: TeacherCourseResourceItem[];
}

export interface TeacherCourseResourcesTabData {
  sortOptions: TeacherCourseResourceSortOption[];
  topicGroups: TeacherCourseResourceTopicGroup[];
  addResourcesLabel: string;
}

export type TeacherCourseFeedbackRatingFilterId = "all" | "5" | "4" | "3" | "2" | "1";

export interface TeacherCourseFeedbackRatingFilterOption {
  id: TeacherCourseFeedbackRatingFilterId;
  label: string;
}

export interface TeacherCourseStudentReview {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  reviewedAt: string;
  comment: string;
}

export interface TeacherCourseRatingBreakdown {
  stars: 5 | 4 | 3 | 2 | 1;
  percent: number;
}

export interface TeacherCourseStudentFeedbackEmptyState {
  heading: string;
  message: string;
}

export interface TeacherCourseStudentFeedbackTabData {
  averageRating: number;
  ratingBreakdown: TeacherCourseRatingBreakdown[];
  ratingFilterOptions: TeacherCourseFeedbackRatingFilterOption[];
  reviews: TeacherCourseStudentReview[];
  emptyState: TeacherCourseStudentFeedbackEmptyState;
}

export interface TeacherCourseStatisticsData {
  completionPercent: number;
  enrolledLearners: number;
  completedLearners: number;
}

export interface TeacherCourseEnrollmentMonth {
  month: string;
  enrolledStudents: number;
}

export interface TeacherCourseRecordedOverviewData {
  statistics: TeacherCourseStatisticsData;
  monthlyEnrollment: TeacherCourseEnrollmentMonth[];
}

export interface TeacherCourseDiscussionTabData {
  messages: StudentLiveVideoDiscussionMessage[];
  currentUser: StudentLiveVideoDiscussionUser;
}

interface TeacherCourseDetailsSharedData {
  id: string;
  slug: string;
  title: string;
  image: string;
  completedTopics: number;
  totalTopics: number;
  progressPercent: number;
  curriculum: StudentCourseCurriculumModule[];
  supportPhone: string;
  resources: TeacherCourseResourcesTabData;
  studentFeedbackTab: TeacherCourseStudentFeedbackTabData;
}

export interface TeacherCourseLiveDetailsData extends TeacherCourseDetailsSharedData {
  courseType: "live";
  upcomingLiveClass: TeacherUpcomingLiveClass | null;
  assignmentsSummary: TeacherCourseAssignmentsSummary | null;
  studentProgress: TeacherCourseStudentProgressStats;
  studentProgressTab: TeacherCourseStudentProgressTabData;
  classRecordings: TeacherCourseClassRecordingsTabData;
  assignments: TeacherCourseAssignmentsTabData;
}

export interface TeacherCourseRecordedDetailsData extends TeacherCourseDetailsSharedData {
  courseType: "recorded";
  recordedOverview: TeacherCourseRecordedOverviewData;
  discussionTab: TeacherCourseDiscussionTabData;
}

export type TeacherCourseDetailsData =
  | TeacherCourseLiveDetailsData
  | TeacherCourseRecordedDetailsData;
