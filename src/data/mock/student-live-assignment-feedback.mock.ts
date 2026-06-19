import type { StudentLiveAssignmentFeedback } from "@/types/student-live-assignment.types";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { getStudentLiveAssignment } from "@/data/mock/student-live-assignment.mock";
import { ROUTES } from "@/constants";

const defaultInstructorFeedback =
  "The Dropdown List component needs more consideration for mobile viewports. Consider increasing touch target sizes and testing the expanded state on smaller screens. Overall, strong work on cross-platform consistency and visual hierarchy across desktop and mobile layouts.";

const assignmentFeedback: Record<string, Record<string, Partial<StudentLiveAssignmentFeedback>>> = {
  "hsc-25-online-batch": {
    "live-assignment-platforms": {
      marks: 80,
      maxMarks: 100,
      instructorFeedback: defaultInstructorFeedback,
      submissionUrl:
        "https://www.figma.com/file/bTSILrCuHiTjIfcRm2vmIF/Design-Audit?type=design&node-id=0%3A1",
      assignmentHref: ROUTES.student.courseAssignment(
        "hsc-25-online-batch",
        "live-assignment-platforms",
      ),
      previousAssignment: {
        id: "live-l5",
        title: "Assignment on design across platforms",
        href: ROUTES.student.courseAssignmentFeedback("hsc-25-online-batch", "live-l5"),
      },
      nextAssignment: {
        id: "live-l13-homepage",
        title: "Design a homepage for both desktop and mobile version",
        href: ROUTES.student.courseAssignmentFeedback(
          "hsc-25-online-batch",
          "live-l13-homepage",
        ),
      },
    },
    "live-l5": {
      marks: 72,
      maxMarks: 100,
      instructorFeedback:
        "Good foundation in your design proposal. Add more detail on user research findings and how they informed your wireframes before the next submission.",
      submissionUrl:
        "https://www.figma.com/file/bTSILrCuHiTjIfcRm2vmIF/Design-Audit?type=design&node-id=0%3A1",
      assignmentHref: ROUTES.student.courseAssignment("hsc-25-online-batch", "live-l5"),
      nextAssignment: {
        id: "live-assignment-platforms",
        title: "Assignment on design across platforms",
        href: ROUTES.student.courseAssignmentFeedback(
          "hsc-25-online-batch",
          "live-assignment-platforms",
        ),
      },
    },
    "live-l13-homepage": {
      marks: 88,
      maxMarks: 100,
      instructorFeedback:
        "Excellent responsive homepage layouts. Desktop and mobile versions feel cohesive. Minor spacing tweaks on the mobile hero would make this even stronger.",
      submissionUrl: "https://www.figma.com/file/example/Homepage-Design",
      assignmentHref: ROUTES.student.courseAssignment("hsc-25-online-batch", "live-l13-homepage"),
      previousAssignment: {
        id: "live-assignment-platforms",
        title: "Assignment on design across platforms",
        href: ROUTES.student.courseAssignmentFeedback(
          "hsc-25-online-batch",
          "live-assignment-platforms",
        ),
      },
    },
  },
};

export function getStudentLiveAssignmentFeedback(
  slug: string,
  assignmentId = "live-assignment-platforms"
): { course: StudentCourseDetailsData; feedback: StudentLiveAssignmentFeedback } | null {
  const base = getStudentLiveAssignment(slug, assignmentId);

  if (!base) {
    return null;
  }

  const overrides =
    assignmentFeedback[slug]?.[assignmentId] ??
    assignmentFeedback[slug]?.["live-assignment-platforms"];

  if (!overrides?.marks || !overrides.maxMarks || !overrides.instructorFeedback) {
    return null;
  }

  const feedback: StudentLiveAssignmentFeedback = {
    ...base.assignment,
    marks: overrides.marks,
    maxMarks: overrides.maxMarks,
    instructorFeedback: overrides.instructorFeedback,
    submissionUrl: overrides.submissionUrl ?? base.assignment.placeholderUrl ?? "",
    assignmentHref:
      overrides.assignmentHref ??
      ROUTES.student.courseAssignment(slug, base.assignment.assignmentId),
    previousAssignment: overrides.previousAssignment ?? base.assignment.previousAssignment,
    nextAssignment: overrides.nextAssignment ?? base.assignment.nextAssignment,
  };

  return { course: base.course, feedback };
}
