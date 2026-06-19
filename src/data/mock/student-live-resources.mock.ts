import type { StudentLiveResourceSession } from "@/types/student-live-resources.types";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { getStudentCourseDetails } from "@/data/mock/student-course-details.mock";
import { ROUTES } from "@/constants";

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
  },
};

export function getStudentLiveResourceSession(
  slug: string,
  resourceId = "live-l11"
): { course: StudentCourseDetailsData; session: StudentLiveResourceSession } | null {
  const course = getStudentCourseDetails(slug);

  if (!course || course.courseType !== "live") {
    return null;
  }

  const session =
    resourceSessions[slug]?.[resourceId] ?? resourceSessions[slug]?.["live-l11"];

  if (!session) {
    return null;
  }

  return { course, session };
}
