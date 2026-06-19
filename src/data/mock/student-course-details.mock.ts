import type {
  StudentCourseCurriculumLesson,
  StudentCourseCurriculumModule,
  StudentCourseDetailsData,
} from "@/types/student-course-details.types";
import { liveCourseLeaderboardMock } from "@/data/mock/course-leaderboard.mock";
import { ROUTES } from "@/constants";

const uxCourseImage =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop";

function createCompletedLesson(
  id: string,
  title: string,
  type: StudentCourseCurriculumLesson["type"],
) {
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

const defaultCertificateInfo = {
  studentName: "Nushrat Jahan",
  studentAvatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&auto=format&fit=crop",
  certificateId: "5739skill52078",
  verificationId: "14562ebwevgh54s",
};

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
  courseType: StudentCourseDetailsData["courseType"] = "recorded",
): StudentCourseDetailsData {
  return {
    id: slug,
    slug,
    title,
    image,
    courseType,
    status: "completed",
    completedTopics: 13,
    totalTopics: 13,
    progressPercent: 100,
    totalScore: 86.5,
    completedOn: "May 11, 2022",
    scoreMessage: "Congratulations on completing this course!",
    progressSubtext: "Review your topic scores and download your certificate anytime.",
    progressTopics: completedProgressTopics,
    certificateHref: ROUTES.student.certificates,
    certificateInfo: defaultCertificateInfo,
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
    courseType: "recorded",
    status: "ongoing",
    completedTopics: 3,
    totalTopics: 13,
    progressPercent: 10,
    totalScore: 66.5,
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
  "hsc-25-online-batch": {
    id: "ux-foundations-live",
    slug: "hsc-25-online-batch",
    title: "Foundations of User Experience (UX) Design",
    image: uxCourseImage,
    courseType: "live",
    status: "ongoing",
    completedTopics: 3,
    totalTopics: 13,
    progressPercent: 10,
    totalScore: 66.5,
    progressSubtext,
    progressTopics: ongoingProgressTopics,
    upcomingLiveClass: {
      month: "May",
      day: 12,
      label: "Upcoming LIVE Class",
      title: "The Basics of User Experience Design",
      datetime: "Sunday, 9:00 PM",
      joinUrl: ROUTES.student.courseLive("hsc-25-online-batch", "live-l10"),
    },
    liveStats: {
      classAttendancePercent: 100,
      rank: 12,
      totalStudents: 24,
    },
    leaderboard: liveCourseLeaderboardMock,
    assignments: [
      {
        id: "assignment-1",
        topicLabel: "Topic 1",
        topicTitle: "Introducing UX design",
        lastSubmissionDate: "May 11, 2022",
        status: "pending",
        action: {
          label: "Submit Assignment",
          variant: "submit",
          href: ROUTES.student.courseAssignment("hsc-25-online-batch", "live-l5"),
        },
      },
      {
        id: "assignment-2",
        topicLabel: "Topic 2",
        topicTitle: "Thinking like a UX designer",
        lastSubmissionDate: "May 11, 2022",
        status: "submitted",
        action: {
          label: "Check Assignment",
          variant: "check",
          href: "#assignment-2",
        },
      },
      {
        id: "assignment-3",
        topicLabel: "Topic 3",
        topicTitle: "Joining design sprints",
        lastSubmissionDate: "May 11, 2022",
        status: "approved",
        action: {
          label: "Check Assignment",
          variant: "check",
          href: "#assignment-3",
        },
      },
      {
        id: "assignment-4",
        topicLabel: "Topic 4",
        topicTitle: "Integrating research into the design",
        lastSubmissionDate: "May 11, 2022",
        status: "pending",
        action: {
          label: "Submit Assignment",
          variant: "submit",
          href: ROUTES.student.courseAssignment(
            "hsc-25-online-batch",
            "live-assignment-platforms",
          ),
        },
      },
      {
        id: "assignment-5",
        topicLabel: "Topic 5",
        topicTitle: "Jobs in the field of user experience",
        lastSubmissionDate: "May 11, 2022",
        status: "submitted",
        action: {
          label: "Check Assignment",
          variant: "check",
          href: "#assignment-5",
        },
      },
      {
        id: "assignment-6",
        topicLabel: "Topic 6",
        topicTitle: "User experience careers",
        lastSubmissionDate: "May 11, 2022",
        status: "approved",
        action: {
          label: "Check Assignment",
          variant: "check",
          href: "#assignment-6",
        },
      },
      {
        id: "assignment-7",
        topicLabel: "Topic 7",
        topicTitle: "The product development life cycle",
        lastSubmissionDate: "May 11, 2022",
        status: "pending",
        action: {
          label: "Submit Assignment",
          variant: "submit",
          href: "#assignment-7",
        },
      },
    ],
    curriculum: [
      {
        id: "live-module-1",
        title: "1. Introducing UX design",
        duration: "1hr 35mins",
        completed: true,
        defaultOpen: true,
        liveClassCount: 4,
        assignmentCount: 1,
        lessons: [
          {
            id: "live-l10",
            title: "The basics of user experience design",
            type: "live-class",
            status: "current",
            href: ROUTES.student.courseLive("hsc-25-online-batch", "live-l10"),
          },
          createCompletedLesson(
            "live-l1",
            "The basics of user experience design",
            "reading",
          ),
          createCompletedLesson("live-l2", "Design for good user experience", "reading"),
          createCompletedLesson("live-l3", "Work in a cross-functional team", "reading"),
          createCompletedLesson("live-l4", "Most common UX tools", "reading"),
          {
            id: "live-l5",
            title: "Assignment on design across platforms",
            type: "assignment",
            status: "available",
            href: ROUTES.student.courseAssignment("hsc-25-online-batch", "live-l5"),
          },
          {
            id: "live-l6",
            title: "Quiz on Introducing user experience design",
            type: "quiz",
            status: "available",
          },
        ],
      },
      {
        id: "live-module-2",
        title: "2. Thinking like a UX designer",
        duration: "1hr 20min",
        completed: true,
        liveClassCount: 4,
        assignmentCount: 1,
        lessons: [
          createCompletedLesson("live-l7", "Design mindset", "live-class"),
          createCompletedLesson("live-l8", "Problem framing", "reading"),
        ],
      },
      {
        id: "live-module-3",
        title: "3. Design across platforms",
        duration: "2hr 15min",
        liveClassCount: 4,
        assignmentCount: 1,
        lessons: [
          createCompletedLesson("live-l9", "Design for different platforms", "live-class"),
          createCompletedLesson("live-l11", "Get to know platforms", "reading"),
          createCompletedLesson(
            "live-l12",
            "Designing cross-platform experiences & the Four Cs",
            "live-class",
          ),
          createCompletedLesson(
            "live-l12b",
            "The basics of user experience design",
            "reading",
          ),
          createCompletedLesson("live-l12c", "Design for good user experience", "reading"),
          createCompletedLesson("live-l12d", "Work in a cross-functional team", "reading"),
          {
            id: "live-assignment-platforms",
            title: "Assignment on design across platforms",
            type: "assignment",
            status: "available",
            href: ROUTES.student.courseAssignment(
              "hsc-25-online-batch",
              "live-assignment-platforms",
            ),
          },
          {
            id: "live-l14",
            title: "Quiz on how UX designers think across platforms",
            type: "quiz",
            status: "available",
          },
        ],
      },
      {
        id: "live-module-4",
        title: "4. Integrating research into the design",
        duration: "1hr 02min",
        lessons: [
          {
            id: "live-l15",
            title: "Research basics",
            type: "reading",
            status: "available",
          },
        ],
      },
      {
        id: "live-module-5",
        title: "5. Jobs in the field of user experience",
        duration: "1hr 02min",
        lessons: [
          {
            id: "live-l16",
            title: "UX career paths",
            type: "video",
            status: "available",
          },
        ],
      },
      {
        id: "live-module-6",
        title: "6. User experience careers",
        duration: "1hr 02min",
        lessons: [
          {
            id: "live-l17",
            title: "Preparing for UX interviews",
            type: "reading",
            status: "available",
          },
        ],
      },
      {
        id: "live-module-7",
        title: "7. The product development life cycle",
        duration: "1hr 02min",
        lessons: [
          {
            id: "live-l18",
            title: "Product development stages",
            type: "video",
            status: "available",
          },
        ],
      },
    ] satisfies StudentCourseCurriculumModule[],
    supportPhone: "165387",
  },
  "foundations-user-experience-ux-design-completed": {
    id: "ux-foundations-completed",
    slug: "foundations-user-experience-ux-design-completed",
    title: "Foundations of User Experience (UX) Design",
    image: uxCourseImage,
    courseType: "recorded",
    status: "completed",
    completedTopics: 13,
    totalTopics: 13,
    progressPercent: 100,
    totalScore: 86.5,
    completedOn: "May 11, 2022",
    scoreMessage: "Congratulations on completing this course!",
    progressSubtext: "Review your topic scores and download your certificate anytime.",
    progressTopics: completedProgressTopics,
    certificateHref: ROUTES.student.certificates,
    certificateInfo: defaultCertificateInfo,
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
