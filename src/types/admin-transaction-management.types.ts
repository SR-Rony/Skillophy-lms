import type { StudentPaymentMethodId, StudentPaymentStatus } from "@/types/student-payment-history.types";

export type AdminTransactionManagementTab = "learner" | "teacher";

export type AdminTransactionStatus = StudentPaymentStatus;

export type AdminTransactionStatusFilterId = "all" | AdminTransactionStatus;

export type AdminTransactionSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "date-desc"
  | "amount-desc"
  | "status-asc";

export type AdminTransactionExportId = "csv" | "xsl";

export interface AdminTransaction {
  id: string;
  tab: AdminTransactionManagementTab;
  name: string;
  email: string;
  avatar: string;
  courseName: string;
  date: string;
  transactionId: string;
  paymentMethod: StudentPaymentMethodId;
  amount: number;
  status: AdminTransactionStatus;
}

export interface AdminTransactionStatusOption {
  id: AdminTransactionStatusFilterId;
  label: string;
}

export interface AdminTransactionSortOption {
  id: AdminTransactionSortId;
  label: string;
}

export interface AdminTransactionExportOption {
  id: AdminTransactionExportId;
  label: string;
}

export interface AdminTransactionTabData {
  transactions: AdminTransaction[];
}

export interface AdminTransactionManagementData {
  learner: AdminTransactionTabData;
  teacher: AdminTransactionTabData;
  statusOptions: AdminTransactionStatusOption[];
  sortOptions: AdminTransactionSortOption[];
  exportOptions: AdminTransactionExportOption[];
  defaultStatusId: AdminTransactionStatusFilterId;
  defaultSortId: AdminTransactionSortId;
  defaultSelectedIds: string[];
  pageSize: number;
  exportLabel: string;
}
