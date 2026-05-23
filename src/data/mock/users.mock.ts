import { UserRole } from "@/enums";
import type { User } from "@/types";

export const mockUsers: User[] = [
  {
    id: "user-1",
    email: "student@skillophy.com",
    name: "Alex Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    role: UserRole.STUDENT,
    createdAt: "2025-01-15T10:00:00Z",
  },
  {
    id: "user-2",
    email: "teacher@skillophy.com",
    name: "Dr. Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    role: UserRole.TEACHER,
    createdAt: "2024-06-01T08:00:00Z",
  },
  {
    id: "user-3",
    email: "admin@skillophy.com",
    name: "Jordan Admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    role: UserRole.ADMIN,
    createdAt: "2024-01-01T00:00:00Z",
  },
];
