"use client";

import { cn } from "@/utils";

const SIZE = 72;
const CENTER = SIZE / 2;
const RADIUS = 26;
const STROKE = 5;

interface TeacherCourseStatRingProps {
  value: number;
  label: string;
  strokeColor: string;
  valueColor: string;
  backgroundColor: string;
  className?: string;
}

export function TeacherCourseStatRing({
  value,
  label,
  strokeColor,
  valueColor,
  backgroundColor,
  className,
}: TeacherCourseStatRingProps) {
  const circumference = 2 * Math.PI * RADIUS;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div
      className={cn(
        "flex min-w-0 flex-col items-center rounded-xl px-2 py-3 text-center sm:px-3 sm:py-3.5",
        backgroundColor,
        className
      )}
    >
      <div className="relative flex h-[72px] w-[72px] items-center justify-center">
        <svg
          className="absolute inset-0 h-full w-full -rotate-90"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          aria-hidden
        >
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="#f0ebe8"
            strokeWidth={STROKE}
          />
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke={strokeColor}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <span className="text-[14px] font-extrabold sm:text-[15px]" style={{ color: valueColor }}>
          {value}%
        </span>
      </div>
      <p className="mt-1.5 text-[10px] font-semibold leading-snug text-[#6f6562] sm:text-[11px]">
        {label}
      </p>
    </div>
  );
}
