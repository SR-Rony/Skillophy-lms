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

export interface StudentLiveVideoSession {
  slug: string;
  lessonId: string;
  title: string;
  thumbnail: string;
  about: string;
  aboutExtended: string;
  instructor: StudentLiveVideoInstructor;
  previousLesson?: StudentLiveVideoLessonNav;
  nextLesson?: StudentLiveVideoLessonNav;
  resources: { id: string; title: string; type: string; size?: string }[];
  notes: string;
}
