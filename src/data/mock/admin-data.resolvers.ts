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
