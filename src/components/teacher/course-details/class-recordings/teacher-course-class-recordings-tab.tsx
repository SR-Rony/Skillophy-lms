"use client";

import { useMemo, useState } from "react";
import { filterAndSortClassRecordings } from "./teacher-course-class-recordings.utils";
import { TeacherCourseClassRecordingsToolbar } from "./teacher-course-class-recordings-toolbar";
import { TeacherCourseClassRecordingsTopicSection } from "./teacher-course-class-recordings-topic-section";
import type {
  TeacherCourseClassRecordingsTabData,
  TeacherCourseRecordingSortId,
} from "@/types/teacher-course-details.types";

interface TeacherCourseClassRecordingsTabProps {
  data: TeacherCourseClassRecordingsTabData;
}

export function TeacherCourseClassRecordingsTab({ data }: TeacherCourseClassRecordingsTabProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortId, setSelectedSortId] = useState<TeacherCourseRecordingSortId>("default");

  const topicGroups = useMemo(
    () => filterAndSortClassRecordings(data.topicGroups, searchQuery, selectedSortId),
    [data.topicGroups, searchQuery, selectedSortId]
  );

  return (
    <section className="bg-white pb-10 sm:pb-12 md:pb-14">
      <div className="mx-auto w-full max-w-[1320px] px-4 pt-4 sm:px-6 sm:pt-6 md:pt-8 lg:px-8">
        <TeacherCourseClassRecordingsToolbar
          searchQuery={searchQuery}
          sortOptions={data.sortOptions}
          selectedSortId={selectedSortId}
          onSearchChange={setSearchQuery}
          onSortChange={setSelectedSortId}
        />

        <div className="mt-6 space-y-8 sm:mt-8 sm:space-y-10">
          {topicGroups.length > 0 ? (
            topicGroups.map((group) => (
              <TeacherCourseClassRecordingsTopicSection key={group.id} group={group} />
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-[#ebe8e6] bg-[#fafafa] px-6 py-12 text-center">
              <p className="text-[15px] font-bold text-[#1a1a1a]">No recordings found</p>
              <p className="mt-2 text-[13px] text-[#6b7280]">
                Try a different search term or sort option.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
