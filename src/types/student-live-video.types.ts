export interface StudentLiveVideoInstructor {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedinUrl?: string;
  facebookUrl?: string;
}

export interface StudentLiveVideoLessonNav {
  id: string;
  title: string;
  href: string;
}

export type StudentLiveVideoResourceFileType = "pdf" | "svg" | "jpg" | "link";

export interface StudentLiveVideoResource {
  id: string;
  title: string;
  moduleTitle: string;
  fileType: StudentLiveVideoResourceFileType;
  downloadUrl?: string;
}

export interface StudentLiveVideoNote {
  id: string;
  timestamp: string;
  lessonTitle: string;
  moduleTitle: string;
  content: string;
}

export interface StudentLiveVideoDiscussionAttachment {
  id: string;
  type: "image" | "pdf";
  name: string;
  previewUrl: string;
}

export interface StudentLiveVideoDiscussionMessage {
  id: string;
  authorName: string;
  avatar: string;
  content: string;
  isCurrentUser?: boolean;
  attachments?: StudentLiveVideoDiscussionAttachment[];
}

export interface StudentLiveVideoDiscussionUser {
  name: string;
  avatar: string;
}

export interface StudentLiveVideoSession {
  slug: string;
  lessonId: string;
  title: string;
  moduleTitle: string;
  thumbnail: string;
  about: string;
  aboutExtended: string;
  instructor: StudentLiveVideoInstructor;
  previousLesson?: StudentLiveVideoLessonNav;
  nextLesson?: StudentLiveVideoLessonNav;
  resources: StudentLiveVideoResource[];
  currentTimestamp: string;
  lessonNotes: StudentLiveVideoNote[];
  discussionMessages: StudentLiveVideoDiscussionMessage[];
  currentUser: StudentLiveVideoDiscussionUser;
}
