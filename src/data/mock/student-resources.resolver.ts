import { studentResourcesDemo } from "@/data/mock/student-resources.mock";
import type { StudentResourcesPageData } from "@/types/student-resources.types";

export function resolveStudentResources(): StudentResourcesPageData {
  return studentResourcesDemo;
}
