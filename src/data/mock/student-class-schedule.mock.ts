import { ROUTES } from "@/constants";
import type {
  StudentClassScheduleItem,
  StudentClassSchedulePageData,
} from "@/types/student-class-schedule.types";

const courseSlug = "hsc-25-online-batch";

function liveSession(
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
    courseTitle: "HSC 25 Online Batch",
    month: "May",
    day,
    topic,
    title,
    datetime,
    joinUrl: ROUTES.student.courseLive(courseSlug, lessonId),
    canJoin,
  };
}

function supportSession(
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
    courseTitle: "HSC 25 Online Batch",
    month: "May",
    day,
    topic,
    title,
    datetime,
    joinUrl: ROUTES.student.courseLive(courseSlug, lessonId),
    canJoin,
  };
}

/** Demo schedule — set all `sections[].sessions` to `[]` to preview the empty state. */
export const studentClassScheduleDemo: StudentClassSchedulePageData = {
  title: "Upcoming Class Schedule",
  subtitle:
    "You'll find the detailed breakdown of your class schedule, including times, and subjects for each topic and can easily join your class.",
  courseFilters: [
    { id: "all", label: "All Courses" },
    { id: courseSlug, label: "HSC 25 Online Batch" },
    {
      id: "foundations-user-experience-ux-design",
      label: "Foundations of User Experience (UX) Design",
    },
  ],
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "soonest", label: "Date (Soonest)" },
    { id: "latest", label: "Date (Latest)" },
  ],
  sections: [
    {
      id: "live",
      title: "LIVE Classes",
      initialVisibleCount: 2,
      sessions: [
        liveSession(
          "live-1",
          12,
          "Topic 3. Design across platforms",
          "Platforms to improve user experiences",
          "Sunday, 9:00 PM",
          true,
          "live-l10"
        ),
        liveSession(
          "live-2",
          19,
          "Topic 4. Design systems",
          "Building design systems",
          "Sunday, 9:00 PM",
          false,
          "live-l12"
        ),
        liveSession(
          "live-3",
          26,
          "Topic 5. Accessibility",
          "Accessibility best practices",
          "Sunday, 9:00 PM",
          false,
          "live-l13"
        ),
      ],
    },
    {
      id: "support",
      title: "Support Classes",
      initialVisibleCount: 2,
      sessions: [
        supportSession(
          "support-1",
          13,
          "Topic 3. Design across platforms",
          "Platforms to improve user experiences",
          "Saturday, 9:00 PM",
          true,
          "live-l11"
        ),
        supportSession(
          "support-2",
          20,
          "Topic 4. Design systems",
          "Building design systems",
          "Saturday, 9:00 PM",
          false,
          "live-l12"
        ),
        supportSession(
          "support-3",
          27,
          "Topic 5. Accessibility",
          "Accessibility best practices",
          "Saturday, 9:00 PM",
          false,
          "live-l13"
        ),
      ],
    },
    {
      id: "workshop",
      title: "Workshop",
      initialVisibleCount: 2,
      sessions: [
        liveSession(
          "workshop-1",
          12,
          "Topic 3. Design across platforms",
          "Platforms to improve user experiences",
          "Sunday, 9:00 PM",
          true,
          "live-l10"
        ),
        liveSession(
          "workshop-2",
          19,
          "Topic 4. Design systems",
          "Building design systems",
          "Sunday, 9:00 PM",
          false,
          "live-l12"
        ),
        liveSession(
          "workshop-3",
          26,
          "Topic 5. Accessibility",
          "Accessibility best practices",
          "Sunday, 9:00 PM",
          false,
          "live-l13"
        ),
      ],
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
    actionLabel: "Explore Courses",
    actionHref: ROUTES.student.courses,
  },
};
