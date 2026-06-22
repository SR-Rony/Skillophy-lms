import type {
  AdminEmployee,
  AdminEmployeeRole,
  AdminEmployeeSortId,
  AdminEmployeeTab,
} from "@/types/admin-employee-management.types";

const roleFilterMap: Record<string, AdminEmployeeRole | "all"> = {
  all: "all",
  admin: "Admin",
  "super-admin": "Super Admin",
  moderator: "Moderator",
  "batch-coordinator": "Batch Coordinator",
  "general-staff": "General Staff",
  teacher: "Teacher",
};

export function filterAdminEmployees(
  employees: AdminEmployee[],
  tab: AdminEmployeeTab,
  roleId: string,
  searchQuery: string
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();
  const roleFilter = roleFilterMap[roleId] ?? "all";

  return employees.filter((employee) => {
    const matchesTab =
      tab === "all" ||
      (tab === "employee" && employee.category === "employee") ||
      (tab === "teacher" && employee.category === "teacher");

    const matchesRole = roleFilter === "all" || employee.role === roleFilter;

    const matchesSearch =
      !normalizedSearch ||
      employee.name.toLowerCase().includes(normalizedSearch) ||
      employee.email.toLowerCase().includes(normalizedSearch) ||
      employee.role.toLowerCase().includes(normalizedSearch) ||
      employee.phone.includes(normalizedSearch);

    return matchesTab && matchesRole && matchesSearch;
  });
}

export function sortAdminEmployees(employees: AdminEmployee[], sortId: AdminEmployeeSortId) {
  const sorted = [...employees];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "role-asc":
      return sorted.sort((a, b) => a.role.localeCompare(b.role));
    default:
      return sorted;
  }
}

export function paginateAdminEmployees(
  employees: AdminEmployee[],
  currentPage: number,
  pageSize: number
) {
  const totalPages = Math.max(1, Math.ceil(employees.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: employees.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
