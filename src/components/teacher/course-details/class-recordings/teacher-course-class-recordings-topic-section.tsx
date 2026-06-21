import type { TeacherCourseRecordingTopicGroup } from "@/types/teacher-course-details.types";
import { TeacherCourseClassRecordingCard } from "./teacher-course-class-recording-card";

interface TeacherCourseClassRecordingsTopicSectionProps {
  group: TeacherCourseRecordingTopicGroup;
}

export function TeacherCourseClassRecordingsTopicSection({
  group,
}: TeacherCourseClassRecordingsTopicSectionProps) {
  const recordingCountLabel =
    group.recordings.length === 1 ? "1 recording" : `${group.recordings.length} recordings`;

  return (
    <section className="space-y-3 sm:space-y-4">
      <div className="flex flex-wrap items-center gap-2.5">
        <h2 className="text-[14px] font-semibold text-[#9ca3af] sm:text-[15px]">
          {group.topicLabel}: {group.topicTitle}
        </h2>
        <span className="inline-flex rounded-full bg-[#f5efe8] px-2.5 py-1 text-[11px] font-bold text-[#6f6562] sm:text-[12px]">
          {recordingCountLabel}
        </span>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {group.recordings.map((recording) => (
          <TeacherCourseClassRecordingCard key={recording.id} recording={recording} />
        ))}
      </div>
    </section>
  );
}
