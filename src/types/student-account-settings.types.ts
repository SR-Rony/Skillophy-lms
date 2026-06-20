export type StudentAccountSettingsTabId =
  | "my-profile"
  | "education"
  | "job-experience"
  | "settings"
  | "more";

export interface StudentAccountSettingsTab {
  id: StudentAccountSettingsTabId;
  label: string;
}

export interface StudentAccountSettingsProfile {
  initials: string;
  fullName: string;
  jobTitle: string;
  previewUrl: string;
  shareCvUrl: string;
}

export interface StudentAccountSettingsProfileInfo {
  fullName: string;
  certificateName: string;
  email: string;
  phone: string;
  gender: string;
  age: string;
  address: string;
  country: string;
}

export interface StudentAccountSettingsBiography {
  description: string;
}

export interface StudentAccountSettingsSelectOption {
  value: string;
  label: string;
}

export interface StudentAccountSettingsPageData {
  title: string;
  subtitle: string;
  profile: StudentAccountSettingsProfile;
  tabs: StudentAccountSettingsTab[];
  profileInfo: StudentAccountSettingsProfileInfo;
  biography: StudentAccountSettingsBiography;
  genderOptions: StudentAccountSettingsSelectOption[];
  countryOptions: StudentAccountSettingsSelectOption[];
}
