/**
 * Centralized TanStack Query keys — prevents cache key drift across features.
 */
import type { BlogListFilters } from "@/types/blog.types";

export const queryKeys = {
  auth: {
    session: ["auth", "session"] as const,
    profile: ["auth", "profile"] as const,
  },
  courses: {
    all: ["courses"] as const,
    list: (filters?: Record<string, unknown>) => ["courses", "list", filters] as const,
    detail: (id: string) => ["courses", "detail", id] as const,
    enrolled: ["courses", "enrolled"] as const,
  },
  lessons: {
    byCourse: (courseId: string) => ["lessons", courseId] as const,
  },
  quizzes: {
    byCourse: (courseId: string) => ["quizzes", courseId] as const,
  },
  assignments: {
    all: ["assignments"] as const,
    byCourse: (courseId: string) => ["assignments", courseId] as const,
  },
  certificates: {
    all: ["certificates"] as const,
  },
  payments: {
    history: ["payments", "history"] as const,
    methods: ["payments", "methods"] as const,
  },
  notifications: {
    all: ["notifications"] as const,
    unreadCount: ["notifications", "unread-count"] as const,
  },
  chat: {
    conversations: ["chat", "conversations"] as const,
    messages: (conversationId: string) => ["chat", "messages", conversationId] as const,
  },
  users: {
    all: ["users"] as const,
    detail: (id: string) => ["users", "detail", id] as const,
  },
  analytics: {
    dashboard: (role: string) => ["analytics", "dashboard", role] as const,
  },
  blog: {
    categories: ["blog", "categories"] as const,
    totalCount: ["blog", "total-count"] as const,
    list: (filters?: BlogListFilters) => ["blog", "list", filters] as const,
    detail: (slug: string) => ["blog", "detail", slug] as const,
    related: (slug: string, limit = 3) => ["blog", "related", slug, limit] as const,
  },
} as const;
