import type {
  AdminJobOpening,
  AdminJobOpeningManagementData,
  AdminJobOpeningStatus,
} from "@/types/admin-job-opening-management.types";

const defaultDescription =
  "We are looking for a talented and dynamic Visual Designer to join our growing product team. You will collaborate with researchers, product managers, and engineers to create intuitive interfaces and compelling visual experiences across web and mobile platforms.";

const categoryIdByLabel: Record<string, string> = {
  "Product Design & Research": "product-design-research",
  "Marketings & Sales": "marketings-sales",
  "Business Operations": "business-operations",
  Engineering: "engineering",
  "Human Resources": "human-resources",
};

const jobOpeningSeeds: Array<{
  title: string;
  category: string;
  deadline: string;
  status: AdminJobOpeningStatus;
  salary?: string;
  vacancy?: string;
  jobType?: string;
  applyLink?: string;
  description?: string;
}> = [
  {
    title: "Visual Designer",
    category: "Product Design & Research",
    deadline: "2024-05-08",
    status: "active",
    salary: "Negotiable",
    vacancy: "02",
    jobType: "full-time",
    applyLink: "https://www.linkedin.com/jobs/collections/recommended",
    description: defaultDescription,
  },
  {
    title: "Junior UI Designer",
    category: "Marketings & Sales",
    deadline: "2021-05-11",
    status: "active",
    salary: "Negotiable",
    vacancy: "01",
    jobType: "full-time",
    applyLink: "https://www.linkedin.com/jobs",
    description: defaultDescription,
  },
  {
    title: "Product Manager",
    category: "Business Operations",
    deadline: "2024-03-19",
    status: "inactive",
    salary: "$80,000 - $100,000",
    vacancy: "01",
    jobType: "full-time",
    applyLink: "https://www.linkedin.com/jobs",
    description: defaultDescription,
  },
  {
    title: "UX Researcher",
    category: "Product Design & Research",
    deadline: "2022-06-15",
    status: "active",
    salary: "Negotiable",
    vacancy: "02",
    jobType: "full-time",
    applyLink: "https://www.linkedin.com/jobs",
    description: defaultDescription,
  },
  {
    title: "Frontend Developer",
    category: "Engineering",
    deadline: "2023-01-20",
    status: "inactive",
    salary: "$70,000 - $90,000",
    vacancy: "03",
    jobType: "full-time",
    applyLink: "https://www.linkedin.com/jobs",
    description: defaultDescription,
  },
  {
    title: "Content Strategist",
    category: "Marketings & Sales",
    deadline: "2022-11-08",
    status: "active",
    salary: "Negotiable",
    vacancy: "01",
    jobType: "part-time",
    applyLink: "https://www.linkedin.com/jobs",
    description: defaultDescription,
  },
  {
    title: "HR Coordinator",
    category: "Human Resources",
    deadline: "2023-08-30",
    status: "active",
    salary: "Negotiable",
    vacancy: "01",
    jobType: "full-time",
    applyLink: "https://www.linkedin.com/jobs",
    description: defaultDescription,
  },
  {
    title: "Data Analyst",
    category: "Business Operations",
    deadline: "2024-01-12",
    status: "inactive",
    salary: "$65,000 - $85,000",
    vacancy: "02",
    jobType: "full-time",
    applyLink: "https://www.linkedin.com/jobs",
    description: defaultDescription,
  },
];

function buildJobOpenings(): AdminJobOpening[] {
  const jobOpenings: AdminJobOpening[] = [];
  const total = 96;

  for (let index = 0; index < total; index += 1) {
    const seed = jobOpeningSeeds[index % jobOpeningSeeds.length];
    const cycle = Math.floor(index / jobOpeningSeeds.length);

    jobOpenings.push({
      id: `job-opening-${index + 1}`,
      title: cycle === 0 ? seed.title : `${seed.title} ${cycle + 1}`,
      category: seed.category,
      categoryId: categoryIdByLabel[seed.category] ?? "",
      deadline: seed.deadline,
      status: index % 6 === 0 ? "inactive" : seed.status,
      salary: seed.salary ?? "Negotiable",
      vacancy: seed.vacancy ?? "01",
      jobType: seed.jobType ?? "full-time",
      applyLink: seed.applyLink ?? "https://www.linkedin.com/jobs",
      description: seed.description ?? defaultDescription,
    });
  }

  return jobOpenings;
}

const formOptions = {
  categories: [
    { value: "product-design-research", label: "Product Design & Research" },
    { value: "marketings-sales", label: "Marketings & Sales" },
    { value: "business-operations", label: "Business Operations" },
    { value: "engineering", label: "Engineering" },
    { value: "human-resources", label: "Human Resources" },
  ],
  jobTypes: [
    { value: "full-time", label: "Full-Time" },
    { value: "part-time", label: "Part-Time" },
    { value: "contract", label: "Contract" },
    { value: "remote", label: "Remote" },
    { value: "internship", label: "Internship" },
  ],
};

export const adminJobOpeningManagementData: AdminJobOpeningManagementData = {
  jobOpenings: buildJobOpenings(),
  formOptions,
  sortOptions: [
    { id: "default", label: "Default" },
    { id: "title-asc", label: "Job Title (A-Z)" },
    { id: "title-desc", label: "Job Title (Z-A)" },
    { id: "category-asc", label: "Category (A-Z)" },
    { id: "deadline-desc", label: "Newest Deadline" },
    { id: "status-asc", label: "Status" },
  ],
  exportOptions: [
    { id: "csv", label: "Export as CSV" },
    { id: "xsl", label: "Export as XSL" },
  ],
  defaultSortId: "default",
  defaultSelectedIds: [],
  pageSize: 10,
  exportLabel: "Export",
  addNewLabel: "Add New",
};

export function getAdminJobOpeningManagement(): AdminJobOpeningManagementData {
  return adminJobOpeningManagementData;
}
