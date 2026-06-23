import { getAdminCourseCreation } from "./admin-course-creation.mock";
import { getAdminCourseManagement } from "./admin-course-management.mock";
import { getAdminDashboard } from "./admin-dashboard.mock";
import { getAdminEmployeeManagement } from "./admin-employee-management.mock";
import { getAdminEmployeeProfile } from "./admin-employee-profile.mock";
import { getAdminLearnerManagement } from "./admin-learner-management.mock";
import { getAdminLearnerProfile } from "./admin-learner-profile.mock";
import { getAdminTeacherProfile } from "./admin-teacher-profile.mock";

export function resolveAdminCourseCreation() {
  return getAdminCourseCreation();
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
