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

const skillBooksDemo = [
  {
    id: "book-1",
    courseSlug,
    title: "Don't Make Me Think",
    author: "Steve Krug",
    coverImage:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?w=240&auto=format&fit=crop",
    downloadUrl: "#",
  },
  {
    id: "book-2",
    courseSlug,
    title: "UX/UI Design",
    author: "Froid Miles",
    coverImage:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=240&auto=format&fit=crop",
    downloadUrl: "#",
  },
  {
    id: "book-3",
    courseSlug,
    title: "How to Get a UX Design Job",
    author: "Lisa Murnan",
    coverImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=240&auto=format&fit=crop",
    downloadUrl: "#",
  },
  {
    id: "book-4",
    courseSlug,
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger",
    coverImage:
      "https://images.unsplash.com/photo-1495444752919-c6346888174e?w=240&auto=format&fit=crop",
    downloadUrl: "#",
  },
];

const nctbSubtitle = "National Curriculum and Textbook Board (NCTB)";

const academicGuidesDemo = [
  {
    id: "guide-1",
    courseSlug,
    title: "Class 9-10 Bangla Sohopath",
    subtitle: nctbSubtitle,
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=240&auto=format&fit=crop",
    downloadUrl: "#",
  },
  {
    id: "guide-2",
    courseSlug,
    title: "Class 9-10 Bangla Grammer",
    subtitle: nctbSubtitle,
    coverImage:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=240&auto=format&fit=crop",
    downloadUrl: "#",
  },
  {
    id: "guide-3",
    courseSlug,
    title: "Class 9-10 English Guide",
    subtitle: nctbSubtitle,
    coverImage:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=240&auto=format&fit=crop",
    downloadUrl: "#",
  },
  {
    id: "guide-4",
    courseSlug,
    title: "Class 9-10 Bangla Guide",
    subtitle: nctbSubtitle,
    coverImage:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=240&auto=format&fit=crop",
    downloadUrl: "#",
  },
];

const notesDemo = [
  {
    id: "note-1",
    courseSlug,
    timestamp: "1:20",
    lessonTitle: "Design for different platforms",
    topicTitle: "Design across platforms",
    content:
      "UX designers make those everyday interactions usable, enjoyable, and accessible. The role of an entry-level UX designer might include empathizing with users, defining their pain points, coming up with ideas for design solutions, creating wireframes, prototypes, and mockups, and testing designs to get feedback.",
  },
  {
    id: "note-2",
    courseSlug,
    timestamp: "3:20",
    lessonTitle: "Designing cross-platform experiences & the Four Cs",
    topicTitle: "Design across platforms",
    content: "A little about the company and the team that you'll be working with.",
  },
  {
    id: "note-3",
    courseSlug,
    timestamp: "4:12",
    lessonTitle: "Design for different platforms",
    topicTitle: "Design across platforms",
    content:
      "Remember to validate assumptions with real users early. Notes taken during the lesson should highlight key terms, examples, and questions to revisit before the next live class.",
  },
];

/** Demo resources — set tab arrays to `[]` to preview empty states. */
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
      skillBooks: [],
      academicGuides: [],
      notes: [],
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
      skillBooks: skillBooksDemo,
      academicGuides: [],
      notes: [],
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
      skillBooks: [],
      academicGuides: academicGuidesDemo,
      notes: [],
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
      skillBooks: [],
      academicGuides: [],
      notes: notesDemo,
      emptyState: {
        heading: "No Notes Attached!",
        message: defaultEmptyMessage,
        actionLabel: "Explore Courses",
        actionHref: ROUTES.student.courses,
      },
    },
  ],
};
