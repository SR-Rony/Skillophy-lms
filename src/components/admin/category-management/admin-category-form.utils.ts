import type { AdminCategory, AdminCategoryForm } from "@/types/admin-category-management.types";

export function createEmptyAdminCategoryForm(): AdminCategoryForm {
  return {
    name: "",
    isActive: true,
  };
}

export function createAdminCategoryFormFromCategory(category: AdminCategory): AdminCategoryForm {
  return {
    name: category.name,
    isActive: category.status === "active",
  };
}

export function isAdminCategoryFormValid(form: AdminCategoryForm) {
  return form.name.trim().length > 0;
}

export function createAdminCategoryId() {
  return `category-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function adminCategoryFormToCategory(
  form: AdminCategoryForm,
  categoryId: string,
  itemCount = 0
): AdminCategory {
  return {
    id: categoryId,
    name: form.name.trim(),
    itemCount,
    status: form.isActive ? "active" : "inactive",
  };
}
