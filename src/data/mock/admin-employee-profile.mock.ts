import {
  getAdminEmployeeManagement,
  ADMIN_EMPLOYEE_PROFILE_ABDULLAH_ID,
} from "@/data/mock/admin-employee-management.mock";
import type { AdminEmployee } from "@/types/admin-employee-management.types";
import type {
  AdminEmployeeProfileInfoData,
  AdminEmployeeProfilePageData,
} from "@/types/admin-employee-profile.types";

export { ADMIN_EMPLOYEE_PROFILE_ABDULLAH_ID };

const profileTabs = [
  { id: "profile-info" as const, label: "Profile Info" },
  { id: "more" as const, label: "More" },
];

const profileInfoFormOptions = {
  roleOptions: [
    { value: "Admin", label: "Admin" },
    { value: "Super Admin", label: "Super Admin" },
    { value: "Moderator", label: "Moderator" },
    { value: "Batch Coordinator", label: "Batch Coordinator" },
    { value: "General Staff", label: "General Staff" },
  ],
  statusOptions: [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ],
  genderOptions: [
    { value: "Female", label: "Female" },
    { value: "Male", label: "Male" },
    { value: "Other", label: "Other" },
  ],
  countryOptions: [
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "India", label: "India" },
    { value: "United States", label: "United States" },
    { value: "United Kingdom", label: "United Kingdom" },
  ],
};

const moreData = {
  accountActions: [
    {
      id: "reset-password",
      title: "Reset user password",
      description:
        "By resetting password, user will get a link in his email to set his new password from the portal.",
      actionLabel: "Reset Now",
    },
    {
      id: "deactivate",
      title: "Deactivate account",
      description: "Do you want to deactivate this account?",
      actionLabel: "Deactivate",
    },
    {
      id: "delete",
      title: "Delete account",
      description: "Do you want to delete this account?",
      actionLabel: "Delete",
    },
  ],
};

function buildAbdullahProfileInfo(): AdminEmployeeProfileInfoData {
  return {
    generalInfo: {
      fullName: "Abdullah Mamun",
      role: "Moderator",
      status: "Active",
      email: "mamun@gmail.com",
      phone: "016254789546",
      gender: "Male",
      age: "40",
      address: "Mirpur 1, Dhaka",
      country: "Bangladesh",
    },
    biography: {
      description:
        "Abdullah Mamun is an experienced English teacher at Skillophy with a strong academic background from the University of Dhaka. He brings years of classroom experience, curriculum development, and student mentorship to the platform.\n\nHis teaching philosophy centers on practical communication skills, structured learning paths, and measurable progress for every learner.",
    },
    ...profileInfoFormOptions,
  };
}

function hashEmployeeId(employeeId: string) {
  return employeeId.split("").reduce((total, character) => total + character.charCodeAt(0), 0);
}

function buildProfileInfoData(employee: AdminEmployee): AdminEmployeeProfileInfoData {
  if (employee.id === ADMIN_EMPLOYEE_PROFILE_ABDULLAH_ID) {
    return buildAbdullahProfileInfo();
  }

  const hash = hashEmployeeId(employee.id);
  const statusLabel = employee.status === "active" ? "Active" : "Inactive";

  return {
    generalInfo: {
      fullName: employee.name,
      role: employee.role,
      status: statusLabel,
      email: employee.email,
      phone: employee.phone,
      gender: hash % 2 === 0 ? "Female" : "Male",
      age: String(30 + (hash % 20)),
      address: "Mirpur 1, Dhaka",
      country: "Bangladesh",
    },
    biography: {
      description: `${employee.name} is a valued team member at Skillophy, contributing to daily operations, collaboration, and platform excellence.`,
    },
    ...profileInfoFormOptions,
  };
}

function buildEmployeeProfileFromEmployee(employee: AdminEmployee): AdminEmployeeProfilePageData {
  const profileInfo = buildProfileInfoData(employee);
  const headerPhone =
    employee.id === ADMIN_EMPLOYEE_PROFILE_ABDULLAH_ID ? "(209) 555-0104" : employee.phone;
  const headerEmail =
    employee.id === ADMIN_EMPLOYEE_PROFILE_ABDULLAH_ID ? "mamun@gmail.com" : employee.email;

  return {
    profile: {
      id: employee.id,
      fullName: employee.name,
      role: employee.role,
      phone: headerPhone,
      email: headerEmail,
      avatarUrl: employee.avatar,
      status: employee.status,
      tabs: profileTabs,
    },
    profileInfo,
    moreData,
  };
}

const abdullahMamunProfile = buildEmployeeProfileFromEmployee({
  id: ADMIN_EMPLOYEE_PROFILE_ABDULLAH_ID,
  name: "Abdullah Mamun",
  email: "mamun@gmail.com",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah%20Mamun",
  role: "Moderator",
  phone: "(209) 555-0104",
  status: "active",
  category: "employee",
});

export function getAdminEmployeeProfile(employeeId: string): AdminEmployeeProfilePageData | null {
  if (employeeId === ADMIN_EMPLOYEE_PROFILE_ABDULLAH_ID) {
    return abdullahMamunProfile;
  }

  const employee = getAdminEmployeeManagement().employees.find((item) => item.id === employeeId);

  if (!employee || employee.category !== "employee") {
    return null;
  }

  return buildEmployeeProfileFromEmployee(employee);
}
