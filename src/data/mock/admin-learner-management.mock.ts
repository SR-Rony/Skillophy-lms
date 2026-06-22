import type {
  AdminLearner,
  AdminLearnerManagementData,
  AdminLearnerStatus,
} from "@/types/admin-learner-management.types";

export const ADMIN_LEARNER_PROFILE_NUSHRAT_ID = "learner-nushrat-jahan";

const learnerNames = [
  { name: "Kathryn Murphy", email: "kathryn@gmail.com" },
  { name: "Guy Hawkins", email: "guy.hawkins@gmail.com" },
  { name: "Brooklyn Simmons", email: "brooklyn.simmons@gmail.com" },
  { name: "Leslie Alexander", email: "leslie.alexander@gmail.com" },
  { name: "Michael Foster", email: "michael.foster@gmail.com" },
  { name: "Dwayne Watkins", email: "dwayne.watkins@gmail.com" },
  { name: "Sarah Mitchell", email: "sarah.mitchell@gmail.com" },
  { name: "James Cooper", email: "james.cooper@gmail.com" },
  { name: "Emily Johnson", email: "emily.johnson@gmail.com" },
  { name: "David Chen", email: "david.chen@gmail.com" },
  { name: "Olivia Brown", email: "olivia.brown@gmail.com" },
  { name: "Maisha Afrose", email: "maisha@gmail.com" },
];

function formatPhone(index: number) {
  const area = 200 + (index % 700);
  const suffix = String(1000 + ((index * 41) % 9000)).slice(-4);
  return `(${area}) 555-${suffix}`;
}

function buildLearners(): AdminLearner[] {
  const learners: AdminLearner[] = [];

  for (let index = 0; index < 80; index += 1) {
    if (index === 0) {
      learners.push({
        id: ADMIN_LEARNER_PROFILE_NUSHRAT_ID,
        name: "Nushrat Jahan",
        email: "nushrat@gmail.com",
        avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nushrat%20Jahan",
        phone: "(209) 555-0104",
        enrolledCourses: 5,
        completedCourses: 2,
        status: "active",
      });
      continue;
    }

    const person = learnerNames[index % learnerNames.length];
    const status: AdminLearnerStatus = index % 6 === 0 ? "inactive" : "active";
    const enrolledCourses = 3 + (index % 8);
    const completedCourses =
      status === "inactive" ? 0 : Math.max(0, enrolledCourses - (index % 4));

    learners.push({
      id: `learner-${index + 1}`,
      name: person.name,
      email: person.email,
      avatar: `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(person.name)}-${index}`,
      phone: formatPhone(index),
      enrolledCourses,
      completedCourses,
      status,
    });
  }

  return learners;
}

export const adminLearnerManagementData: AdminLearnerManagementData = {
  learners: buildLearners(),
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "name-asc", label: "Name (A-Z)" },
    { id: "name-desc", label: "Name (Z-A)" },
    { id: "enrolled-desc", label: "Most Enrolled" },
    { id: "completed-desc", label: "Most Completed" },
    { id: "status-asc", label: "Status" },
  ],
  exportOptions: [
    { id: "csv", label: "Export as CSV" },
    { id: "xsl", label: "Export as XSL" },
  ],
  defaultSortId: "default",
  defaultSelectedIds: [],
  pageSize: 8,
  exportLabel: "Export",
};

export function getAdminLearnerManagement(): AdminLearnerManagementData {
  return adminLearnerManagementData;
}
