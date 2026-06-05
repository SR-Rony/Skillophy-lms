import type { PublicCourse, PublicCourseCardVariant } from "@/components/public/public-course-card";

/** Course details page — replace `getCourseDetailsPageData` response when API is ready */

export interface CourseDetailsTab {
  id: string;
  label: string;
}

export interface CourseDetailsHeroData {
  levelLabel: string;
  title: string;
  description: string;
  rating: number;
  ratingCount: number;
  previewImage: string;
}

export interface CourseDetailsOverview {
  text: string;
}

export interface CourseDetailsTeacher {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface CourseDetailsCurriculumLesson {
  title: string;
  preview: boolean;
}

export interface CourseDetailsCurriculumModule {
  id: string;
  title: string;
  duration: string;
  lessons: CourseDetailsCurriculumLesson[];
  defaultOpen?: boolean;
}

export interface CourseDetailsBookPromo {
  title: string;
  author: string;
  cover: string;
}

export interface CourseDetailsRequirement {
  icon: "globe" | "laptop" | "message";
  title: string;
}

export interface CourseDetailsBenefitItem {
  icon: "lifetime" | "certificate" | "files" | "support" | "mobile" | "community";
  title: string;
}

export interface CourseDetailsTestimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface CourseDetailsFaq {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface CourseDetailsJobStat {
  label: string;
  value: string;
}

export interface CourseDetailsSidebarInclude {
  icon: "lessons" | "video" | "duration" | "files";
  label: string;
}

export interface CourseDetailsSidebar {
  price: number;
  originalPrice: number;
  includes: CourseDetailsSidebarInclude[];
}

export interface CourseDetailsCertificate {
  description: string;
  benefits: string[];
  image: string;
}

export interface CourseDetailsBusinessPromo {
  title: string;
  ctaLabel: string;
  ctaHref: string;
  logos: string[];
}

/** Full page payload — backend should return this shape */
export interface CourseDetailsPageData {
  slug: string;
  hero: CourseDetailsHeroData;
  tabs: CourseDetailsTab[];
  overview: CourseDetailsOverview;
  learnItems: string[];
  skills: string[];
  jobStats: CourseDetailsJobStat[];
  jobChartPoints: number[];
  jobChartLabels: string[];
  teacher: CourseDetailsTeacher;
  curriculum: CourseDetailsCurriculumModule[];
  bookPromo: CourseDetailsBookPromo;
  requirements: CourseDetailsRequirement[];
  businessPromo: CourseDetailsBusinessPromo;
  benefits: CourseDetailsBenefitItem[];
  certificate: CourseDetailsCertificate;
  testimonials: CourseDetailsTestimonial[];
  faqs: CourseDetailsFaq[];
  sidebar: CourseDetailsSidebar;
  similarCourses: PublicCourse[];
  similarCoursesVariant?: PublicCourseCardVariant;
}
