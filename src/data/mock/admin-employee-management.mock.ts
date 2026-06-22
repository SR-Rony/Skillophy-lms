import type {
  AdminEmployee,
  AdminEmployeeManagementData,
  AdminEmployeeRole,
  AdminEmployeeStatus,
} from "@/types/admin-employee-management.types";

export const ADMIN_TEACHER_PROFILE_MAISHA_ID = "teacher-maisha-afrose";
export const ADMIN_EMPLOYEE_PROFILE_ABDULLAH_ID = "employee-abdullah-mamun";

const employeeRoles: AdminEmployeeRole[] = [
  "Admin",
  "Super Admin",
  "Moderator",
  "Batch Coordinator",
  "General Staff",
];

const employeeNames = [
  { name: "Leslie Alexander", email: "leslie.alexander@skillophy.com" },
  { name: "Michael Foster", email: "michael.foster@skillophy.com" },
  { name: "Dwayne Watkins", email: "dwayne.watkins@skillophy.com" },
  { name: "Sarah Mitchell", email: "sarah.mitchell@skillophy.com" },
  { name: "James Cooper", email: "james.cooper@skillophy.com" },
  { name: "Emily Johnson", email: "emily.johnson@skillophy.com" },
  { name: "David Chen", email: "david.chen@skillophy.com" },
  { name: "Olivia Brown", email: "olivia.brown@skillophy.com" },
];

const teacherNames = [
  { name: "Abdullah Mamun", email: "abdullah.mamun@skillophy.com" },
  { name: "Nusrat Jahan", email: "nusrat.jahan@skillophy.com" },
  { name: "Rahim Uddin", email: "rahim.uddin@skillophy.com" },
  { name: "Farhana Akter", email: "farhana.akter@skillophy.com" },
];

function formatPhone(index: number) {
  const area = 200 + (index % 700);
  const suffix = String(1000 + ((index * 37) % 9000)).slice(-4);
  return `(${area}) 555-${suffix}`;
}

const featuredEmployees = [
  { id: "employee-featured-1", name: "Guy Hawkins", email: "guy.hawkins@skillophy.com", role: "Admin" as const },
  {
    id: "employee-featured-2",
    name: "Brooklyn Simmons",
    email: "brooklyn.simmons@skillophy.com",
    role: "Super Admin" as const,
  },
  {
    id: ADMIN_EMPLOYEE_PROFILE_ABDULLAH_ID,
    name: "Abdullah Mamun",
    email: "mamun@gmail.com",
    role: "Moderator" as const,
  },
];

function buildEmployees(): AdminEmployee[] {
  const employees: AdminEmployee[] = featuredEmployees.map((person, index) => ({
    id: person.id,
    name: person.name,
    email: person.email,
    avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(person.name)}`,
    role: person.role,
    phone:
      person.id === ADMIN_EMPLOYEE_PROFILE_ABDULLAH_ID ? "(209) 555-0104" : formatPhone(index),
    status: "active" as const,
    category: "employee" as const,
  }));

  for (let index = 0; index < 62; index += 1) {
    const person = employeeNames[index % employeeNames.length];
    const role = employeeRoles[index % employeeRoles.length];
    const status: AdminEmployeeStatus = index % 5 === 0 ? "inactive" : "active";

    employees.push({
      id: `employee-${index + 3}`,
      name: person.name,
      email: person.email,
      avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(person.name)}-${index}`,
      role,
      phone: formatPhone(index + 2),
      status,
      category: "employee",
    });
  }

  for (let index = 0; index < 16; index += 1) {
    const person = teacherNames[index % teacherNames.length];
    const status: AdminEmployeeStatus = index % 6 === 0 ? "inactive" : "active";
    const isFeaturedTeacher = index === 0;

    employees.push({
      id: isFeaturedTeacher ? ADMIN_TEACHER_PROFILE_MAISHA_ID : `teacher-${index + 1}`,
      name: isFeaturedTeacher ? "Maisha Afrose" : person.name,
      email: isFeaturedTeacher ? "maisha@gmail.com" : person.email,
      avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(
        isFeaturedTeacher ? "Maisha Afrose" : `${person.name}-teacher-${index}`
      )}`,
      role: "Teacher",
      phone: isFeaturedTeacher ? "(209) 555-0104" : formatPhone(index + 100),
      status: isFeaturedTeacher ? "active" : status,
      category: "teacher",
    });
  }

  return employees;
}

export const adminEmployeeManagementData: AdminEmployeeManagementData = {
  employees: buildEmployees(),
  roleOptions: [
    { id: "all", label: "All Role" },
    { id: "admin", label: "Admin" },
    { id: "super-admin", label: "Super Admin" },
    { id: "moderator", label: "Moderator" },
    { id: "batch-coordinator", label: "Batch Coordinator" },
    { id: "general-staff", label: "General Staff" },
    { id: "teacher", label: "Teacher" },
  ],
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "name-asc", label: "Name (A-Z)" },
    { id: "name-desc", label: "Name (Z-A)" },
    { id: "role-asc", label: "Role (A-Z)" },
  ],
  exportOptions: [
    { id: "csv", label: "Export as CSV" },
    { id: "xsl", label: "Export as XSL" },
  ],
  inviteRoleOptions: [
    { id: "admin", label: "Admin" },
    { id: "super-admin", label: "Super Admin" },
    { id: "moderator", label: "Moderator" },
    { id: "batch-coordinator", label: "Batch Coordinator" },
    { id: "general-staff", label: "General Staff" },
  ],
  addMemberDefaults: {
    email: "guy@gmail.com",
    roleId: "moderator",
  },
  defaultRoleId: "all",
  defaultSortId: "default",
  defaultSelectedIds: ["employee-featured-1", "employee-featured-2"],
  pageSize: 8,
  exportLabel: "Export",
  addNewLabel: "Add New +",
};

export function getAdminEmployeeManagement(): AdminEmployeeManagementData {
  return adminEmployeeManagementData;
}
