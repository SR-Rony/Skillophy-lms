import { ROUTES } from "@/constants";
import {
  sharedCompletedWorkshops,
  sharedUpcomingWorkshops,
} from "@/data/mock/workshop-items.mock";
import type { StudentWorkshopPageData } from "@/types/student-workshop.types";

const defaultEmptyMessage =
  "Your workshops will appear here once you enroll in a course with workshop access.";

/** Demo workshops — set tab arrays to `[]` to preview empty states. */
export const studentWorkshopDemo: StudentWorkshopPageData = {
  title: "My Workshop",
  subtitle: "Access upcoming workshops here, and view recordings of past workshops.",
  defaultTabId: "upcoming",
  tabs: [
    {
      id: "upcoming",
      label: "Upcoming",
      workshops: [...sharedUpcomingWorkshops],
      emptyState: {
        heading: "No Upcoming Workshops!",
        message: defaultEmptyMessage,
        actionLabel: "Explore Courses",
        actionHref: ROUTES.student.courses,
      },
    },
    {
      id: "completed",
      label: "Completed",
      workshops: [...sharedCompletedWorkshops],
      emptyState: {
        heading: "No Completed Workshops!",
        message: "Workshop recordings will appear here after you attend a session.",
        actionLabel: "Explore Courses",
        actionHref: ROUTES.student.courses,
      },
    },
  ],
};
