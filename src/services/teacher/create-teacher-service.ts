import { env } from "@/config";
import { sleep } from "@/utils";

type Fetcher<T> = () => T | Promise<T>;

/**
 * Shared mock/API gate for teacher services.
 * Set NEXT_PUBLIC_USE_MOCK_API=false when wiring real endpoints.
 */
export async function fetchTeacherData<T>(fetchMock: Fetcher<T>): Promise<T> {
  if (env.useMockApi) {
    await sleep(200);
    return fetchMock();
  }

  return fetchMock();
}
