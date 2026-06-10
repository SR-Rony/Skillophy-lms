"use client";

import { StatisticsSection } from "@/components/public/statistics-section";
import { teacherProfileStatisticsData } from "@/components/public/teacher-profile/data/teacher-profile-statistics.data";

export function TeacherProfileStatisticsSection() {
  return <StatisticsSection stats={teacherProfileStatisticsData} />;
}
