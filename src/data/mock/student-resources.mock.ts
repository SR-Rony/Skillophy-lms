import { ROUTES } from "@/constants";
import type { StudentResourcesPageData } from "@/types/student-resources.types";

const courseSlug = "foundations-user-experience-ux-design";

const defaultEmptyMessage =
  "Your required learning materials will be added gradually in sync with the progress of your course.";

const learningMaterialsTopicsDemo = [
  {
    id: "topic-1",
    title: "Topic 1: Introducing UX design",
    items: [
      {
        id: "lm-1",
        courseSlug,
        title: "Hand note of the basics of user experience design.pdf",
        fileType: "pdf" as const,
        downloadUrl: "#",
      },
      {
        id: "lm-2",
        courseSlug,
        title: "UX design principles and best practices.ppt",
        fileType: "ppt" as const,
        downloadUrl: "#",
      },
      {
        id: "lm-3",
        courseSlug,
        title: "Introduction to user experience design.txt",
        fileType: "txt" as const,
        downloadUrl: "#",
      },
      {
        id: "lm-4",
        courseSlug,
        title: "UX design starter resources bundle.zip",
        fileType: "zip" as const,
        downloadUrl: "#",
      },
    ],
  },
  {
    id: "topic-2",
    title: "Topic 2. Talk like a UX designer",
    items: [
      {
        id: "lm-5",
        courseSlug,
        title: "Getting started with UX design.pdf",
        fileType: "pdf" as const,
        downloadUrl: "#",
      },
      {
        id: "lm-6",
        courseSlug,
        title: "User research methods overview.ppt",
        fileType: "ppt" as const,
        downloadUrl: "#",
      },
      {
        id: "lm-7",
        courseSlug,
        title: "UX design glossary and definitions.txt",
        fileType: "txt" as const,
        downloadUrl: "#",
      },
      {
        id: "lm-8",
        courseSlug,
        title: "Topic 2 practice files.zip",
        fileType: "zip" as const,
        downloadUrl: "#",
      },
    ],
  },
  {
    id: "topic-3",
    title: "Topic 3: Design across platforms",
    items: [
      {
        id: "lm-9",
        courseSlug,
        title: "Platforms to improve user experiences.pdf",
        fileType: "pdf" as const,
        downloadUrl: "#",
      },
      {
        id: "lm-10",
        courseSlug,
        title: "Cross-platform design patterns.ppt",
        fileType: "ppt" as const,
        downloadUrl: "#",
      },
    ],
  },
];

/** Demo resources — set `topics` to `[]` per tab to preview empty states. */
export const studentResourcesDemo: StudentResourcesPageData = {
  title: "My Resources",
  subtitle:
    "You'll find a comprehensive array of resources, including learning materials, skill books, academic guides, and more for all courses.",
  defaultTabId: "learning-materials",
  courseFilters: [
    {
      id: courseSlug,
      label: "Foundations of User Experience (UX) Design",
    },
    { id: "hsc-25-online-batch", label: "HSC 25 Online Batch" },
    {
      id: "web-design-development-php-laravel",
      label: "Web Design & Development with PHP & Laravel",
    },
    {
      id: "fundamental-web-development-mern",
      label: "Fundamental of Web Development for MERN",
    },
  ],
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "topic-asc", label: "Topic in Ascending" },
    { id: "topic-desc", label: "Topic in Descending" },
  ],
  tabs: [
    {
      id: "learning-materials",
      label: "Learning Materials",
      topics: learningMaterialsTopicsDemo,
      emptyState: {
        heading: "No Learning Materials Attached!",
        message: defaultEmptyMessage,
        actionLabel: "Explore Courses",
        actionHref: ROUTES.student.courses,
      },
    },
    {
      id: "skill-books",
      label: "Skill Books",
      topics: [],
      emptyState: {
        heading: "No Skill Books Attached!",
        message: defaultEmptyMessage,
        actionLabel: "Explore Courses",
        actionHref: ROUTES.student.courses,
      },
    },
    {
      id: "academic-guides",
      label: "Academic Guides",
      topics: [],
      emptyState: {
        heading: "No Academic Guides Attached!",
        message: defaultEmptyMessage,
        actionLabel: "Explore Courses",
        actionHref: ROUTES.student.courses,
      },
    },
    {
      id: "notes",
      label: "Notes",
      topics: [],
      emptyState: {
        heading: "No Notes Attached!",
        message: defaultEmptyMessage,
        actionLabel: "Explore Courses",
        actionHref: ROUTES.student.courses,
      },
    },
  ],
};
