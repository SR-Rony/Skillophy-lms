export type AdminCategoryManagementTab = "course" | "workshop" | "job-position";

export type AdminCategoryStatus = "active" | "inactive";

export type AdminCategorySortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "count-desc"
  | "count-asc"
  | "status-asc";

export interface AdminCategory {
  id: string;
  name: string;
  itemCount: number;
  status: AdminCategoryStatus;
}

export interface AdminCategorySortOption {
  id: AdminCategorySortId;
  label: string;
}

export interface AdminCategoryTabData {
  categories: AdminCategory[];
  countColumnLabel: string;
}

export interface AdminCategoryManagementData {
  course: AdminCategoryTabData;
  workshop: AdminCategoryTabData;
  jobPosition: AdminCategoryTabData;
  sortOptions: AdminCategorySortOption[];
  defaultSortId: AdminCategorySortId;
  pageSize: number;
  addNewLabel: string;
}
