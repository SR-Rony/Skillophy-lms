import type {
  AdminWorkshop,
  AdminWorkshopManagementData,
  AdminWorkshopStatus,
} from "@/types/admin-workshop-management.types";

const conductorMaisha = {
  name: "Maisha Afrose",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha%20Afrose",
};

const conductorAbdullah = {
  name: "Abdullah Mamun",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah%20Mamun",
};

const categoryPool = [
  { category: "Free", categoryId: "free" as const },
  { category: "Job", categoryId: "job" as const },
  { category: "Vocational", categoryId: "vocational" as const },
  { category: "Skill Development", categoryId: "skill-development" as const },
  { category: "Popular", categoryId: "popular" as const },
];

const workshopSeeds: Omit<AdminWorkshop, "id">[] = [
  {
    title: "Wordpress Theme Development Master Class",
    thumbnail: "https://images.unsplash.com/photo-1461740680684-dccba630e2f6?w=120&h=120&fit=crop",
    conductorName: conductorMaisha.name,
    conductorAvatar: conductorMaisha.avatar,
    category: "Free",
    categoryId: "free",
    totalLearners: 1240,
    date: "2021-05-11",
    time: "10:30 PM",
    status: "completed",
  },
  {
    title: "UI/UX Design Fundamentals Workshop",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=120&h=120&fit=crop",
    conductorName: conductorMaisha.name,
    conductorAvatar: conductorMaisha.avatar,
    category: "Job",
    categoryId: "job",
    totalLearners: 890,
    date: "2021-06-18",
    time: "08:00 PM",
    status: "completed",
  },
  {
    title: "Digital Marketing Strategy Bootcamp",
    thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=120&h=120&fit=crop",
    conductorName: conductorAbdullah.name,
    conductorAvatar: conductorAbdullah.avatar,
    category: "Vocational",
    categoryId: "vocational",
    totalLearners: 654,
    date: "2021-07-22",
    time: "07:30 PM",
    status: "draft",
  },
  {
    title: "Graphic Design with Adobe Illustrator",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&fit=crop",
    conductorName: conductorMaisha.name,
    conductorAvatar: conductorMaisha.avatar,
    category: "Skill Development",
    categoryId: "skill-development",
    totalLearners: 1120,
    date: "2021-08-05",
    time: "09:00 PM",
    status: "completed",
  },
  {
    title: "Freelancing Career Kickstart Session",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&h=120&fit=crop",
    conductorName: conductorAbdullah.name,
    conductorAvatar: conductorAbdullah.avatar,
    category: "Popular",
    categoryId: "popular",
    totalLearners: 2100,
    date: "2021-09-14",
    time: "06:30 PM",
    status: "draft",
  },
  {
    title: "React.js Live Project Workshop",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
    conductorName: conductorMaisha.name,
    conductorAvatar: conductorMaisha.avatar,
    category: "Skill Development",
    categoryId: "skill-development",
    totalLearners: 980,
    date: "2021-10-02",
    time: "08:30 PM",
    status: "completed",
  },
];

const extraTitles = [
  "Content Writing for Beginners",
  "SEO Masterclass for Marketers",
  "Video Editing with Premiere Pro",
  "Public Speaking Confidence Lab",
  "Data Entry & Office Productivity",
];

const thumbnails = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=120&h=120&fit=crop",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=120&h=120&fit=crop",
];

function buildWorkshops(): AdminWorkshop[] {
  const workshops: AdminWorkshop[] = workshopSeeds.map((workshop, index) => ({
    id: `workshop-${index + 1}`,
    ...workshop,
  }));

  for (let index = 0; index < 90; index += 1) {
    const seed = workshopSeeds[index % workshopSeeds.length];
    const category = categoryPool[index % categoryPool.length];
    const status: AdminWorkshopStatus = index % 5 === 0 ? "draft" : "completed";
    const month = (index % 12) + 1;
    const day = (index % 27) + 1;

    workshops.push({
      id: `workshop-${index + 7}`,
      title: index < extraTitles.length ? extraTitles[index] : `${seed.title} ${index + 1}`,
      thumbnail: thumbnails[index % thumbnails.length],
      conductorName: index % 2 === 0 ? conductorMaisha.name : conductorAbdullah.name,
      conductorAvatar: index % 2 === 0 ? conductorMaisha.avatar : conductorAbdullah.avatar,
      category: category.category,
      categoryId: category.categoryId,
      totalLearners: 400 + index * 48,
      date: `2022-${`${month}`.padStart(2, "0")}-${`${day}`.padStart(2, "0")}`,
      time: index % 2 === 0 ? "10:30 PM" : "08:00 PM",
      status,
    });
  }

  return workshops;
}

export const adminWorkshopManagementMock: AdminWorkshopManagementData = {
  workshops: buildWorkshops(),
  categoryOptions: [
    { id: "all", label: "All Category" },
    { id: "free", label: "Free Courses" },
    { id: "job", label: "Job Courses" },
    { id: "vocational", label: "Vocational Courses" },
    { id: "skill-development", label: "Skill Development" },
    { id: "popular", label: "Popular" },
  ],
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "name-asc", label: "Name (A-Z)" },
    { id: "name-desc", label: "Name (Z-A)" },
    { id: "learners-desc", label: "Most Learners" },
    { id: "date-desc", label: "Latest Date" },
    { id: "status-asc", label: "Status" },
  ],
  exportOptions: [
    { id: "csv", label: "Export as CSV" },
    { id: "xsl", label: "Export as XSL" },
  ],
  defaultCategoryId: "all",
  defaultSortId: "default",
  defaultSelectedIds: [],
  pageSize: 10,
  exportLabel: "Export",
  addNewLabel: "Add New",
};

export function getAdminWorkshopManagement() {
  return adminWorkshopManagementMock;
}
