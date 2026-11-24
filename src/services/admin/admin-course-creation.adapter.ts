import {
  resolveAdminCourseCreationNew,
  resolveAdminLiveCourseCreation,
} from "@/data/mock/admin-data.resolvers";
import { ADMIN_API_ROUTES } from "@/constants/admin-api-routes";
import type { AdminCategoryManagementData } from "@/types/admin-category-management.types";
import type {
  AdminCourseCreationData,
  AdminCourseCreationType,
} from "@/types/admin-course-creation.types";
import type { AdminEmployeeManagementData } from "@/types/admin-employee-management.types";
import { adminApiGet } from "./admin-api.helpers";

function buildCourseCreationData(
  base: AdminCourseCreationData,
  categories: AdminCategoryManagementData,
  employees: AdminEmployeeManagementData,
  courseType: AdminCourseCreationType
): AdminCourseCreationData {
  const teachers = employees.employees
    .filter((employee) => employee.category === "teacher")
    .map((teacher) => ({
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      avatar: teacher.avatar,
    }));

  return {
    ...base,
    courseType,
    formOptions: {
      ...base.formOptions,
      courseCategories: categories.course.categories.map((category) => ({
        value: category.id,
        label: category.name,
      })),
      teachers: teachers.length > 0 ? teachers : base.formOptions.teachers,
    },
  };
}

export async function fetchAdminCourseCreationForm(
  courseType: AdminCourseCreationType
): Promise<AdminCourseCreationData> {
  const [categories, employees] = await Promise.all([
    adminApiGet<AdminCategoryManagementData>(ADMIN_API_ROUTES.categories),
    adminApiGet<AdminEmployeeManagementData>(ADMIN_API_ROUTES.employees),
  ]);

  const base =
    courseType === "live" ? resolveAdminLiveCourseCreation() : resolveAdminCourseCreationNew();

  return buildCourseCreationData(base, categories, employees, courseType);
}
