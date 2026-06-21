export interface TeacherDashboardStats {
  totalCourses: number;
  totalLearners: number;
  totalEarning: number;
  totalCoursesDisplay?: string;
  totalLearnersDisplay?: string;
  totalEarningDisplay?: string;
}

export interface TeacherDashboardCourseFilter {
  id: string;
  label: string;
}

export interface TeacherDashboardEmptyState {
  message: string;
}

export interface TeacherUpcomingLiveClass {
  month: string;
  day: number;
  label: string;
  title: string;
  datetime: string;
  joinUrl?: string;
}

export type TeacherDashboardNotificationType = "live" | "assignment" | "discussion";

export interface TeacherDashboardNotification {
  id: string;
  type: TeacherDashboardNotificationType;
  title: string;
  timeAgo: string;
  description: string;
}

export interface TeacherSubmittedAssignment {
  id: string;
  studentName: string;
  studentAvatar: string;
  topicTitle: string;
  topicSubtitle: string;
  submittedAt: string;
  checkHref?: string;
}

export interface TeacherLearnerPerformanceEntry {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  score: number;
  scoreLabel?: string;
}

export interface TeacherDashboardData {
  stats: TeacherDashboardStats;
  courseFilters: TeacherDashboardCourseFilter[];
  selectedCourseId: string;
  upcomingLiveClass: TeacherUpcomingLiveClass | null;
  classSchedule: TeacherDashboardEmptyState;
  submittedAssignments: TeacherSubmittedAssignment[];
  submittedAssignmentsEmpty: TeacherDashboardEmptyState;
  notifications: TeacherDashboardNotification[];
  notificationsEmpty: TeacherDashboardEmptyState;
  learnersPerformance: TeacherLearnerPerformanceEntry[];
  learnersPerformanceEmpty: TeacherDashboardEmptyState;
  headerBadges: {
    messages: number;
    notifications: number;
  };
  notificationsViewAllHref?: string;
}
