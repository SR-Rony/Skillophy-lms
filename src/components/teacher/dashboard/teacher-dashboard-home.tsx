"use client";

import { GraduationCap, Users, Wallet } from "lucide-react";
import { TeacherClassScheduleCard } from "@/components/teacher/dashboard/teacher-class-schedule-card";
import { TeacherDashboardStatCard } from "@/components/teacher/dashboard/teacher-dashboard-stat-card";
import { TeacherLearnersPerformanceCard } from "@/components/teacher/dashboard/teacher-learners-performance-card";
import { TeacherNotificationsCard } from "@/components/teacher/dashboard/teacher-notifications-card";
import { TeacherSubmittedAssignmentsCard } from "@/components/teacher/dashboard/teacher-submitted-assignments-card";
import { TeacherUpcomingLiveClassCard } from "@/components/teacher/dashboard/teacher-upcoming-live-class-card";
import type { TeacherDashboardData } from "@/types/teacher-dashboard.types";

interface TeacherDashboardHomeProps {
  data: TeacherDashboardData;
}

export function TeacherDashboardHome({ data }: TeacherDashboardHomeProps) {
  const { stats } = data;

  return (
    <div className="mx-auto w-full max-w-[1320px]">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:gap-6">
        <div className="space-y-5 xl:space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4">
            <TeacherDashboardStatCard
              label="Total Courses"
              count={stats.totalCourses}
              displayValue={stats.totalCoursesDisplay}
              icon={GraduationCap}
              bgColor="bg-[#dcfce7]"
              borderColor="border-[#bbf7d0]"
              iconBg="bg-[#22c55e]"
              iconFill
            />
            <TeacherDashboardStatCard
              label="Total Learners"
              count={stats.totalLearners}
              displayValue={stats.totalLearnersDisplay}
              icon={Users}
              bgColor="bg-[#ffedd5]"
              borderColor="border-[#fed7aa]"
              iconBg="bg-[#f97316]"
            />
            <TeacherDashboardStatCard
              label="Total Earning"
              count={stats.totalEarning}
              displayValue={stats.totalEarningDisplay}
              icon={Wallet}
              bgColor="bg-[#f3e8ff]"
              borderColor="border-[#e9d5ff]"
              iconBg="bg-[#d946ef]"
              iconFill
              valuePrefix="৳"
            />
          </div>

          {data.upcomingLiveClass ? (
            <TeacherUpcomingLiveClassCard liveClass={data.upcomingLiveClass} />
          ) : (
            <TeacherClassScheduleCard emptyState={data.classSchedule} />
          )}

          <TeacherSubmittedAssignmentsCard
            assignments={data.submittedAssignments}
            emptyState={data.submittedAssignmentsEmpty}
            courseFilters={data.courseFilters}
            selectedCourseId={data.selectedCourseId}
          />
        </div>

        <div className="space-y-5 xl:space-y-6">
          <TeacherNotificationsCard
            notifications={data.notifications}
            emptyState={data.notificationsEmpty}
            viewAllHref={data.notificationsViewAllHref}
          />
          <TeacherLearnersPerformanceCard
            entries={data.learnersPerformance}
            emptyState={data.learnersPerformanceEmpty}
            courseFilters={data.courseFilters}
            selectedCourseId={data.selectedCourseId}
          />
        </div>
      </div>
    </div>
  );
}
