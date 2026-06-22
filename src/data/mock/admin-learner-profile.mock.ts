import {
  ADMIN_LEARNER_PROFILE_NUSHRAT_ID,
  getAdminLearnerManagement,
} from "@/data/mock/admin-learner-management.mock";
import type { AdminLearner } from "@/types/admin-learner-management.types";
import type {
  AdminLearnerProfileInfoData,
  AdminLearnerProfilePageData,
  AdminLearnerRecordedCourse,
} from "@/types/admin-learner-profile.types";

export { ADMIN_LEARNER_PROFILE_NUSHRAT_ID };

const profileTabs = [
  { id: "recorded-courses" as const, label: "Recorded Courses" },
  { id: "live-courses" as const, label: "LIVE Courses" },
  { id: "learner-profile" as const, label: "Learner Profile" },
  { id: "more" as const, label: "More" },
];

const recordedCourseSortOptions = [
  { id: "default" as const, label: "Default" },
  { id: "name-asc" as const, label: "Name (A-Z)" },
  { id: "name-desc" as const, label: "Name (Z-A)" },
  { id: "date-desc" as const, label: "Newest First" },
  { id: "date-asc" as const, label: "Oldest First" },
  { id: "score-desc" as const, label: "Highest Score" },
  { id: "status-asc" as const, label: "Status" },
];

const teacherMaisha = {
  name: "Maisha Afrose",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Maisha%20Afrose",
};

const recordedCourseSeeds: Omit<AdminLearnerRecordedCourse, "id">[] = [
  {
    title: "Foundations of User Experience (UX) Design",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-03-12",
    totalScore: 87.6,
    status: "completed",
    detailsHref: "/admin/courses",
  },
  {
    title: "Materials and Processes for UX Design",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-05-18",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "Competitive Audit in Product Design",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-07-02",
    totalScore: 92.4,
    status: "completed",
    detailsHref: "/admin/courses",
  },
  {
    title: "Build Dynamic User Interfaces (UI)",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-08-21",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "Conduct UX Research and Test Early Concepts",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-09-09",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "Create High-Fidelity Designs and Prototypes",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-10-14",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "Responsive Web Design Essentials",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2023-11-05",
    totalScore: 78.2,
    status: "completed",
    detailsHref: "/admin/courses",
  },
  {
    title: "Design Thinking for Innovation",
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-01-20",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "Accessibility in Digital Products",
    thumbnail: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-02-28",
    totalScore: 84.1,
    status: "completed",
    detailsHref: "/admin/courses",
  },
  {
    title: "Visual Design Principles",
    thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-04-16",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "User Journey Mapping Workshop",
    thumbnail: "https://images.unsplash.com/photo-1531403009284-0f801d84c1b4?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-06-03",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
  {
    title: "Portfolio Building for UX Designers",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=120&h=120&fit=crop",
    teacherName: teacherMaisha.name,
    teacherAvatar: teacherMaisha.avatar,
    enrolledDate: "2024-11-01",
    totalScore: null,
    status: "ongoing",
    detailsHref: "/admin/courses",
  },
];

const profileInfoFormOptions = {
  roleOptions: [{ value: "Learner", label: "Learner" }],
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
};

const moreData = {
  accountActions: [
    {
      id: "reset-password",
      title: "Reset user password",
      description:
        "By resetting password, user will get a link in his email to set his new password from the portal.",
      actionLabel: "Reset Now",
    },
    {
      id: "deactivate",
      title: "Deactivate account",
      description: "Do you want to deactivate this account?",
      actionLabel: "Deactivate",
    },
    {
      id: "delete",
      title: "Delete account",
      description: "Do you want to delete this account?",
      actionLabel: "Delete",
    },
  ],
};

function buildRecordedCourses(): AdminLearnerRecordedCourse[] {
  return recordedCourseSeeds.map((course, index) => ({
    id: `learner-recorded-course-${index + 1}`,
    ...course,
  }));
}

function buildNushratProfileInfo(): AdminLearnerProfileInfoData {
  return {
    generalInfo: {
      fullName: "Nushrat Jahan",
      role: "Learner",
      status: "Active",
      email: "nushrat@gmail.com",
      phone: "(209) 555-0104",
      gender: "Female",
      age: "28",
      address: "Mirpur 1, Dhaka",
      country: "Bangladesh",
    },
    biography: {
      description:
        "Nushrat Jahan is an active learner at Skillophy focused on UX design and product thinking. She consistently participates in recorded courses and applies practical assignments to build portfolio-ready work.",
    },
    ...profileInfoFormOptions,
  };
}

function hashLearnerId(learnerId: string) {
  return learnerId.split("").reduce((total, character) => total + character.charCodeAt(0), 0);
}

function buildProfileInfoData(learner: AdminLearner): AdminLearnerProfileInfoData {
  if (learner.id === ADMIN_LEARNER_PROFILE_NUSHRAT_ID) {
    return buildNushratProfileInfo();
  }

  const hash = hashLearnerId(learner.id);
  const statusLabel = learner.status === "active" ? "Active" : "Inactive";

  return {
    generalInfo: {
      fullName: learner.name,
      role: "Learner",
      status: statusLabel,
      email: learner.email,
      phone: learner.phone,
      gender: hash % 2 === 0 ? "Female" : "Male",
      age: String(22 + (hash % 15)),
      address: "Mirpur 1, Dhaka",
      country: "Bangladesh",
    },
    biography: {
      description: `${learner.name} is a learner at Skillophy exploring courses across design, technology, and professional skills.`,
    },
    ...profileInfoFormOptions,
  };
}

function buildLearnerProfileFromLearner(learner: AdminLearner): AdminLearnerProfilePageData {
  const profileInfo = buildProfileInfoData(learner);
  const isNushrat = learner.id === ADMIN_LEARNER_PROFILE_NUSHRAT_ID;

  return {
    profile: {
      id: learner.id,
      fullName: learner.name,
      phone: isNushrat ? "(209) 555-0104" : learner.phone,
      email: isNushrat ? "nushrat@gmail.com" : learner.email,
      avatarUrl: learner.avatar,
      status: learner.status,
      stats: {
        enrolledCourses: learner.enrolledCourses,
        completedCourses: learner.completedCourses,
      },
      tabs: profileTabs,
    },
    recordedCourses: {
      courses: buildRecordedCourses(),
      sortOptions: recordedCourseSortOptions,
      defaultSortId: "default",
      pageSize: 6,
    },
    profileInfo,
    moreData,
  };
}

const nushratJahanProfile = buildLearnerProfileFromLearner({
  id: ADMIN_LEARNER_PROFILE_NUSHRAT_ID,
  name: "Nushrat Jahan",
  email: "nushrat@gmail.com",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nushrat%20Jahan",
  phone: "(209) 555-0104",
  enrolledCourses: 5,
  completedCourses: 2,
  status: "active",
});

export function getAdminLearnerProfile(learnerId: string): AdminLearnerProfilePageData | null {
  if (learnerId === ADMIN_LEARNER_PROFILE_NUSHRAT_ID) {
    return nushratJahanProfile;
  }

  const learner = getAdminLearnerManagement().learners.find((item) => item.id === learnerId);

  if (!learner) {
    return null;
  }

  return buildLearnerProfileFromLearner(learner);
}
