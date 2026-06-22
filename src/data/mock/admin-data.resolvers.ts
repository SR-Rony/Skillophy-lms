import { getAdminDashboard } from "./admin-dashboard.mock";
import { getAdminEmployeeManagement } from "./admin-employee-management.mock";
import { getAdminTeacherProfile } from "./admin-teacher-profile.mock";

export function resolveAdminDashboard() {
  return getAdminDashboard();
}

export function resolveAdminEmployeeManagement() {
  return getAdminEmployeeManagement();
}

export function resolveAdminTeacherProfile(employeeId: string) {
  return getAdminTeacherProfile(employeeId);
}
