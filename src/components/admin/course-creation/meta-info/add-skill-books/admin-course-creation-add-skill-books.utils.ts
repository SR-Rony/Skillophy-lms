import type { AdminCourseMetaInfoUploadedFile } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-file-upload";

export interface AdminCourseAddSkillBookForm {
  bookName: string;
  authorName: string;
  file: AdminCourseMetaInfoUploadedFile | null;
}

export function createEmptyAdminCourseAddSkillBookForm(): AdminCourseAddSkillBookForm {
  return {
    bookName: "",
    authorName: "",
    file: null,
  };
}

export function isAdminCourseAddSkillBookFormValid(form: AdminCourseAddSkillBookForm) {
  return form.bookName.trim().length > 0 && form.authorName.trim().length > 0;
}
