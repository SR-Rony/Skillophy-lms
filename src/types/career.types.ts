export type JobCategoryId =
  | "all"
  | "product-design"
  | "engineering"
  | "marketing"
  | "content"
  | "operations";

export type JobType = "full-time" | "part-time";

export interface JobOpening {
  id: string;
  categoryId: Exclude<JobCategoryId, "all">;
  title: string;
  description: string;
  postedAt: string;
  compensation: string;
  jobType: JobType;
}

export interface JobCategory {
  id: JobCategoryId;
  label: string;
}
