import type { AdminJobOpening, AdminJobOpeningForm } from "@/types/admin-job-opening-management.types";

export function createAdminJobOpeningId() {
  return `job-opening-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

const defaultDescription =
  "We are looking for a talented and dynamic Visual Designer to join our growing product team. You will collaborate with researchers, product managers, and engineers to create intuitive interfaces and compelling visual experiences across web and mobile platforms.";

export function createDefaultAdminJobOpeningForm(): AdminJobOpeningForm {
  return {
    isActive: true,
    title: "Visual Designer",
    salary: "Negotiable",
    vacancy: "02",
    category: "product-design-research",
    jobType: "full-time",
    deadline: "2024-05-08",
    applyLink: "https://www.linkedin.com/jobs/collections/recommended",
    description: defaultDescription,
  };
}

export function createEmptyAdminJobOpeningForm(): AdminJobOpeningForm {
  return {
    isActive: true,
    title: "",
    salary: "",
    vacancy: "",
    category: "",
    jobType: "",
    deadline: "",
    applyLink: "",
    description: "",
  };
}

export function createAdminJobOpeningFormFromJob(jobOpening: AdminJobOpening): AdminJobOpeningForm {
  return {
    isActive: jobOpening.status === "active",
    title: jobOpening.title,
    salary: jobOpening.salary,
    vacancy: jobOpening.vacancy,
    category: jobOpening.categoryId,
    jobType: jobOpening.jobType,
    deadline: jobOpening.deadline,
    applyLink: jobOpening.applyLink,
    description: jobOpening.description,
  };
}

export function isAdminJobOpeningFormValid(form: AdminJobOpeningForm) {
  return (
    form.title.trim().length > 0 &&
    form.category.trim().length > 0 &&
    form.jobType.trim().length > 0 &&
    form.deadline.trim().length > 0
  );
}

export function getAdminJobOpeningCategoryLabel(
  categories: { value: string; label: string }[],
  value: string
) {
  return categories.find((option) => option.value === value)?.label ?? value;
}

export function getAdminJobOpeningCategoryValue(
  categories: { value: string; label: string }[],
  label: string
) {
  return categories.find((option) => option.label === label)?.value ?? "";
}

export function adminJobOpeningFormToJobOpening(
  form: AdminJobOpeningForm,
  id: string,
  categoryLabel: string
): AdminJobOpening {
  return {
    id,
    title: form.title.trim(),
    category: categoryLabel,
    categoryId: form.category,
    deadline: form.deadline,
    status: form.isActive ? "active" : "inactive",
    salary: form.salary,
    vacancy: form.vacancy,
    jobType: form.jobType,
    applyLink: form.applyLink,
    description: form.description,
  };
}
