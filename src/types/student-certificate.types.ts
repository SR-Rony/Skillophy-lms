export interface StudentCertificateItem {
  id: string;
  courseSlug: string;
  courseTitle: string;
  certificateId: string;
  totalScore: string;
  completedDate: string;
  downloadUrl: string;
  linkedInUrl: string;
}

export interface StudentCertificateCourseFilter {
  id: string;
  label: string;
}

export interface StudentCertificateSortOption {
  id: string;
  label: string;
}

export interface StudentCertificateEmptyState {
  heading: string;
  message: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
}

export interface StudentCertificatePageData {
  title: string;
  subtitle: string;
  certificates: StudentCertificateItem[];
  courseFilters: StudentCertificateCourseFilter[];
  sortOptions: StudentCertificateSortOption[];
  emptyState: StudentCertificateEmptyState;
}
