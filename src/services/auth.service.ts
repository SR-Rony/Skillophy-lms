import { env } from "@/config";
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
      return mockUsers[0];
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
