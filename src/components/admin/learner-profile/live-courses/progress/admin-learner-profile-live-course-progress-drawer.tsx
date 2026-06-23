"use client";

import { AdminLearnerProfileLiveCourseProgressTable } from "@/components/admin/learner-profile/live-courses/progress/admin-learner-profile-live-course-progress-table";
import { AdminLearnerProfileDetailsDrawer } from "@/components/admin/learner-profile/shared/admin-learner-profile-details-drawer";
import { useAdminLearnerProfileProgressDrawer } from "@/components/admin/learner-profile/shared/use-admin-learner-profile-progress-drawer";
import type { AdminLearnerLiveCourse } from "@/types/admin-learner-profile.types";

interface AdminLearnerProfileLiveCourseProgressDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  course: AdminLearnerLiveCourse | null;
}

const PROGRESS_TOPICS_PAGE_SIZE = 10;

export function AdminLearnerProfileLiveCourseProgressDrawer({
  open,
  onOpenChange,
  course,
}: AdminLearnerProfileLiveCourseProgressDrawerProps) {
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
      maxWidthClassName="max-w-[900px]"
      closeLabel="Close live progress details drawer"
      emptyMessage="No progress topics available for this course."
      hasItems={items.length > 0}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    >
      <AdminLearnerProfileLiveCourseProgressTable topics={items} />
    </AdminLearnerProfileDetailsDrawer>
  );
}
