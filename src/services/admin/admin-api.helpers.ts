import { apiClient } from "@/services/api-client";

export function adminApiGet<T>(endpoint: string) {
  return apiClient.get<T>(endpoint).then((response) => response.data);
}

export function adminApiPost<T>(endpoint: string, body?: unknown) {
  return apiClient.post<T>(endpoint, body).then((response) => response.data);
}

export function adminApiPatch<T>(endpoint: string, body?: unknown) {
  return apiClient.patch<T>(endpoint, body).then((response) => response.data);
}

export function adminApiDelete<T>(endpoint: string) {
  return apiClient.delete<T>(endpoint).then((response) => response.data);
}
