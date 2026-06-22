import { getAdminEmployeeManagement, ADMIN_TEACHER_PROFILE_MAISHA_ID } from "@/data/mock/admin-employee-management.mock";
import { getTeacherAccountSettingsPageData } from "@/data/mock/teacher-account-settings.mock";
import { studentAccountSettingsDemo } from "@/data/mock/student-account-settings.mock";
import type { AdminEmployee } from "@/types/admin-employee-management.types";
import type {
  AdminTeacherProfileInfoData,
  AdminTeacherProfilePageData,
  AdminTeacherLiveCourse,
  AdminTeacherPayment,
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

const paymentSortOptions = [
  { id: "default" as const, label: "Default" },
  { id: "name-asc" as const, label: "Name (A-Z)" },
  { id: "name-desc" as const, label: "Name (Z-A)" },
  { id: "date-desc" as const, label: "Newest First" },
  { id: "date-asc" as const, label: "Oldest First" },
  { id: "amount-desc" as const, label: "Amount (High-Low)" },
  { id: "amount-asc" as const, label: "Amount (Low-High)" },
  { id: "status-asc" as const, label: "Status" },
];

const paymentExportOptions = [
  { id: "csv" as const, label: "Export as CSV" },
  { id: "xsl" as const, label: "Export as XSL" },
];

const paymentSeeds: Omit<AdminTeacherPayment, "id">[] = [
  {
    title: "Foundations of User Experience (UX) Design",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=120&h=120&fit=crop",
    paymentDate: "2022-05-11",
    amount: 18500,
    status: "paid",
  },
  {
    title: "Build Dynamic User Interfaces (UI)",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
    paymentDate: "2022-05-11",
    amount: 22400,
    status: "paid",
  },
  {
    title: "Conduct UX Research and Test Early Concepts",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&h=120&fit=crop",
    paymentDate: "2022-05-11",
    amount: 16250,
    status: "paid",
  },
  {
    title: "Materials and Processes for UX Design",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=120&h=120&fit=crop",
    paymentDate: "2022-05-11",
    amount: 9800,
    status: "due",
  },
  {
    title: "Competitive Audit in Product Design",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&h=120&fit=crop",
    paymentDate: "2022-05-11",
    amount: 12400,
    status: "due",
  },
  {
    title: "Create High-Fidelity Designs and Prototypes",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&fit=crop",
    paymentDate: "2022-05-11",
    amount: 7600,
    status: "due",
  },
];

function buildPayments(employeeId: string): AdminTeacherPayment[] {
  const hash = hashEmployeeId(employeeId);
  const paymentCount = 18 + (hash % 18);
  const payments: AdminTeacherPayment[] = [];

  for (let index = 0; index < paymentCount; index += 1) {
    const seed = paymentSeeds[(index + hash) % paymentSeeds.length];
    const status =
      index < paymentSeeds.length
        ? seed.status
        : index % 4 === 0 || index % 5 === 0
          ? "due"
          : seed.status;

    payments.push({
      id: `${employeeId}-payment-${index + 1}`,
      ...seed,
      amount: seed.amount + (index % 7) * 850,
      status,
    });
  }

  return payments;
}

function getDefaultSelectedPaymentIds(payments: AdminTeacherPayment[]) {
  const duePayments = payments.filter((payment) => payment.status === "due");

  return duePayments.slice(0, 2).map((payment) => payment.id);
}

function buildPaymentsData(employeeId: string) {
  const payments = buildPayments(employeeId);

  return {
    payments,
    sortOptions: paymentSortOptions,
    exportOptions: paymentExportOptions,
    defaultSortId: "default" as const,
    defaultSelectedIds: getDefaultSelectedPaymentIds(payments),
    pageSize: 6,
    exportLabel: "Export",
    markAsPaidLabel: "Mark as Paid",
  };
}

const profileInfoFormOptions = {
  roleOptions: [
    { value: "Teacher", label: "Teacher" },
    { value: "Instructor", label: "Instructor" },
    { value: "Mentor", label: "Mentor" },
  ],
  statusOptions: [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ],
  genderOptions: [
    { value: "Female", label: "Female" },
    { value: "Male", label: "Male" },
    { value: "Other", label: "Other" },
  ],
  countryOptions: [
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "India", label: "India" },
    { value: "United States", label: "United States" },
    { value: "United Kingdom", label: "United Kingdom" },
  ],
  educationFormOptions: studentAccountSettingsDemo.educationFormOptions,
  courseFormOptions: studentAccountSettingsDemo.courseFormOptions,
  skillsFormOptions: {
    ...studentAccountSettingsDemo.skillsFormOptions,
    availableSkills: [
      "Digital Marketing",
      "SEO",
      "Spoken English",
      "English Grammer",
      "IELTS Preparation",
      "Content Writing",
      "Public Speaking",
      "Grammar",
    ],
  },
};

function buildMaishaProfileInfo(): AdminTeacherProfileInfoData {
  const teacherSettings = getTeacherAccountSettingsPageData();

  return {
    generalInfo: teacherSettings.generalInfo,
    biography: teacherSettings.biography,
    roleOptions: teacherSettings.roleOptions,
    statusOptions: teacherSettings.statusOptions,
    genderOptions: teacherSettings.genderOptions,
    countryOptions: teacherSettings.countryOptions,
    educationData: teacherSettings.educationData,
    educationFormOptions: teacherSettings.educationFormOptions,
    courseFormOptions: teacherSettings.courseFormOptions,
    skillsFormOptions: teacherSettings.skillsFormOptions,
  };
}

function buildProfileInfoData(employee: AdminEmployee): AdminTeacherProfileInfoData {
  if (employee.id === ADMIN_TEACHER_PROFILE_MAISHA_ID) {
    return buildMaishaProfileInfo();
  }

  const hash = hashEmployeeId(employee.id);
  const statusLabel = employee.status === "active" ? "Active" : "Inactive";

  return {
    generalInfo: {
      fullName: employee.name,
      role: employee.role,
      status: statusLabel,
      email: employee.email,
      phone: employee.phone,
      gender: hash % 2 === 0 ? "Female" : "Male",
      age: String(28 + (hash % 15)),
      address: "Mirpur 1, Dhaka",
      country: "Bangladesh",
    },
    biography: {
      description: `${employee.name} is an experienced instructor focused on practical learning, student engagement, and measurable outcomes across live and recorded courses.`,
    },
    roleOptions: profileInfoFormOptions.roleOptions,
    statusOptions: profileInfoFormOptions.statusOptions,
    genderOptions: profileInfoFormOptions.genderOptions,
    countryOptions: profileInfoFormOptions.countryOptions,
    educationData: {
      education: [
        {
          id: `${employee.id}-education-1`,
          title: `BA, MA (English), University of Dhaka`,
          dateRange: "February 2012 - February 2016",
          description:
            "Completed undergraduate and postgraduate studies with a focus on linguistics, academic writing, and teaching methodology.",
        },
        {
          id: `${employee.id}-education-2`,
          title: "MSC in English at University of Oxford (UK)",
          dateRange: "February 2017 - February 2019",
          description: "",
        },
      ],
      courses: [
        {
          id: `${employee.id}-course-1`,
          title: "IELTS Score: 8.5",
          dateRange: "February 2019 - February 2020",
          status: "completed",
          certificateUrl: "#",
        },
      ],
      skills: ["Digital Marketing", "SEO", "Spoken English", "English Grammer"],
      interestedAreas: ["Photography", "Travelling", "Reading"],
    },
    educationFormOptions: profileInfoFormOptions.educationFormOptions,
    courseFormOptions: profileInfoFormOptions.courseFormOptions,
    skillsFormOptions: profileInfoFormOptions.skillsFormOptions,
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
    payments: buildPaymentsData(employee.id),
    profileInfo: buildProfileInfoData(employee),
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
  payments: buildPaymentsData(ADMIN_TEACHER_PROFILE_MAISHA_ID),
  profileInfo: buildMaishaProfileInfo(),
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
