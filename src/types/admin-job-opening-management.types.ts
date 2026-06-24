export type AdminJobOpeningStatus = "active" | "inactive";

export type AdminJobOpeningSortId =
  | "default"
  | "title-asc"
  | "title-desc"
  | "category-asc"
  | "deadline-desc"
  | "status-asc";

export type AdminJobOpeningExportId = "csv" | "xsl";

export interface AdminJobOpeningFormOption {
  value: string;
  label: string;
}

export interface AdminJobOpeningFormOptions {
  categories: AdminJobOpeningFormOption[];
  jobTypes: AdminJobOpeningFormOption[];
}

export interface AdminJobOpeningForm {
  isActive: boolean;
  title: string;
  salary: string;
  vacancy: string;
  category: string;
  jobType: string;
  deadline: string;
  applyLink: string;
  description: string;
}

export type AdminJobOpeningDrawerMode = "add" | "edit";

export interface AdminJobOpening {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  deadline: string;
  status: AdminJobOpeningStatus;
  salary: string;
  vacancy: string;
  jobType: string;
  applyLink: string;
  description: string;
}

export interface AdminJobOpeningSortOption {
  id: AdminJobOpeningSortId;
  label: string;
}

export interface AdminJobOpeningExportOption {
  id: AdminJobOpeningExportId;
  label: string;
}

export interface AdminJobOpeningManagementData {
  jobOpenings: AdminJobOpening[];
  formOptions: AdminJobOpeningFormOptions;
  sortOptions: AdminJobOpeningSortOption[];
  exportOptions: AdminJobOpeningExportOption[];
  defaultSortId: AdminJobOpeningSortId;
  defaultSelectedIds: string[];
  pageSize: number;
  exportLabel: string;
  addNewLabel: string;
}
