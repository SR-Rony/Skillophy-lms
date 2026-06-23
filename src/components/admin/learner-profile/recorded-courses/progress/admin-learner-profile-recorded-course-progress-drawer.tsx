"use client";

import { AdminLearnerProfileRecordedCourseProgressTable } from "@/components/admin/learner-profile/recorded-courses/progress/admin-learner-profile-recorded-course-progress-table";
import { AdminLearnerProfileDetailsDrawer } from "@/components/admin/learner-profile/shared/admin-learner-profile-details-drawer";
import { useAdminLearnerProfileProgressDrawer } from "@/components/admin/learner-profile/shared/use-admin-learner-profile-progress-drawer";
import type { AdminLearnerRecordedCourse } from "@/types/admin-learner-profile.types";

interface AdminLearnerProfileRecordedCourseProgressDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course: AdminLearnerRecordedCourse | null;
}

const PROGRESS_TOPICS_PAGE_SIZE = 10;

export function AdminLearnerProfileRecordedCourseProgressDrawer({
  open,
  onOpenChange,
  course,
}: AdminLearnerProfileRecordedCourseProgressDrawerProps) {
  const { items, totalPages, currentPage, setCurrentPage } = useAdminLearnerProfileProgressDrawer(
    open,
    course?.progressTopics,
    PROGRESS_TOPICS_PAGE_SIZE,
    course?.id
  );

  return (
    <AdminLearnerProfileDetailsDrawer
      open={open}
      onOpenChange={onOpenChange}
      title="Progress Details"
      courseTitle={course?.title}
      closeLabel="Close progress details drawer"
      emptyMessage="No progress topics available for this course."
      hasItems={items.length > 0}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    >
      <AdminLearnerProfileRecordedCourseProgressTable topics={items} />
    </AdminLearnerProfileDetailsDrawer>
  );
}
