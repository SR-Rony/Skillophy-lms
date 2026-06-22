import { getAdminEmployeeManagement, ADMIN_TEACHER_PROFILE_MAISHA_ID } from "@/data/mock/admin-employee-management.mock";
import type { AdminEmployee } from "@/types/admin-employee-management.types";
import type {
  AdminTeacherProfilePageData,
  AdminTeacherLiveCourse,
  AdminTeacherRecordedCourse,
} from "@/types/admin-teacher-profile.types";

export { ADMIN_TEACHER_PROFILE_MAISHA_ID };

const profileTabs = [
  { id: "recorded-courses" as const, label: "Recorded Courses" },
  { id: "live-courses" as const, label: "LIVE Courses" },
  { id: "payment" as const, label: "Payment" },
  { id: "profile-info" as const, label: "Profile Info" },
  { id: "more" as const, label: "More" },
];

const recordedCourseSortOptions = [
  { id: "default" as const, label: "Default" },
  { id: "name-asc" as const, label: "Name (A-Z)" },
  { id: "name-desc" as const, label: "Name (Z-A)" },
  { id: "date-desc" as const, label: "Newest First" },
  { id: "date-asc" as const, label: "Oldest First" },
  { id: "students-desc" as const, label: "Most Enrolled" },
];

const recordedCourseSeeds: Omit<AdminTeacherRecordedCourse, "id">[] = [
  {
    title: "Foundations of User Experience (UX) Design",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=120&h=120&fit=crop",
    publishDate: "2021-05-11",
    enrolledStudents: 57892,
    rating: 4.5,
    detailsHref: "/admin/courses",
  },
  {
    title: "Materials and Processes for UX Design",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=120&h=120&fit=crop",
    publishDate: "2023-01-15",
    enrolledStudents: 3245,
    rating: 5,
    detailsHref: "/admin/courses",
  },
  {
    title: "Competitive Audit in Product Design",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&h=120&fit=crop",
    publishDate: "2025-08-25",
    enrolledStudents: 20,
    rating: 3,
    detailsHref: "/admin/courses",
  },
  {
    title: "Build Dynamic User Interfaces (UI)",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
    publishDate: "2022-03-08",
    enrolledStudents: 12840,
    rating: 4,
    detailsHref: "/admin/courses",
  },
  {
    title: "Conduct UX Research and Test Early Concepts",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&h=120&fit=crop",
    publishDate: "2020-11-22",
    enrolledStudents: 9412,
    rating: 4.5,
    detailsHref: "/admin/courses",
  },
  {
    title: "Create High-Fidelity Designs and Prototypes",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&fit=crop",
    publishDate: "2024-06-14",
    enrolledStudents: 5621,
    rating: 4,
    detailsHref: "/admin/courses",
  },
];

const liveCourseSortOptions = [
  { id: "default" as const, label: "Default" },
  { id: "name-asc" as const, label: "Name (A-Z)" },
  { id: "name-desc" as const, label: "Name (Z-A)" },
  { id: "date-desc" as const, label: "Newest First" },
  { id: "date-asc" as const, label: "Oldest First" },
  { id: "students-desc" as const, label: "Most Enrolled" },
  { id: "status-asc" as const, label: "Status" },
];

const liveCourseSeeds: Omit<AdminTeacherLiveCourse, "id">[] = [
  {
    title: "Foundations of User Experience (UX) Design",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=120&h=120&fit=crop",
    startDate: "2021-05-11",
    enrolledStudents: 57892,
    status: "completed",
    progress: 100,
    rating: 4.5,
    detailsHref: "/admin/courses",
  },
  {
    title: "Materials and Processes for UX Design",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=120&h=120&fit=crop",
    startDate: "2023-01-15",
    enrolledStudents: 3245,
    status: "ongoing",
    progress: 65,
    rating: 5,
    detailsHref: "/admin/courses",
  },
  {
    title: "Competitive Audit in Product Design",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&h=120&fit=crop",
    startDate: "2025-08-25",
    enrolledStudents: 20,
    status: "upcoming",
    progress: 0,
    rating: 3,
    detailsHref: "/admin/courses",
  },
  {
    title: "Build Dynamic User Interfaces (UI)",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
    startDate: "2022-03-08",
    enrolledStudents: 12840,
    status: "completed",
    progress: 100,
    rating: 4,
    detailsHref: "/admin/courses",
  },
  {
    title: "Conduct UX Research and Test Early Concepts",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&h=120&fit=crop",
    startDate: "2024-11-22",
    enrolledStudents: 9412,
    status: "ongoing",
    progress: 42,
    rating: 4.5,
    detailsHref: "/admin/courses",
  },
  {
    title: "Create High-Fidelity Designs and Prototypes",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&fit=crop",
    startDate: "2025-12-14",
    enrolledStudents: 5621,
    status: "upcoming",
    progress: 0,
    rating: 4,
    detailsHref: "/admin/courses",
  },
];

function buildLiveCourses(employeeId: string): AdminTeacherLiveCourse[] {
  const hash = hashEmployeeId(employeeId);
  const courseCount = 18 + (hash % 18);
  const courses: AdminTeacherLiveCourse[] = [];

  for (let index = 0; index < courseCount; index += 1) {
    const seed = liveCourseSeeds[(index + hash) % liveCourseSeeds.length];

    courses.push({
      id: `${employeeId}-live-course-${index + 1}`,
      ...seed,
      enrolledStudents: Math.max(12, seed.enrolledStudents - index * 41 - (hash % 180)),
      progress:
        seed.status === "completed" ? 100 : seed.status === "upcoming" ? 0 : 35 + (index % 50),
      rating: Math.max(3, seed.rating - (index % 3) * 0.5),
    });
  }

  return courses;
}

function buildLiveCoursesData(employeeId: string) {
  return {
    courses: buildLiveCourses(employeeId),
    sortOptions: liveCourseSortOptions,
    defaultSortId: "default" as const,
    pageSize: 6,
  };
}

function hashEmployeeId(employeeId: string) {
  return employeeId.split("").reduce((total, character) => total + character.charCodeAt(0), 0);
}

function buildRecordedCourses(employeeId: string): AdminTeacherRecordedCourse[] {
  const hash = hashEmployeeId(employeeId);
  const courseCount = 18 + (hash % 18);
  const courses: AdminTeacherRecordedCourse[] = [];

  for (let index = 0; index < courseCount; index += 1) {
    const seed = recordedCourseSeeds[(index + hash) % recordedCourseSeeds.length];

    courses.push({
      id: `${employeeId}-recorded-course-${index + 1}`,
      ...seed,
      enrolledStudents: Math.max(12, seed.enrolledStudents - index * 37 - (hash % 200)),
      rating: Math.max(3, seed.rating - (index % 3) * 0.5),
    });
  }

  return courses;
}

function buildTeacherStats(employeeId: string) {
  const hash = hashEmployeeId(employeeId);

  return {
    totalEarnings: 42000 + (hash % 180000),
    totalCourses: 3 + (hash % 8),
    ongoingCourses: 1 + (hash % 4),
  };
}

function buildTeacherProfileFromEmployee(employee: AdminEmployee): AdminTeacherProfilePageData {
  const recordedCourses = buildRecordedCourses(employee.id);

  return {
    profile: {
      id: employee.id,
      fullName: employee.name,
      role: employee.role,
      phone: employee.phone,
      email: employee.email,
      avatarUrl: employee.avatar,
      status: employee.status,
      stats: buildTeacherStats(employee.id),
      tabs: profileTabs,
    },
    recordedCourses: {
      courses: recordedCourses,
      sortOptions: recordedCourseSortOptions,
      defaultSortId: "default",
      pageSize: 6,
    },
    liveCourses: buildLiveCoursesData(employee.id),
  };
}

const maishaAfroseProfile: AdminTeacherProfilePageData = {
  profile: {
    id: ADMIN_TEACHER_PROFILE_MAISHA_ID,
    fullName: "Maisha Afrose",
    role: "Teacher",
    phone: "(209) 555-0104",
    email: "maisha@gmail.com",
    avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha%20Afrose",
    status: "active",
    stats: {
      totalEarnings: 102400,
      totalCourses: 5,
      ongoingCourses: 2,
    },
    tabs: profileTabs,
  },
  recordedCourses: {
    courses: buildRecordedCourses(ADMIN_TEACHER_PROFILE_MAISHA_ID),
    sortOptions: recordedCourseSortOptions,
    defaultSortId: "default",
    pageSize: 6,
  },
  liveCourses: buildLiveCoursesData(ADMIN_TEACHER_PROFILE_MAISHA_ID),
};

export function getAdminTeacherProfile(employeeId: string): AdminTeacherProfilePageData | null {
  if (employeeId === ADMIN_TEACHER_PROFILE_MAISHA_ID) {
    return maishaAfroseProfile;
  }

  const employee = getAdminEmployeeManagement().employees.find((item) => item.id === employeeId);

  if (!employee || employee.category !== "teacher") {
    return null;
  }

  return buildTeacherProfileFromEmployee(employee);
}
