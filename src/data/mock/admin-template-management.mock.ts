import type {
  AdminTemplate,
  AdminTemplateManagementData,
  AdminTemplateTypeId,
} from "@/types/admin-template-management.types";

const templateSeeds: Array<{
  name: string;
  type: AdminTemplateTypeId;
  updatedAt: string;
  iconId: string;
}> = [
  {
    name: "Good Internet Connection",
    type: "requirement",
    updatedAt: "2021-05-11",
    iconId: "globe",
  },
  {
    name: "Laptop, Desktop, Mobile device",
    type: "requirement",
    updatedAt: "2023-01-15",
    iconId: "monitor",
  },
  {
    name: "Resolute Mental Perseverance",
    type: "requirement",
    updatedAt: "2021-05-11",
    iconId: "brain",
  },
  {
    name: "Life Time Access",
    type: "what-youll-get",
    updatedAt: "2023-01-15",
    iconId: "infinity",
  },
  {
    name: "Money Back Guarantee",
    type: "what-youll-get",
    updatedAt: "2024-03-19",
    iconId: "circle-dollar-sign",
  },
  {
    name: "Is this course grow my career?",
    type: "faq",
    updatedAt: "2024-03-19",
    iconId: "help-circle",
  },
  {
    name: "How can we buy this course?",
    type: "faq",
    updatedAt: "2024-03-19",
    iconId: "circle-dollar-sign",
  },
  {
    name: "Downloadable Resources",
    type: "what-youll-get",
    updatedAt: "2024-03-19",
    iconId: "download",
  },
  {
    name: "Shareable Certificate",
    type: "what-youll-get",
    updatedAt: "2023-01-15",
    iconId: "award",
  },
];

function buildTemplates(): AdminTemplate[] {
  const templates: AdminTemplate[] = [];
  const total = 96;

  for (let index = 0; index < total; index += 1) {
    const seed = templateSeeds[index % templateSeeds.length];
    const cycle = Math.floor(index / templateSeeds.length);

    templates.push({
      id: `template-${index + 1}`,
      name: cycle === 0 ? seed.name : `${seed.name} ${cycle + 1}`,
      type: seed.type,
      updatedAt: seed.updatedAt,
      iconId: seed.iconId,
    });
  }

  return templates;
}

export const adminTemplateManagementData: AdminTemplateManagementData = {
  templates: buildTemplates(),
  typeOptions: [
    { id: "all", label: "All Type" },
    { id: "requirement", label: "Requirement" },
    { id: "what-youll-get", label: "What You'll Get" },
    { id: "faq", label: "Frequently Asked Questions" },
  ],
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "name-asc", label: "Template Name (A-Z)" },
    { id: "name-desc", label: "Template Name (Z-A)" },
    { id: "type-asc", label: "Type (A-Z)" },
    { id: "updated-desc", label: "Recently Updated" },
  ],
  defaultTypeId: "all",
  defaultSortId: "default",
  pageSize: 10,
  addNewLabel: "Add New",
};

export function getAdminTemplateManagement(): AdminTemplateManagementData {
  return adminTemplateManagementData;
}
