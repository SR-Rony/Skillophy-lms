export type AdminQueryFormManagementTab = "business" | "contact";

export type AdminQueryFormCompanySize = "small" | "medium" | "large";

export type AdminQueryFormSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "company-asc"
  | "date-desc"
  | "company-size-asc";

export type AdminQueryFormExportId = "csv" | "xsl";

export interface AdminBusinessQuery {
  id: string;
  name: string;
  email: string;
  companyName: string;
  companySize: AdminQueryFormCompanySize;
  numberOfPeople: string;
  submittedDate: string;
  submittedAt: string;
  description: string;
}

export interface AdminContactQuery {
  id: string;
  name: string;
  email: string;
  subject: string;
  submittedDate: string;
  submittedAt: string;
  description: string;
}

export interface AdminBusinessQueryTabData {
  queries: AdminBusinessQuery[];
}

export interface AdminContactQueryTabData {
  queries: AdminContactQuery[];
}

export interface AdminQueryFormSortOption {
  id: AdminQueryFormSortId;
  label: string;
}

export interface AdminQueryFormExportOption {
  id: AdminQueryFormExportId;
  label: string;
}

export interface AdminQueryFormManagementData {
  business: AdminBusinessQueryTabData;
  contact: AdminContactQueryTabData;
  sortOptions: AdminQueryFormSortOption[];
  contactSortOptions: AdminQueryFormSortOption[];
  exportOptions: AdminQueryFormExportOption[];
  defaultSortId: AdminQueryFormSortId;
  defaultSelectedIds: string[];
  pageSize: number;
  exportLabel: string;
}
