/**
 * Teacher mock resolvers — swap mock shapes here without touching services or pages.
 * When the API is ready, services call apiClient instead of these functions.
 */
import { getTeacherAccountSettingsPageData } from "@/data/mock/teacher-account-settings.mock";
import { getTeacherClassSchedulePageData } from "@/data/mock/teacher-class-schedule.mock";
import { getTeacherCourseDetails } from "@/data/mock/teacher-course-details.mock";
import { getTeacherCourseResourcesPageData } from "@/data/mock/teacher-course-resources.mock";
import { getTeacherCoursesPageData } from "@/data/mock/teacher-courses.mock";
import { getTeacherDashboardData } from "@/data/mock/teacher-dashboard.mock";
import { getTeacherLiveVideoSession } from "@/data/mock/teacher-live-video.mock";
import { getTeacherMessagesPageData } from "@/data/mock/teacher-messages.mock";
import { getTeacherPaymentHistoryPageData } from "@/data/mock/teacher-payment-history.mock";
import { getTeacherWorkshopPageData } from "@/data/mock/teacher-workshop.mock";

export function resolveTeacherDashboard() {
  return getTeacherDashboardData();
}

export function resolveTeacherCourses() {
  return getTeacherCoursesPageData();
}

export function resolveTeacherCourseDetails(slug: string) {
  return getTeacherCourseDetails(slug);
}

export function resolveTeacherClassSchedule() {
  return getTeacherClassSchedulePageData();
}

export function resolveTeacherCourseResources() {
  return getTeacherCourseResourcesPageData();
}

export function resolveTeacherWorkshop() {
  return getTeacherWorkshopPageData();
}

export function resolveTeacherMessages() {
  return getTeacherMessagesPageData();
}

export function resolveTeacherPaymentHistory() {
  return getTeacherPaymentHistoryPageData();
}

export function resolveTeacherAccountSettings() {
  return getTeacherAccountSettingsPageData();
}

export function resolveTeacherLiveVideoSession(slug: string, lessonId?: string) {
  return getTeacherLiveVideoSession(slug, lessonId);
}
