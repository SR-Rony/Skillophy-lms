import type { AdminAccountSettingsPageData } from "@/types/admin-account-settings.types";

const profileTabs = [
  { id: "profile-info" as const, label: "Profile Info" },
  { id: "more" as const, label: "More" },
];

export const adminAccountSettingsData: AdminAccountSettingsPageData = {
  profile: {
    id: "admin-current-user",
    fullName: "Abdullah Mamun",
    role: "Moderator",
    phone: "(209) 555-0104",
    email: "mamun@gmail.com",
    avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah%20Mamun",
    status: "active",
    tabs: profileTabs,
  },
  profileInfo: {
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
        "I am a dedicated English language instructor with over 10 years of experience helping students improve their communication skills. I specialize in spoken English, grammar, and IELTS preparation.\n\nMy teaching approach focuses on practical learning, interactive sessions, and personalized feedback so every student can build confidence and achieve their goals.",
    },
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
  },
  moreData: {
    accountActions: [
      {
        id: "logout",
        title: "Logout your account",
        description: "Do you want to logout your account?",
        actionLabel: "Log Out",
      },
      {
        id: "deactivate",
        title: "Deactivate your account",
        description: "Do you want to deactivate your account?",
        actionLabel: "Deactivate",
      },
      {
        id: "delete",
        title: "Delete account",
        description: "Do you want to delete your account?",
        actionLabel: "Delete",
      },
    ],
  },
};

export function getAdminAccountSettings(): AdminAccountSettingsPageData {
  return adminAccountSettingsData;
}
