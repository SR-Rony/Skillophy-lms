import type { AdminEmployeeStatus } from "./admin-employee-management.types";
import type { AdminTeacherProfileMoreData } from "./admin-teacher-profile.types";
import type {
  TeacherAccountSettingsBiography,
  TeacherAccountSettingsGeneralInfo,
  TeacherAccountSettingsSelectOption,
} from "./teacher-account-settings.types";

export type AdminEmployeeProfileTabId = "profile-info" | "more";

export interface AdminEmployeeProfileTab {
  id: AdminEmployeeProfileTabId;
  label: string;
}

export interface AdminEmployeeProfile {
  id: string;
  fullName: string;
  role: string;
  phone: string;
  email: string;
  avatarUrl: string;
  status: AdminEmployeeStatus;
  tabs: AdminEmployeeProfileTab[];
}

export interface AdminEmployeeProfileInfoData {
  generalInfo: TeacherAccountSettingsGeneralInfo;
  biography: TeacherAccountSettingsBiography;
  roleOptions: TeacherAccountSettingsSelectOption[];
  statusOptions: TeacherAccountSettingsSelectOption[];
  genderOptions: TeacherAccountSettingsSelectOption[];
  countryOptions: TeacherAccountSettingsSelectOption[];
}

export interface AdminEmployeeProfilePageData {
  profile: AdminEmployeeProfile;
  profileInfo: AdminEmployeeProfileInfoData;
  moreData: AdminTeacherProfileMoreData;
}
