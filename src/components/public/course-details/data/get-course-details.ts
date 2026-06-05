import {
  COURSE_DETAILS_DEFAULT_VIDEO_IMAGE,
  courseDetailsBySlug,
  defaultCourseDetailsPageData,
} from "@/components/public/course-details/data/course-details.data";
import type { CourseDetailsPageData } from "@/components/public/course-details/types";
import { CourseLevel } from "@/enums";
import { courseService } from "@/services";
import type { Course } from "@/types";

function levelToLabel(level: CourseLevel): string {
  switch (level) {
    case CourseLevel.BEGINNER:
      return "BEGINNER LEVEL";
    case CourseLevel.INTERMEDIATE:
      return "INTERMEDIATE LEVEL";
    case CourseLevel.ADVANCED:
      return "ADVANCED LEVEL";
    default:
      return "ALL LEVELS";
  }
}

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function deepMergePageData(
  base: CourseDetailsPageData,
  patch?: Partial<CourseDetailsPageData>
): CourseDetailsPageData {
  if (!patch) return base;

  return {
    ...base,
    ...patch,
    hero: { ...base.hero, ...patch.hero },
    overview: { ...base.overview, ...patch.overview },
    teacher: { ...base.teacher, ...patch.teacher },
    bookPromo: { ...base.bookPromo, ...patch.bookPromo },
    businessPromo: { ...base.businessPromo, ...patch.businessPromo },
    certificate: { ...base.certificate, ...patch.certificate },
    sidebar: { ...base.sidebar, ...patch.sidebar },
    tabs: patch.tabs ?? base.tabs,
    learnItems: patch.learnItems ?? base.learnItems,
    skills: patch.skills ?? base.skills,
    jobOpeningRate: patch.jobOpeningRate
      ? {
          ...base.jobOpeningRate,
          ...patch.jobOpeningRate,
          stats: patch.jobOpeningRate.stats ?? base.jobOpeningRate.stats,
          chartPoints: patch.jobOpeningRate.chartPoints ?? base.jobOpeningRate.chartPoints,
          chartYears: patch.jobOpeningRate.chartYears ?? base.jobOpeningRate.chartYears,
        }
      : base.jobOpeningRate,
    curriculum: patch.curriculum ?? base.curriculum,
    requirements: patch.requirements ?? base.requirements,
    benefits: patch.benefits ?? base.benefits,
    testimonials: patch.testimonials ?? base.testimonials,
    faqs: patch.faqs ?? base.faqs,
    similarCourses: patch.similarCourses ?? base.similarCourses,
    similarCoursesVariant: patch.similarCoursesVariant ?? base.similarCoursesVariant,
  };
}

/** Map API `Course` into hero fields when backend returns only core course model */
function mapApiCourseToHero(slug: string, course: Course): CourseDetailsPageData["hero"] {
  return {
    levelLabel: levelToLabel(course.level),
    title: course.title,
    description: course.description,
    rating: course.rating,
    ratingCount: Math.max(course.studentsCount, 1200),
    previewImage: course.thumbnail || COURSE_DETAILS_DEFAULT_VIDEO_IMAGE,
  };
}

function buildFromDefaults(slug: string, apiCourse?: Course | null): CourseDetailsPageData {
  const slugPatch = courseDetailsBySlug[slug];
  const base = deepMergePageData(
    { ...defaultCourseDetailsPageData, slug },
    slugPatch
  );

  if (!apiCourse) {
    if (!slugPatch?.hero) {
      return {
        ...base,
        hero: {
          ...base.hero,
          title: slugToTitle(slug),
        },
      };
    }
    return base;
  }

  return {
    ...base,
    hero: {
      ...base.hero,
      ...mapApiCourseToHero(slug, apiCourse),
      ...slugPatch?.hero,
    },
  };
}

/**
 * Fetch course details page data.
 *
 * Backend integration:
 * ```ts
 * const { data } = await apiClient.get<CourseDetailsPageData>(`/courses/${slug}/details`);
 * return data;
 * ```
 */
export async function getCourseDetailsPageData(
  slug: string
): Promise<CourseDetailsPageData> {
  const apiCourse = await courseService.getBySlug(slug);
  return buildFromDefaults(slug, apiCourse);
}
