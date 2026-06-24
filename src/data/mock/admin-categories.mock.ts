import type {
  AdminCategory,
  AdminCategoryManagementData,
  AdminCategoryStatus,
} from "@/types/admin-category-management.types";

interface CategorySeed {
  name: string;
  itemCount: number;
  status: AdminCategoryStatus;
}

const courseCategorySeeds: CategorySeed[] = [
  { name: "Free", itemCount: 54, status: "active" },
  { name: "Job", itemCount: 12, status: "active" },
  { name: "Vocational", itemCount: 10, status: "inactive" },
  { name: "Skill Development", itemCount: 54, status: "active" },
  { name: "Popular", itemCount: 12, status: "inactive" },
  { name: "Academic", itemCount: 10, status: "active" },
  { name: "Technology", itemCount: 28, status: "active" },
  { name: "Business", itemCount: 19, status: "active" },
  { name: "Creative", itemCount: 15, status: "inactive" },
  { name: "Language", itemCount: 22, status: "active" },
];

const workshopCategorySeeds: CategorySeed[] = [
  { name: "Design", itemCount: 18, status: "active" },
  { name: "Leadership", itemCount: 9, status: "active" },
  { name: "Marketing", itemCount: 14, status: "inactive" },
  { name: "Productivity", itemCount: 11, status: "active" },
  { name: "Communication", itemCount: 7, status: "active" },
  { name: "Finance", itemCount: 6, status: "inactive" },
  { name: "Entrepreneurship", itemCount: 13, status: "active" },
  { name: "Career Growth", itemCount: 10, status: "active" },
];

const jobPositionCategorySeeds: CategorySeed[] = [
  { name: "Developer", itemCount: 24, status: "active" },
  { name: "Designer", itemCount: 16, status: "active" },
  { name: "Manager", itemCount: 11, status: "inactive" },
  { name: "Analyst", itemCount: 9, status: "active" },
  { name: "Engineer", itemCount: 20, status: "active" },
  { name: "Consultant", itemCount: 8, status: "inactive" },
  { name: "Specialist", itemCount: 14, status: "active" },
  { name: "Coordinator", itemCount: 6, status: "active" },
];

function buildCategories(
  seeds: CategorySeed[],
  prefix: string,
  totalCount = 96
): AdminCategory[] {
  const categories: AdminCategory[] = [];

  for (let index = 0; index < totalCount; index += 1) {
    const seed = seeds[index % seeds.length];
    const cycle = Math.floor(index / seeds.length);

    categories.push({
      id: `${prefix}-${index + 1}`,
      name: cycle === 0 ? seed.name : `${seed.name} ${cycle + 1}`,
      itemCount: Math.max(1, seed.itemCount - (index % 5)),
      status: index % 7 === 0 ? "inactive" : seed.status,
    });
  }

  return categories;
}

export const adminCategoryManagementMock: AdminCategoryManagementData = {
  course: {
    categories: buildCategories(courseCategorySeeds, "course-category"),
    countColumnLabel: "Course Count",
  },
  workshop: {
    categories: buildCategories(workshopCategorySeeds, "workshop-category", 64),
    countColumnLabel: "Workshop Count",
  },
  jobPosition: {
    categories: buildCategories(jobPositionCategorySeeds, "job-category", 64),
    countColumnLabel: "Job Count",
  },
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "name-asc", label: "Name (A-Z)" },
    { id: "name-desc", label: "Name (Z-A)" },
    { id: "count-desc", label: "Count (High-Low)" },
    { id: "count-asc", label: "Count (Low-High)" },
    { id: "status-asc", label: "Status" },
  ],
  defaultSortId: "default",
  pageSize: 10,
  addNewLabel: "Add New",
};

export function getAdminCategoryManagement() {
  return adminCategoryManagementMock;
}
