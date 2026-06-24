export type AdminPromoManagementTab = "customize-promo" | "bulk-discount";

export type AdminPromoStatus = "active" | "inactive";

export type AdminPromoDiscountType = "percentage" | "flat";

export type AdminPromoCategoryId =
  | "all"
  | "free"
  | "job"
  | "vocational"
  | "skill-development"
  | "popular"
  | "academic";

export type AdminPromoSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "courses-desc"
  | "users-desc"
  | "discount-desc"
  | "status-asc";

export interface AdminPromo {
  id: string;
  name: string;
  courseCount: number;
  userCount: number;
  discountType: AdminPromoDiscountType;
  discountValue: number;
  categoryId: Exclude<AdminPromoCategoryId, "all">;
  status: AdminPromoStatus;
  courseScopeId: string;
  userIds: string[];
  isAllUsers: boolean;
}

export interface AdminPromoCourseOption {
  id: string;
  label: string;
}

export interface AdminPromoUserOption {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface AdminPromoForm {
  name: string;
  isActive: boolean;
  courseScopeId: string;
  userIds: string[];
  isAllUsers: boolean;
  discountType: AdminPromoDiscountType;
  discountValue: string;
}

export type AdminPromoDrawerMode = "add" | "edit";

export interface AdminPromoCategoryOption {
  id: AdminPromoCategoryId;
  label: string;
}

export interface AdminPromoSortOption {
  id: AdminPromoSortId;
  label: string;
}

export interface AdminPromoTabData {
  promos: AdminPromo[];
}

export interface AdminPromoManagementData {
  customizePromo: AdminPromoTabData;
  bulkDiscount: AdminPromoTabData;
  categoryOptions: AdminPromoCategoryOption[];
  courseOptions: AdminPromoCourseOption[];
  userOptions: AdminPromoUserOption[];
  sortOptions: AdminPromoSortOption[];
  defaultCategoryId: AdminPromoCategoryId;
  defaultSortId: AdminPromoSortId;
  pageSize: number;
  addNewLabel: string;
}
