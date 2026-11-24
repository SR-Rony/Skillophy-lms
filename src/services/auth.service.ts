import { env } from "@/config";
import { UserRole } from "@/enums";
import { mockUsers } from "@/data/mock/users.mock";
import type { User } from "@/types";
import { sleep } from "@/utils";
import { apiClient } from "./api-client";

export interface LoginPayload {
  mobileNumber: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  name: string;
}

interface BackendSessionUser {
  id: string;
  email: string | null;
  mobile: string;
  name: string;
  role: "STUDENT" | "TEACHER" | "ADMIN";
  avatar: string | null;
}

interface LoginApiResponse {
  user: BackendSessionUser;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
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

function mapSessionUser(user: BackendSessionUser): User {
  return {
    id: user.id,
    email: user.email ?? "",
    name: user.name,
    avatar: user.avatar ?? undefined,
    role: user.role.toLowerCase() as UserRole,
    createdAt: new Date().toISOString(),
  };
}

export const authService = {
  async getSession(): Promise<User | null> {
    if (env.useMockApi) {
      await sleep(300);
      return mockUsers[0];
    }

    return apiClient.get<User>("/auth/session").then((response) => response.data);
  },

  async login(payload: LoginPayload): Promise<{ user: User; accessToken: string }> {
    if (env.useMockApi) {
      await sleep(500);
      return {
        user: resolveMockUser(payload.mobileNumber),
        accessToken: "mock-access-token",
      };
    }

    const response = await apiClient.post<LoginApiResponse>("/auth/login", payload);
    return {
      user: mapSessionUser(response.data.user),
      accessToken: response.data.tokens.accessToken,
    };
  },

  async socialLogin(provider: "google" | "facebook"): Promise<User> {
    if (env.useMockApi) {
      await sleep(500);
      return mockUsers.find((user) => user.email.includes(provider)) ?? mockUsers[0];
    }

    return apiClient
      .post<LoginApiResponse>(`/auth/oauth/${provider}`)
      .then((response) => mapSessionUser(response.data.user));
  },

  async logout(): Promise<void> {
    if (env.useMockApi) {
      await sleep(200);
      return;
    }

    await apiClient.post("/auth/logout");
  },
};
