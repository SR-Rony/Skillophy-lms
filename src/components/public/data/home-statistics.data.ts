import { GraduationCap, PlaySquare, UserRoundCheck, UsersRound } from "lucide-react";
import type { StatisticItem } from "@/types/statistics.types";

export const homeStatisticsData: StatisticItem[] = [
  {
    id: "enrolled-learners",
    value: "4,564+",
    label: "Enrolled Learners",
    icon: UsersRound,
    color: "text-[#ffac21]",
  },
  {
    id: "video-lessons",
    value: "1,424+",
    label: "Video Lessons",
    icon: PlaySquare,
    color: "text-[#24bf72]",
  },
  {
    id: "experienced-mentors",
    value: "325+",
    label: "Experienced Mentors",
    icon: UserRoundCheck,
    color: "text-[#3c91ff]",
  },
  {
    id: "course-completion",
    value: "90%",
    label: "Course Completion",
    icon: GraduationCap,
    color: "text-[#ff4b5f]",
  },
];
