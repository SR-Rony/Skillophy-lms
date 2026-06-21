import type {
  TeacherCourseResourceFileType,
  TeacherCourseResourceItem,
  TeacherCourseResourceTopicGroup,
} from "@/types/teacher-course-details.types";

export function formatResourceTopicHeading(group: TeacherCourseResourceTopicGroup) {
  return group.topicLabel.endsWith(".")
    ? `${group.topicLabel} ${group.topicTitle}`
    : `${group.topicLabel}: ${group.topicTitle}`;
}

export function inferResourceFileType(filename: string): TeacherCourseResourceFileType {
  const extension = filename.split(".").pop()?.toLowerCase();

  if (extension === "pdf") return "pdf";
  if (extension === "ppt" || extension === "pptx") return "ppt";
  if (extension === "zip") return "zip";
  return "txt";
}

export function findResourceTopicId(
  topicGroups: TeacherCourseResourceTopicGroup[],
  materialId: string
) {
  return topicGroups.find((group) => group.materials.some((material) => material.id === materialId))
    ?.id;
}

export function filterAndSortCourseResources(
  topicGroups: TeacherCourseResourceTopicGroup[],
  searchQuery: string,
  sortId: "default" | "topic-asc" | "topic-desc"
): TeacherCourseResourceTopicGroup[] {
  const query = searchQuery.trim().toLowerCase();

  const filteredGroups = topicGroups
    .map((group) => {
      const topicMatches =
        group.topicLabel.toLowerCase().includes(query) ||
        group.topicTitle.toLowerCase().includes(query);

      const materials = group.materials.filter(
        (material) =>
          topicMatches ||
          material.title.toLowerCase().includes(query) ||
          material.fileType.toLowerCase().includes(query)
      );

      return { ...group, materials };
    })
    .filter((group) => group.materials.length > 0);

  if (sortId === "topic-asc") {
    return [...filteredGroups].sort((left, right) => left.topicTitle.localeCompare(right.topicTitle));
  }

  if (sortId === "topic-desc") {
    return [...filteredGroups].sort((left, right) => right.topicTitle.localeCompare(left.topicTitle));
  }

  return filteredGroups;
}

export function addResourcesToTopic(
  topicGroups: TeacherCourseResourceTopicGroup[],
  topicId: string,
  materials: TeacherCourseResourceItem[]
) {
  return topicGroups.map((group) =>
    group.id === topicId
      ? { ...group, materials: [...group.materials, ...materials] }
      : group
  );
}

export function updateResourceInTopics(
  topicGroups: TeacherCourseResourceTopicGroup[],
  materialId: string,
  nextTopicId: string,
  nextTitle: string
) {
  let materialToMove: TeacherCourseResourceItem | null = null;

  const withoutMaterial = topicGroups.map((group) => {
    const material = group.materials.find((item) => item.id === materialId);
    if (!material) {
      return group;
    }

    materialToMove = { ...material, title: nextTitle };
    return {
      ...group,
      materials: group.materials.filter((item) => item.id !== materialId),
    };
  });

  if (!materialToMove) {
    return topicGroups;
  }

  return withoutMaterial.map((group) =>
    group.id === nextTopicId
      ? { ...group, materials: [...group.materials, materialToMove as TeacherCourseResourceItem] }
      : group
  );
}

export function deleteResourceFromTopics(
  topicGroups: TeacherCourseResourceTopicGroup[],
  materialId: string
) {
  return topicGroups.map((group) => ({
    ...group,
    materials: group.materials.filter((material) => material.id !== materialId),
  }));
}
