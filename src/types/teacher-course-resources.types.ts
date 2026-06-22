import type {
  TeacherCourseResourceSortOption,
  TeacherCourseResourceTopicGroup,
} from "@/types/teacher-course-details.types";

export interface TeacherCourseResourcesCourseOption {
  id: string;
  label: string;
}

export interface TeacherCourseResourcesEmptyState {
  heading: string;
  message: string;
  actionLabel: string;
}

export interface TeacherCourseResourcesPageData {
  courses: TeacherCourseResourcesCourseOption[];
  resourcesByCourse: Record<string, TeacherCourseResourceTopicGroup[]>;
  defaultCourseId: string;
  sortOptions: TeacherCourseResourceSortOption[];
  addResourcesLabel: string;
  emptyState: TeacherCourseResourcesEmptyState;
}
