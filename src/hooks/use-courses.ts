"use client";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants";
import { courseService } from "@/services";

export function useCourses() {
  return useQuery({
    queryKey: queryKeys.courses.all,
    queryFn: () => courseService.getAll(),
  });
}

export function useCourse(id: string) {
  return useQuery({
    queryKey: queryKeys.courses.detail(id),
    queryFn: () => courseService.getById(id),
    enabled: !!id,
  });
}
