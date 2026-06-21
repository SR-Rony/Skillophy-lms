import { ROUTES } from "@/constants";
import type { TeacherCourseDetailsData } from "@/types/teacher-course-details.types";
import type {
  StudentCourseCurriculumLesson,
  StudentCourseCurriculumModule,
} from "@/types/student-course-details.types";
import type { CourseLeaderboardData } from "@/types/course-leaderboard.types";

export const teacherCourseDetailsBackHref = ROUTES.teacher.courses;

const uxCourseImage =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop";

function createLesson(
  id: string,
  title: string,
  type: StudentCourseCurriculumLesson["type"] = "reading",
  status: StudentCourseCurriculumLesson["status"] = "available",
): StudentCourseCurriculumLesson {
  return { id, title, type, status };
}

function createPlaceholderLessons(
  count: number,
  prefix: string,
  titles?: string[],
): StudentCourseCurriculumLesson[] {
  return Array.from({ length: count }, (_, index) =>
    createLesson(
      `${prefix}-l${index + 1}`,
      titles?.[index] ?? `Lesson ${index + 1}`,
      index === 0 ? "live-class" : "reading",
      index < 2 ? "completed" : "available",
    ),
  );
}

function createCompletedLesson(
  id: string,
  title: string,
  type: StudentCourseCurriculumLesson["type"] = "reading",
): StudentCourseCurriculumLesson {
  return { id, title, type, status: "completed" };
}

const teacherLiveCurriculum: StudentCourseCurriculumModule[] = [
  {
    id: "teacher-module-1",
    title: "1. Introducing UX design",
    duration: "1hr 35mins",
    completed: true,
    defaultOpen: true,
    liveClassCount: 4,
    assignmentCount: 1,
    lessons: [
      {
        id: "tm1-l1",
        title: "The basics of user experience design",
        type: "live-class",
        status: "current",
      },
      createCompletedLesson("tm1-l2", "The basics of user experience design", "reading"),
      createCompletedLesson("tm1-l3", "Design for good user experience", "reading"),
      createCompletedLesson("tm1-l4", "Work in a cross-functional team", "reading"),
      createCompletedLesson("tm1-l5", "Most common UX tools", "reading"),
      {
        id: "tm1-l6",
        title: "Assignment on design across platforms",
        type: "assignment",
        status: "available",
      },
      {
        id: "tm1-l7",
        title: "Quiz on Introducing user experience design",
        type: "quiz",
        status: "available",
      },
    ],
  },
  {
    id: "teacher-module-2",
    title: "2. Thinking like a UX designer",
    duration: "1hr 20min",
    completed: true,
    liveClassCount: 4,
    assignmentCount: 1,
    lessons: [
      createCompletedLesson("tm2-l1", "Design mindset", "live-class"),
      createCompletedLesson("tm2-l2", "Problem framing", "reading"),
      createCompletedLesson("tm2-l3", "User-centered thinking", "reading"),
      createCompletedLesson("tm2-l4", "Design sprints overview", "reading"),
      createCompletedLesson("tm2-l5", "Assignment on design thinking", "assignment"),
      createCompletedLesson("tm2-l6", "Quiz on UX mindset", "quiz"),
    ],
  },
  {
    id: "teacher-module-3",
    title: "3. Joining design sprints",
    duration: "2hr 15mins",
    lessons: createPlaceholderLessons(8, "tm3", [
      "What is a design sprint",
      "Planning a sprint",
      "Running a sprint workshop",
      "Prototyping in sprints",
      "Testing sprint outcomes",
      "Sprint retrospectives",
      "Assignment on design sprints",
      "Quiz on sprint fundamentals",
    ]),
  },
  {
    id: "teacher-module-4",
    title: "4. Integrating research into the design",
    duration: "1hr 02mins",
    lessons: createPlaceholderLessons(7, "tm4"),
  },
  {
    id: "teacher-module-5",
    title: "5. Jobs in the field of user experience",
    duration: "1hr 02mins",
    lessons: createPlaceholderLessons(7, "tm5"),
  },
  {
    id: "teacher-module-6",
    title: "6. User experience careers",
    duration: "1hr 02mins",
    lessons: createPlaceholderLessons(7, "tm6"),
  },
  {
    id: "teacher-module-7",
    title: "7. The product development life cycle",
    duration: "1hr 02mins",
    lessons: createPlaceholderLessons(7, "tm7"),
  },
  {
    id: "teacher-module-8",
    title: "8. Design for a good user experience",
    duration: "1hr 02mins",
    lessons: createPlaceholderLessons(7, "tm8"),
  },
];

const teacherAssignmentEmptyState = {
  heading: "No Assignment",
  message: "There is no assignments for you to check at this time.",
  actionLabel: "Go to My Courses",
  actionHref: ROUTES.teacher.courses,
};

const teacherAssignmentBaseRows = [
  {
    studentName: "Kathryn Murphy",
    seed: "Kathryn",
    topicLabel: "Topic 1",
    topicTitle: "Introducing UX design",
    status: "pending" as const,
  },
  {
    studentName: "Guy Hawkins",
    seed: "Guy",
    topicLabel: "Topic 2",
    topicTitle: "Thinking like a UX designer",
    status: "pending" as const,
  },
  {
    studentName: "Eleanor Pena",
    seed: "Eleanor",
    topicLabel: "Topic 3",
    topicTitle: "Joining design sprints",
    status: "pending" as const,
  },
  {
    studentName: "Brooklyn Simmons",
    seed: "Brooklyn",
    topicLabel: "Topic 4",
    topicTitle: "Integrating research into the design",
    status: "submitted" as const,
  },
  {
    studentName: "Darrell Steward",
    seed: "Darrell",
    topicLabel: "Topic 5",
    topicTitle: "Jobs in the field of user experience",
    status: "submitted" as const,
  },
  {
    studentName: "Guy Hawkins",
    seed: "GuyHawkins",
    topicLabel: "Topic 6",
    topicTitle: "The product development life cycle",
    status: "approved" as const,
  },
  {
    studentName: "Bessie Cooper",
    seed: "Bessie",
    topicLabel: "Topic 7",
    topicTitle: "Design for a good user experience",
    status: "approved" as const,
  },
];

function buildTeacherAssignmentSubmissions() {
  return Array.from({ length: 10 }, (_, pageIndex) =>
    teacherAssignmentBaseRows.map((row, rowIndex) => ({
      id: `teacher-assignment-${pageIndex}-${rowIndex}`,
      studentName: row.studentName,
      studentAvatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${row.seed}${pageIndex}`,
      topicLabel: row.topicLabel,
      topicTitle: row.topicTitle,
      submittedAt: "May 11, 2022",
      status: row.status,
      checkHref: ROUTES.teacher.courses,
      assignmentHref: ROUTES.teacher.courses,
    })),
  ).flat();
}

const leaderboardAvatar = (seed: string) =>
  `https://api.dicebear.com/9.x/avataaars/png?seed=${encodeURIComponent(seed)}`;

const teacherCourseLeaderboardMock: CourseLeaderboardData = {
  topThree: [
    {
      id: "teacher-leader-1",
      place: 1,
      name: "Dianne Russell",
      avatar: leaderboardAvatar("DianneRussell"),
      score: 98.8,
    },
    {
      id: "teacher-leader-2",
      place: 2,
      name: "Jenny Wilson",
      avatar: leaderboardAvatar("JennyWilson"),
      score: 95.8,
    },
    {
      id: "teacher-leader-3",
      place: 3,
      name: "Jacob Jones",
      avatar: leaderboardAvatar("JacobJones"),
      score: 90.8,
    },
  ],
  others: [
    { id: "teacher-leader-4", rank: 4, name: "Kathryn Murphy", avatar: leaderboardAvatar("KathrynMurphy"), score: 89.1 },
    { id: "teacher-leader-5", rank: 5, name: "Leslie Alexander", avatar: leaderboardAvatar("LeslieAlexander"), score: 87.1 },
    { id: "teacher-leader-6", rank: 6, name: "Jacob Jones", avatar: leaderboardAvatar("JacobJones2"), score: 85.1 },
    { id: "teacher-leader-7", rank: 7, name: "Guy Hawkins", avatar: leaderboardAvatar("GuyHawkins"), score: 84.1 },
    { id: "teacher-leader-8", rank: 8, name: "Jane Cooper", avatar: leaderboardAvatar("JaneCooper"), score: 80.8 },
    { id: "teacher-leader-9", rank: 9, name: "Esther Howard", avatar: leaderboardAvatar("EstherHoward"), score: 54.0 },
    { id: "teacher-leader-10", rank: 10, name: "Brooklyn Simmons", avatar: leaderboardAvatar("BrooklynSimmons"), score: 52.4 },
    { id: "teacher-leader-11", rank: 11, name: "Eleanor Pena", avatar: leaderboardAvatar("EleanorPena"), score: 51.2 },
    { id: "teacher-leader-12", rank: 12, name: "Darrell Steward", avatar: leaderboardAvatar("DarrellSteward"), score: 49.8 },
  ],
};

const teacherTopicAttendanceMock = [
  { topic: 1, attendancePercent: 98 },
  { topic: 2, attendancePercent: 72 },
  { topic: 3, attendancePercent: 76 },
  { topic: 4, attendancePercent: 68 },
  { topic: 5, attendancePercent: 94 },
  { topic: 6, attendancePercent: 70 },
  { topic: 7, attendancePercent: 74 },
  { topic: 8, attendancePercent: 52 },
  { topic: 9, attendancePercent: 78 },
  { topic: 10, attendancePercent: 42 },
  { topic: 11, attendancePercent: 96 },
  { topic: 12, attendancePercent: 68 },
];

const teacherCourseDetailsBySlug: Record<string, TeacherCourseDetailsData> = {
  // Set assignments.submissions to [] for empty assignment tab.
  "hsc-25-online-batch": {
    id: "teacher-live-ux-foundations",
    slug: "hsc-25-online-batch",
    title: "Foundations of User Experience (UX) Design",
    image: uxCourseImage,
    courseType: "live",
    completedTopics: 3,
    totalTopics: 13,
    progressPercent: 10,
    upcomingLiveClass: {
      month: "May",
      day: 12,
      label: "Upcoming LIVE Class",
      title: "Platforms to improve user experiences",
      datetime: "Sunday, 9:00 PM",
      joinUrl: ROUTES.teacher.courseLive("hsc-25-online-batch", "tm1-l1"),
    },
    assignmentsSummary: {
      pendingCount: 23,
      checkHref: ROUTES.teacher.courses,
    },
    studentProgress: {
      attendancePercent: 90,
      learnersPassedPercent: 60,
      assignmentPercent: 45,
    },
    studentProgressTab: {
      topicAttendance: teacherTopicAttendanceMock,
      leaderboard: teacherCourseLeaderboardMock,
    },
    assignments: {
      submissions: buildTeacherAssignmentSubmissions(),
      emptyState: teacherAssignmentEmptyState,
      courseFilterLabel: "Foundations of User Experience (UX) Design",
      sortLabel: "Sort: Default",
    },
    curriculum: teacherLiveCurriculum,
    supportPhone: "165387",
  },
};

export function getTeacherCourseDetails(slug: string): TeacherCourseDetailsData | null {
  return teacherCourseDetailsBySlug[slug] ?? null;
}
