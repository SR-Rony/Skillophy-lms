import { GraduationCap, Users, Wallet } from "lucide-react";
import { AdminTeachersStatIcon } from "@/components/admin/dashboard/admin-teachers-stat-icon";
import { AdminBestSellingCoursesSection } from "@/components/admin/dashboard/admin-best-selling-courses-section";
import { AdminCourseStatisticsCard } from "@/components/admin/dashboard/admin-course-statistics-card";
import { AdminNotificationsCard } from "@/components/admin/dashboard/admin-notifications-card";
import { AdminSalesRevenueCard } from "@/components/admin/dashboard/admin-sales-revenue-card";
import { AdminStudentEnrolmentCard } from "@/components/admin/dashboard/admin-student-enrolment-card";
import { TeacherDashboardStatCard } from "@/components/teacher/dashboard/teacher-dashboard-stat-card";
import type { AdminDashboardData } from "@/types/admin-dashboard.types";

interface AdminDashboardHomeProps {
  data: AdminDashboardData;
}

export function AdminDashboardHome({ data }: AdminDashboardHomeProps) {
  const { stats } = data;

  return (
    <div className="mx-auto w-full max-w-[1320px] space-y-5 xl:space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
          label="Total Teachers"
          count={stats.totalTeachers}
          displayValue={stats.totalTeachersDisplay}
          icon={AdminTeachersStatIcon}
          bgColor="bg-[#f3e8ff]"
          borderColor="border-[#e9d5ff]"
          iconBg="bg-[#a855f7]"
          iconFill
        />
        <TeacherDashboardStatCard
          label="Total Revenue"
          count={stats.totalRevenue}
          displayValue={stats.totalRevenueDisplay}
          icon={Wallet}
          bgColor="bg-[#fce7f3]"
          borderColor="border-[#fbcfe8]"
          iconBg="bg-[#ec4899]"
          iconFill
          valuePrefix="৳"
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start xl:gap-6">
        <AdminSalesRevenueCard
          salesRevenue={data.salesRevenue}
          highlightedMonth={data.highlightedRevenueMonth}
        />
        <AdminNotificationsCard
          notifications={data.notifications}
          emptyState={data.notificationsEmpty}
          viewAllHref={data.notificationsViewAllHref}
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch xl:gap-6">
        <AdminCourseStatisticsCard
          courseFilters={data.courseFilters}
          selectedCourseId={data.selectedCourseId}
          statistics={data.courseStatistics}
        />
        <AdminStudentEnrolmentCard
          courseFilters={data.courseFilters}
          selectedCourseId={data.selectedCourseId}
          monthlyEnrollment={data.monthlyEnrollment}
        />
      </div>

      <AdminBestSellingCoursesSection courses={data.bestSellingCourses} />
    </div>
  );
}
