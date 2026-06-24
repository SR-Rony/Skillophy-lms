import type {
  AdminCourseAddResourceForm,
  AdminCourseResourceFile,
} from "@/types/admin-course-creation.types";

export function createEmptyAdminCourseAddResourceForm(): AdminCourseAddResourceForm {
  return {
    resources: [],
  };
}

const DEMO_RESOURCE_FILES: AdminCourseResourceFile[] = [
  {
    id: "resource-demo-pdf",
    name: "The basics of user experience design.pdf",
    sizeLabel: "200 KB",
    type: "pdf",
    progress: 100,
    isFreeDownloadable: false,
  },
  {
    id: "resource-demo-txt",
    name: "UX design glossary terms.txt",
    sizeLabel: "48 KB",
    type: "txt",
    progress: 40,
    isFreeDownloadable: false,
  },
];

export function createDemoAdminCourseAddResourceForm(): AdminCourseAddResourceForm {
  return {
    resources: DEMO_RESOURCE_FILES.map((resource) => ({ ...resource })),
  };
}
