import type { PublicCourse } from "@/components/public/public-course-card";
import type { AdminDashboardData } from "@/types/admin-dashboard.types";

const bestSellingCourses: PublicCourse[] = [
  {
    id: "ux-design-foundations",
    title: "Foundations of User Experience (UX) Design",
    slug: "foundations-user-experience-ux-design",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mamun",
    },
    lessons: 24,
    rating: 4.7,
    price: 400,
    originalPrice: 600,
  },
  {
    id: "web-design-php-laravel",
    title: "Web Design & Development with PHP & Laravel",
    slug: "web-design-development-php-laravel",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah",
    },
    lessons: 24,
    rating: 4.7,
    price: 400,
    originalPrice: 600,
  },
  {
    id: "negotiation-skills",
    title: "Negotiation Skills",
    slug: "negotiation-skills",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Negotiation",
    },
    lessons: 24,
    rating: 4.7,
    price: 400,
    originalPrice: 600,
  },
];

const salesRevenue = [
  { month: "Jan", revenue: 55000 },
  { month: "Feb", revenue: 35000 },
  { month: "Mar", revenue: 72000 },
  { month: "Apr", revenue: 48000 },
  { month: "May", revenue: 88000 },
  { month: "Jun", revenue: 62000 },
  { month: "Jul", revenue: 95000 },
  { month: "Aug", revenue: 78000 },
  { month: "Sep", revenue: 100000 },
  { month: "Oct", revenue: 85000 },
  { month: "Nov", revenue: 118000 },
  { month: "Dec", revenue: 92000 },
];

const monthlyEnrollment = [
  { month: "Jan", enrolledStudents: 970 },
  { month: "Feb", enrolledStudents: 900 },
  { month: "Mar", enrolledStudents: 820 },
  { month: "Apr", enrolledStudents: 740 },
  { month: "May", enrolledStudents: 620 },
  { month: "Jun", enrolledStudents: 450 },
  { month: "Jul", enrolledStudents: 520 },
  { month: "Aug", enrolledStudents: 640 },
  { month: "Sep", enrolledStudents: 760 },
  { month: "Oct", enrolledStudents: 850 },
  { month: "Nov", enrolledStudents: 940 },
  { month: "Dec", enrolledStudents: 880 },
];

const notifications = [
  {
    id: "admin-notif-1",
    type: "live" as const,
    title: "Upcoming LIVE Class",
    timeAgo: "3 minutes ago",
    description:
      "Your LIVE class on design for different platforms will start at 09:30 PM",
  },
  {
    id: "admin-notif-2",
    type: "course" as const,
    title: "Added Course",
    timeAgo: "5:08 AM",
    description:
      "'Wordpress Theme Development Master Class' workshop was created by bessie@gmail.com",
  },
  {
    id: "admin-notif-3",
    type: "user" as const,
    title: "Added User",
    timeAgo: "5:08 AM",
    description: "Maisha was added by bessie@gmail.com",
  },
  {
    id: "admin-notif-4",
    type: "discussion" as const,
    title: "Discussions",
    timeAgo: "12:08 PM",
    description:
      "You have 12 new messages from The Basics of User Experience Design lesson's discussion",
  },
];

export const adminDashboardData: AdminDashboardData = {
  stats: {
    totalCourses: 35,
    totalLearners: 4302,
    totalTeachers: 54,
    totalRevenue: 100000,
    totalCoursesDisplay: "35",
    totalLearnersDisplay: "4302",
    totalTeachersDisplay: "54",
    totalRevenueDisplay: "100K",
  },
  courseFilters: [
    { id: "ui-ux-design", label: "UI UX Design" },
    { id: "web-development", label: "Web Development" },
    { id: "digital-marketing", label: "Digital Marketing" },
  ],
  selectedCourseId: "ui-ux-design",
  notifications,
  notificationsEmpty: {
    message: "There is no notification for you at this time.",
  },
  notificationsViewAllHref: "/admin/support",
  salesRevenue,
  highlightedRevenueMonth: "Sep",
  courseStatistics: {
    completionPercent: 60,
    enrolledLearners: 5723,
    completedLearners: 500,
  },
  monthlyEnrollment,
  headerBadges: {
    messages: 2,
    notifications: 3,
  },
  bestSellingCourses,
};

/** Set arrays to `[]` and zero stats to preview the empty dashboard state. */
export const adminDashboardEmptyPreview: AdminDashboardData = {
  ...adminDashboardData,
  stats: {
    totalCourses: 0,
    totalLearners: 0,
    totalTeachers: 0,
    totalRevenue: 0,
    totalCoursesDisplay: "00",
    totalLearnersDisplay: "00",
    totalTeachersDisplay: "00",
    totalRevenueDisplay: "00",
  },
  notifications: [],
  salesRevenue: [],
  monthlyEnrollment: [],
  courseStatistics: {
    completionPercent: 0,
    enrolledLearners: 0,
    completedLearners: 0,
  },
  headerBadges: {
    messages: 2,
    notifications: 2,
  },
};

export function getAdminDashboard(): AdminDashboardData {
  return adminDashboardData;
}
