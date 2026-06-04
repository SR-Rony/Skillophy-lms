import {
  BookOpen,
  BriefcaseBusiness,
  Clapperboard,
  Gem,
  Layers3,
  Palette,
  PlayCircle,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { PublicCourse, PublicCourseCardVariant } from "@/components/public/public-course-card";

export type CategoryId =
  | "free"
  | "job"
  | "popular"
  | "skill"
  | "vocational"
  | "academic"
  | "model-test"
  | "bundle"
  | "creative"
  | "workshop";

export interface AllCoursesCategory {
  id: CategoryId;
  label: string;
  icon: LucideIcon;
  courses: PublicCourse[];
  variant: PublicCourseCardVariant;
  showInFilter?: boolean;
  filterLabel?: string;
  cardBadge?: "live" | "workshop-live";
  hasNotification?: boolean;
}

export const VISIBLE_CATEGORY_COUNT = 5;

export const allCoursesCategories: AllCoursesCategory[] = [
  {
    id: "free",
    label: "Free Courses",
    icon: PlayCircle,
    variant: "free",
    showInFilter: true,
    courses: [
      {
        id: "free-facebook-marketing",
        title: "Facebook Marketing",
        slug: "facebook-marketing",
        image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah",
        },
        lessons: 24,
        rating: 4.7,
      },
      {
        id: "free-web-design",
        title: "Web Design",
        slug: "web-design",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maruf",
        },
        lessons: 24,
        rating: 4.7,
      },
      {
        id: "free-communication-hacks",
        title: "Communication Hacks",
        slug: "communication-hacks",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop",
        instructor: {
          name: "Nazim Ahmed",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nazim",
        },
        lessons: 24,
        rating: 4.7,
      },
      {
        id: "free-english-everyday",
        title: "English for Every day",
        slug: "english-for-every-day",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=English",
        },
        lessons: 24,
        rating: 4.7,
      },
      {
        id: "free-quran-learning",
        title: "Quran Learning",
        slug: "quran-learning",
        image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=900&auto=format&fit=crop",
        instructor: {
          name: "Ejazur Rahman",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ejazur",
        },
        lessons: 24,
        rating: 4.7,
      },
      {
        id: "free-personal-health",
        title: "Personal Health",
        slug: "personal-health",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Health",
        },
        lessons: 24,
        rating: 4.7,
      },
    ],
  },
  {
    id: "job",
    label: "Job Courses",
    icon: BriefcaseBusiness,
    variant: "paid",
    showInFilter: true,
    courses: [
      {
        id: "job-interview-preparation",
        title: "Interview Preparation",
        slug: "interview-preparation",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop",
        instructor: {
          name: "Hasib Alom",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Hasib",
        },
        lessons: 24,
        rating: 4.7,
        price: 1800,
        originalPrice: 2200,
      },
      {
        id: "job-career-development",
        title: "Career Development",
        slug: "career-development",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop",
        instructor: {
          name: "Mizanur Rahman",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mizanur",
        },
        lessons: 24,
        rating: 4.7,
        price: 2000,
        originalPrice: 2400,
      },
      {
        id: "job-workplace-excellence",
        title: "Workplace Excellence",
        slug: "workplace-excellence",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop",
        instructor: {
          name: "Haidaruzzaman Sujon",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sujon",
        },
        lessons: 24,
        rating: 4.7,
        price: 1600,
        originalPrice: 1900,
      },
      {
        id: "job-team-management",
        title: "Team Management",
        slug: "team-management",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Team",
        },
        lessons: 24,
        rating: 4.7,
        price: 1700,
        originalPrice: 2100,
      },
      {
        id: "job-business-strategy",
        title: "Business Strategy",
        slug: "business-strategy",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Strategy",
        },
        lessons: 24,
        rating: 4.7,
        price: 2200,
        originalPrice: 2600,
      },
      {
        id: "job-professional-skills",
        title: "Professional Job Skills",
        slug: "professional-job-skills",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop",
        instructor: {
          name: "Hasib Alom",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Professional",
        },
        lessons: 24,
        rating: 4.7,
        price: 1900,
        originalPrice: 2300,
      },
    ],
  },
  {
    id: "popular",
    label: "Popular",
    icon: Sparkles,
    variant: "paid",
    showInFilter: true,
    courses: [
      {
        id: "popular-facebook-marketing",
        title: "Facebook Marketing",
        slug: "facebook-marketing",
        image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Abdullah",
        },
        lessons: 24,
        rating: 4.7,
        price: 2400,
        originalPrice: 2600,
      },
      {
        id: "popular-personal-finance",
        title: "Personal Finance",
        slug: "personal-finance",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900&auto=format&fit=crop",
        instructor: {
          name: "Hashibur Alam",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Finance",
        },
        lessons: 24,
        rating: 4.7,
        price: 2000,
        originalPrice: 2300,
      },
      {
        id: "popular-video-editing",
        title: "Video Editing",
        slug: "video-editing",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=900&auto=format&fit=crop",
        instructor: {
          name: "Haidaruzzaman Sujon",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Video",
        },
        lessons: 24,
        rating: 4.7,
        price: 1400,
        originalPrice: 1600,
      },
      {
        id: "popular-microsoft-excel",
        title: "Microsoft Excel",
        slug: "microsoft-excel",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&auto=format&fit=crop",
        instructor: {
          name: "Mizanur Rahman",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Excel",
        },
        lessons: 24,
        rating: 4.7,
        price: 2000,
        originalPrice: 2100,
      },
      {
        id: "popular-web-design",
        title: "Web Design",
        slug: "web-design",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Web",
        },
        lessons: 24,
        rating: 4.7,
        price: 1400,
        originalPrice: 1700,
      },
      {
        id: "popular-personal-health",
        title: "Personal Health",
        slug: "personal-health",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Health",
        },
        lessons: 24,
        rating: 4.7,
        price: 1800,
        originalPrice: 2000,
      },
    ],
  },
  {
    id: "skill",
    label: "Skill Development & IT",
    icon: Gem,
    variant: "paid",
    showInFilter: true,
    filterLabel: "Skill Development",
    courses: [
      {
        id: "skill-advanced-javascript",
        title: "Advanced JavaScript",
        slug: "advanced-javascript",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=JavaScript",
        },
        lessons: 24,
        rating: 4.7,
        price: 2200,
        originalPrice: 2500,
      },
      {
        id: "skill-react-mastery",
        title: "React Mastery",
        slug: "react-mastery",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&auto=format&fit=crop",
        instructor: {
          name: "Haidaruzzaman Sujon",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=React",
        },
        lessons: 24,
        rating: 4.7,
        price: 2400,
        originalPrice: 2800,
      },
      {
        id: "skill-python-fundamentals",
        title: "Python Fundamentals",
        slug: "python-fundamentals",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=900&auto=format&fit=crop",
        instructor: {
          name: "Mizanur Rahman",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Python",
        },
        lessons: 24,
        rating: 4.7,
        price: 1900,
        originalPrice: 2200,
      },
      {
        id: "skill-docker",
        title: "Mastering Docker",
        slug: "mastering-docker",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&auto=format&fit=crop",
        instructor: {
          name: "Hashibur Alam",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Docker",
        },
        lessons: 24,
        rating: 4.7,
        price: 2300,
        originalPrice: 2600,
      },
      {
        id: "skill-cloud-deployment",
        title: "Cloud Deployment",
        slug: "cloud-deployment",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Cloud",
        },
        lessons: 24,
        rating: 4.7,
        price: 2100,
        originalPrice: 2400,
      },
      {
        id: "skill-database-design",
        title: "Database Design",
        slug: "database-design",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Database",
        },
        lessons: 24,
        rating: 4.7,
        price: 1600,
        originalPrice: 1900,
      },
    ],
  },
  {
    id: "vocational",
    label: "Vocational Courses",
    icon: Wrench,
    variant: "paid",
    showInFilter: true,
    filterLabel: "Pre-recorded",
    courses: [
      {
        id: "vocational-electrical-work",
        title: "Electrical Work",
        slug: "electrical-work",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Electrical",
        },
        lessons: 24,
        rating: 4.7,
        price: 1800,
        originalPrice: 2100,
      },
      {
        id: "vocational-plumbing-basics",
        title: "Plumbing Basics",
        slug: "plumbing-basics",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&auto=format&fit=crop",
        instructor: {
          name: "Hashibur Alam",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Plumbing",
        },
        lessons: 24,
        rating: 4.7,
        price: 1700,
        originalPrice: 2000,
      },
      {
        id: "vocational-carpentry",
        title: "Carpentry Skills",
        slug: "carpentry-skills",
        image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=900&auto=format&fit=crop",
        instructor: {
          name: "Mizanur Rahman",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Carpentry",
        },
        lessons: 24,
        rating: 4.7,
        price: 1600,
        originalPrice: 1900,
      },
      {
        id: "vocational-welding",
        title: "Welding Techniques",
        slug: "welding-techniques",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&auto=format&fit=crop",
        instructor: {
          name: "Haidaruzzaman Sujon",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Welding",
        },
        lessons: 24,
        rating: 4.7,
        price: 2000,
        originalPrice: 2300,
      },
      {
        id: "vocational-hvac",
        title: "HVAC Systems",
        slug: "hvac-systems",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=HVAC",
        },
        lessons: 24,
        rating: 4.7,
        price: 2100,
        originalPrice: 2400,
      },
      {
        id: "vocational-auto-repair",
        title: "Auto Repair",
        slug: "auto-repair",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Auto",
        },
        lessons: 24,
        rating: 4.7,
        price: 1900,
        originalPrice: 2200,
      },
    ],
  },
  {
    id: "academic",
    label: "Academic",
    icon: BookOpen,
    variant: "paid",
    showInFilter: true,
    hasNotification: true,
    cardBadge: "live",
    courses: [
      {
        id: "academic-math",
        title: "Mathematics Essentials",
        slug: "mathematics-essentials",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Math",
        },
        lessons: 24,
        rating: 4.7,
        price: 1500,
        originalPrice: 1800,
      },
      {
        id: "academic-physics",
        title: "Physics Fundamentals",
        slug: "physics-fundamentals",
        image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=900&auto=format&fit=crop",
        instructor: {
          name: "Mizanur Rahman",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Physics",
        },
        lessons: 24,
        rating: 4.7,
        price: 1600,
        originalPrice: 1900,
      },
      {
        id: "academic-chemistry",
        title: "Chemistry Basics",
        slug: "chemistry-basics",
        image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=900&auto=format&fit=crop",
        instructor: {
          name: "Hashibur Alam",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Chemistry",
        },
        lessons: 24,
        rating: 4.7,
        price: 1400,
        originalPrice: 1700,
      },
      {
        id: "academic-history",
        title: "History & Culture",
        slug: "history-culture",
        image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=900&auto=format&fit=crop",
        instructor: {
          name: "Haidaruzzaman Sujon",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=History",
        },
        lessons: 24,
        rating: 4.7,
        price: 1300,
        originalPrice: 1600,
      },
      {
        id: "academic-literature",
        title: "English Literature",
        slug: "english-literature",
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Maruf",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Literature",
        },
        lessons: 24,
        rating: 4.7,
        price: 1500,
        originalPrice: 1800,
      },
      {
        id: "academic-science",
        title: "Science & Discovery",
        slug: "science-discovery",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=900&auto=format&fit=crop",
        instructor: {
          name: "Abdullah Mamun",
          avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Science",
        },
        lessons: 24,
        rating: 4.7,
        price: 1700,
        originalPrice: 2000,
      },
    ],
  },
];

function cloneCourses(courses: PublicCourse[], prefix: string): PublicCourse[] {
  return courses.map((course) => ({
    ...course,
    id: `${prefix}-${course.id}`,
    slug: `${prefix}-${course.slug}`,
  }));
}

const popularCourses =
  allCoursesCategories.find((category) => category.id === "popular")?.courses ?? [];
const jobCourses =
  allCoursesCategories.find((category) => category.id === "job")?.courses ?? [];
const freeCourses =
  allCoursesCategories.find((category) => category.id === "free")?.courses ?? [];

export const coursesPageExtraSections: AllCoursesCategory[] = [
  {
    id: "model-test",
    label: "Model Test",
    icon: Clapperboard,
    variant: "paid",
    courses: cloneCourses(popularCourses.slice(0, 6), "model"),
  },
  {
    id: "bundle",
    label: "Bundle Course",
    icon: Layers3,
    variant: "paid",
    courses: cloneCourses(jobCourses.slice(0, 6), "bundle"),
  },
  {
    id: "creative",
    label: "Creative & Lifestyle",
    icon: Palette,
    variant: "paid",
    courses: cloneCourses(freeCourses.slice(0, 6), "creative"),
  },
  {
    id: "workshop",
    label: "Upcoming LIVE Workshop",
    icon: PlayCircle,
    variant: "paid",
    cardBadge: "workshop-live",
    courses: cloneCourses(popularCourses.slice(0, 6), "workshop"),
  },
];

export const coursesPageSections: AllCoursesCategory[] = [
  allCoursesCategories.find((category) => category.id === "free")!,
  coursesPageExtraSections[0],
  allCoursesCategories.find((category) => category.id === "job")!,
  allCoursesCategories.find((category) => category.id === "popular")!,
  allCoursesCategories.find((category) => category.id === "skill")!,
  allCoursesCategories.find((category) => category.id === "vocational")!,
  coursesPageExtraSections[1],
  allCoursesCategories.find((category) => category.id === "academic")!,
  coursesPageExtraSections[2],
  coursesPageExtraSections[3],
];

export const homepageAllCoursesCategories = allCoursesCategories;

export const coursesPageFilterCategories = allCoursesCategories.filter(
  (category) => category.showInFilter
);

export const TOTAL_COURSES_COUNT = coursesPageSections.reduce(
  (total, section) => total + section.courses.length,
  0
);
