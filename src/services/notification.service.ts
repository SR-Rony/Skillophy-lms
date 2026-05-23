import { env } from "@/config";
import { mockNotifications } from "@/data/mock/notifications.mock";
import { sleep } from "@/utils";

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export const notificationService = {
  async getAll(): Promise<Notification[]> {
    if (env.useMockApi) {
      await sleep(300);
      return mockNotifications;
    }
    return [];
  },
};
