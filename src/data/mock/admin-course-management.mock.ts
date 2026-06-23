import type {
  AdminCourseManagementData,
  AdminRecordedCourse,
  AdminRecordedCourseCategoryId,
  AdminRecordedCourseStatus,
} from "@/types/admin-course-management.types";

const teacherMaisha = {
  name: "Maisha Afrose",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha%20Afrose",
};

const featuredCourseSeeds: Omit<AdminRecordedCourse, "id">[] = [
  {
    title: "Foundations of User Experience (UX) Design",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    category: "Free",
    categoryId: "free",
    totalLearners: 55783,
    price: 2400,
    status: "published",
    rating: 5.0,
  },
  {
    title: "Materials and Processes for UX Design",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    category: "Job",
    categoryId: "job",
    totalLearners: 48210,
    price: 3200,
    status: "published",
    rating: 4.8,
  },
  {
    title: "Build Dynamic User Interfaces (UI)",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    category: "Vocational",
    categoryId: "vocational",
    totalLearners: 39142,
    price: 2800,
    status: "published",
    rating: 4.9,
  },
  {
    title: "Conduct UX Research and Test Early Concepts",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    category: "Skill Development",
    categoryId: "skill-development",
    totalLearners: 33456,
    price: 2600,
    status: "published",
    rating: 4.7,
  },
  {
    title: "Foundations of UX Design",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    category: "Popular",
    categoryId: "popular",
    totalLearners: 61204,
    price: 2200,
    status: "published",
    rating: 5.0,
  },
  {
    title: "We design for creators—digital and physical experiences that bring joy.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    category: "Academic",
    categoryId: "popular",
    totalLearners: 28790,
    price: 3100,
    status: "published",
    rating: 4.6,
  },
  {
    title: "Build Dynamic User Interfaces (UI)",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    category: "Creative",
    categoryId: "vocational",
    totalLearners: 15420,
    price: 2400,
    status: "draft",
    rating: 4.5,
  },
];

const extraTitles = [
  "Responsive Web Design Essentials",
  "User Journey Mapping Workshop",
  "Portfolio Building for UX Designers",
  "Design Systems for Product Teams",
  "Accessibility in Digital Products",
  "Prototyping with Figma",
  "Visual Design Fundamentals",
  "Content Strategy for UX Writers",
  "Mobile App Design Patterns",
  "Service Design Foundations",
];

const categoryPool: Array<{
  category: string;
  categoryId: Exclude<AdminRecordedCourseCategoryId, "all">;
}> = [
  { category: "Free", categoryId: "free" },
  { category: "Job", categoryId: "job" },
  { category: "Vocational", categoryId: "vocational" },
  { category: "Skill Development", categoryId: "skill-development" },
  { category: "Popular", categoryId: "popular" },
  { category: "Academic", categoryId: "popular" },
  { category: "Creative", categoryId: "vocational" },
];

function buildRecordedCourses(): AdminRecordedCourse[] {
  const courses: AdminRecordedCourse[] = featuredCourseSeeds.map((course, index) => ({
    id: `recorded-course-${index + 1}`,
    ...course,
  }));

  for (let index = 0; index < 93; index += 1) {
    const category = categoryPool[index % categoryPool.length];
    const status: AdminRecordedCourseStatus = index % 9 === 0 ? "draft" : "published";

    courses.push({
      id: `recorded-course-${index + 8}`,
      title: extraTitles[index % extraTitles.length],
      thumbnail: [
        "https://images.unsplash.com/photo-1531403009284-0f801d84c1b4?w=120&h=120&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=120&h=120&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=120&h=120&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&h=120&fit=crop",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=120&fit=crop",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=120&h=120&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=120&h=120&fit=crop",
        "https://images.unsplash.com/photo-1531403009284-0f801d84c1b4?w=120&h=120&fit=crop",
      ][index % 10],
      teacherName: teacherMaisha.name,
      teacherAvatar: teacherMaisha.avatar,
      category: category.category,
      categoryId: category.categoryId,
      totalLearners: 12000 + index * 437,
      price: 1800 + (index % 7) * 200,
      status,
      rating: Number((4.2 + (index % 8) * 0.1).toFixed(1)),
    });
  }

  return courses;
}

export const adminCourseManagementData: AdminCourseManagementData = {
  recordedCourses: {
    courses: buildRecordedCourses(),
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
      { id: "price-desc", label: "Highest Price" },
      { id: "price-asc", label: "Lowest Price" },
      { id: "rating-desc", label: "Highest Rating" },
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
  },
};

export function getAdminCourseManagement(): AdminCourseManagementData {
  return adminCourseManagementData;
}
