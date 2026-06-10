export interface TeacherProfileCredential {
  id: string;
  text: string;
}

export interface TeacherProfileSocialAction {
  id: string;
  label: string;
  href: string;
  variant: "primary" | "secondary";
  platform: "linkedin" | "facebook";
}

export interface TeacherProfileAbout {
  title: string;
  paragraphs: string[];
  seeMoreLabel: string;
  seeMoreHref: string;
  imageSrc: string;
  imageAlt: string;
}

export interface TeacherProfile {
  id: string;
  slug: string;
  name: string;
  credentials: TeacherProfileCredential[];
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  socialActions: TeacherProfileSocialAction[];
  about: TeacherProfileAbout;
}
