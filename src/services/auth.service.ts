import { env } from "@/config";
import { UserRole } from "@/enums";
import { mockUsers } from "@/data/mock/users.mock";
import type { User } from "@/types";
import { sleep } from "@/utils";
// import { apiClient } from "./api-client";

export interface LoginPayload {
  mobileNumber: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  name: string;
}

function resolveMockUser(identifier: string): User {
  const normalized = identifier.trim().toLowerCase();

  if (normalized.includes("teacher") || normalized.includes("01700000002")) {
    return mockUsers.find((user) => user.role === UserRole.TEACHER) ?? mockUsers[0];
  }

  if (normalized.includes("admin") || normalized.includes("01700000003")) {
    return mockUsers.find((user) => user.role === UserRole.ADMIN) ?? mockUsers[0];
  }

  return mockUsers.find((user) => user.role === UserRole.STUDENT) ?? mockUsers[0];
}

export const authService = {
  async getSession(): Promise<User | null> {
    if (env.useMockApi) {
      await sleep(300);
      return mockUsers[0];
    }
    // return apiClient.get<User>("/auth/session").then((r) => r.data);
    return null;
  },

  async login(payload: LoginPayload): Promise<User> {
    if (env.useMockApi) {
      await sleep(500);
      return resolveMockUser(payload.mobileNumber);
    }
    // return apiClient.post<User>("/auth/login", payload).then((r) => r.data);
    throw new Error("Backend not configured");
  },

  async socialLogin(provider: "google" | "facebook"): Promise<User> {
    if (env.useMockApi) {
      await sleep(500);
      return mockUsers.find((user) => user.email.includes(provider)) ?? mockUsers[0];
    }
    // return apiClient.post<User>(`/auth/oauth/${provider}`).then((r) => r.data);
    throw new Error("Backend not configured");
  },

  async logout(): Promise<void> {
    if (env.useMockApi) {
      await sleep(200);
      return;
    }
    // await apiClient.post("/auth/logout");
  },
};
