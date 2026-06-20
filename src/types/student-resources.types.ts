export type StudentResourcesTabId =
  | "learning-materials"
  | "skill-books"
  | "academic-guides"
  | "notes";

export type StudentResourceFileType = "pdf" | "ppt" | "txt" | "zip";

export interface StudentLearningMaterialItem {
  id: string;
  courseSlug: string;
  title: string;
  fileType: StudentResourceFileType;
  downloadUrl: string;
}

export interface StudentLearningMaterialTopic {
  id: string;
  title: string;
  items: StudentLearningMaterialItem[];
}

export interface StudentResourcesCourseFilter {
  id: string;
  label: string;
}

export interface StudentResourcesSortOption {
  id: string;
  label: string;
}

export interface StudentResourcesEmptyState {
  heading: string;
  message: string;
  actionLabel: string;
  actionHref: string;
}

export interface StudentSkillBookItem {
  id: string;
  courseSlug: string;
  title: string;
  author: string;
  coverImage: string;
  downloadUrl: string;
}

export interface StudentAcademicGuideItem {
  id: string;
  courseSlug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  downloadUrl: string;
}

export interface StudentResourceNoteItem {
  id: string;
  courseSlug: string;
  timestamp: string;
  lessonTitle: string;
  topicTitle: string;
  content: string;
}

export interface StudentResourcesTab {
  id: StudentResourcesTabId;
  label: string;
  emptyState: StudentResourcesEmptyState;
  topics: StudentLearningMaterialTopic[];
  skillBooks: StudentSkillBookItem[];
  academicGuides: StudentAcademicGuideItem[];
  notes: StudentResourceNoteItem[];
}

export interface StudentResourcesPageData {
  title: string;
  subtitle: string;
  courseFilters: StudentResourcesCourseFilter[];
  sortOptions: StudentResourcesSortOption[];
  tabs: StudentResourcesTab[];
  defaultTabId: StudentResourcesTabId;
}
