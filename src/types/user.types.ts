import type { UserRole } from "@/enums";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  bio?: string;
  createdAt: string;
}

export interface UserProfile extends User {
  phone?: string;
  country?: string;
  timezone?: string;
}
