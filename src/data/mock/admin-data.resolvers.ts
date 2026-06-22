import { getAdminDashboard } from "./admin-dashboard.mock";
import { getAdminEmployeeManagement } from "./admin-employee-management.mock";

export function resolveAdminDashboard() {
  return getAdminDashboard();
}

export function resolveAdminEmployeeManagement() {
  return getAdminEmployeeManagement();
}
