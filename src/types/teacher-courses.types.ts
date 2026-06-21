export type TeacherCoursesTab = "ongoing" | "completed";

export interface TeacherCoursesTabItem {
  id: TeacherCoursesTab;
  label: string;
}

export interface TeacherCoursesEmptyState {
  heading: string;
  message: string;
  actionLabel: string;
  actionHref: string;
}

export interface TeacherCourseItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  type: "live" | "recorded";
  learners: number;
  detailsHref: string;
  completedOn?: string;
}

export interface TeacherCoursesTabData {
  live: TeacherCourseItem[];
  recorded: TeacherCourseItem[];
}

export interface TeacherCoursesPageData {
  tabs: TeacherCoursesTabItem[];
  emptyState: Record<TeacherCoursesTab, TeacherCoursesEmptyState>;
  tabData: Record<TeacherCoursesTab, TeacherCoursesTabData>;
}
