import { ROUTES } from "@/constants";
import type { TeacherCoursesPageData } from "@/types/teacher-courses.types";

export const teacherCoursesTabs = [
  { id: "ongoing" as const, label: "Ongoing Courses" },
  { id: "completed" as const, label: "Completed" },
];

const uxCourseImage =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop";

const phpCourseImage =
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&auto=format&fit=crop";

const negotiationCourseImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop";

const ongoingRecordedCourses = [
  {
    id: "teacher-recorded-1",
    title: "Foundations of User Experience (UX) Design",
    slug: "foundations-user-experience-ux-design",
    image: uxCourseImage,
    type: "recorded" as const,
    learners: 564,
    detailsHref: ROUTES.teacher.courses,
  },
  {
    id: "teacher-recorded-2",
    title: "Web Design & Development with PHP & Laravel",
    slug: "web-design-development-php-laravel",
    image: phpCourseImage,
    type: "recorded" as const,
    learners: 564,
    detailsHref: ROUTES.teacher.courses,
  },
  {
    id: "teacher-recorded-3",
    title: "Negotiation Skills",
    slug: "negotiation-skills",
    image: negotiationCourseImage,
    type: "recorded" as const,
    learners: 564,
    detailsHref: ROUTES.teacher.courses,
  },
  {
    id: "teacher-recorded-4",
    title: "Foundations of User Experience (UX) Design",
    slug: "foundations-user-experience-ux-design-2",
    image: uxCourseImage,
    type: "recorded" as const,
    learners: 564,
    detailsHref: ROUTES.teacher.courses,
  },
  {
    id: "teacher-recorded-5",
    title: "Web Design & Development with PHP & Laravel",
    slug: "web-design-development-php-laravel-2",
    image: phpCourseImage,
    type: "recorded" as const,
    learners: 564,
    detailsHref: ROUTES.teacher.courses,
  },
  {
    id: "teacher-recorded-6",
    title: "Negotiation Skills",
    slug: "negotiation-skills-2",
    image: negotiationCourseImage,
    type: "recorded" as const,
    learners: 564,
    detailsHref: ROUTES.teacher.courses,
  },
];

const ongoingLiveCourses = [
  {
    id: "teacher-live-1",
    title: "Foundations of User Experience (UX) Design",
    slug: "hsc-25-online-batch",
    image: uxCourseImage,
    type: "live" as const,
    learners: 564,
    detailsHref: ROUTES.teacher.courseDetails("hsc-25-online-batch"),
  },
];

const completedRecordedCourses = [
  {
    id: "teacher-completed-1",
    title: "Foundations of User Experience (UX) Design",
    slug: "foundations-user-experience-ux-design-completed",
    image: uxCourseImage,
    type: "recorded" as const,
    learners: 564,
    detailsHref: ROUTES.teacher.courses,
    completedOn: "May 11, 2022",
  },
  {
    id: "teacher-completed-2",
    title: "Professional Graphic Design",
    slug: "professional-graphic-design",
    image: negotiationCourseImage,
    type: "recorded" as const,
    learners: 420,
    detailsHref: ROUTES.teacher.courses,
    completedOn: "May 11, 2022",
  },
];

export const teacherCoursesPageData: TeacherCoursesPageData = {
  tabs: teacherCoursesTabs,
  emptyState: {
    ongoing: {
      heading: "No Courses",
      message: "You don't have any courses yet.",
      actionLabel: "Explore Courses",
      actionHref: ROUTES.courses,
    },
    completed: {
      heading: "No Courses",
      message: "You haven't completed any courses yet.",
      actionLabel: "Explore Courses",
      actionHref: ROUTES.courses,
    },
  },
  tabData: {
    ongoing: {
      recorded: ongoingRecordedCourses,
      live: ongoingLiveCourses,
    },
    completed: {
      recorded: completedRecordedCourses,
      live: [],
    },
  },
};

export function getTeacherCoursesPageData(): TeacherCoursesPageData {
  return teacherCoursesPageData;
}
