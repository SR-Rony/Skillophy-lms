import type { StudentAccountSettingsPageData } from "@/types/student-account-settings.types";

export const studentAccountSettingsDemo: StudentAccountSettingsPageData = {
  title: "Account Settings",
  subtitle: "Manage your profile, qualifications, and account preferences.",
  profile: {
    initials: "NJ",
    fullName: "Nushrat Jahan",
    jobTitle: "Product Designer",
    previewUrl: "#",
    shareCvUrl: "#",
  },
  tabs: [
    { id: "my-profile", label: "My Profile" },
    { id: "education", label: "Educational Qualification" },
    { id: "job-experience", label: "Job Experience" },
    { id: "settings", label: "Settings" },
    { id: "more", label: "More" },
  ],
  profileInfo: {
    fullName: "",
    certificateName: "",
    email: "",
    phone: "016254789546",
    gender: "Male",
    age: "",
    address: "",
    country: "Bangladesh",
  },
  biography: {
    description: "",
  },
  genderOptions: [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ],
  countryOptions: [
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "India", label: "India" },
    { value: "United States", label: "United States" },
    { value: "United Kingdom", label: "United Kingdom" },
  ],
};
