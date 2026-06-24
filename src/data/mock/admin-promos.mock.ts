import type {
  AdminPromo,
  AdminPromoManagementData,
  AdminPromoStatus,
} from "@/types/admin-promo-management.types";

interface PromoSeed {
  name: string;
  courseCount: number;
  userCount: number;
  discountType: AdminPromo["discountType"];
  discountValue: number;
  categoryId: AdminPromo["categoryId"];
  status: AdminPromoStatus;
  courseScopeId?: string;
  userIds?: string[];
  isAllUsers?: boolean;
}

const customizePromoSeeds: PromoSeed[] = [
  {
    name: "UIUX DESIGN",
    courseCount: 56,
    userCount: 128,
    discountType: "percentage",
    discountValue: 10,
    categoryId: "skill-development",
    status: "active",
  },
  {
    name: "WEBDESIGN",
    courseCount: 12,
    userCount: 64,
    discountType: "percentage",
    discountValue: 10,
    categoryId: "free",
    status: "active",
  },
  {
    name: "EIDKHUSHI",
    courseCount: 45,
    userCount: 3,
    discountType: "percentage",
    discountValue: 15,
    categoryId: "popular",
    status: "inactive",
    courseScopeId: "all",
    userIds: ["promo-user-abdullah", "promo-user-guy", "promo-user-darrell"],
    isAllUsers: false,
  },
  {
    name: "AMORAKUSHE",
    courseCount: 13,
    userCount: 38,
    discountType: "flat",
    discountValue: 400,
    categoryId: "job",
    status: "active",
  },
  {
    name: "SHADHINOTA",
    courseCount: 28,
    userCount: 96,
    discountType: "percentage",
    discountValue: 30,
    categoryId: "academic",
    status: "active",
  },
  {
    name: "SKILLUP25",
    courseCount: 34,
    userCount: 142,
    discountType: "percentage",
    discountValue: 20,
    categoryId: "vocational",
    status: "active",
  },
  {
    name: "FREESTART",
    courseCount: 8,
    userCount: 52,
    discountType: "flat",
    discountValue: 250,
    categoryId: "free",
    status: "inactive",
  },
  {
    name: "DESIGNPRO",
    courseCount: 19,
    userCount: 74,
    discountType: "percentage",
    discountValue: 12,
    categoryId: "skill-development",
    status: "active",
  },
];

const bulkDiscountSeeds: PromoSeed[] = [
  {
    name: "BULK SUMMER",
    courseCount: 120,
    userCount: 540,
    discountType: "percentage",
    discountValue: 25,
    categoryId: "popular",
    status: "active",
  },
  {
    name: "TEAM PACK",
    courseCount: 80,
    userCount: 320,
    discountType: "percentage",
    discountValue: 35,
    categoryId: "job",
    status: "active",
  },
  {
    name: "ENTERPRISE",
    courseCount: 200,
    userCount: 890,
    discountType: "flat",
    discountValue: 1500,
    categoryId: "academic",
    status: "inactive",
  },
  {
    name: "STARTUP BULK",
    courseCount: 45,
    userCount: 180,
    discountType: "percentage",
    discountValue: 18,
    categoryId: "vocational",
    status: "active",
  },
];

const categoryIds = [
  "free",
  "job",
  "vocational",
  "skill-development",
  "popular",
  "academic",
] as const;

function buildPromos(seeds: PromoSeed[], prefix: string, totalCount = 96): AdminPromo[] {
  const promos: AdminPromo[] = [];

  for (let index = 0; index < totalCount; index += 1) {
    const seed = seeds[index % seeds.length];
    const cycle = Math.floor(index / seeds.length);

    promos.push({
      id: `${prefix}-${index + 1}`,
      name: cycle === 0 ? seed.name : `${seed.name}${cycle + 1}`,
      courseCount: Math.max(1, seed.courseCount - (index % 7)),
      userCount: Math.max(1, seed.userCount - (index % 9)),
      discountType: seed.discountType,
      discountValue: seed.discountValue,
      categoryId: categoryIds[index % categoryIds.length],
      status: index % 6 === 0 ? "inactive" : seed.status,
      courseScopeId: seed.courseScopeId ?? "all",
      userIds: seed.userIds ?? [],
      isAllUsers: seed.isAllUsers ?? false,
    });
  }

  return promos;
}

export const adminPromoManagementMock: AdminPromoManagementData = {
  customizePromo: {
    promos: buildPromos(customizePromoSeeds, "customize-promo"),
  },
  bulkDiscount: {
    promos: buildPromos(bulkDiscountSeeds, "bulk-discount", 64),
  },
  categoryOptions: [
    { id: "all", label: "All Category" },
    { id: "free", label: "Free Courses" },
    { id: "job", label: "Job Courses" },
    { id: "vocational", label: "Vocational Courses" },
    { id: "skill-development", label: "Skill Development" },
    { id: "popular", label: "Popular" },
    { id: "academic", label: "Academic" },
  ],
  courseOptions: [
    { id: "all", label: "All Courses" },
    { id: "course-ux-foundations", label: "Foundations of User Experience (UX) Design" },
    { id: "course-materials-ux", label: "Materials and Processes for UX Design" },
    { id: "course-dynamic-ui", label: "Build Dynamic User Interfaces (UI)" },
    { id: "course-ux-research", label: "Conduct UX Research and Test Early Concepts" },
  ],
  userOptions: [
    {
      id: "promo-user-abdullah",
      name: "Abdullah Mamun",
      email: "abdullah@gmail.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah%20Mamun",
    },
    {
      id: "promo-user-guy",
      name: "Guy Hawkins",
      email: "guy.hawkins@gmail.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Guy%20Hawkins",
    },
    {
      id: "promo-user-maisha",
      name: "Maisha Afrose",
      email: "maisha@gmail.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha%20Afrose",
    },
    {
      id: "promo-user-brooklyn",
      name: "Brooklyn Simmons",
      email: "brooklyn.simmons@gmail.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Brooklyn%20Simmons",
    },
    {
      id: "promo-user-darrell",
      name: "Darrell Steward",
      email: "darrell.steward@gmail.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Darrell%20Steward",
    },
    {
      id: "promo-user-eleanor",
      name: "Eleanor Pena",
      email: "eleanor.pena@gmail.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Eleanor%20Pena",
    },
  ],
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "name-asc", label: "Name (A-Z)" },
    { id: "name-desc", label: "Name (Z-A)" },
    { id: "courses-desc", label: "Most Courses" },
    { id: "users-desc", label: "Most Users" },
    { id: "discount-desc", label: "Highest Discount" },
    { id: "status-asc", label: "Status" },
  ],
  defaultCategoryId: "all",
  defaultSortId: "default",
  pageSize: 10,
  addNewLabel: "Add New",
};

export function getAdminPromoManagement() {
  return adminPromoManagementMock;
}
