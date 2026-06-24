import type {
  AdminLearnerTransaction,
  AdminLearnerTransactionStatus,
  AdminTeacherTransaction,
  AdminTeacherTransactionStatus,
  AdminTransactionManagementData,
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

const learnerStatuses: AdminLearnerTransactionStatus[] = ["pending", "failed", "completed"];

const seedLearnerRows: Array<{
  courseName: string;
  paymentMethod: StudentPaymentMethodId;
  amount: number;
  status: AdminLearnerTransactionStatus;
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

const seedTeacherRows: Array<{
  courseName: string;
  amount: number;
  status: AdminTeacherTransactionStatus;
}> = [
  {
    courseName: "Foundations of User Experience (UX) Design",
    amount: 2400,
    status: "paid",
  },
  {
    courseName: "UI-UX Guided Program",
    amount: 1930,
    status: "due",
  },
  {
    courseName: "Design System",
    amount: 1200,
    status: "paid",
  },
  {
    courseName: "Negotiation Skills",
    amount: 2400,
    status: "due",
  },
  {
    courseName: "English for Everyone",
    amount: 1930,
    status: "paid",
  },
  {
    courseName: "Spoken English",
    amount: 1200,
    status: "due",
  },
  {
    courseName: "Arabic Language",
    amount: 2400,
    status: "paid",
  },
  {
    courseName: "Wordpress Theme Development Master Class",
    amount: 1930,
    status: "due",
  },
];

function buildLearnerTransactions(): AdminLearnerTransaction[] {
  const transactions: AdminLearnerTransaction[] = [];
  const total = 96;

  for (let index = 0; index < total; index += 1) {
    const person = learnerPeople[index % learnerPeople.length];
    const seed = seedLearnerRows[index % seedLearnerRows.length];
    const courseName = seed.courseName;
    const paymentMethod = seed.paymentMethod;
    const amount = seed.amount;
    const status = seed.status;

    transactions.push({
      id: `learner-transaction-${index + 1}`,
      name: person.name,
      email: person.email,
      avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(person.name)}-learner-${index}`,
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

function buildTeacherTransactions(): AdminTeacherTransaction[] {
  const transactions: AdminTeacherTransaction[] = [];
  const total = 96;
  const teacherStatuses: AdminTeacherTransactionStatus[] = ["paid", "due"];

  for (let index = 0; index < total; index += 1) {
    const person = teacherPeople[index % teacherPeople.length];
    const seed = seedTeacherRows[index % seedTeacherRows.length];
    const courseName = seed.courseName;
    const amount = seed.amount;
    const status = seed.status ?? teacherStatuses[index % teacherStatuses.length];

    transactions.push({
      id: `teacher-transaction-${index + 1}`,
      name: person.name,
      email: person.email,
      avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(person.name)}-teacher-${index}`,
      courseName,
      date: "2022-05-11",
      amount,
      status,
    });
  }

  return transactions;
}

export const adminTransactionManagementData: AdminTransactionManagementData = {
  learner: {
    transactions: buildLearnerTransactions(),
    statusOptions: [
      { id: "all", label: "All Status" },
      { id: "pending", label: "Pending" },
      { id: "failed", label: "Failed" },
      { id: "completed", label: "Completed" },
    ],
    defaultStatusId: "all",
  },
  teacher: {
    transactions: buildTeacherTransactions(),
    statusOptions: [
      { id: "all", label: "All Status" },
      { id: "paid", label: "Paid" },
      { id: "due", label: "Due" },
    ],
    defaultStatusId: "all",
  },
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
  defaultSortId: "default",
  defaultSelectedIds: [],
  pageSize: 10,
  exportLabel: "Export",
};

export function getAdminTransactionManagement(): AdminTransactionManagementData {
  return adminTransactionManagementData;
}
