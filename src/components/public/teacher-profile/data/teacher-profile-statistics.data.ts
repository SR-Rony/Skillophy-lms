import { BookOpen, Clapperboard, PenLine, UsersRound } from "lucide-react";
import type { StatisticItem } from "@/types/statistics.types";

export const teacherProfileStatisticsData: StatisticItem[] = [
  {
    id: "enrolled-learners",
    value: "4,564+",
    label: "Enrolled Learners",
    icon: UsersRound,
    color: "text-[#ffac21]",
  },
  {
    id: "video-lessons",
    value: "14+",
    label: "Video Lessons",
    icon: Clapperboard,
    color: "text-[#24bf72]",
  },
  {
    id: "years-experience",
    value: "5+",
    label: "Years of Experience",
    icon: PenLine,
    color: "text-[#3c91ff]",
  },
  {
    id: "written-books",
    value: "3",
    label: "Written Books",
    icon: BookOpen,
    color: "text-[#ff4b5f]",
  },
];
