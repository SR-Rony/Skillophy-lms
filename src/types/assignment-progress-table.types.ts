export type AssignmentProgressStatus = "pending" | "submitted" | "approved";

export type AssignmentProgressActionVariant = "submit" | "check";

export interface AssignmentProgressRow {
  id: string;
  topicLabel: string;
  topicTitle: string;
  lastSubmissionDate: string;
  status: AssignmentProgressStatus;
  action: {
    label: string;
    variant: AssignmentProgressActionVariant;
    href: string;
  };
}

export interface AssignmentProgressTableColumn {
  key: "topic" | "date" | "status" | "action";
  label: string;
  className?: string;
}
