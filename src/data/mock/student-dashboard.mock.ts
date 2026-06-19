import type { PublicCourse } from "@/components/public/public-course-card";
import { ROUTES } from "@/constants";

export interface StudentDashboardStats {
  completed: number;
  inProgress: number;
  wishlists: number;
}

export interface UpcomingLiveClass {
  month: string;
  day: number;
  label: string;
  title: string;
  datetime: string;
  joinUrl?: string;
}

export type DashboardNotificationType = "live" | "assignment" | "quiz";

export interface DashboardNotification {
  id: string;
  type: DashboardNotificationType;
  title: string;
  timeAgo: string;
  description: string;
  isUnread?: boolean;
}

export interface StudentDashboardData {
  stats: StudentDashboardStats;
  upcomingLiveClass: UpcomingLiveClass | null;
  notifications: DashboardNotification[];
  recommendedCourses: PublicCourse[];
}

const recommendedCoursesDemo: PublicCourse[] = [
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
    id: "mern-development",
    title: "Fundamental of Web Development for MERN",
    slug: "fundamental-web-development-mern",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900&auto=format&fit=crop",
    instructor: {
      name: "Abdullah Mamun",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Teacher",
    },
    lessons: 24,
    rating: 4.7,
    price: 400,
    originalPrice: 600,
  },
];

/** Demo data — swap arrays to `[]` or set `upcomingLiveClass` to `null` to preview empty states. */
export const studentDashboardData: StudentDashboardData = {
  stats: {
    completed: 3,
    inProgress: 2,
    wishlists: 6,
  },
  upcomingLiveClass: {
    month: "May",
    day: 12,
    label: "Upcoming LIVE Class",
    title: "The Basics of User Experience Design",
    datetime: "Sunday, 9:00 PM",
    joinUrl: ROUTES.student.courseLive("hsc-25-online-batch", "live-l10"),
  },
  notifications: [
    {
      id: "notif-1",
      type: "live",
      title: "Upcoming LIVE Class",
      timeAgo: "3 minutes ago",
      description:
        "Your LIVE class on design for different platforms will start at 09:30 PM",
      isUnread: true,
    },
    {
      id: "notif-2",
      type: "assignment",
      title: "Assignment Assessment",
      timeAgo: "5:08 AM",
      description: "Teacher has finished assessing your assignment",
      isUnread: true,
    },
    {
      id: "notif-3",
      type: "quiz",
      title: "Quiz",
      timeAgo: "12:08 PM",
      description:
        "The time of giving quiz on design for different platforms will be started just in 5 minutes",
      isUnread: false,
    },
  ],
  recommendedCourses: recommendedCoursesDemo,
};

/** @deprecated Use studentDashboardData.stats */
export const studentDashboardStats = studentDashboardData.stats;

/** @deprecated Use studentDashboardData.recommendedCourses */
export const recommendedCourses = studentDashboardData.recommendedCourses;
