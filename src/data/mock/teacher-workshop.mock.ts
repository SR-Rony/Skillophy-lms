import { ROUTES } from "@/constants";
import {
  sharedCompletedWorkshops,
  sharedUpcomingWorkshops,
} from "@/data/mock/workshop-items.mock";
import type { TeacherWorkshopPageData } from "@/types/teacher-workshop.types";

/** Demo workshops — set tab arrays to `[]` to preview empty states. */
export function getTeacherWorkshopPageData(): TeacherWorkshopPageData {
  return {
    defaultTabId: "upcoming",
    tabs: [
      {
        id: "upcoming",
        label: "Upcoming",
        workshops: [...sharedUpcomingWorkshops],
        emptyState: {
          heading: "No Upcoming Workshops!",
          message:
            "Your scheduled workshops will appear here once you add a workshop to your course.",
          actionLabel: "Go to My Courses",
          actionHref: ROUTES.teacher.courses,
        },
      },
      {
        id: "completed",
        label: "Completed",
        workshops: [...sharedCompletedWorkshops],
        emptyState: {
          heading: "No Completed Workshops!",
          message: "Workshop recordings will appear here after a session is completed.",
          actionLabel: "Go to My Courses",
          actionHref: ROUTES.teacher.courses,
        },
      },
    ],
  };
}
