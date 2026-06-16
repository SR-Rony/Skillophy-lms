import type { StudentCourseDetailsData } from "@/types/student-course-details.types";
import { ROUTES } from "@/constants";

const uxCourseImage =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop";

export const studentCourseDetailsBySlug: Record<string, StudentCourseDetailsData> = {
  "foundations-user-experience-ux-design": {
    id: "ux-foundations",
    slug: "foundations-user-experience-ux-design",
    title: "Foundations of User Experience (UX) Design",
    image: uxCourseImage,
    completedTopics: 3,
    totalTopics: 13,
    progressPercent: 10,
    totalScore: 66.5,
    scoreMessage: "You are chilling like a panda, boost up your score.",
    continueLesson: {
      title: "The basics of user experience design",
      href: "#lesson-basics-ux",
    },
    curriculum: [
      {
        id: "module-1",
        title: "1. Introducing UX design",
        duration: "1hr 35mins",
        defaultOpen: true,
        lessons: [
          {
            id: "lesson-basics-ux",
            title: "The basics of user experience design",
            type: "video",
            status: "current",
            href: "#lesson-basics-ux",
          },
          {
            id: "lesson-basics-ux-reading",
            title: "The basics of user experience design",
            type: "reading",
            status: "available",
          },
          {
            id: "lesson-design-good-ux",
            title: "Design for good user experience",
            type: "reading",
            status: "completed",
          },
          {
            id: "lesson-cross-functional",
            title: "Work in a cross-functional team",
            type: "reading",
            status: "completed",
          },
          {
            id: "lesson-ux-tools",
            title: "Most common UX tools",
            type: "video",
            status: "available",
          },
          {
            id: "lesson-quiz-intro",
            title: "Quiz on Introducing user experience design",
            type: "quiz",
            status: "available",
          },
        ],
      },
      {
        id: "module-2",
        title: "2. Thinking like a UX designer",
        duration: "1hr 20min",
        lessons: [
          {
            id: "lesson-design-mindset",
            title: "Design mindset",
            type: "video",
            status: "available",
          },
          {
            id: "lesson-problem-framing",
            title: "Problem framing",
            type: "reading",
            status: "available",
          },
        ],
      },
      {
        id: "module-3",
        title: "3. Joining design sprints",
        duration: "2hr 15min",
        lessons: [
          {
            id: "lesson-sprint-intro",
            title: "Introduction to design sprints",
            type: "video",
            status: "available",
          },
        ],
      },
      {
        id: "module-4",
        title: "4. Integrating research into the design",
        duration: "1hr 02min",
        lessons: [
          {
            id: "lesson-research-basics",
            title: "Research basics",
            type: "reading",
            status: "available",
          },
        ],
      },
      {
        id: "module-5",
        title: "5. Jobs in the field of user experience",
        duration: "1hr 02min",
        lessons: [
          {
            id: "lesson-ux-jobs",
            title: "UX career paths",
            type: "video",
            status: "available",
          },
        ],
      },
      {
        id: "module-6",
        title: "6. User experience careers",
        duration: "1hr 02min",
        lessons: [
          {
            id: "lesson-career-prep",
            title: "Preparing for UX interviews",
            type: "reading",
            status: "available",
          },
        ],
      },
      {
        id: "module-7",
        title: "7. The product development life cycle",
        duration: "1hr 02min",
        lessons: [
          {
            id: "lesson-pdlc",
            title: "Product development stages",
            type: "video",
            status: "available",
          },
        ],
      },
      {
        id: "module-8",
        title: "8. Design for a good user experience",
        duration: "1hr 02min",
        lessons: [
          {
            id: "lesson-good-ux-final",
            title: "Design for good user experience",
            type: "reading",
            status: "available",
          },
        ],
      },
    ],
    supportPhone: "165387",
  },
};

export function getStudentCourseDetails(slug: string): StudentCourseDetailsData | null {
  return studentCourseDetailsBySlug[slug] ?? null;
}

export function getStudentCourseDetailsSlugs(): string[] {
  return Object.keys(studentCourseDetailsBySlug);
}

export const studentCourseDetailsBackHref = ROUTES.student.courses;
