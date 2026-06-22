import type { PublicCourse } from "@/components/public/public-course-card";

export interface AdminDashboardStats {
  totalCourses: number;
  totalLearners: number;
  totalTeachers: number;
  totalRevenue: number;
  totalCoursesDisplay: string;
  totalLearnersDisplay: string;
  totalTeachersDisplay: string;
  totalRevenueDisplay: string;
}

export interface AdminDashboardCourseFilter {
  id: string;
  label: string;
}

export interface AdminDashboardEmptyState {
  message: string;
}

export type AdminDashboardNotificationType = "live" | "course" | "user" | "discussion";

export interface AdminDashboardNotification {
  id: string;
  type: AdminDashboardNotificationType;
  title: string;
  timeAgo: string;
  description: string;
}

export interface AdminDashboardRevenueMonth {
  month: string;
  revenue: number;
}

export interface AdminDashboardEnrollmentMonth {
  month: string;
  enrolledStudents: number;
}

export interface AdminDashboardCourseStatistics {
  completionPercent: number;
  enrolledLearners: number;
  completedLearners: number;
}

export interface AdminDashboardData {
  stats: AdminDashboardStats;
  courseFilters: AdminDashboardCourseFilter[];
  selectedCourseId: string;
  notifications: AdminDashboardNotification[];
  notificationsEmpty: AdminDashboardEmptyState;
  notificationsViewAllHref: string;
  salesRevenue: AdminDashboardRevenueMonth[];
  highlightedRevenueMonth: string;
  courseStatistics: AdminDashboardCourseStatistics;
  monthlyEnrollment: AdminDashboardEnrollmentMonth[];
  bestSellingCourses: PublicCourse[];
  headerBadges: {
    messages: number;
    notifications: number;
  };
}
