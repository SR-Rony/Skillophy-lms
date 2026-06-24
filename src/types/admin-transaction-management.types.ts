import type { StudentPaymentMethodId, StudentPaymentStatus } from "@/types/student-payment-history.types";

export type AdminTransactionManagementTab = "learner" | "teacher";

export type AdminLearnerTransactionStatus = StudentPaymentStatus;

export type AdminTeacherTransactionStatus = "paid" | "due";

export type AdminLearnerTransactionStatusFilterId = "all" | AdminLearnerTransactionStatus;

export type AdminTeacherTransactionStatusFilterId = "all" | AdminTeacherTransactionStatus;

export type AdminTransactionSortId =
  | "default"
  | "name-asc"
  | "name-desc"
  | "date-desc"
  | "amount-desc"
  | "status-asc";

export type AdminTransactionExportId = "csv" | "xsl";

export interface AdminLearnerTransaction {
  id: string;
  name: string;
  email: string;
  avatar: string;
  courseName: string;
  date: string;
  transactionId: string;
  paymentMethod: StudentPaymentMethodId;
  amount: number;
  status: AdminLearnerTransactionStatus;
}

export interface AdminTeacherTransaction {
  id: string;
  name: string;
  email: string;
  avatar: string;
  courseName: string;
  date: string;
  amount: number;
  status: AdminTeacherTransactionStatus;
}

export interface AdminLearnerTransactionStatusOption {
  id: AdminLearnerTransactionStatusFilterId;
  label: string;
}

export interface AdminTeacherTransactionStatusOption {
  id: AdminTeacherTransactionStatusFilterId;
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

export interface AdminLearnerTransactionTabData {
  transactions: AdminLearnerTransaction[];
  statusOptions: AdminLearnerTransactionStatusOption[];
  defaultStatusId: AdminLearnerTransactionStatusFilterId;
}

export interface AdminTeacherTransactionTabData {
  transactions: AdminTeacherTransaction[];
  statusOptions: AdminTeacherTransactionStatusOption[];
  defaultStatusId: AdminTeacherTransactionStatusFilterId;
}

export interface AdminTransactionManagementData {
  learner: AdminLearnerTransactionTabData;
  teacher: AdminTeacherTransactionTabData;
  sortOptions: AdminTransactionSortOption[];
  exportOptions: AdminTransactionExportOption[];
  defaultSortId: AdminTransactionSortId;
  defaultSelectedIds: string[];
  pageSize: number;
  exportLabel: string;
}
