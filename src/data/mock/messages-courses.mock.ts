import type { StudentMessageCourse } from "@/types/student-messages.types";

export const messagesInstructorAvatar =
  "https://api.dicebear.com/9.x/avataaars/png?seed=SkillophyInstructor";
const messagesUserAvatar = "https://api.dicebear.com/9.x/avataaars/png?seed=StudentUser";
const messagesSkillophyAvatar =
  "https://api.dicebear.com/9.x/initials/png?seed=S&backgroundColor=ff4747";

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
      avatar: messagesUserAvatar,
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
      avatar: messagesSkillophyAvatar,
    },
  },
  {
    type: "message" as const,
    id: "msg-3",
    message: {
      id: "msg-3",
      sender: "user" as const,
      content: "Thank you so much sir",
      avatar: messagesUserAvatar,
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
      avatar: messagesInstructorAvatar,
    },
  },
  {
    type: "date" as const,
    id: "date-thursday",
    label: "Thursday",
  },
  {
    type: "message" as const,
    id: "msg-5",
    message: {
      id: "msg-5",
      sender: "user" as const,
      content: "Could you share an example of a user persona for a mobile banking app?",
      avatar: messagesUserAvatar,
    },
  },
  {
    type: "message" as const,
    id: "msg-6",
    message: {
      id: "msg-6",
      sender: "instructor" as const,
      content:
        "Sure. A persona might include goals like checking balances quickly, pain points such as confusing navigation, and context like using the app during a commute.",
      avatar: messagesSkillophyAvatar,
    },
  },
  {
    type: "message" as const,
    id: "msg-7",
    message: {
      id: "msg-7",
      sender: "user" as const,
      content: "That makes sense. Should personas be based on real interview data?",
      avatar: messagesUserAvatar,
    },
  },
  {
    type: "message" as const,
    id: "msg-8",
    message: {
      id: "msg-8",
      sender: "instructor" as const,
      content:
        "Yes — the strongest personas combine interview insights, survey data, and analytics so your design decisions stay grounded in real user behavior.",
      avatar: messagesInstructorAvatar,
    },
  },
  {
    type: "message" as const,
    id: "msg-9",
    message: {
      id: "msg-9",
      sender: "user" as const,
      content: "Got it. I'll start drafting personas for my course project this weekend.",
      avatar: messagesUserAvatar,
    },
  },
  {
    type: "message" as const,
    id: "msg-10",
    message: {
      id: "msg-10",
      sender: "instructor" as const,
      content: "Great plan. Share your draft in the next workshop and we can review it together.",
      avatar: messagesInstructorAvatar,
    },
  },
];

/** Shared course conversations for student + teacher Messages pages. */
export const sharedMessagesCourses: StudentMessageCourse[] = [
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
