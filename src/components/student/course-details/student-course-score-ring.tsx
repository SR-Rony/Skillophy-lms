"use client";

import Image from "next/image";
import { getStudentScoreTierConfig } from "@/components/student/course-details/student-course-score-tier";
import { cn } from "@/utils";

const SIZE_CONFIG = {
  lg: {
    container: "h-[140px] w-[140px]",
    viewBox: 140,
    center: 70,
    radius: 54,
    stroke: 10,
    avatar: "h-[88px] w-[88px]",
  },
  md: {
    container: "h-[112px] w-[112px] sm:h-[120px] sm:w-[120px]",
    viewBox: 120,
    center: 60,
    radius: 44,
    stroke: 8,
    avatar: "h-[72px] w-[72px] sm:h-[76px] sm:w-[76px]",
  },
} as const;

interface StudentCourseScoreRingProps {
  totalScore: number;
  size?: keyof typeof SIZE_CONFIG;
  className?: string;
}

export function StudentCourseScoreRing({
  totalScore,
  size = "lg",
  className,
}: StudentCourseScoreRingProps) {
  const tier = getStudentScoreTierConfig(totalScore);
  const config = SIZE_CONFIG[size];
  const circumference = 2 * Math.PI * config.radius;
  const strokeDashoffset = circumference - (totalScore / 100) * circumference;

  return (
    <div
      className={cn("relative flex shrink-0 items-center justify-center", config.container, className)}
    >
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox={`0 0 ${config.viewBox} ${config.viewBox}`}
        aria-hidden
      >
        <circle
          cx={config.center}
          cy={config.center}
          r={config.radius}
          fill="none"
          stroke="#f0ebe8"
          strokeWidth={config.stroke}
        />
        <circle
          cx={config.center}
          cy={config.center}
          r={config.radius}
          fill="none"
          stroke="#e85d4c"
          strokeWidth={config.stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

      <div
        className={cn(
          "relative overflow-hidden rounded-full border border-[#f0ebe8] bg-white",
          config.avatar
        )}
      >
        <Image
          src={tier.avatar}
          alt={tier.alt}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
    </div>
  );
}
