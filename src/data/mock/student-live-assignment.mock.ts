import type { StudentLiveAssignmentTask } from "@/types/student-live-assignment.types";
import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { getStudentCourseDetails } from "@/data/mock/student-course-details.mock";
import { ROUTES } from "@/constants";

const assignmentTasks: Record<string, Record<string, StudentLiveAssignmentTask>> = {
  "hsc-25-online-batch": {
    "live-assignment-platforms": {
      assignmentId: "live-assignment-platforms",
      slug: "hsc-25-online-batch",
      title: "Assignment on design across platforms",
      submissionDate: "Sunday, May 11, 2024",
      lastSubmissionDate: "Sunday, May 11, 2024",
      linkedLessonId: "live-assignment-platforms",
      placeholderUrl:
        "https://www.figma.com/file/bTSILrCuHiTjIfcRm2vmIF/Design-Audit?type=design&node-id=0%3A1",
      previousAssignment: {
        id: "live-l5",
        title: "Assignment on design across platforms",
        href: ROUTES.student.courseAssignment("hsc-25-online-batch", "live-l5"),
      },
      nextAssignment: {
        id: "live-l13-homepage",
        title: "Design a homepage for both desktop and mobile version",
        href: ROUTES.student.courseAssignment("hsc-25-online-batch", "live-l13-homepage"),
      },
      sections: [
        {
          title: "Design Proposal",
          items: [
            "Develop a comprehensive design proposal outlining the approach, goals, and deliverables for the project.",
            "Create wireframes, mockups, or prototypes to visualize the proposed design solutions.",
            "Present the design proposal to the client or stakeholders for feedback and approval.",
          ],
        },
        {
          title: "Iterative Design",
          items: [
            "Refine the design based on feedback from the client, stakeholders, and user testing.",
            "Ensure consistency across all deliverables and maintain alignment with brand guidelines.",
          ],
        },
        {
          title: "Implementation Plan",
          items: [
            "Develop a plan for implementing the design across platforms and devices.",
            "Collaborate with developers and other team members to ensure a smooth handoff.",
            "Test the design in various contexts and gather feedback for further improvements.",
          ],
        },
        {
          title: "Deliverables",
          items: [
            "Research and analysis report",
            "Design proposal document",
            "Wireframes/mockups",
            "Style guide/brand guidelines",
            "User testing results",
            "Final presentation slides",
          ],
        },
      ],
    },
    "live-l5": {
      assignmentId: "live-l5",
      slug: "hsc-25-online-batch",
      title: "Assignment on design across platforms",
      submissionDate: "Sunday, May 11, 2024",
      lastSubmissionDate: "Sunday, May 11, 2024",
      linkedLessonId: "live-l5",
      placeholderUrl:
        "https://www.figma.com/file/bTSILrCuHiTjIfcRm2vmIF/Design-Audit?type=design&node-id=0%3A1",
      nextAssignment: {
        id: "live-assignment-platforms",
        title: "Assignment on design across platforms",
        href: ROUTES.student.courseAssignment("hsc-25-online-batch", "live-assignment-platforms"),
      },
      sections: [
        {
          title: "Design Proposal",
          items: [
            "Develop a comprehensive design proposal outlining the approach, goals, and deliverables for the project.",
            "Create wireframes, mockups, or prototypes to visualize the proposed design solutions.",
            "Present the design proposal to the client or stakeholders for feedback and approval.",
          ],
        },
        {
          title: "Iterative Design",
          items: [
            "Refine the design based on feedback from the client, stakeholders, and user testing.",
            "Ensure consistency across all deliverables and maintain alignment with brand guidelines.",
          ],
        },
        {
          title: "Implementation Plan",
          items: [
            "Develop a plan for implementing the design across platforms and devices.",
            "Collaborate with developers and other team members to ensure a smooth handoff.",
            "Test the design in various contexts and gather feedback for further improvements.",
          ],
        },
        {
          title: "Deliverables",
          items: [
            "Research and analysis report",
            "Design proposal document",
            "Wireframes/mockups",
            "Style guide/brand guidelines",
            "User testing results",
            "Final presentation slides",
          ],
        },
      ],
    },
    "live-l13-homepage": {
      assignmentId: "live-l13-homepage",
      slug: "hsc-25-online-batch",
      title: "Design a homepage for both desktop and mobile version",
      submissionDate: "Sunday, May 18, 2024",
      lastSubmissionDate: "Sunday, May 18, 2024",
      linkedLessonId: "live-l13-homepage",
      placeholderUrl: "https://www.figma.com/file/example/Homepage-Design",
      previousAssignment: {
        id: "live-assignment-platforms",
        title: "Assignment on design across platforms",
        href: ROUTES.student.courseAssignment("hsc-25-online-batch", "live-assignment-platforms"),
      },
      sections: [
        {
          title: "Homepage Design",
          items: [
            "Create a responsive homepage layout for desktop and mobile viewports.",
            "Apply consistent typography, spacing, and color from the course style guide.",
            "Include hero, navigation, featured content, and footer sections.",
          ],
        },
        {
          title: "Deliverables",
          items: [
            "Desktop homepage mockup",
            "Mobile homepage mockup",
            "Shared component library notes",
          ],
        },
      ],
    },
  },
};

export function getStudentLiveAssignment(
  slug: string,
  assignmentId = "live-assignment-platforms"
): { course: StudentCourseDetailsData; assignment: StudentLiveAssignmentTask } | null {
  const course = getStudentCourseDetails(slug);

  if (!course || course.courseType !== "live") {
    return null;
  }

  const assignment =
    assignmentTasks[slug]?.[assignmentId] ?? assignmentTasks[slug]?.["live-assignment-platforms"];

  if (!assignment) {
    return null;
  }

  return { course, assignment };
}
