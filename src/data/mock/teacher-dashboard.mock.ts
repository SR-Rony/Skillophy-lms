import { ROUTES } from "@/constants";
import type { TeacherDashboardData } from "@/types/teacher-dashboard.types";

export const teacherDashboardData: TeacherDashboardData = {
  stats: {
    totalCourses: 5,
    totalLearners: 1302,
    totalEarning: 100000,
    totalCoursesDisplay: "05",
    totalLearnersDisplay: "1302",
    totalEarningDisplay: "100K",
  },
  courseFilters: [
    {
      id: "foundations-ux",
      label: "Foundations of User Experience (...)",
    },
  ],
  selectedCourseId: "foundations-ux",
  upcomingLiveClass: {
    month: "May",
    day: 12,
    label: "Upcoming LIVE Class",
    title: "Platforms to improve user experiences",
    datetime: "Sunday, 9:00 PM",
    joinUrl: ROUTES.teacher.live,
  },
  classSchedule: {
    message: "There is no class schedule available at this moment for you.",
  },
  submittedAssignments: [
    {
      id: "assignment-1",
      studentName: "Kathryn Murphy",
      studentAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kathryn",
      topicTitle: "Topic 1: Introducing UX design",
      topicSubtitle: "Introducing UX design",
      submittedAt: "May 11, 2022",
      checkHref: ROUTES.teacher.courses,
    },
    {
      id: "assignment-2",
      studentName: "Guy Hawkins",
      studentAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Guy",
      topicTitle: "Topic 2: Thinking like a UX designer",
      topicSubtitle: "Thinking like a UX designer",
      submittedAt: "May 11, 2022",
      checkHref: ROUTES.teacher.courses,
    },
    {
      id: "assignment-3",
      studentName: "Eleanor Pena",
      studentAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Eleanor",
      topicTitle: "Topic 3: Joining design sprints",
      topicSubtitle: "Joining design sprints",
      submittedAt: "May 11, 2022",
      checkHref: ROUTES.teacher.courses,
    },
    {
      id: "assignment-4",
      studentName: "Darrell Steward",
      studentAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Darrell",
      topicTitle: "Topic 4: Integrating research into the..",
      topicSubtitle: "Integrating research into the design process",
      submittedAt: "May 11, 2022",
      checkHref: ROUTES.teacher.courses,
    },
    {
      id: "assignment-5",
      studentName: "Leslie Alexander",
      studentAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Leslie",
      topicTitle: "Topic 5: Design across platforms",
      topicSubtitle: "Design across platforms",
      submittedAt: "May 10, 2022",
      checkHref: ROUTES.teacher.courses,
    },
    {
      id: "assignment-6",
      studentName: "Robert Fox",
      studentAvatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Robert",
      topicTitle: "Topic 6: UX tools and workflows",
      topicSubtitle: "UX tools and workflows",
      submittedAt: "May 10, 2022",
      checkHref: ROUTES.teacher.courses,
    },
  ],
  submittedAssignmentsEmpty: {
    message: "There is no assignments for you to check at this time.",
  },
  notifications: [
    {
      id: "teacher-notif-1",
      type: "live",
      title: "Upcoming LIVE Class",
      timeAgo: "3 minutes ago",
      description: "Your LIVE class on design for different platforms will start at 09:30 PM",
    },
    {
      id: "teacher-notif-2",
      type: "assignment",
      title: "Assignment Assessment",
      timeAgo: "5:08 AM",
      description: "You have 24 new assignments to check",
    },
    {
      id: "teacher-notif-3",
      type: "discussion",
      title: "Discussions",
      timeAgo: "12:08 PM",
      description: "You have 12 new messages in course discussions",
    },
  ],
  notificationsEmpty: {
    message: "There is no notification for you at this time.",
  },
  notificationsViewAllHref: ROUTES.teacher.chat,
  learnersPerformance: [
    {
      id: "perf-1",
      rank: 1,
      name: "Kathryn Murphy",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=KathrynPerf",
      score: 97.1,
    },
    {
      id: "perf-2",
      rank: 2,
      name: "Kathryn Murphy",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kathryn2",
      score: 94.0,
    },
    {
      id: "perf-3",
      rank: 3,
      name: "Kathryn Murphy",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kathryn3",
      score: 91.0,
    },
    {
      id: "perf-4",
      rank: 4,
      name: "Kathryn Murphy",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kathryn4",
      score: 89.1,
    },
    {
      id: "perf-5",
      rank: 5,
      name: "Leslie Alexander",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=LesliePerf",
      score: 87.1,
    },
    {
      id: "perf-6",
      rank: 6,
      name: "Guy Hawkins",
      avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=GuyPerf",
      score: 85.4,
    },
  ],
  learnersPerformanceEmpty: {
    message: "You don't have any courses yet to see learner's Performance",
  },
  headerBadges: {
    messages: 2,
    notifications: 2,
  },
};

export function getTeacherDashboardData(): TeacherDashboardData {
  return teacherDashboardData;
}
