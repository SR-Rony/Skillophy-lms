import type {
  AdminCourseLessonResourceFile,
  AdminCourseLessonResourceFileType,
  AdminCourseResourceFile,
} from "@/types/admin-course-creation.types";

export function getAdminCourseResourceFileTypeFromName(
  name: string
): AdminCourseLessonResourceFileType {
  const extension = name.split(".").pop()?.toLowerCase();

  if (extension === "pdf") {
    return "pdf";
  }
  if (extension === "doc" || extension === "docx") {
    return "doc";
  }
  if (extension === "rtf") {
    return "rtf";
  }

  return "txt";
}

export function formatAdminCourseResourceFileSize(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 1024)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function createAdminCourseResourceFileFromFile(
  file: File,
  progress = 100,
  isFreeDownloadable = false
): AdminCourseResourceFile {
  return {
    id: `resource-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: file.name,
    sizeLabel: formatAdminCourseResourceFileSize(file.size),
    type: getAdminCourseResourceFileTypeFromName(file.name),
    progress,
    isFreeDownloadable,
  };
}

export function createAdminCourseLessonResourceFileFromFile(
  file: File
): AdminCourseLessonResourceFile {
  return {
    id: `resource-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: file.name,
    sizeLabel: formatAdminCourseResourceFileSize(file.size),
    type: getAdminCourseResourceFileTypeFromName(file.name),
    progress: 100,
  };
}

export function getAdminCourseResourceTitleFromFileName(name: string) {
  return name.replace(/\.[^.]+$/, "");
}
