import type { StudentAccountSettingsPageData } from "@/types/student-account-settings.types";

export const studentAccountSettingsDemo: StudentAccountSettingsPageData = {
  title: "Account Settings",
  subtitle: "Manage your profile, qualifications, and account preferences.",
  profile: {
    initials: "NJ",
    fullName: "Nushrat Jahan",
    jobTitle: "Product Designer",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop",
    previewUrl: "#",
    shareCvUrl: "#",
  },
  tabs: [
    { id: "my-profile", label: "My Profile" },
    { id: "education", label: "Educational Qualification" },
    { id: "job-experience", label: "Job Experience" },
    { id: "settings", label: "Settings" },
    { id: "more", label: "More" },
  ],
  profileInfo: {
    fullName: "Nushrat Jahan",
    certificateName: "Nushrat Jahan",
    email: "",
    phone: "016254789546",
    gender: "Male",
    age: "",
    address: "",
    country: "Bangladesh",
  },
  biography: {
    description: "",
  },
  genderOptions: [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ],
  countryOptions: [
    { value: "Bangladesh", label: "Bangladesh" },
    { value: "India", label: "India" },
    { value: "United States", label: "United States" },
    { value: "United Kingdom", label: "United Kingdom" },
  ],
  educationData: {
    education: [
      {
        id: "education-1",
        title: "BSC in Computer Engineering at RUET",
        dateRange: "February 2012 - February 2016",
        description:
          "Led outreach and recruitment efforts at university, built strong relationships with academic departments and student organizations, organized events and workshops to promote the program, and provided guidance to prospective students.",
      },
      {
        id: "education-2",
        title: "BSC in Computer Engineering at RUET",
        dateRange: "February 2012 - February 2016",
        description:
          "Led outreach and recruitment efforts at university, built strong relationships with academic departments and student organizations, organized events and workshops to promote the program, and provided guidance to prospective students.",
      },
    ],
    courses: [
      {
        id: "course-1",
        title: "Facebook Marketing",
        dateRange: "March 2014 - April 2016",
        status: "completed",
        certificateUrl: "#",
      },
      {
        id: "course-2",
        title: "Foundations of User Experience (UX) Design",
        dateRange: "March 2014 - April 2016",
        status: "ongoing",
      },
      {
        id: "course-3",
        title: "Foundations of User Experience (UX) Design",
        dateRange: "March 2014 - April 2016",
        status: "completed",
        description:
          "Led outreach and recruitment efforts at university, built strong relationships with academic departments and student organizations, organized events and workshops to promote the program, and provided guidance to prospective students.",
        certificateUrl: "#",
      },
    ],
    skills: ["Digital Marketing", "SEO", "UI/UX Design", "Web Development"],
    interestedAreas: ["Photography", "Travelling", "Reading"],
  },
  educationFormOptions: {
    institutions: [
      { value: "ruet", label: "Rajshahi University of Engineering & Technology (RUET)" },
      { value: "buet", label: "Bangladesh University of Engineering and Technology (BUET)" },
      { value: "du", label: "University of Dhaka" },
      { value: "nsu", label: "North South University" },
      { value: "brac", label: "BRAC University" },
    ],
    degrees: [
      { value: "ssc", label: "Secondary School Certificate" },
      { value: "hsc", label: "Higher Secondary Certificate" },
      { value: "bsc", label: "Bachelor of Science" },
      { value: "ba", label: "Bachelor of Arts" },
      { value: "bcom", label: "Bachelor of Commerce" },
      { value: "msc", label: "Master of Science" },
      { value: "bsc-computer-engineering", label: "BSC in Computer Engineering" },
    ],
    months: [
      { value: "january", label: "January" },
      { value: "february", label: "February" },
      { value: "march", label: "March" },
      { value: "april", label: "April" },
      { value: "may", label: "May" },
      { value: "june", label: "June" },
      { value: "july", label: "July" },
      { value: "august", label: "August" },
      { value: "september", label: "September" },
      { value: "october", label: "October" },
      { value: "november", label: "November" },
      { value: "december", label: "December" },
    ],
    years: Array.from({ length: 31 }, (_, index) => {
      const year = String(2000 + index);
      return { value: year, label: year };
    }),
  },
};
