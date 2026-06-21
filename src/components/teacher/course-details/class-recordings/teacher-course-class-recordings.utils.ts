import type {
  TeacherCourseClassRecording,
  TeacherCourseRecordingSortId,
  TeacherCourseRecordingTopicGroup,
} from "@/types/teacher-course-details.types";

function sortRecordingsByDate(recordings: TeacherCourseClassRecording[]) {
  return [...recordings].sort(
    (left, right) => right.classDateIso.localeCompare(left.classDateIso)
  );
}

function sortTopicGroups(
  groups: TeacherCourseRecordingTopicGroup[],
  sortId: TeacherCourseRecordingSortId
): TeacherCourseRecordingTopicGroup[] {
  if (sortId === "topic-asc") {
    return [...groups].sort((left, right) => left.topicTitle.localeCompare(right.topicTitle));
  }

  if (sortId === "topic-desc") {
    return [...groups].sort((left, right) => right.topicTitle.localeCompare(left.topicTitle));
  }

  if (sortId === "class-date") {
    return groups.map((group) => ({
      ...group,
      recordings: sortRecordingsByDate(group.recordings),
    }));
  }

  return groups;
}

export function filterAndSortClassRecordings(
  topicGroups: TeacherCourseRecordingTopicGroup[],
  searchQuery: string,
  sortId: TeacherCourseRecordingSortId
): TeacherCourseRecordingTopicGroup[] {
  const query = searchQuery.trim().toLowerCase();

  const filteredGroups = topicGroups
    .map((group) => {
      const topicMatches =
        group.topicLabel.toLowerCase().includes(query) ||
        group.topicTitle.toLowerCase().includes(query);

      const recordings = group.recordings.filter(
        (recording) =>
          topicMatches ||
          recording.title.toLowerCase().includes(query) ||
          recording.classDate.toLowerCase().includes(query)
      );

      return { ...group, recordings };
    })
    .filter((group) => group.recordings.length > 0);

  return sortTopicGroups(filteredGroups, sortId);
}
