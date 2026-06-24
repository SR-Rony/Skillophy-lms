export type AdminTemplateTypeId = "requirement" | "what-youll-get" | "faq";

export type AdminTemplateTypeFilterId = "all" | AdminTemplateTypeId;

export type AdminTemplateSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "type-asc"
  | "updated-desc";

export interface AdminTemplate {
  id: string;
  name: string;
  type: AdminTemplateTypeId;
  updatedAt: string;
  iconId: string;
}

export interface AdminTemplateTypeOption {
  id: AdminTemplateTypeFilterId;
  label: string;
}

export interface AdminTemplateSortOption {
  id: AdminTemplateSortId;
  label: string;
}

export interface AdminTemplateManagementData {
  templates: AdminTemplate[];
  typeOptions: AdminTemplateTypeOption[];
  sortOptions: AdminTemplateSortOption[];
  defaultTypeId: AdminTemplateTypeFilterId;
  defaultSortId: AdminTemplateSortId;
  pageSize: number;
  addNewLabel: string;
}

export interface AdminTemplateForm {
  type: AdminTemplateTypeId;
  question: string;
  answer: string;
  title: string;
  subtitle: string;
  iconId: string;
  iconFileName: string | null;
}
