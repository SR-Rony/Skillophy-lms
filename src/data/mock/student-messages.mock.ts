import { ROUTES } from "@/constants";
import type { StudentMessagesPageData } from "@/types/student-messages.types";

const instructorAvatar =
  "https://api.dicebear.com/9.x/avataaars/png?seed=SkillophyInstructor";
const userAvatar = "https://api.dicebear.com/9.x/avataaars/png?seed=StudentUser";
const skillophyAvatar = "https://api.dicebear.com/9.x/initials/png?seed=S&backgroundColor=ff4747";

const uxDesignThread = [
  {
    type: "date" as const,
    id: "date-wednesday",
    label: "Wednesday",
  },
  {
    type: "message" as const,
    id: "msg-1",
    message: {
      id: "msg-1",
      sender: "user" as const,
      content: "Can you please explain about end user? I can't understand",
      avatar: userAvatar,
    },
  },
  {
    type: "message" as const,
    id: "msg-2",
    message: {
      id: "msg-2",
      sender: "instructor" as const,
      content:
        "UX designers make those everyday interactions usable, enjoyable, and accessible. The role of an entry-level UX designer might include empathizing with users, defining their pain points, coming up with ideas for design solutions, creating wireframes, prototypes, and mockups, and testing designs to get feedback.",
      avatar: skillophyAvatar,
    },
  },
  {
    type: "message" as const,
    id: "msg-3",
    message: {
      id: "msg-3",
      sender: "user" as const,
      content: "Thank you so much sir",
      avatar: userAvatar,
    },
  },
  {
    type: "message" as const,
    id: "msg-4",
    message: {
      id: "msg-4",
      sender: "instructor" as const,
      content:
        "You're welcome. Feel free to ask if you have more questions about user research or prototyping.",
      avatar: instructorAvatar,
    },
  },
];

const coursesDemo = [
  {
    id: "course-ux-design",
    slug: "foundations-user-experience-ux-design",
    title: "Foundations of User Experience (UX) Design",
    lastActivityDate: "May 11, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&auto=format&fit=crop",
    headerAvatar:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&auto=format&fit=crop",
    lastSeenLabel: "Last seen 2 hours ago",
    hasUnread: true,
    thread: uxDesignThread,
  },
  {
    id: "course-ui-design",
    slug: "build-dynamic-user-interfaces-ui",
    title: "Build Dynamic User Interfaces (UI)",
    lastActivityDate: "May 11, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&auto=format&fit=crop",
    headerAvatar:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&auto=format&fit=crop",
    lastSeenLabel: "Last seen 5 hours ago",
    hasUnread: true,
    thread: [],
  },
  {
    id: "course-social-good",
    slug: "design-ux-social-good-prepare-jobs",
    title: "Design a User Experience for Social Good & Prepare for Jobs",
    lastActivityDate: "May 11, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1517245386807-bb43d82ace4f?w=200&auto=format&fit=crop",
    headerAvatar:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&auto=format&fit=crop",
    lastSeenLabel: "Last seen yesterday",
    thread: [],
  },
  {
    id: "course-ux-research",
    slug: "conduct-ux-research-test-concepts",
    title: "Conduct UX Research and Test Early Concepts",
    lastActivityDate: "May 11, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&auto=format&fit=crop",
    headerAvatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
    lastSeenLabel: "Last seen 2 days ago",
    thread: [],
  },
  {
    id: "course-portfolio",
    slug: "design-portfolio-get-hired",
    title: "Design a portfolio and get hired",
    lastActivityDate: "May 11, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&auto=format&fit=crop",
    headerAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop",
    lastSeenLabel: "Last seen 3 days ago",
    thread: [],
  },
  {
    id: "course-responsive-web",
    slug: "responsive-web-design-adobe-xd",
    title: "Responsive Web Design in Adobe XD",
    lastActivityDate: "May 10, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&auto=format&fit=crop",
    headerAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
    lastSeenLabel: "Last seen 4 days ago",
    thread: [],
  },
  {
    id: "course-figma",
    slug: "figma-for-ux-ui-designers",
    title: "Figma for UX/UI Designers",
    lastActivityDate: "May 09, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&auto=format&fit=crop",
    headerAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
    lastSeenLabel: "Last seen 5 days ago",
    thread: [],
  },
  {
    id: "course-accessibility",
    slug: "accessibility-in-ux-design",
    title: "Accessibility in UX Design",
    lastActivityDate: "May 08, 2024",
    thumbnail:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&auto=format&fit=crop",
    headerAvatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop",
    lastSeenLabel: "Last seen 6 days ago",
    thread: [],
  },
];

/** Demo messages — set `courses` to `[]` to preview empty state. */
export const studentMessagesDemo: StudentMessagesPageData = {
  title: "Messages",
  subtitle:
    "Easily communicate with your course instructor here, receiving prompt responses to any questions or inquiries you may have.",
  totalUnreadCount: 32,
  courses: coursesDemo,
  coursesEmptyState: {
    sectionLabel: "Courses",
    heading: "No Courses",
    message: "You don't enroll any courses yet.",
    actionLabel: "Explore Courses",
    actionHref: ROUTES.student.courses,
  },
  emptyState: {
    heading: "No Messages",
    message: "You have no messages at this time.",
  },
};
