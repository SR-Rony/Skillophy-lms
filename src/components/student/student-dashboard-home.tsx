"use client";

import { CheckCircle2, Heart, Settings } from "lucide-react";
import { Container } from "@/components/shared";
import { useAuthStore } from "@/store";
import { studentDashboardData } from "@/data/mock/student-dashboard.mock";
import { DashboardStatCard } from "./dashboard-stat-card";
import { NotificationPanel } from "./notification-panel";
import { RecommendedCoursesSection } from "./recommended-courses-section";
import { ScheduleCard } from "./schedule-card";
import { UpcomingLiveClassBanner } from "./upcoming-live-class-banner";
import { WelcomeHeader } from "./welcome-header";

export function StudentDashboardHome() {
  const user = useAuthStore((state) => state.user);
  const firstName = user?.name?.split(" ")[0] ?? "Nushrat";

  const { stats, upcomingLiveClass, notifications, recommendedCourses } = studentDashboardData;

  return (
    <>
      <WelcomeHeader firstName={firstName} />

      <Container className="space-y-6 py-6 md:space-y-8 md:py-8">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px] lg:grid-rows-[auto_1fr] lg:items-stretch lg:gap-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-start-1 lg:row-start-1">
            <DashboardStatCard
              label="Completed"
              count={stats.completed}
              icon={CheckCircle2}
              bgColor="bg-[#f0faf7]"
              iconBg="bg-[#24bf72]"
              iconFill
            />
            <DashboardStatCard
              label="In Progress"
              count={stats.inProgress}
              icon={Settings}
              bgColor="bg-[#fff7ed]"
              iconBg="bg-[#ff9500]"
            />
            <DashboardStatCard
              label="Wishlists"
              count={stats.wishlists}
              icon={Heart}
              bgColor="bg-[#fef4ff]"
              iconBg="bg-gradient-to-br from-[#e879f9] to-[#c026d3]"
              iconFill
            />
          </div>

          <div className="lg:col-start-1 lg:row-start-2">
            {upcomingLiveClass ? (
              <UpcomingLiveClassBanner {...upcomingLiveClass} />
            ) : (
              <ScheduleCard />
            )}
          </div>

          <NotificationPanel
            notifications={notifications}
            className="lg:col-start-2 lg:row-start-1 lg:row-span-2"
          />
        </div>

        <RecommendedCoursesSection courses={recommendedCourses} />
      </Container>
    </>
  );
}
