import type {
  AdminBusinessQuery,
  AdminContactQuery,
  AdminQueryFormCompanySize,
  AdminQueryFormManagementData,
} from "@/types/admin-query-form-management.types";

const defaultDescription =
  "We are currently in search of a comprehensive bundle course tailored for our company's needs. Our objective is to enhance the skills and knowledge of our employees across various domains, ensuring they are equipped to handle the dynamic challenges of our industry.";

const businessSeeds: Array<{
  name: string;
  email: string;
  companyName: string;
  companySize: AdminQueryFormCompanySize;
  numberOfPeople: string;
  submittedDate: string;
  submittedAt: string;
  description?: string;
}> = [
  {
    name: "Brooklyn Simmons",
    email: "brooklyn68@gmail.com",
    companyName: "Design Monks",
    companySize: "medium",
    numberOfPeople: "11-20",
    submittedDate: "2024-05-11",
    submittedAt: "2024-05-11T21:30:00",
    description: defaultDescription,
  },
  {
    name: "Kathryn Murphy",
    email: "jessica.hanson@example.com",
    companyName: "Design Monks",
    companySize: "small",
    numberOfPeople: "11-20",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T14:15:00",
  },
  {
    name: "Guy Hawkins",
    email: "jessica.hanson@example.com",
    companyName: "Design Monks",
    companySize: "medium",
    numberOfPeople: "11-20",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T10:45:00",
  },
  {
    name: "Ronald Richards",
    email: "jessica.hanson@example.com",
    companyName: "Design Monks",
    companySize: "large",
    numberOfPeople: "11-20",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T16:20:00",
  },
  {
    name: "Arlene McCoy",
    email: "jessica.hanson@example.com",
    companyName: "Design Monks",
    companySize: "small",
    numberOfPeople: "11-20",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T11:00:00",
  },
  {
    name: "Foxuxox",
    email: "jessica.hanson@example.com",
    companyName: "Design Monks",
    companySize: "medium",
    numberOfPeople: "11-20",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T09:30:00",
  },
  {
    name: "Jozlo lou",
    email: "jessica.hanson@example.com",
    companyName: "Design Monks",
    companySize: "large",
    numberOfPeople: "11-20",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T18:05:00",
  },
  {
    name: "Guy Hawkins",
    email: "jessica.hanson@example.com",
    companyName: "Design Monks",
    companySize: "small",
    numberOfPeople: "11-20",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T13:40:00",
  },
];

function buildBusinessQueries(): AdminBusinessQuery[] {
  const queries: AdminBusinessQuery[] = [];
  const total = 96;

  for (let index = 0; index < total; index += 1) {
    const seed = businessSeeds[index % businessSeeds.length];
    const cycle = Math.floor(index / businessSeeds.length);

    queries.push({
      id: `business-query-${index + 1}`,
      name: cycle === 0 ? seed.name : `${seed.name} ${cycle + 1}`,
      email: seed.email,
      companyName: seed.companyName,
      companySize: seed.companySize,
      numberOfPeople: seed.numberOfPeople,
      submittedDate: seed.submittedDate,
      submittedAt: seed.submittedAt,
      description: seed.description ?? defaultDescription,
    });
  }

  return queries;
}

const contactSeeds: Array<{
  name: string;
  email: string;
  subject: string;
  submittedDate: string;
  submittedAt: string;
  description?: string;
}> = [
  {
    name: "Brooklyn Simmons",
    email: "brooklyn68@gmail.com",
    subject: "Course inquiry",
    submittedDate: "2024-05-11",
    submittedAt: "2024-05-11T21:30:00",
    description: defaultDescription,
  },
  {
    name: "Kathryn Murphy",
    email: "jessica.hanson@example.com",
    subject: "Course inquiry",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T14:15:00",
  },
  {
    name: "Guy Hawkins",
    email: "jessica.hanson@example.com",
    subject: "Partnership request",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T10:45:00",
  },
  {
    name: "Ronald Richards",
    email: "jessica.hanson@example.com",
    subject: "Support question",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T16:20:00",
  },
  {
    name: "Arlene McCoy",
    email: "jessica.hanson@example.com",
    subject: "General inquiry",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T11:00:00",
  },
  {
    name: "Foxuxox",
    email: "jessica.hanson@example.com",
    subject: "Feedback",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T09:30:00",
  },
  {
    name: "Jozlo lou",
    email: "jessica.hanson@example.com",
    subject: "Course inquiry",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T18:05:00",
  },
  {
    name: "Eleanor Pena",
    email: "jessica.hanson@example.com",
    subject: "Billing question",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T13:40:00",
  },
  {
    name: "Jozo lou",
    email: "jessica.hanson@example.com",
    subject: "General inquiry",
    submittedDate: "2022-05-11",
    submittedAt: "2022-05-11T15:25:00",
  },
];

function buildContactQueries(): AdminContactQuery[] {
  const queries: AdminContactQuery[] = [];
  const total = 96;

  for (let index = 0; index < total; index += 1) {
    const seed = contactSeeds[index % contactSeeds.length];
    const cycle = Math.floor(index / contactSeeds.length);

    queries.push({
      id: `contact-query-${index + 1}`,
      name: cycle === 0 ? seed.name : `${seed.name} ${cycle + 1}`,
      email: seed.email,
      subject: seed.subject,
      submittedDate: seed.submittedDate,
      submittedAt: seed.submittedAt,
      description: seed.description ?? defaultDescription,
    });
  }

  return queries;
}

export const adminQueryFormManagementData: AdminQueryFormManagementData = {
  business: {
    queries: buildBusinessQueries(),
  },
  contact: {
    queries: buildContactQueries(),
  },
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "name-asc", label: "Name (A-Z)" },
    { id: "name-desc", label: "Name (Z-A)" },
    { id: "company-asc", label: "Company (A-Z)" },
    { id: "date-desc", label: "Newest Submitted" },
    { id: "company-size-asc", label: "Company Size" },
  ],
  contactSortOptions: [
    { id: "default", label: "Default" },
    { id: "name-asc", label: "Name (A-Z)" },
    { id: "name-desc", label: "Name (Z-A)" },
    { id: "date-desc", label: "Newest Submitted" },
  ],
  exportOptions: [
    { id: "csv", label: "Export as CSV" },
    { id: "xsl", label: "Export as XSL" },
  ],
  defaultSortId: "default",
  defaultSelectedIds: [],
  pageSize: 10,
  exportLabel: "Export",
};

export function getAdminQueryFormManagement(): AdminQueryFormManagementData {
  return adminQueryFormManagementData;
}

export function getAdminBusinessQueryDetail(queryId: string): AdminBusinessQuery | null {
  return (
    adminQueryFormManagementData.business.queries.find((query) => query.id === queryId) ?? null
  );
}

export function getAdminContactQueryDetail(queryId: string): AdminContactQuery | null {
  return (
    adminQueryFormManagementData.contact.queries.find((query) => query.id === queryId) ?? null
  );
}
