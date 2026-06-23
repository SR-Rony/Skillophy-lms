import type { AdminCourseMetaInfoUploadedFile } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-file-upload";

export interface AdminCourseAddBookResourceForm {
  name: string;
  publisherName: string;
  file: AdminCourseMetaInfoUploadedFile | null;
}

export function createEmptyAdminCourseAddBookResourceForm(): AdminCourseAddBookResourceForm {
  return {
    name: "",
    publisherName: "",
    file: null,
  };
}

export function isAdminCourseAddBookResourceFormValid(form: AdminCourseAddBookResourceForm) {
  return form.name.trim().length > 0 && form.publisherName.trim().length > 0;
}
