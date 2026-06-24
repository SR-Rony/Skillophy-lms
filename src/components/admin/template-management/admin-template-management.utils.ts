import {
  Award,
  Brain,
  CircleDollarSign,
  Download,
  Globe,
  HelpCircle,
  Infinity,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import type {
  AdminTemplate,
  AdminTemplateSortId,
  AdminTemplateTypeFilterId,
  AdminTemplateTypeId,
} from "@/types/admin-template-management.types";

const typeOrder: Record<AdminTemplateTypeId, number> = {
  requirement: 0,
  "what-youll-get": 1,
  faq: 2,
};

const templateIconMap: Record<string, LucideIcon> = {
  globe: Globe,
  monitor: Monitor,
  brain: Brain,
  infinity: Infinity,
  "circle-dollar-sign": CircleDollarSign,
  "help-circle": HelpCircle,
  download: Download,
  award: Award,
};

export function getAdminTemplateIcon(iconId: string) {
  return templateIconMap[iconId] ?? Globe;
}

export function formatAdminTemplateType(type: AdminTemplateTypeId) {
  const labels: Record<AdminTemplateTypeId, string> = {
    requirement: "Requirement",
    "what-youll-get": "What You'll Get",
    faq: "Frequently Asked Questions",
  };

  return labels[type];
}

export function formatAdminTemplateUpdatedAt(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) {
    return value;
  }

  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function filterAdminTemplates(
  templates: AdminTemplate[],
  searchQuery: string,
  typeId: AdminTemplateTypeFilterId
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  return templates.filter((template) => {
    const matchesType = typeId === "all" || template.type === typeId;
    if (!matchesType) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    return (
      template.name.toLowerCase().includes(normalizedSearch) ||
      formatAdminTemplateType(template.type).toLowerCase().includes(normalizedSearch)
    );
  });
}

export function sortAdminTemplates(templates: AdminTemplate[], sortId: AdminTemplateSortId) {
  const sorted = [...templates];

  switch (sortId) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "type-asc":
      return sorted.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);
    case "updated-desc":
      return sorted.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    default:
      return sorted;
  }
}

export function paginateAdminTemplates(
  templates: AdminTemplate[],
  currentPage: number,
  pageSize: number
) {
  const totalPages = Math.max(1, Math.ceil(templates.length / pageSize));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const start = (safePage - 1) * pageSize;

  return {
    items: templates.slice(start, start + pageSize),
    totalPages,
    currentPage: safePage,
  };
}
