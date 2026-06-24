import { env } from "@/config";
import { sleep } from "@/utils";

export class AdminApiNotImplementedError extends Error {
  constructor(operation: string) {
    super(
      `Admin API not implemented for "${operation}". ` +
        `Add an api() handler in the service, or set NEXT_PUBLIC_USE_MOCK_API=true.`
    );
    this.name = "AdminApiNotImplementedError";
  }
}

/**
 * Read data — mock resolver when `useMockApi`, otherwise `api()` handler.
 *
 * @example
 * return fetchAdminData(
 *   () => resolveAdminSupportManagement(),
 *   () => apiClient.get<Data>(ADMIN_API_ROUTES.support.tickets).then((r) => r.data)
 * );
 */
export async function fetchAdminData<T>(mock: () => T, api?: () => Promise<T>): Promise<T> {
  if (env.useMockApi) {
    await sleep(200);
    return mock();
  }

  if (api) {
    return api();
  }

  throw new AdminApiNotImplementedError("read");
}

/**
 * Write data — same mock/api split as `fetchAdminData`.
 */
export async function mutateAdminData<T>(mock: () => T, api?: () => Promise<T>): Promise<T> {
  if (env.useMockApi) {
    await sleep(200);
    return mock();
  }

  if (api) {
    return api();
  }

  throw new AdminApiNotImplementedError("write");
}
