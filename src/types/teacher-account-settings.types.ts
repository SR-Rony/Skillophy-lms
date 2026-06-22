import type {
  StudentAccountSettingsCourseFormOptions,
  StudentAccountSettingsEducationData,
  StudentAccountSettingsEducationFormOptions,
  StudentAccountSettingsSkillsFormOptions,
} from "./student-account-settings.types";

export type TeacherAccountSettingsTabId = "profile-info" | "more";

export interface TeacherAccountSettingsTab {
  id: TeacherAccountSettingsTabId;
  label: string;
}

export interface TeacherAccountSettingsProfile {
  fullName: string;
  role: string;
  phone: string;
  email: string;
  avatarUrl: string;
}

export interface TeacherAccountSettingsStats {
  totalEarnings: number;
  totalCourses: number;
  ongoingCourses: number;
}

export interface TeacherAccountSettingsGeneralInfo {
  fullName: string;
  role: string;
  status: string;
  email: string;
  phone: string;
  gender: string;
  age: string;
  address: string;
  country: string;
}

export interface TeacherAccountSettingsBiography {
  description: string;
}

export interface TeacherAccountSettingsSelectOption {
  value: string;
  label: string;
}

export interface TeacherAccountSettingsPageData {
  profile: TeacherAccountSettingsProfile;
  stats: TeacherAccountSettingsStats;
  tabs: TeacherAccountSettingsTab[];
  generalInfo: TeacherAccountSettingsGeneralInfo;
  biography: TeacherAccountSettingsBiography;
  roleOptions: TeacherAccountSettingsSelectOption[];
  statusOptions: TeacherAccountSettingsSelectOption[];
  genderOptions: TeacherAccountSettingsSelectOption[];
  countryOptions: TeacherAccountSettingsSelectOption[];
  educationData: StudentAccountSettingsEducationData;
  educationFormOptions: StudentAccountSettingsEducationFormOptions;
  courseFormOptions: StudentAccountSettingsCourseFormOptions;
  skillsFormOptions: StudentAccountSettingsSkillsFormOptions;
}
