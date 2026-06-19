export interface StudentLiveAssignmentSection {
  title: string;
  items: string[];
}

export interface StudentLiveAssignmentNav {
  id: string;
  title: string;
  href: string;
}

export interface StudentLiveAssignmentTask {
  assignmentId: string;
  slug: string;
  title: string;
  submissionDate: string;
  lastSubmissionDate: string;
  linkedLessonId: string;
  sections: StudentLiveAssignmentSection[];
  previousAssignment?: StudentLiveAssignmentNav;
  nextAssignment?: StudentLiveAssignmentNav;
  placeholderUrl?: string;
}
