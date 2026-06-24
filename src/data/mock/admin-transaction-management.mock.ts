import type {
  AdminTransaction,
  AdminTransactionManagementData,
  AdminTransactionManagementTab,
  AdminTransactionStatus,
} from "@/types/admin-transaction-management.types";
import type { StudentPaymentMethodId } from "@/types/student-payment-history.types";

const learnerPeople = [
  { name: "Kathryn Murphy", email: "kathryn@gmail.com" },
  { name: "Guy Hawkins", email: "guy.hawkins@gmail.com" },
  { name: "Brooklyn Simmons", email: "brooklyn.simmons@gmail.com" },
  { name: "Leslie Alexander", email: "leslie.alexander@gmail.com" },
  { name: "Michael Foster", email: "michael.foster@gmail.com" },
  { name: "Dwayne Watkins", email: "dwayne.watkins@gmail.com" },
  { name: "Sarah Mitchell", email: "sarah.mitchell@gmail.com" },
  { name: "James Cooper", email: "james.cooper@gmail.com" },
];

const teacherPeople = [
  { name: "Abdullah Mamun", email: "mamun@gmail.com" },
  { name: "Maisha Afrose", email: "pena@gmail.com" },
  { name: "Guy Hawkins", email: "guy@gmail.com" },
  { name: "Darrell Steward", email: "guy@gmail.com" },
  { name: "Brooklyn Simmons", email: "brooklyn68@gmail.com" },
  { name: "Eleanor Pena", email: "bessie@gmail.com" },
  { name: "Leslie Alexander", email: "leslie.alexander@skillophy.com" },
  { name: "Michael Foster", email: "michael.foster@skillophy.com" },
];

const courseNames = [
  "Foundations of User Experience (UX) Design",
  "UI-UX Guided Program",
  "Design System",
  "Negotiation Skills",
  "English for Everyone",
  "Spoken English",
  "Arabic Language",
  "Wordpress Theme Development Master Class",
];

const paymentMethods: StudentPaymentMethodId[] = [
  "bkash",
  "rocket",
  "visa",
  "nagad",
  "mastercard",
];

const statuses: AdminTransactionStatus[] = ["pending", "failed", "completed"];

const seedLearnerRows: Array<{
  courseName: string;
  paymentMethod: StudentPaymentMethodId;
  amount: number;
  status: AdminTransactionStatus;
}> = [
  {
    courseName: "Foundations of User Experience (UX) Design",
    paymentMethod: "bkash",
    amount: 2400,
    status: "pending",
  },
  {
    courseName: "UI-UX Guided Program",
    paymentMethod: "rocket",
    amount: 1930,
    status: "failed",
  },
  {
    courseName: "Design System",
    paymentMethod: "visa",
    amount: 1200,
    status: "completed",
  },
  {
    courseName: "Negotiation Skills",
    paymentMethod: "nagad",
    amount: 0,
    status: "completed",
  },
  {
    courseName: "English for Everyone",
    paymentMethod: "mastercard",
    amount: 1930,
    status: "pending",
  },
  {
    courseName: "Spoken English",
    paymentMethod: "visa",
    amount: 0,
    status: "failed",
  },
  {
    courseName: "Arabic Language",
    paymentMethod: "nagad",
    amount: 1200,
    status: "completed",
  },
  {
    courseName: "Wordpress Theme Development Master Class",
    paymentMethod: "bkash",
    amount: 2400,
    status: "pending",
  },
];

function buildTransactions(tab: AdminTransactionManagementTab): AdminTransaction[] {
  const people = tab === "learner" ? learnerPeople : teacherPeople;
  const transactions: AdminTransaction[] = [];
  const total = 96;

  for (let index = 0; index < total; index += 1) {
    const person = people[index % people.length];
    const seed = tab === "learner" ? seedLearnerRows[index % seedLearnerRows.length] : null;
    const courseName = seed?.courseName ?? courseNames[index % courseNames.length];
    const paymentMethod = seed?.paymentMethod ?? paymentMethods[index % paymentMethods.length];
    const amount = seed?.amount ?? [2400, 1930, 1200, 0][index % 4];
    const status = seed?.status ?? statuses[index % statuses.length];

    transactions.push({
      id: `${tab}-transaction-${index + 1}`,
      tab,
      name: person.name,
      email: person.email,
      avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(person.name)}-${tab}-${index}`,
      courseName,
      date: "2022-05-11",
      transactionId: "46889028162",
      paymentMethod,
      amount,
      status,
    });
  }

  return transactions;
}

export const adminTransactionManagementData: AdminTransactionManagementData = {
  learner: {
    transactions: buildTransactions("learner"),
  },
  teacher: {
    transactions: buildTransactions("teacher"),
  },
  statusOptions: [
    { id: "all", label: "All Status" },
    { id: "pending", label: "Pending" },
    { id: "failed", label: "Failed" },
    { id: "completed", label: "Completed" },
  ],
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "name-asc", label: "Name (A-Z)" },
    { id: "name-desc", label: "Name (Z-A)" },
    { id: "date-desc", label: "Newest Date" },
    { id: "amount-desc", label: "Highest Amount" },
    { id: "status-asc", label: "Status" },
  ],
  exportOptions: [
    { id: "csv", label: "Export as CSV" },
    { id: "xsl", label: "Export as XSL" },
  ],
  defaultStatusId: "all",
  defaultSortId: "default",
  defaultSelectedIds: [],
  pageSize: 10,
  exportLabel: "Export",
};

export function getAdminTransactionManagement(): AdminTransactionManagementData {
  return adminTransactionManagementData;
}
