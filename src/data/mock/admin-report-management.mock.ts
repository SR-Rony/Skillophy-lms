import type {
  AdminReport,
  AdminReportDetail,
  AdminReportManagementData,
  AdminReportPerson,
  AdminReportStatus,
  AdminReportTypeId,
} from "@/types/admin-report-management.types";

const reportSeeds: Array<{
  type: AdminReportTypeId;
  courseName: string;
  courseThumbnail: string;
  lessonName: string;
  reporterName: string;
  reporterEmail: string;
  reporterAvatar: string;
  reportedDate: string;
  reportedTime: string;
  status: AdminReportStatus;
}> = [
  {
    type: "lesson",
    courseName: "Wordpress Theme Development Master Class",
    courseThumbnail:
      "https://images.unsplash.com/photo-1461740680684-dccba630e2f6?w=120&h=120&fit=crop",
    lessonName: "The Basics of User Experience Design",
    reporterName: "Kathryn Murphy",
    reporterEmail: "kathryn@gmail.com",
    reporterAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kathryn%20Murphy",
    reportedDate: "2021-05-11",
    reportedTime: "10:30 PM",
    status: "open",
  },
  {
    type: "lesson",
    courseName: "Foundations of User Experience (UX) Design",
    courseThumbnail:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=120&h=120&fit=crop",
    lessonName: "Introduction to UX Research Methods",
    reporterName: "Guy Hawkins",
    reporterEmail: "guy.hawkins@gmail.com",
    reporterAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Guy%20Hawkins",
    reportedDate: "2021-05-11",
    reportedTime: "09:15 PM",
    status: "resolved",
  },
  {
    type: "course",
    courseName: "UI/UX Design Fundamentals",
    courseThumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop",
    lessonName: "Design Thinking Workshop Overview",
    reporterName: "Brooklyn Simmons",
    reporterEmail: "brooklyn.simmons@gmail.com",
    reporterAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Brooklyn%20Simmons",
    reportedDate: "2021-05-10",
    reportedTime: "08:45 PM",
    status: "open",
  },
  {
    type: "workshop",
    courseName: "Digital Marketing Strategy Bootcamp",
    courseThumbnail:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=120&h=120&fit=crop",
    lessonName: "Campaign Planning Session",
    reporterName: "Leslie Alexander",
    reporterEmail: "leslie.alexander@gmail.com",
    reporterAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Leslie%20Alexander",
    reportedDate: "2021-05-09",
    reportedTime: "07:20 PM",
    status: "resolved",
  },
  {
    type: "content",
    courseName: "Graphic Design with Adobe Illustrator",
    courseThumbnail:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=120&fit=crop",
    lessonName: "Vector Illustration Basics",
    reporterName: "Michael Foster",
    reporterEmail: "michael.foster@gmail.com",
    reporterAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Michael%20Foster",
    reportedDate: "2021-05-08",
    reportedTime: "06:10 PM",
    status: "open",
  },
  {
    type: "lesson",
    courseName: "Build Dynamic User Interfaces (UI)",
    courseThumbnail:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=120&h=120&fit=crop",
    lessonName: "Responsive Layout Patterns",
    reporterName: "Sarah Mitchell",
    reporterEmail: "sarah.mitchell@gmail.com",
    reporterAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah%20Mitchell",
    reportedDate: "2021-05-07",
    reportedTime: "05:55 PM",
    status: "resolved",
  },
  {
    type: "course",
    courseName: "Conduct UX Research and Test Early Concepts",
    courseThumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&h=120&fit=crop",
    lessonName: "Usability Testing Fundamentals",
    reporterName: "James Cooper",
    reporterEmail: "james.cooper@gmail.com",
    reporterAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=James%20Cooper",
    reportedDate: "2021-05-06",
    reportedTime: "04:30 PM",
    status: "open",
  },
  {
    type: "workshop",
    courseName: "Freelancing Career Kickstart Session",
    courseThumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=120&h=120&fit=crop",
    lessonName: "Client Communication Skills",
    reporterName: "Emily Johnson",
    reporterEmail: "emily.johnson@gmail.com",
    reporterAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Emily%20Johnson",
    reportedDate: "2021-05-05",
    reportedTime: "03:15 PM",
    status: "open",
  },
];

const defaultReportTags = [
  "Wrong information",
  "Video is not clear",
  "Audio problem",
  "Concept is not clear",
];

const defaultReportDetails =
  "During today's online class, I experienced an internet connection drop at approximately 15 minutes. This resulted in me being disconnected from the video conferencing platform and missing 45 minutes of the lecture. During today's online class, I experienced an internet connection drop at approximately 15 minutes. This resulted in me being disconnected from the video conferencing platform and missing 45 minutes of the lecture.";

const featuredReportDetail: Omit<AdminReportDetail, "id" | "status"> = {
  lessonName: "The Basics of User Experience Design",
  reportedAt: "2024-05-11T21:30:00.000Z",
  courseInfo: {
    title: "Foundations of User Experience (UX) Design",
    topic: "Topic 1. Introducing UX design",
    thumbnail:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=120&h=120&fit=crop",
  },
  courseTeacher: {
    name: "Kathryn Murphy",
    email: "kathryn@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kathryn%20Murphy",
  },
  reportedBy: {
    name: "Brooklyn Simmons",
    email: "brooklyn68@gmail.com",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Brooklyn%20Simmons",
  },
  reportTags: defaultReportTags,
  reportDetails: defaultReportDetails,
  resolveReportLabel: "Resolve this Report",
};

const resolvedByPerson: AdminReportPerson = {
  name: "Eleanor Pena",
  email: "pena@gmail.com",
  avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Eleanor%20Pena",
};

function buildReportDetail(report: AdminReport): AdminReportDetail {
  if (report.id === "report-1") {
    return {
      id: report.id,
      status: report.status,
      ...featuredReportDetail,
    };
  }

  const reportedAt = `${report.reportedDate}T${report.reportedTime.includes("PM") ? "22:30" : "10:30"}:00.000Z`;

  return {
    id: report.id,
    status: report.status,
    lessonName: report.lessonName,
    reportedAt,
    courseInfo: {
      title: report.courseName,
      topic: `Topic 1. ${report.lessonName}`,
      thumbnail: report.courseThumbnail,
    },
    courseTeacher: {
      name: "Kathryn Murphy",
      email: "kathryn@gmail.com",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kathryn%20Murphy",
    },
    reportedBy: {
      name: report.reporterName,
      email: report.reporterEmail,
      avatar: report.reporterAvatar,
    },
    resolvedBy: report.status === "resolved" ? resolvedByPerson : undefined,
    reportTags: defaultReportTags,
    reportDetails: defaultReportDetails,
    resolveReportLabel: "Resolve this Report",
  };
}

function buildReports(): AdminReport[] {
  const reports: AdminReport[] = [];
  const total = 96;

  for (let index = 0; index < total; index += 1) {
    const seed = reportSeeds[index % reportSeeds.length];

    reports.push({
      id: `report-${index + 1}`,
      ...seed,
      status: index > 0 && index % 5 === 0 ? "resolved" : seed.status,
    });
  }

  return reports;
}

export const adminReportManagementData: AdminReportManagementData = {
  reports: buildReports(),
  typeOptions: [
    { id: "all", label: "All Type" },
    { id: "course", label: "Course" },
    { id: "lesson", label: "Lesson" },
    { id: "workshop", label: "Workshop" },
    { id: "content", label: "Content" },
  ],
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "newest", label: "Newest First" },
    { id: "oldest", label: "Oldest First" },
    { id: "status-asc", label: "Status" },
    { id: "course-asc", label: "Course (A-Z)" },
  ],
  defaultTypeId: "all",
  defaultSortId: "default",
  defaultSelectedIds: [],
  pageSize: 10,
  markResolvedLabel: "Mark as Resolved",
  resolveReportLabel: "Resolve this Report",
};

export function getAdminReportManagement(): AdminReportManagementData {
  return adminReportManagementData;
}

export function getAdminReportDetail(reportId: string): AdminReportDetail | null {
  const report = adminReportManagementData.reports.find((item) => item.id === reportId);
  if (!report) {
    return null;
  }

  return buildReportDetail(report);
}
