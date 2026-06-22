import type { TeacherCourseResourceTopicGroup } from "@/types/teacher-course-details.types";
import type { TeacherCourseResourcesPageData } from "@/types/teacher-course-resources.types";

export const teacherCourseResourcesTopicGroups: TeacherCourseResourceTopicGroup[] = [
  {
    id: "resources-topic-1",
    topicLabel: "Topic 1",
    topicTitle: "Introducing UX design",
    materials: [
      {
        id: "resource-1-1",
        title: "Hand note of the basics of user experience design.pdf",
        fileType: "pdf",
        downloadUrl: "#",
      },
      {
        id: "resource-1-2",
        title: "Hand note of the basics of user experience design.ppt",
        fileType: "ppt",
        downloadUrl: "#",
      },
      {
        id: "resource-1-3",
        title: "Hand note of the basics of user experience design.txt",
        fileType: "txt",
        downloadUrl: "#",
      },
      {
        id: "resource-1-4",
        title: "Hand note of the basics of user experience design.zip",
        fileType: "zip",
        downloadUrl: "#",
      },
    ],
  },
  {
    id: "resources-topic-2",
    topicLabel: "Topic 2.",
    topicTitle: "Talk like a UX designer",
    materials: [
      {
        id: "resource-2-1",
        title: "Hand note of the basics of user experience design.pdf",
        fileType: "pdf",
        downloadUrl: "#",
      },
      {
        id: "resource-2-2",
        title: "Hand note of the basics of user experience design.ppt",
        fileType: "ppt",
        downloadUrl: "#",
      },
      {
        id: "resource-2-3",
        title: "Hand note of the basics of user experience design.txt",
        fileType: "txt",
        downloadUrl: "#",
      },
      {
        id: "resource-2-4",
        title: "Hand note of the basics of user experience design.zip",
        fileType: "zip",
        downloadUrl: "#",
      },
    ],
  },
  {
    id: "resources-topic-3",
    topicLabel: "Topic 3",
    topicTitle: "Design Across Platforms",
    materials: [
      {
        id: "resource-3-1",
        title: "Hand note of the basics of user experience design.pdf",
        fileType: "pdf",
        downloadUrl: "#",
      },
      {
        id: "resource-3-2",
        title: "Hand note of the basics of user experience design.ppt",
        fileType: "ppt",
        downloadUrl: "#",
      },
    ],
  },
];

const teacherCourseResourcesEmptyTopicGroups: TeacherCourseResourceTopicGroup[] = [
  {
    id: "resources-topic-1",
    topicLabel: "Topic 1",
    topicTitle: "Introducing UX design",
    materials: [],
  },
  {
    id: "resources-topic-2",
    topicLabel: "Topic 2.",
    topicTitle: "Talk like a UX designer",
    materials: [],
  },
  {
    id: "resources-topic-3",
    topicLabel: "Topic 3",
    topicTitle: "Design Across Platforms",
    materials: [],
  },
];

/** Set `foundations-user-experience-ux-design` topic materials to `[]` to preview empty state. */
export const teacherCourseResourcesPageDemo: TeacherCourseResourcesPageData = {
  courses: [
    {
      id: "foundations-user-experience-ux-design",
      label: "Foundations of User Experience (UX) Design",
    },
    {
      id: "negotiation-skills",
      label: "Negotiation Skills",
    },
  ],
  resourcesByCourse: {
    "foundations-user-experience-ux-design": teacherCourseResourcesTopicGroups,
    "negotiation-skills": teacherCourseResourcesEmptyTopicGroups,
  },
  defaultCourseId: "foundations-user-experience-ux-design",
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "topic-asc", label: "Topic in Ascending" },
    { id: "topic-desc", label: "Topic in Descending" },
  ],
  addResourcesLabel: "Add Resources",
  emptyState: {
    heading: "No Resources!",
    message: "You haven't attached any resources in this course yet.",
    actionLabel: "Add Resources",
  },
};

export function getTeacherCourseResourcesPageData(): TeacherCourseResourcesPageData {
  return teacherCourseResourcesPageDemo;
}

export function courseHasResources(topicGroups: TeacherCourseResourceTopicGroup[]) {
  return topicGroups.some((group) => group.materials.length > 0);
}
