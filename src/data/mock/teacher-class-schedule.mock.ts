import { ROUTES } from "@/constants";
import type { TeacherClassSchedulePageData } from "@/types/teacher-class-schedule.types";
import type { StudentClassScheduleItem } from "@/types/student-class-schedule.types";

const courseSlug = "hsc-25-online-batch";

function scheduleSession(
  id: string,
  day: number,
  topic: string,
  title: string,
  datetime: string,
  canJoin: boolean,
  lessonId: string
): StudentClassScheduleItem {
  return {
    id,
    courseSlug,
    courseTitle: "Foundations of User Experience (UX) Design",
    month: "May",
    day,
    topic,
    title,
    datetime,
    joinUrl: ROUTES.teacher.courseLive(courseSlug, lessonId),
    canJoin,
  };
}

const teacherLiveSessions = [
  scheduleSession(
    "teacher-live-1",
    12,
    "Topic 3. Design across platforms",
    "Platforms to improve user experiences",
    "Sunday, 9:00 PM",
    true,
    "tm1-l1"
  ),
  scheduleSession(
    "teacher-live-2",
    19,
    "Topic 4. Design systems",
    "Building design systems",
    "Sunday, 9:00 PM",
    false,
    "tm2-l1"
  ),
  scheduleSession(
    "teacher-live-3",
    26,
    "Topic 5. Accessibility",
    "Accessibility best practices",
    "Sunday, 9:00 PM",
    false,
    "tm3-l1"
  ),
];

const teacherWorkshopSessions = [
  scheduleSession(
    "teacher-workshop-1",
    12,
    "Topic 3. Design across platforms",
    "Platforms to improve user experiences",
    "Sunday, 9:00 PM",
    true,
    "tm1-l1"
  ),
  scheduleSession(
    "teacher-workshop-2",
    19,
    "Topic 4. Design systems",
    "Building design systems",
    "Sunday, 9:00 PM",
    false,
    "tm2-l1"
  ),
  scheduleSession(
    "teacher-workshop-3",
    26,
    "Topic 5. Accessibility",
    "Accessibility best practices",
    "Sunday, 9:00 PM",
    false,
    "tm3-l1"
  ),
];

/** Set all section `sessions` to `[]` to preview the empty state. */
export const teacherClassScheduleDemo: TeacherClassSchedulePageData = {
  sections: [
    {
      id: "live",
      title: "LIVE Classes",
      initialVisibleCount: 2,
      sessions: teacherLiveSessions,
    },
    {
      id: "workshop",
      title: "Workshop",
      initialVisibleCount: 2,
      sessions: teacherWorkshopSessions,
    },
  ],
  routine: [
    {
      title: "LIVE Class",
      entries: [{ datetime: "Sunday, 9:00 PM" }, { datetime: "Tuesday, 10:00 PM" }],
    },
    {
      title: "Support Class",
      entries: [
        { datetime: "Saturday, 9:00 PM" },
        { datetime: "Monday, 10:00 PM" },
        { datetime: "Wednesday, 10:00 PM" },
      ],
    },
  ],
  emptyState: {
    heading: "No Class Schedule",
    message: "There is no class schedule available at the moment for you.",
    actionLabel: "Go to My Courses",
    actionHref: ROUTES.teacher.courses,
  },
};

export function getTeacherClassSchedulePageData(): TeacherClassSchedulePageData {
  return teacherClassScheduleDemo;
}
