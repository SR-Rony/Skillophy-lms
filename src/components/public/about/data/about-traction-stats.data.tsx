import {
  CollaboratorsStatIcon,
  CourseCompletionStatIcon,
  EmployeeStatIcon,
  VideoLessonsStatIcon,
} from "@/components/public/traction-stat-icons";
import type { TractionStatsSectionProps } from "@/types/traction-stats.types";

export const aboutTractionStatsData: TractionStatsSectionProps = {
  items: [
    {
      id: "employees",
      value: "300+",
      label: "Employee",
      icon: <EmployeeStatIcon className="h-8 w-8 text-[#f59e0b]" />,
      valueClassName: "text-[#f59e0b]",
      cardClassName: "bg-[#fff8eb] hover:bg-[#fff3dc]",
      iconWrapClassName: "bg-[#ffefc2]/70",
    },
    {
      id: "collaborators",
      value: "325+",
      label: "Collaborators",
      icon: <CollaboratorsStatIcon className="h-8 w-8 text-[#9333ea]" />,
      valueClassName: "text-[#9333ea]",
      cardClassName: "bg-[#faf5ff] hover:bg-[#f3e8ff]",
      iconWrapClassName: "bg-[#ede9fe]/80",
    },
    {
      id: "video-lessons",
      value: "1,424+",
      label: "Video Lessons",
      icon: <VideoLessonsStatIcon className="h-8 w-8 text-[#059669]" />,
      valueClassName: "text-[#059669]",
      cardClassName: "bg-[#ecfdf5] hover:bg-[#d1fae5]",
      iconWrapClassName: "bg-[#ccfbf1]/70",
    },
    {
      id: "course-completion",
      value: "90%",
      label: "Course Completion",
      icon: <CourseCompletionStatIcon className="h-8 w-8 text-[#6366f1]" />,
      valueClassName: "text-[#6366f1]",
      cardClassName: "bg-[#eef2ff] hover:bg-[#e0e7ff]",
      iconWrapClassName: "bg-[#e0e7ff]/80",
    },
  ],
};
