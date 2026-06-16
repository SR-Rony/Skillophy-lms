import type {
  StudentCourseCurriculumModule,
  StudentCourseDetailsData,
} from "@/types/student-course-details.types";
import { ROUTES } from "@/constants";

const uxCourseImage =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop";

function createCompletedLesson(id: string, title: string, type: "video" | "reading" | "quiz") {
  return { id, title, type, status: "completed" as const };
}

const ongoingProgressTopics = [
  {
    id: "topic-1",
    label: "Topic 1",
    title: "Introducing UX design",
    status: "completed" as const,
    quizScore: 87,
    progressPercent: 100,
    href: "#topic-1",
  },
  {
    id: "topic-2",
    label: "Topic 2",
    title: "Thinking like a UX designer",
    status: "completed" as const,
    quizScore: 92,
    progressPercent: 100,
    href: "#topic-2",
  },
  {
    id: "topic-3",
    label: "Topic 3",
    title: "Joining design sprints",
    status: "completed" as const,
    quizScore: 78,
    progressPercent: 100,
    href: "#topic-3",
  },
  {
    id: "topic-4",
    label: "Topic 4",
    title: "Integrating research into the design",
    status: "completed" as const,
    quizScore: 85,
    progressPercent: 100,
    href: "#topic-4",
  },
  {
    id: "topic-5",
    label: "Topic 5",
    title: "Jobs in the field of user experience",
    status: "completed" as const,
    quizScore: 91,
    progressPercent: 100,
    href: "#topic-5",
  },
  {
    id: "topic-6",
    label: "Topic 6",
    title: "User experience careers",
    status: "ongoing" as const,
    quizScore: 59,
    progressPercent: 20,
    href: "#topic-6",
  },
  {
    id: "topic-7",
    label: "Topic 7",
    title: "The product development life cycle",
    status: "ongoing" as const,
    quizScore: null,
    progressPercent: 0,
    href: "#topic-7",
  },
];

const completedProgressTopics = [
  "Introducing UX design",
  "Thinking like a UX designer",
  "Joining design sprints",
  "Integrating research into the design",
  "Jobs in the field of user experience",
  "User experience careers",
  "The product development life cycle",
  "Design for a good user experience",
].map((title, index) => ({
  id: `topic-${index + 1}`,
  label: `Topic ${index + 1}`,
  title,
  status: "completed" as const,
  quizScore: [87, 92, 78, 85, 91, 88, 94, 90][index] ?? 85,
  progressPercent: 100,
  href: `#topic-${index + 1}`,
}));

const progressSubtext =
  "Dive into class, dominate that exam, and watch yourself soar to master pro status!";

const completedCurriculum: StudentCourseCurriculumModule[] = [
  {
    id: "module-1",
    title: "1. Introducing UX design",
    duration: "1hr 35mins",
    completed: true,
    lessons: [
      createCompletedLesson("c-lesson-1", "The basics of user experience design", "video"),
      createCompletedLesson("c-lesson-2", "Design for good user experience", "reading"),
      createCompletedLesson("c-lesson-3", "Work in a cross-functional team", "reading"),
      createCompletedLesson("c-lesson-4", "Quiz on Introducing user experience design", "quiz"),
    ],
  },
  {
    id: "module-2",
    title: "2. Thinking like a UX designer",
    duration: "1hr 20min",
    completed: true,
    lessons: [
      createCompletedLesson("c-lesson-5", "Design mindset", "video"),
      createCompletedLesson("c-lesson-6", "Problem framing", "reading"),
    ],
  },
  {
    id: "module-3",
    title: "3. Joining design sprints",
    duration: "2hr 15min",
    completed: true,
    lessons: [
      createCompletedLesson("c-lesson-7", "Introduction to design sprints", "video"),
    ],
  },
  {
    id: "module-4",
    title: "4. Integrating research into the design",
    duration: "1hr 02min",
    completed: true,
    lessons: [
      createCompletedLesson("c-lesson-8", "Research basics", "reading"),
    ],
  },
  {
    id: "module-5",
    title: "5. Jobs in the field of user experience",
    duration: "1hr 02min",
    completed: true,
    lessons: [
      createCompletedLesson("c-lesson-9", "UX career paths", "video"),
    ],
  },
  {
    id: "module-6",
    title: "6. User experience careers",
    duration: "1hr 02min",
    completed: true,
    lessons: [
      createCompletedLesson("c-lesson-10", "Preparing for UX interviews", "reading"),
    ],
  },
  {
    id: "module-7",
    title: "7. The product development life cycle",
    duration: "1hr 02min",
    completed: true,
    lessons: [
      createCompletedLesson("c-lesson-11", "Product development stages", "video"),
    ],
  },
  {
    id: "module-8",
    title: "8. Design for a good user experience",
    duration: "1hr 02min",
    completed: true,
    lessons: [
      createCompletedLesson("c-lesson-12", "Design for good user experience", "reading"),
    ],
  },
];

function createCompletedCourse(
  slug: string,
  title: string,
  image: string,
): StudentCourseDetailsData {
  return {
    id: slug,
    slug,
    title,
    image,
    status: "completed",
    completedTopics: 13,
    totalTopics: 13,
    progressPercent: 100,
    totalScore: 66.5,
    completedOn: "May 11, 2022",
    scoreMessage: "Congratulations on completing this course!",
    progressSubtext: "Review your topic scores and download your certificate anytime.",
    progressTopics: completedProgressTopics,
    certificateHref: ROUTES.student.certificates,
    whatNextItems: [
      "You can download your certificate.",
      "You can add this certificate in your LinkedIn profile",
      "You can share your certificate to social media",
    ],
    curriculum: completedCurriculum,
    supportPhone: "165387",
  };
}

export const studentCourseDetailsBySlug: Record<string, StudentCourseDetailsData> = {
  "foundations-user-experience-ux-design": {
    id: "ux-foundations",
    slug: "foundations-user-experience-ux-design",
    title: "Foundations of User Experience (UX) Design",
    image: uxCourseImage,
    status: "ongoing",
    completedTopics: 3,
    totalTopics: 13,
    progressPercent: 10,
    totalScore: 66.5,
    scoreMessage: "You are chilling like a panda, boost up your score.",
    progressSubtext,
    progressTopics: ongoingProgressTopics,
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
  "foundations-user-experience-ux-design-completed": {
    id: "ux-foundations-completed",
    slug: "foundations-user-experience-ux-design-completed",
    title: "Foundations of User Experience (UX) Design",
    image: uxCourseImage,
    status: "completed",
    completedTopics: 13,
    totalTopics: 13,
    progressPercent: 100,
    totalScore: 66.5,
    completedOn: "May 11, 2022",
    scoreMessage: "Congratulations on completing this course!",
    progressSubtext: "Review your topic scores and download your certificate anytime.",
    progressTopics: completedProgressTopics,
    certificateHref: ROUTES.student.certificates,
    whatNextItems: [
      "You can download your certificate.",
      "You can add this certificate in your LinkedIn profile",
      "You can share your certificate to social media",
    ],
    curriculum: completedCurriculum,
    supportPhone: "165387",
  },
  "professional-graphic-design": createCompletedCourse(
    "professional-graphic-design",
    "Professional Graphic Design",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop",
  ),
  "fundamental-web-development-mern": createCompletedCourse(
    "fundamental-web-development-mern",
    "Fundamental of Web Development for MERN",
    "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900&auto=format&fit=crop",
  ),
  "facebook-marketing": createCompletedCourse(
    "facebook-marketing",
    "Facebook Marketing",
    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&auto=format&fit=crop",
  ),
};

export function getStudentCourseDetails(slug: string): StudentCourseDetailsData | null {
  return studentCourseDetailsBySlug[slug] ?? null;
}

export function getStudentCourseDetailsSlugs(): string[] {
  return Object.keys(studentCourseDetailsBySlug);
}

export const studentCourseDetailsBackHref = ROUTES.student.courses;
