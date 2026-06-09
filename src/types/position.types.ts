import type { JobCategoryId, JobOpening, JobType } from "@/types/career.types";

export interface PositionJobBullet {
  term: string;
  description: string;
}

export interface PositionJobDetail extends JobOpening {
  categoryLabel: string;
  deadline: string;
  vacancy: string;
  fullDescription: string;
  lookingFor: PositionJobBullet[];
  offerings: PositionJobBullet[];
}

export const positionJobCategoryLabels: Record<
  Exclude<JobCategoryId, "all">,
  string
> = {
  "product-design": "Product Design & Research",
  engineering: "Engineering",
  marketing: "Marketing",
  content: "Content",
  operations: "Operations",
};

export const positionJobTypeLabels: Record<JobType, string> = {
  "full-time": "Full-Time",
  "part-time": "Part-Time",
};
