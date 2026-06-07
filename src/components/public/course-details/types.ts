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
  /** Defaults to `/images/teacher-cta.png` */
  image: string;
}

export type CourseDetailsLessonType = "video" | "reading" | "quiz";

export interface CourseDetailsCurriculumLesson {
  title: string;
  type: CourseDetailsLessonType;
  preview?: boolean;
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
  /** Optional PDF or asset URL for the download button */
  downloadUrl?: string;
}

export interface CourseDetailsRequirement {
  icon: "internet" | "device" | "mindset";
  title: string;
}

export interface CourseDetailsBenefitItem {
  icon: "lifetime" | "moneyBack" | "downloadable" | "certificate" | "devices" | "subtitle";
  title: string;
  description: string;
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

export type CourseDetailsJobStatColor = "green" | "orange" | "blue";

export interface CourseDetailsJobStat {
  label: string;
  value: string;
  color: CourseDetailsJobStatColor;
}

export interface CourseDetailsJobOpeningRate {
  title: string;
  description: string;
  stats: CourseDetailsJobStat[];
  /** Chart values as percentages (0–80) */
  chartPoints: number[];
  chartYears: string[];
}

export type CourseDetailsSidebarIncludeIcon = "learners" | "video" | "duration" | "files";

export interface CourseDetailsSidebarInclude {
  icon: CourseDetailsSidebarIncludeIcon;
  value: string;
  label: string;
}

export interface CourseDetailsSidebarStat {
  value: string;
  label: string;
}

export interface CourseDetailsSidebarContact {
  phone: string;
  hours: string;
}

export interface CourseDetailsSidebarPromo {
  code: string;
}

interface CourseDetailsSidebarBase {
  contact?: CourseDetailsSidebarContact;
}

export interface CourseDetailsCourseSidebar extends CourseDetailsSidebarBase {
  variant: "course";
  /** Final price when promo is applied; otherwise the list price */
  price: number;
  /** List price — shown with strikethrough when `appliedPromo` is set */
  originalPrice?: number;
  appliedPromo?: CourseDetailsSidebarPromo;
  includes: CourseDetailsSidebarInclude[];
}

export interface CourseDetailsModelTestSidebar extends CourseDetailsSidebarBase {
  variant: "model-test";
  price: number;
  originalPrice?: number;
  appliedPromo?: CourseDetailsSidebarPromo;
  testTime: CourseDetailsSidebarStat;
  questions: CourseDetailsSidebarStat;
}

export interface CourseDetailsWorkshopSidebar extends CourseDetailsSidebarBase {
  variant: "workshop";
  date: CourseDetailsSidebarStat;
  time: CourseDetailsSidebarStat;
  /** Full schedule line shown in the booking confirmation modal */
  scheduleLabel?: string;
  goToWorkshopHref?: string;
}

export type CourseDetailsSidebar =
  | CourseDetailsCourseSidebar
  | CourseDetailsModelTestSidebar
  | CourseDetailsWorkshopSidebar;

export interface CourseDetailsCertificate {
  descriptionLines: [string, string];
  benefits: string[];
  image: string;
}

export type CourseDetailsBusinessLogo = "box" | "eventbrite" | "nasdaq" | "netapp" | "samsung";

export interface CourseDetailsBusinessPromo {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  logos: CourseDetailsBusinessLogo[];
}

/** Full page payload — backend should return this shape */
export interface CourseDetailsPageData {
  slug: string;
  hero: CourseDetailsHeroData;
  tabs: CourseDetailsTab[];
  overview: CourseDetailsOverview;
  learnItems: string[];
  skills: string[];
  jobOpeningRate: CourseDetailsJobOpeningRate;
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
