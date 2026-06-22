"use client";

import Image from "next/image";
import Link from "next/link";
import { AdminLearnerProfileCourseStatusBadge } from "@/components/admin/learner-profile/admin-learner-profile-course-status-badge";
import {
  formatAdminLearnerEnrolledDate,
  formatAdminLearnerTotalScore,
} from "@/components/admin/learner-profile/admin-learner-profile.utils";
import type { AdminLearnerRecordedCourse } from "@/types/admin-learner-profile.types";

interface AdminLearnerProfileRecordedCoursesTableProps {
  courses: AdminLearnerRecordedCourse[];
}

export function AdminLearnerProfileRecordedCoursesTable({
  courses,
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
                <div className="flex min-w-[260px] items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
                    <Image
                      src={course.thumbnail}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <p className="text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
                    {course.title}
                  </p>
                </div>
              </td>
              <td className="px-4 py-3.5 sm:px-6">
                <div className="flex min-w-[180px] items-center gap-2.5">
                  <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#f3f4f6]">
                    <Image
                      src={course.teacherAvatar}
                      alt=""
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <p className="text-[13px] font-medium text-[#757575] sm:text-[14px]">
                    {course.teacherName}
                  </p>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-3.5 text-[13px] font-medium text-[#757575] sm:px-6">
                {formatAdminLearnerEnrolledDate(course.enrolledDate)}
              </td>
              <td className="whitespace-nowrap px-4 py-3.5 text-[13px] font-medium tabular-nums text-[#757575] sm:px-6">
                {formatAdminLearnerTotalScore(course.totalScore)}
              </td>
              <td className="px-4 py-3.5 sm:px-6">
                <AdminLearnerProfileCourseStatusBadge status={course.status} />
              </td>
              <td className="px-4 py-3.5 text-right sm:px-6">
                <Link
                  href={course.detailsHref}
                  className="text-[13px] font-semibold text-primary transition-opacity hover:opacity-80 sm:text-[14px]"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
