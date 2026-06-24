export type AdminWorkshopStatus = "completed" | "draft";

export type AdminWorkshopCategoryId =
  | "all"
  | "free"
  | "job"
  | "vocational"
  | "skill-development"
  | "popular";

export type AdminWorkshopSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "learners-desc"
  | "date-desc"
  | "status-asc";

export type AdminWorkshopExportId = "csv" | "xsl";

export interface AdminWorkshop {
  id: string;
  title: string;
  thumbnail: string;
  conductorName: string;
  conductorAvatar: string;
  category: string;
  categoryId: Exclude<AdminWorkshopCategoryId, "all">;
  totalLearners: number;
  date: string;
  time: string;
  status: AdminWorkshopStatus;
}

export interface AdminWorkshopCategoryOption {
  id: AdminWorkshopCategoryId;
  label: string;
}

export interface AdminWorkshopSortOption {
  id: AdminWorkshopSortId;
  label: string;
}

export interface AdminWorkshopExportOption {
  id: AdminWorkshopExportId;
  label: string;
}

export interface AdminWorkshopManagementData {
  workshops: AdminWorkshop[];
  categoryOptions: AdminWorkshopCategoryOption[];
  sortOptions: AdminWorkshopSortOption[];
  exportOptions: AdminWorkshopExportOption[];
  defaultCategoryId: AdminWorkshopCategoryId;
  defaultSortId: AdminWorkshopSortId;
  defaultSelectedIds: string[];
  pageSize: number;
  exportLabel: string;
  addNewLabel: string;
}
