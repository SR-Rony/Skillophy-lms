import type { AdminLearnerStatus } from "./admin-learner-management.types";
import type { AdminTeacherProfileMoreData } from "./admin-teacher-profile.types";
import type {
  TeacherAccountSettingsBiography,
  TeacherAccountSettingsGeneralInfo,
  TeacherAccountSettingsSelectOption,
} from "./teacher-account-settings.types";

export type AdminLearnerProfileTabId =
  | "recorded-courses"
  | "live-courses"
  | "learner-profile"
  | "more";

export interface AdminLearnerProfileTab {
  id: AdminLearnerProfileTabId;
  label: string;
}

export interface AdminLearnerProfileStats {
  enrolledCourses: number;
  completedCourses: number;
}

export interface AdminLearnerProfile {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  avatarUrl: string;
  status: AdminLearnerStatus;
  stats: AdminLearnerProfileStats;
  tabs: AdminLearnerProfileTab[];
}

export type AdminLearnerRecordedCourseStatus = "completed" | "ongoing";

export type AdminLearnerRecordedCourseSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "date-desc"
  | "date-asc"
  | "score-desc"
  | "status-asc";

export interface AdminLearnerRecordedCourseSortOption {
  id: AdminLearnerRecordedCourseSortId;
  label: string;
}

export interface AdminLearnerRecordedCourse {
  id: string;
  title: string;
  thumbnail: string;
  teacherName: string;
  teacherAvatar: string;
  enrolledDate: string;
  totalScore: number | null;
  status: AdminLearnerRecordedCourseStatus;
  detailsHref: string;
  progressTopics: AdminLearnerRecordedCourseProgressTopic[];
}

export type AdminLearnerCourseTopicStatus = "completed" | "ongoing";

export interface AdminLearnerRecordedCourseProgressTopic {
  id: string;
  label: string;
  title: string;
  status: AdminLearnerCourseTopicStatus;
  quizScore: number | null;
  progressPercent: number;
}

export interface AdminLearnerRecordedCourseProgressData {
  courseTitle: string;
  topics: AdminLearnerRecordedCourseProgressTopic[];
  pageSize: number;
}

export interface AdminLearnerRecordedCoursesData {
  courses: AdminLearnerRecordedCourse[];
  sortOptions: AdminLearnerRecordedCourseSortOption[];
  defaultSortId: AdminLearnerRecordedCourseSortId;
  pageSize: number;
}

export interface AdminLearnerProfileInfoData {
  generalInfo: TeacherAccountSettingsGeneralInfo;
  biography: TeacherAccountSettingsBiography;
  roleOptions: TeacherAccountSettingsSelectOption[];
  statusOptions: TeacherAccountSettingsSelectOption[];
  genderOptions: TeacherAccountSettingsSelectOption[];
  countryOptions: TeacherAccountSettingsSelectOption[];
}

export type AdminLearnerLiveCourseStatus = "completed" | "ongoing" | "upcoming";

export type AdminLearnerLiveCourseSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "date-desc"
  | "date-asc"
  | "progress-desc"
  | "status-asc";

export interface AdminLearnerLiveCourseSortOption {
  id: AdminLearnerLiveCourseSortId;
  label: string;
}

export interface AdminLearnerLiveCourse {
  id: string;
  title: string;
  thumbnail: string;
  teacherName: string;
  teacherAvatar: string;
  startDate: string;
  progress: number;
  totalScore: number | null;
  status: AdminLearnerLiveCourseStatus;
  progressTopics: AdminLearnerLiveCourseProgressTopic[];
  topicRecordings: AdminLearnerLiveCourseTopicRecordings[];
}

export type AdminLearnerLiveCourseTopicStatus = "completed" | "ongoing" | "upcoming";

export interface AdminLearnerLiveCourseProgressTopic {
  id: string;
  label: string;
  title: string;
  status: AdminLearnerLiveCourseTopicStatus;
  attendance: number | null;
  assignment: number | null;
  quizScore: number | null;
  totalScore: number | null;
}

export interface AdminLearnerLiveCourseRecording {
  id: string;
  title: string;
  classDate: string;
  dayTime: string;
  duration: string;
  recordingHref: string;
}

export interface AdminLearnerLiveCourseTopicRecordings {
  id: string;
  label: string;
  title: string;
  recordings: AdminLearnerLiveCourseRecording[];
}

export type AdminLearnerLiveCourseRecordingSortId =
  | "default"
  | "class-date"
  | "topic-asc"
  | "topic-desc";

export interface AdminLearnerLiveCourseRecordingSortOption {
  id: AdminLearnerLiveCourseRecordingSortId;
  label: string;
}

export interface AdminLearnerLiveCoursesData {
  courses: AdminLearnerLiveCourse[];
  sortOptions: AdminLearnerLiveCourseSortOption[];
  defaultSortId: AdminLearnerLiveCourseSortId;
  pageSize: number;
}

export interface AdminLearnerProfilePageData {
  profile: AdminLearnerProfile;
  recordedCourses: AdminLearnerRecordedCoursesData;
  liveCourses: AdminLearnerLiveCoursesData;
  profileInfo: AdminLearnerProfileInfoData;
  moreData: AdminTeacherProfileMoreData;
}
