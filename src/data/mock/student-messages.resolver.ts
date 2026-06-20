import { studentMessagesDemo } from "@/data/mock/student-messages.mock";
import type { StudentMessagesPageData } from "@/types/student-messages.types";

export function resolveStudentMessages(): StudentMessagesPageData {
  return studentMessagesDemo;
}
