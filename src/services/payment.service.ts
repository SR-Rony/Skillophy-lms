import { env } from "@/config";
import { mockTransactions } from "@/data/mock/payments.mock";
import { sleep } from "@/utils";

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  status: string;
  description: string;
  createdAt: string;
}

export const paymentService = {
  async getTransactions(): Promise<Transaction[]> {
    if (env.useMockApi) {
      await sleep(400);
      return mockTransactions;
    }
    return [];
  },
};
