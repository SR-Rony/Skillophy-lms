"use client";

import { Heading } from "@/components/shared/heading";

import Link from "next/link";
import type {
  StudentCourseDetailsData,
  StudentCourseProgressTopic,
  StudentCourseTopicStatus,
  StudentLiveCourseStats,
} from "@/types/student-course-details.types";
import { Container } from "@/components/shared";
import { StudentCourseScoreRing } from "@/components/student/course-details/student-course-score-ring";
import { getStudentScoreMessage } from "@/components/student/course-details/student-course-score-tier";
import { cn } from "@/utils";

const STATUS_STYLES: Record<StudentCourseTopicStatus, string> = {
  completed: "bg-[#ecfdf3] text-[#16a34a]",
  ongoing: "bg-[#fff7ed] text-[#ea580c]",
  locked: "bg-[#f3f4f6] text-[#9ca3af]",
};

function LiveProgressStatsCards({ liveStats }: { liveStats: StudentLiveCourseStats }) {
  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:max-w-[280px] lg:w-auto lg:shrink-0">
      <div className="rounded-2xl bg-[#f3f0ff] px-4 py-5 text-center">
        <p className="text-[22px] font-extrabold leading-none text-[#7c5ce0] sm:text-[24px]">
          {liveStats.classAttendancePercent}%
        </p>
        <p className="mt-2 text-[12px] font-semibold leading-snug text-[#6f6562] sm:text-[13px]">
          Class Attendance
        </p>
      </div>
      <div className="rounded-2xl bg-[#fdf2f8] px-4 py-5 text-center">
        <p className="text-[22px] font-extrabold leading-none text-[#7c5ce0] sm:text-[24px]">
          {liveStats.rank}/{liveStats.totalStudents}
        </p>
        <p className="mt-2 text-[12px] font-semibold leading-snug text-[#6f6562] sm:text-[13px]">
          Your Rank
        </p>
      </div>
    </div>
  );
}

function LiveProgressSummaryCard({ course }: { course: StudentCourseDetailsData }) {
  const scoreMessage = getStudentScoreMessage(course.totalScore, course.scoreMessage);
  const progressSubtext =
    course.progressSubtext ??
    "Dive into class, dominate that exam, and watch yourself soar to master pro status!";
  const liveStats = course.liveStats ?? {
    classAttendancePercent: 100,
    rank: 5,
    totalStudents: 24,
  };

  return (
    <div className="relative overflow-hidden border-b border-[#f3f4f6] bg-[#fafafa] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <svg
        className="pointer-events-none absolute bottom-0 right-0 h-28 w-36 text-[#ead8d2]/35 sm:h-32 sm:w-44"
        viewBox="0 0 160 140"
        fill="none"
        aria-hidden
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <ellipse
            key={index}
            cx="120"
            cy="100"
            rx={24 + index * 14}
            ry={18 + index * 10}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative z-10 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6 lg:gap-8">
          <div className="relative flex shrink-0 flex-col items-center">
            <StudentCourseScoreRing totalScore={course.totalScore} size="md" />
            <span className="relative z-10 -mt-4 inline-flex rounded-full bg-gradient-to-r from-primary to-[#f97316] px-4 py-1.5 text-[12px] font-bold text-white shadow-[0_6px_16px_rgba(232,93,76,0.28)] sm:text-[13px]">
              Total Score {course.totalScore}%
            </span>
          </div>

          <div className="min-w-0 flex-1 text-center sm:text-left">
            <Heading as="h2" variant="dashboard-section-bold">
              {scoreMessage}
            </Heading>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[#6b7280] sm:text-[14px]">
              {progressSubtext}
            </p>
          </div>
        </div>

        <LiveProgressStatsCards liveStats={liveStats} />
      </div>
    </div>
  );
}

function ProgressSummaryCard({ course }: { course: StudentCourseDetailsData }) {
  if (course.courseType === "live") {
    return <LiveProgressSummaryCard course={course} />;
  }

  const scoreMessage = getStudentScoreMessage(course.totalScore, course.scoreMessage);
  const progressSubtext =
    course.progressSubtext ??
    "Dive into class, dominate that exam, and watch yourself soar to master pro status!";

  return (
    <div className="border-b border-[#f3f4f6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
        <div className="flex flex-col items-center sm:items-start">
          <StudentCourseScoreRing totalScore={course.totalScore} size="md" />
          <span className="mt-3 inline-flex rounded-full bg-primary px-3.5 py-1 text-[12px] font-bold text-white sm:text-[13px]">
            Total Score {course.totalScore}%
          </span>
        </div>

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <Heading as="h2" variant="dashboard-section-bold">
            {scoreMessage}
          </Heading>
          <p className="mt-2 text-[13px] leading-relaxed text-[#6b7280] sm:text-[14px]">
            {progressSubtext}
          </p>
        </div>
      </div>
    </div>
  );
}

function TopicStatusBadge({ status }: { status: StudentCourseTopicStatus }) {
  const label = status === "completed" ? "Completed" : status === "ongoing" ? "Ongoing" : "Locked";

  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-bold capitalize sm:text-[12px]",
        STATUS_STYLES[status]
      )}
    >
      {label}
    </span>
  );
}

function TopicProgressBar({ percent }: { percent: number }) {
  return (
    <div className="flex min-w-[88px] items-center gap-2 sm:min-w-[120px]">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#ececec]">
        <div
          className="h-full rounded-full bg-[#1a1a1a] transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="w-9 shrink-0 text-right text-[12px] font-semibold text-[#1a1a1a] sm:text-[13px]">
        {percent}%
      </span>
    </div>
  );
}

function ProgressTopicRow({ topic }: { topic: StudentCourseProgressTopic }) {
  return (
    <tr className="border-b border-[#f3f4f6] last:border-b-0">
      <td className="px-4 py-4 sm:px-6">
        <p className="text-[13px] font-bold text-[#1a1a1a] sm:text-[14px]">{topic.label}</p>
        <p className="mt-0.5 text-[12px] text-[#6b7280] sm:text-[13px]">{topic.title}</p>
      </td>
      <td className="hidden px-4 py-4 sm:table-cell sm:px-6">
        <TopicStatusBadge status={topic.status} />
      </td>
      <td className="hidden px-4 py-4 text-[13px] font-semibold text-[#1a1a1a] md:table-cell sm:px-6">
        {topic.quizScore != null ? `${topic.quizScore}%` : "--"}
      </td>
      <td className="hidden px-4 py-4 lg:table-cell sm:px-6">
        <TopicProgressBar percent={topic.progressPercent} />
      </td>
      <td className="px-4 py-4 text-right sm:px-6">
        <Link
          href={topic.href}
          className="text-[13px] font-bold text-primary underline underline-offset-2 transition-colors hover:text-primary/80"
        >
          Go to Topic
        </Link>
      </td>
    </tr>
  );
}

function ProgressTopicMobileCard({ topic }: { topic: StudentCourseProgressTopic }) {
  return (
    <div className="border-b border-[#f3f4f6] px-4 py-4 last:border-b-0 sm:px-6">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[13px] font-bold text-[#1a1a1a]">{topic.label}</p>
          <p className="mt-0.5 text-[12px] text-[#6b7280]">{topic.title}</p>
        </div>
        <TopicStatusBadge status={topic.status} />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 text-[12px]">
        <div>
          <p className="text-[#9ca3af]">Quiz</p>
          <p className="mt-0.5 font-semibold text-[#1a1a1a]">
            {topic.quizScore != null ? `${topic.quizScore}%` : "--"}
          </p>
        </div>
        <div>
          <p className="text-[#9ca3af]">Progress</p>
          <div className="mt-1">
            <TopicProgressBar percent={topic.progressPercent} />
          </div>
        </div>
      </div>

      <Link
        href={topic.href}
        className="mt-3 inline-block text-[13px] font-bold text-primary underline underline-offset-2"
      >
        Go to Topic
      </Link>
    </div>
  );
}

function ProgressTopicsTable({ topics }: { topics: StudentCourseProgressTopic[] }) {
  return (
    <>
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#ececec] bg-white">
              <th className="px-4 py-3.5 text-[12px] font-semibold uppercase tracking-wide text-[#9ca3af] sm:px-6">
                Topic Name
              </th>
              <th className="hidden px-4 py-3.5 text-[12px] font-semibold uppercase tracking-wide text-[#9ca3af] sm:table-cell sm:px-6">
                Status
              </th>
              <th className="hidden px-4 py-3.5 text-[12px] font-semibold uppercase tracking-wide text-[#9ca3af] md:table-cell sm:px-6">
                Quiz
              </th>
              <th className="hidden px-4 py-3.5 text-[12px] font-semibold uppercase tracking-wide text-[#9ca3af] lg:table-cell sm:px-6">
                Progress
              </th>
              <th className="px-4 py-3.5 text-right text-[12px] font-semibold uppercase tracking-wide text-[#9ca3af] sm:px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {topics.map((topic) => (
              <ProgressTopicRow key={topic.id} topic={topic} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="sm:hidden">
        {topics.map((topic) => (
          <ProgressTopicMobileCard key={topic.id} topic={topic} />
        ))}
      </div>
    </>
  );
}

interface StudentCourseDetailsProgressTabProps {
  course: StudentCourseDetailsData;
}

export function StudentCourseDetailsProgressTab({ course }: StudentCourseDetailsProgressTabProps) {
  const topics = course.progressTopics ?? [];

  return (
    <section className="bg-white pb-10 sm:pb-12 md:pb-14">
      <Container className="px-4 pt-5 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
        <div className="overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.08)]">
          <ProgressSummaryCard course={course} />
          {topics.length > 0 && <ProgressTopicsTable topics={topics} />}
        </div>
      </Container>
    </section>
  );
}
