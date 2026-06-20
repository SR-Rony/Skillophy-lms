import type { StudentAccountSettingsPageData } from "@/types/student-account-settings.types";

const accountSettingsMonths = [
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
];

const accountSettingsYears = Array.from({ length: 31 }, (_, index) => {
  const year = String(2000 + index);
  return { value: year, label: year };
});

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
    months: accountSettingsMonths,
    years: accountSettingsYears,
  },
  courseFormOptions: {
    courses: [
      { value: "facebook-marketing", label: "Facebook Marketing" },
      {
        value: "foundations-ux-design",
        label: "Foundations of User Experience (UX) Design",
      },
      { value: "ui-ux-guided-program", label: "UI-UX Guided Program" },
      { value: "design-system", label: "Design System" },
      { value: "negotiation-skills", label: "Negotiation Skills" },
      { value: "digital-marketing", label: "Digital Marketing" },
    ],
    months: accountSettingsMonths,
    years: accountSettingsYears,
  },
  skillsFormOptions: {
    maxSkills: 10,
    availableSkills: [
      "Digital Marketing",
      "SEO",
      "UI/UX Design",
      "Web Development",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe After Effects",
      "Adobe Photoshop Lightroom",
      "Figma",
      "Content Writing",
      "Social Media Marketing",
      "Google Analytics",
      "Project Management",
      "JavaScript",
      "React",
      "Node.js",
      "Python",
    ],
  },
  jobExperienceData: {
    maxCustomLinks: 3,
    experiences: [
      {
        id: "job-1",
        title: "Product Designer at Design Monks",
        dateRange: "February 2022 - Present",
        description:
          "Led outreach and recruitment efforts at university, built strong relationships with academic departments and student organizations, organized events and workshops to promote the program, and provided guidance to prospective students.",
      },
      {
        id: "job-2",
        title: "Product Designer at Design Monks",
        dateRange: "February 2022 - February 2024",
        description:
          "Led outreach and recruitment efforts at university, built strong relationships with academic departments and student organizations, organized events and workshops to promote the program, and provided guidance to prospective students.",
      },
      {
        id: "job-3",
        title: "UI/UX Designer at Design Monks",
        dateRange: "February 2022 - February 2024",
        description:
          "Led outreach and recruitment efforts at university, built strong relationships with academic departments and student organizations, organized events and workshops to promote the program, and provided guidance to prospective students.",
      },
    ],
    links: [
      {
        id: "link-portfolio",
        platform: "portfolio",
        label: "Portfolio",
        url: "https://dribbble.com/username",
      },
      {
        id: "link-linkedin",
        platform: "linkedin",
        label: "LinkedIn",
        url: "https://linkedin.com/in/username",
      },
      {
        id: "link-facebook",
        platform: "facebook",
        label: "Facebook",
        url: "https://facebook.com/username",
      },
      {
        id: "link-dribbble",
        platform: "dribbble",
        label: "Dribbble",
        url: "https://dribbble.com/username",
      },
      {
        id: "link-instagram",
        platform: "instagram",
        label: "Instagram",
        url: "https://instagram.com/username",
      },
    ],
  },
  jobExperienceFormOptions: {
    jobTitles: [
      { value: "product-designer", label: "Product Designer" },
      { value: "ui-ux-designer", label: "UI/UX Designer" },
      { value: "graphic-designer", label: "Graphic Designer" },
      { value: "frontend-developer", label: "Frontend Developer" },
    ],
    companies: [
      { value: "design-monks", label: "Design Monks" },
      { value: "skillophy", label: "Skillophy" },
      { value: "creative-studio", label: "Creative Studio" },
      { value: "tech-solutions", label: "Tech Solutions Ltd." },
    ],
    months: accountSettingsMonths,
    years: accountSettingsYears,
  },
  preferencesData: {
    password: {
      lastChangedLabel: "The password was last changed four months ago.",
      changePasswordHref: "#",
    },
    notification: {
      description:
        "We'll always let you know about important updates, but you pick what else you want to hear about.",
      emailNotification: false,
      pushNotification: true,
    },
  },
  moreData: {
    accountActions: [
      {
        id: "logout",
        title: "Logout your account",
        description: "Do you want to logout your account?",
        actionLabel: "Log Out",
      },
      {
        id: "deactivate",
        title: "Deactivate your account",
        description: "Do you want to deactivate your account?",
        actionLabel: "Deactivate",
      },
      {
        id: "delete",
        title: "Delete your account",
        description: "Do you want to delete your account?",
        actionLabel: "Delete",
      },
    ],
    currentDevice: {
      id: "device-current",
      name: "Chrome 123.0.0.0 • Intel Mac OS X 10_15_7",
      meta: "April 23, 2024, Log out to remove this device",
    },
    otherDevices: [
      {
        id: "device-1",
        name: "HONOR RMO-NX1 • Mobile",
        meta: "Last use at April 21, 2024",
      },
      {
        id: "device-2",
        name: "Chrome 124.0.0.0 • Android 10",
        meta: "Last use at April 11, 2024",
      },
    ],
    deviceLimitNote:
      "For security reasons a Skillophy account can login from a maximum of 6 devices. Apart from this, you need to remove at least one device from Device Manager to login to the new device.",
  },
  resumePreviewData: {
    profileSummary:
      "Product designer with 7+ years experience, focused on creating intuitive and engaging user experiences for web and mobile platforms. Skilled in user research, wireframing, prototyping, and visual design. Strong collaborator with cross-functional teams to deliver impactful products.",
    experiences: [
      {
        id: "exp-uber",
        company: "Uber",
        role: "Product Designer",
        dateRange: "Mar 2015 - Present",
        highlights: [
          "Designed and shipped features for the driver app, improving driver satisfaction by 15%.",
          "Led the redesign of the onboarding flow, resulting in a 20% increase in driver sign-ups.",
          "Collaborated with engineers and product managers to define product requirements and prioritize features.",
        ],
      },
      {
        id: "exp-ifttt",
        company: "IFTTT",
        role: "Product Designer",
        dateRange: "Dec 2013 - Mar 2015",
        highlights: [
          "Designed and shipped features for the driver app, improving driver satisfaction by 15%.",
          "Led the redesign of the onboarding flow, resulting in a 20% increase in driver sign-ups.",
          "Collaborated with engineers and product managers to define product requirements and prioritize features.",
        ],
      },
      {
        id: "exp-facebook",
        company: "Facebook",
        role: "UX/UI Designer",
        dateRange: "June 2013 - Sep 2013",
        highlights: [
          "Designed and shipped features for the driver app, improving driver satisfaction by 15%.",
          "Led the redesign of the onboarding flow, resulting in a 20% increase in driver sign-ups.",
          "Collaborated with engineers and product managers to define product requirements and prioritize features.",
        ],
      },
      {
        id: "exp-google",
        company: "Google Maps",
        role: "Product Designer",
        dateRange: "June 2012 - June 2013",
        highlights: [
          "Designed and shipped features for the driver app, improving driver satisfaction by 15%.",
          "Led the redesign of the onboarding flow, resulting in a 20% increase in driver sign-ups.",
          "Collaborated with engineers and product managers to define product requirements and prioritize features.",
        ],
      },
    ],
    education: [
      {
        id: "edu-1",
        title: "BSC in Computer Engineering at RUET",
        dateRange: "February 2012 - February 2016",
        description:
          "Led outreach and recruitment efforts at university, built strong relationships with academic departments and student organizations, organized events and workshops to promote the program, and provided guidance to prospective students.",
      },
      {
        id: "edu-2",
        title: "BSC in Computer Engineering at RUET",
        dateRange: "February 2012 - February 2016",
        description:
          "Led outreach and recruitment efforts at university, built strong relationships with academic departments and student organizations, organized events and workshops to promote the program, and provided guidance to prospective students.",
      },
    ],
    details: {
      address: "Dhaka, Bangladesh",
      phone: "016254789546",
      email: "nushrat5789@gmail.com",
    },
    links: [
      { id: "resume-link-linkedin", platform: "linkedin", label: "LinkedIn", url: "#" },
      { id: "resume-link-dribbble", platform: "dribbble", label: "Dribbble", url: "#" },
      { id: "resume-link-facebook", platform: "facebook", label: "Facebook", url: "#" },
    ],
    skills: [
      "Digital Marketing",
      "SEO",
      "UI/UX Design",
      "Web Development",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe After Effects",
      "Adobe Photoshop Lightroom",
    ],
    interestedAreas: ["Photography", "Travelling", "Reading"],
  },
  shareResumeData: {
    description:
      "After finalising your resume, you can preview for polish. You can also download it as PDF for easy sharing and printing.",
    resumeUrl: "https://skillophy/578290nushratresume.pdf",
    copyLinkLabel: "Copy Link",
    shareOptions: [
      {
        id: "email",
        label: "Share via email",
        href: "mailto:?subject=My%20Resume&body=https%3A%2F%2Fskillophy%2F578290nushratresume.pdf",
      },
      {
        id: "facebook",
        label: "Share on Facebook",
        href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fskillophy%2F578290nushratresume.pdf",
      },
      {
        id: "linkedin",
        label: "Share on LinkedIn",
        href: "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fskillophy%2F578290nushratresume.pdf",
      },
      {
        id: "x",
        label: "Share on X",
        href: "https://twitter.com/intent/tweet?url=https%3A%2F%2Fskillophy%2F578290nushratresume.pdf",
      },
    ],
  },
};
