import { ROUTES } from "@/constants";
import type { StudentWorkshopPageData } from "@/types/student-workshop.types";

const upcomingWorkshops = [
  {
    id: "workshop-healthy-life",
    slug: "how-to-achieve-healthy-life",
    title: "How to Achieve Healthy Life",
    image:
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=900&auto=format&fit=crop",
    category: "Creative",
    schedule: "Sep 24, 10:30 AM",
    startsInLabel: "Will start in 15 minutes",
    joinUrl: "#",
    buttonLabel: "Join Workshop",
  },
  {
    id: "workshop-facebook-marketing",
    slug: "facebook-marketing",
    title: "Facebook Marketing",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&auto=format&fit=crop",
    category: "Creative",
    schedule: "Sep 24, 10:30 AM",
    joinUrl: "#",
    buttonLabel: "Join Workshop",
  },
  {
    id: "workshop-wordpress-theme",
    slug: "wordpress-theme-development",
    title: "Wordpress Theme Development",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop",
    category: "Creative",
    schedule: "Sep 24, 10:30 AM",
    joinUrl: "#",
    buttonLabel: "Join Workshop",
  },
];

const completedWorkshops = [
  {
    id: "workshop-ui-fundamentals",
    slug: "ui-design-fundamentals",
    title: "UI Design Fundamentals",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop",
    category: "Creative",
    schedule: "Aug 12, 4:00 PM",
    joinUrl: "#",
    buttonLabel: "Workshop Recording",
  },
  {
    id: "workshop-seo-basics",
    slug: "seo-basics-for-beginners",
    title: "SEO Basics for Beginners",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9ff8a331b?w=900&auto=format&fit=crop",
    category: "Creative",
    schedule: "Jul 28, 11:00 AM",
    joinUrl: "#",
    buttonLabel: "Workshop Recording",
  },
  {
    id: "workshop-content-writing",
    slug: "content-writing-masterclass",
    title: "Content Writing Masterclass",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&auto=format&fit=crop",
    category: "Creative",
    schedule: "Jul 05, 3:30 PM",
    joinUrl: "#",
    buttonLabel: "Workshop Recording",
  },
];

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
      workshops: upcomingWorkshops,
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
      workshops: completedWorkshops,
      emptyState: {
        heading: "No Completed Workshops!",
        message: "Workshop recordings will appear here after you attend a session.",
        actionLabel: "Explore Courses",
        actionHref: ROUTES.student.courses,
      },
    },
  ],
};
