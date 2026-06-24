import { getAdminTemplateManagement } from "./admin-template-management.mock";
import { getAdminRoleManagement } from "./admin-role-management.mock";
import { getAdminRolePermissions } from "./admin-role-permissions.mock";
import { getAdminJobOpeningManagement } from "./admin-job-opening-management.mock";
import { getAdminBusinessQueryDetail, getAdminContactQueryDetail, getAdminQueryFormManagement } from "./admin-query-form-management.mock";
import { getAdminMessagesPageData } from "./admin-messages.mock";
import { getAdminTransactionManagement } from "./admin-transaction-management.mock";
import { getAdminWorkshopCreation, getAdminWorkshopCreationNew } from "./admin-workshop-creation.mock";
import { getAdminCategoryManagement } from "./admin-categories.mock";
import { getAdminWorkshopManagement } from "./admin-workshop-management.mock";
import { getAdminPromoManagement } from "./admin-promos.mock";
import { getAdminCourseCreation, getAdminCourseCreationNew } from "./admin-course-creation.mock";
import { getAdminLiveCourseCreation } from "./admin-live-course-creation.mock";
import { getAdminCourseManagement } from "./admin-course-management.mock";
import { getAdminDashboard } from "./admin-dashboard.mock";
import { getAdminEmployeeManagement } from "./admin-employee-management.mock";
import { getAdminEmployeeProfile } from "./admin-employee-profile.mock";
import { getAdminLearnerManagement } from "./admin-learner-management.mock";
import { getAdminLearnerProfile } from "./admin-learner-profile.mock";
import { getAdminTeacherProfile } from "./admin-teacher-profile.mock";
import { getAdminActivityLogManagement } from "./admin-activity-log-management.mock";
import { getAdminReportDetail, getAdminReportManagement } from "./admin-report-management.mock";

export function resolveAdminReportDetail(reportId: string) {
  return getAdminReportDetail(reportId);
}

export function resolveAdminReportManagement() {
  return getAdminReportManagement();
}

export function resolveAdminActivityLogManagement() {
  return getAdminActivityLogManagement();
}

export function resolveAdminTemplateManagement() {
  return getAdminTemplateManagement();
}

export function resolveAdminRoleManagement() {
  return getAdminRoleManagement();
}

export function resolveAdminRolePermissions(roleId: string, roleName?: string | null) {
  return getAdminRolePermissions(roleId, roleName);
}

export function resolveAdminJobOpeningManagement() {
  return getAdminJobOpeningManagement();
}

export function resolveAdminQueryFormManagement() {
  return getAdminQueryFormManagement();
}

export function resolveAdminBusinessQueryDetail(queryId: string) {
  return getAdminBusinessQueryDetail(queryId);
}

export function resolveAdminContactQueryDetail(queryId: string) {
  return getAdminContactQueryDetail(queryId);
}

export function resolveAdminMessages() {
  return getAdminMessagesPageData();
}

export function resolveAdminTransactionManagement() {
  return getAdminTransactionManagement();
}

export function resolveAdminWorkshopManagement() {
  return getAdminWorkshopManagement();
}

export function resolveAdminWorkshopCreation() {
  return getAdminWorkshopCreation();
}

export function resolveAdminWorkshopCreationNew() {
  return getAdminWorkshopCreationNew();
}

export function resolveAdminCategoryManagement() {
  return getAdminCategoryManagement();
}

export function resolveAdminPromoManagement() {
  return getAdminPromoManagement();
}

export function resolveAdminCourseCreation() {
  return getAdminCourseCreation();
}

export function resolveAdminCourseCreationNew() {
  return getAdminCourseCreationNew();
}

export function resolveAdminLiveCourseCreation() {
  return getAdminLiveCourseCreation();
}

export function resolveAdminCourseManagement() {
  return getAdminCourseManagement();
}

export function resolveAdminDashboard() {
  return getAdminDashboard();
}

export function resolveAdminEmployeeManagement() {
  return getAdminEmployeeManagement();
}

export function resolveAdminTeacherProfile(employeeId: string) {
  return getAdminTeacherProfile(employeeId);
}

export function resolveAdminEmployeeProfile(employeeId: string) {
  return getAdminEmployeeProfile(employeeId);
}

export function resolveAdminLearnerManagement() {
  return getAdminLearnerManagement();
}

export function resolveAdminLearnerProfile(learnerId: string) {
  return getAdminLearnerProfile(learnerId);
}
