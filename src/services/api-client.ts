import { env } from "@/config";
import { getClientAccessToken, getServerAccessToken } from "@/lib/auth-session";
import type { ApiError, ApiResponse } from "@/types";

/**
 * Central HTTP client for backend integration.
 * Swap mock implementations in services when NEXT_PUBLIC_USE_MOCK_API=false.
 */
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async buildHeaders(options: RequestInit = {}): Promise<HeadersInit> {
    const token =
      typeof window !== "undefined" ? getClientAccessToken() : await getServerAccessToken();

    return {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = await this.buildHeaders(options);
    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
      let message = response.statusText || "Request failed";

      try {
        const body = (await response.json()) as { message?: string; code?: string };
        if (body.message) {
          message = body.message;
        }
      } catch {
        // ignore parse errors
      }

      const error: ApiError = {
        message,
        status: response.status,
      };
      throw error;
    }

    return response.json() as Promise<ApiResponse<T>>;
  }

  get<T>(endpoint: string, options?: RequestInit) {
    return this.request<T>(endpoint, { ...options, method: "GET" });
  }

  post<T>(endpoint: string, body?: unknown, options?: RequestInit) {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  put<T>(endpoint: string, body?: unknown, options?: RequestInit) {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  patch<T>(endpoint: string, body?: unknown, options?: RequestInit) {
    return this.request<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  delete<T>(endpoint: string, options?: RequestInit) {
    return this.request<T>(endpoint, { ...options, method: "DELETE" });
  }
}

export const apiClient = new ApiClient(env.apiBaseUrl);
