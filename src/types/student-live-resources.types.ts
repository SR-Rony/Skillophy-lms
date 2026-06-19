export type StudentLiveResourceFileType = "pdf" | "svg" | "link";

export interface StudentLiveResourceItem {
  id: string;
  title: string;
  fileType: StudentLiveResourceFileType;
  downloadUrl?: string;
}

export interface StudentLiveResourceNav {
  id: string;
  title: string;
  href: string;
}

export interface StudentLiveResourceSession {
  resourceId: string;
  slug: string;
  title: string;
  topicTitle: string;
  linkedLessonId: string;
  items: StudentLiveResourceItem[];
  previousResource?: StudentLiveResourceNav;
  nextResource?: StudentLiveResourceNav;
}
