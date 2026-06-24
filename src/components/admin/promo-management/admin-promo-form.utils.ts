import type { AdminPromo, AdminPromoForm } from "@/types/admin-promo-management.types";

export function createEmptyAdminPromoForm(): AdminPromoForm {
  return {
    name: "",
    isActive: true,
    courseScopeId: "all",
    userIds: [],
    isAllUsers: false,
    discountType: "percentage",
    discountValue: "20",
  };
}

export function createAdminPromoFormFromPromo(promo: AdminPromo): AdminPromoForm {
  return {
    name: promo.name,
    isActive: promo.status === "active",
    courseScopeId: promo.courseScopeId,
    userIds: [...promo.userIds],
    isAllUsers: promo.isAllUsers,
    discountType: promo.discountType,
    discountValue: `${promo.discountValue}`,
  };
}

export function isAdminPromoFormValid(form: AdminPromoForm) {
  const discountValue = Number(form.discountValue);
  return form.name.trim().length > 0 && Number.isFinite(discountValue) && discountValue > 0;
}

export function createAdminPromoId() {
  return `promo-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function adminPromoFormToPromo(
  form: AdminPromoForm,
  promoId: string,
  existing?: AdminPromo
): AdminPromo {
  const discountValue = Number(form.discountValue);
  const userCount = form.isAllUsers ? 0 : form.userIds.length;

  return {
    id: promoId,
    name: form.name.trim(),
    courseCount: existing?.courseCount ?? (form.courseScopeId === "all" ? 56 : 1),
    userCount: form.isAllUsers ? (existing?.userCount ?? 6) : userCount,
    discountType: form.discountType,
    discountValue,
    categoryId: existing?.categoryId ?? "popular",
    status: form.isActive ? "active" : "inactive",
    courseScopeId: form.courseScopeId,
    userIds: form.isAllUsers ? [] : [...form.userIds],
    isAllUsers: form.isAllUsers,
  };
}
