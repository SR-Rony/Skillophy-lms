"use client";

import { AdminLearnerProfileCourseNameCell } from "@/components/admin/learner-profile/shared/admin-learner-profile-course-name-cell";
import { AdminLearnerProfileCourseTeacherCell } from "@/components/admin/learner-profile/shared/admin-learner-profile-course-teacher-cell";
import { AdminLearnerProfileStatusBadge } from "@/components/admin/learner-profile/shared/admin-learner-profile-status-badge";
import { AdminLearnerProfileViewDetailsButton } from "@/components/admin/learner-profile/shared/admin-learner-profile-view-details-button";
import {
  formatAdminLearnerEnrolledDate,
  formatAdminLearnerTotalScore,
} from "@/components/admin/learner-profile/admin-learner-profile.utils";
import type { AdminLearnerRecordedCourse } from "@/types/admin-learner-profile.types";

interface AdminLearnerProfileRecordedCoursesTableProps {
  courses: AdminLearnerRecordedCourse[];
  onViewDetails?: (course: AdminLearnerRecordedCourse) => void;
}

export function AdminLearnerProfileRecordedCoursesTable({
  courses,
  onViewDetails,
}: AdminLearnerProfileRecordedCoursesTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[980px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#ebe8e6] bg-white">
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Course Name
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Course Teacher
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Enrolled Date
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Total Score
            </th>
            <th className="px-4 py-3.5 text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Status
            </th>
            <th className="px-4 py-3.5 text-right text-[13px] font-bold text-[#1a1a1a] sm:px-6 sm:text-[14px]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr
              key={course.id}
              className="border-b border-[#f3f4f6] bg-white last:border-b-0 hover:bg-[#fafafa]"
            >
              <td className="px-4 py-3.5 sm:px-6">
                <AdminLearnerProfileCourseNameCell
                  thumbnail={course.thumbnail}
                  title={course.title}
                />
              </td>
              <td className="px-4 py-3.5 sm:px-6">
                <AdminLearnerProfileCourseTeacherCell
                  teacherAvatar={course.teacherAvatar}
                  teacherName={course.teacherName}
                />
              </td>
              <td className="whitespace-nowrap px-4 py-3.5 text-[13px] font-medium text-[#757575] sm:px-6">
                {formatAdminLearnerEnrolledDate(course.enrolledDate)}
              </td>
              <td className="whitespace-nowrap px-4 py-3.5 text-[13px] font-medium tabular-nums text-[#757575] sm:px-6">
                {formatAdminLearnerTotalScore(course.totalScore)}
              </td>
              <td className="px-4 py-3.5 sm:px-6">
                <AdminLearnerProfileStatusBadge status={course.status} />
              </td>
              <td className="px-4 py-3.5 text-right sm:px-6">
                <AdminLearnerProfileViewDetailsButton
                  onClick={() => onViewDetails?.(course)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
