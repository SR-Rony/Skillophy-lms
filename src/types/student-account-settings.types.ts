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
  avatarUrl: string;
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

export interface StudentAccountSettingsEducationItem {
  id: string;
  title: string;
  dateRange: string;
  description: string;
}

export type StudentAccountSettingsCourseStatus = "completed" | "ongoing";

export interface StudentAccountSettingsCourseItem {
  id: string;
  title: string;
  dateRange: string;
  status: StudentAccountSettingsCourseStatus;
  description?: string;
  certificateUrl?: string;
}

export interface StudentAccountSettingsEducationData {
  education: StudentAccountSettingsEducationItem[];
  courses: StudentAccountSettingsCourseItem[];
  skills: string[];
  interestedAreas: string[];
}

export interface StudentAccountSettingsEducationFormOptions {
  institutions: StudentAccountSettingsSelectOption[];
  degrees: StudentAccountSettingsSelectOption[];
  months: StudentAccountSettingsSelectOption[];
  years: StudentAccountSettingsSelectOption[];
}

export interface StudentAccountSettingsAddEducationFormValues {
  institution: string;
  degree: string;
  startMonth: string;
  startYear: string;
  graduationMonth: string;
  graduationYear: string;
  currentlyStudying: boolean;
  description: string;
}

export interface StudentAccountSettingsCourseFormOptions {
  courses: StudentAccountSettingsSelectOption[];
  months: StudentAccountSettingsSelectOption[];
  years: StudentAccountSettingsSelectOption[];
}

export interface StudentAccountSettingsAddCourseFormValues {
  courseName: string;
  startMonth: string;
  startYear: string;
  isOngoing: boolean;
  description: string;
}

export interface StudentAccountSettingsSkillsFormOptions {
  availableSkills: string[];
  maxSkills: number;
}

export interface StudentAccountSettingsJobExperienceItem {
  id: string;
  title: string;
  dateRange: string;
  description: string;
}

export type StudentAccountSettingsLinkPlatform =
  | "portfolio"
  | "linkedin"
  | "facebook"
  | "dribbble"
  | "instagram"
  | "custom";

export interface StudentAccountSettingsProfileLink {
  id: string;
  platform: StudentAccountSettingsLinkPlatform;
  label: string;
  url: string;
}

export interface StudentAccountSettingsJobExperienceData {
  experiences: StudentAccountSettingsJobExperienceItem[];
  links: StudentAccountSettingsProfileLink[];
  maxCustomLinks: number;
}

export interface StudentAccountSettingsJobExperienceFormOptions {
  jobTitles: StudentAccountSettingsSelectOption[];
  companies: StudentAccountSettingsSelectOption[];
  months: StudentAccountSettingsSelectOption[];
  years: StudentAccountSettingsSelectOption[];
}

export interface StudentAccountSettingsAddJobExperienceFormValues {
  jobTitle: string;
  company: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  currentlyWorking: boolean;
  description: string;
}

export interface StudentAccountSettingsPasswordData {
  lastChangedLabel: string;
  changePasswordHref: string;
}

export interface StudentAccountSettingsNotificationData {
  description: string;
  emailNotification: boolean;
  pushNotification: boolean;
}

export interface StudentAccountSettingsPreferencesData {
  password: StudentAccountSettingsPasswordData;
  notification: StudentAccountSettingsNotificationData;
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
  educationData: StudentAccountSettingsEducationData;
  educationFormOptions: StudentAccountSettingsEducationFormOptions;
  courseFormOptions: StudentAccountSettingsCourseFormOptions;
  skillsFormOptions: StudentAccountSettingsSkillsFormOptions;
  jobExperienceData: StudentAccountSettingsJobExperienceData;
  jobExperienceFormOptions: StudentAccountSettingsJobExperienceFormOptions;
  preferencesData: StudentAccountSettingsPreferencesData;
}
