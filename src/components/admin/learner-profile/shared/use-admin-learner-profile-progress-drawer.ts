"use client";

import { useEffect, useMemo, useState } from "react";
import { paginateAdminLearnerProgressTopics } from "@/components/admin/learner-profile/admin-learner-profile.utils";

export function useAdminLearnerProfileProgressDrawer<T>(
  open: boolean,
  topics: T[] | undefined,
  pageSize: number,
  resetKey?: string
) {
  const [currentPage, setCurrentPage] = useState(1);

  const { items, totalPages, currentPage: safePage } = useMemo(() => {
    if (!topics?.length) {
      return { items: [] as T[], totalPages: 1, currentPage: 1 };
    }

    return paginateAdminLearnerProgressTopics(topics, currentPage, pageSize);
  }, [topics, currentPage, pageSize]);

  useEffect(() => {
    if (open) {
      setCurrentPage(1);
    }
  }, [open, resetKey]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return {
    items,
    totalPages,
    currentPage: safePage,
    setCurrentPage,
  };
}
