/**
 * TanStack Query defaults — tuned for LMS data (courses, progress, notifications).
 */
export const queryConfig = {
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
} as const;
