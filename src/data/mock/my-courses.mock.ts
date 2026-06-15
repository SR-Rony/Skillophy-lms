import type { MyCoursesTab, MyCoursesTabData } from "@/types/student-course.types";

const uxCourseImage =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop";

const liveBatchImage =
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop";

function createRecordedCourse(id: string): MyCoursesTabData["recorded"][number] {
  return {
    id,
    title: "Foundations of User Experience (UX) Design",
    slug: "foundations-user-experience-ux-design",
    image: uxCourseImage,
    type: "recorded",
    completedLessons: 13,
    totalLessons: 43,
    progressPercent: 10,
    continueHref: "/courses/foundations-user-experience-ux-design",
  };
}

const ongoingRecordedCourses = Array.from({ length: 6 }, (_, index) =>
  createRecordedCourse(`ongoing-recorded-${index + 1}`)
);

const ongoingLiveCourses: MyCoursesTabData["live"] = [
  {
    id: "ongoing-live-1",
    title: "HSC 25 Online Batch",
    slug: "hsc-25-online-batch",
    image: liveBatchImage,
    type: "live",
    description: "Online courses on physics, chemistry, mathematics",
    continueHref: "/student/live",
  },
];

/** Demo data per tab — set arrays to `[]` to preview empty states. */
export const myCoursesByTab: Record<MyCoursesTab, MyCoursesTabData> = {
  ongoing: {
    recorded: ongoingRecordedCourses,
    live: ongoingLiveCourses,
  },
  completed: {
    recorded: [],
    live: [],
  },
  wishlists: {
    recorded: [],
    live: [],
  },
  recommended: {
    recorded: [],
    live: [],
  },
};

export const myCoursesTabs: { id: MyCoursesTab; label: string }[] = [
  { id: "ongoing", label: "Ongoing Courses" },
  { id: "completed", label: "Completed" },
  { id: "wishlists", label: "Wishlists" },
  { id: "recommended", label: "Recommended" },
];
