import { studentAccountSettingsDemo } from "@/data/mock/student-account-settings.mock";
import type { StudentAccountSettingsPageData } from "@/types/student-account-settings.types";

export function resolveStudentAccountSettings(): StudentAccountSettingsPageData {
  return studentAccountSettingsDemo;
}
