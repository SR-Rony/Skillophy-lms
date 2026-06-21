import type { StudentLiveResourceSession } from "@/types/student-live-resources.types";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { getStudentCourseDetails } from "@/data/mock/student-course-details.mock";
import { ROUTES } from "@/constants";

const RECORDED_COURSE_SLUG = "foundations-user-experience-ux-design";
const RECORDED_DEFAULT_RESOURCE = "lesson-basics-ux-reading";

const recordedResourceItems = [
  {
    id: "res-pdf-1",
    title: "Hand note of the basics of user experience design.pdf",
    fileType: "pdf" as const,
    downloadUrl: "#",
  },
  {
    id: "res-svg-1",
    title: "Video slide of the basics of user experience design.jpg",
    fileType: "svg" as const,
    downloadUrl: "#",
  },
];

const resourceSessions: Record<string, Record<string, StudentLiveResourceSession>> = {
  "hsc-25-online-batch": {
    "live-l11": {
      resourceId: "live-l11",
      slug: "hsc-25-online-batch",
      title: "Get to know platforms",
      topicTitle: "Design Across Platforms",
      linkedLessonId: "live-l11",
      previousResource: {
        id: "live-l8",
        title: "Problem framing",
        href: ROUTES.student.courseResources("hsc-25-online-batch", "live-l8"),
      },
      nextResource: {
        id: "live-l12b",
        title: "The basics of user experience design",
        href: ROUTES.student.courseResources("hsc-25-online-batch", "live-l12b"),
      },
      items: [
        {
          id: "res-pdf-1",
          title: "Hand note of the basics of user experience design.pdf",
          fileType: "pdf",
          downloadUrl: "#",
        },
        {
          id: "res-svg-1",
          title: "Hand note of work in a cross-functional team",
          fileType: "svg",
          downloadUrl: "#",
        },
      ],
    },
    "live-l8": {
      resourceId: "live-l8",
      slug: "hsc-25-online-batch",
      title: "Problem framing",
      topicTitle: "Thinking like a UX designer",
      linkedLessonId: "live-l8",
      nextResource: {
        id: "live-l11",
        title: "Get to know platforms",
        href: ROUTES.student.courseResources("hsc-25-online-batch", "live-l11"),
      },
      items: [
        {
          id: "res-pdf-2",
          title: "Problem framing worksheet.pdf",
          fileType: "pdf",
          downloadUrl: "#",
        },
      ],
    },
    "live-l12b": {
      resourceId: "live-l12b",
      slug: "hsc-25-online-batch",
      title: "The basics of user experience design",
      topicTitle: "Design Across Platforms",
      linkedLessonId: "live-l12b",
      previousResource: {
        id: "live-l11",
        title: "Get to know platforms",
        href: ROUTES.student.courseResources("hsc-25-online-batch", "live-l11"),
      },
      nextResource: {
        id: "live-l12d",
        title: "Work in a cross-functional team",
        href: ROUTES.student.courseResources("hsc-25-online-batch", "live-l12d"),
      },
      items: [
        {
          id: "res-pdf-3",
          title: "Hand note of the basics of user experience design.pdf",
          fileType: "pdf",
          downloadUrl: "#",
        },
      ],
    },
    "live-l12d": {
      resourceId: "live-l12d",
      slug: "hsc-25-online-batch",
      title: "Work in a cross-functional team",
      topicTitle: "Design Across Platforms",
      linkedLessonId: "live-l12d",
      previousResource: {
        id: "live-l12b",
        title: "The basics of user experience design",
        href: ROUTES.student.courseResources("hsc-25-online-batch", "live-l12b"),
      },
      items: [
        {
          id: "res-svg-2",
          title: "Hand note of work in a cross-functional team",
          fileType: "svg",
          downloadUrl: "#",
        },
      ],
    },
    "live-l15": {
      resourceId: "live-l15",
      slug: "hsc-25-online-batch",
      title: "Research basics",
      topicTitle: "Integrating research into the design",
      linkedLessonId: "live-l15",
      previousResource: {
        id: "live-l14",
        title: "Quiz on how UX designers think across platforms",
        href: ROUTES.student.courseQuiz("hsc-25-online-batch", "live-l14"),
      },
      items: [
        {
          id: "res-pdf-4",
          title: "Research basics handout.pdf",
          fileType: "pdf",
          downloadUrl: "#",
        },
      ],
    },
  },
  [RECORDED_COURSE_SLUG]: {
    "lesson-basics-ux-reading": {
      resourceId: "lesson-basics-ux-reading",
      slug: RECORDED_COURSE_SLUG,
      title: "The basics of user experience design",
      topicTitle: "Introducing UX design",
      linkedLessonId: "lesson-basics-ux-reading",
      previousResource: {
        id: "lesson-basics-ux",
        title: "The basics of user experience design",
        href: ROUTES.student.courseLesson(RECORDED_COURSE_SLUG, "lesson-basics-ux"),
      },
      nextResource: {
        id: "lesson-design-good-ux",
        title: "Design for good user experience",
        href: ROUTES.student.courseResources(RECORDED_COURSE_SLUG, "lesson-design-good-ux"),
      },
      items: recordedResourceItems,
    },
    "lesson-design-good-ux": {
      resourceId: "lesson-design-good-ux",
      slug: RECORDED_COURSE_SLUG,
      title: "Design for good user experience",
      topicTitle: "Introducing UX design",
      linkedLessonId: "lesson-design-good-ux",
      previousResource: {
        id: "lesson-basics-ux-reading",
        title: "The basics of user experience design",
        href: ROUTES.student.courseResources(RECORDED_COURSE_SLUG, "lesson-basics-ux-reading"),
      },
      nextResource: {
        id: "lesson-cross-functional",
        title: "Work in a cross-functional team",
        href: ROUTES.student.courseResources(RECORDED_COURSE_SLUG, "lesson-cross-functional"),
      },
      items: [
        {
          id: "res-pdf-2",
          title: "Design for good user experience handout.pdf",
          fileType: "pdf",
          downloadUrl: "#",
        },
      ],
    },
    "lesson-cross-functional": {
      resourceId: "lesson-cross-functional",
      slug: RECORDED_COURSE_SLUG,
      title: "Work in a cross-functional team",
      topicTitle: "Introducing UX design",
      linkedLessonId: "lesson-cross-functional",
      previousResource: {
        id: "lesson-design-good-ux",
        title: "Design for good user experience",
        href: ROUTES.student.courseResources(RECORDED_COURSE_SLUG, "lesson-design-good-ux"),
      },
      nextResource: {
        id: "lesson-ux-tools",
        title: "Most common UX tools",
        href: ROUTES.student.courseLesson(RECORDED_COURSE_SLUG, "lesson-ux-tools"),
      },
      items: [
        {
          id: "res-svg-2",
          title: "Cross-functional teamwork guide",
          fileType: "svg",
          downloadUrl: "#",
        },
      ],
    },
    "lesson-problem-framing": {
      resourceId: "lesson-problem-framing",
      slug: RECORDED_COURSE_SLUG,
      title: "Problem framing",
      topicTitle: "Thinking like a UX designer",
      linkedLessonId: "lesson-problem-framing",
      items: [
        {
          id: "res-pdf-3",
          title: "Problem framing worksheet.pdf",
          fileType: "pdf",
          downloadUrl: "#",
        },
      ],
    },
  },
};

export function getStudentLiveResourceSession(
  slug: string,
  resourceId?: string
): { course: StudentCourseDetailsData; session: StudentLiveResourceSession } | null {
  const course = getStudentCourseDetails(slug);

  if (!course || (course.courseType !== "live" && course.courseType !== "recorded")) {
    return null;
  }

  const defaultResourceId =
    course.courseType === "recorded" ? RECORDED_DEFAULT_RESOURCE : "live-l11";
  const resolvedResourceId = resourceId ?? defaultResourceId;
  const session =
    resourceSessions[slug]?.[resolvedResourceId] ??
    resourceSessions[slug]?.[defaultResourceId];

  if (!session) {
    return null;
  }

  return { course, session };
}
