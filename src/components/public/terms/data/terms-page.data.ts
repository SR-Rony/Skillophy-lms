export interface TermsSubsection {
  heading: string;
  paragraphs?: string[];
  bulletItems?: string[];
}

export interface TermsSection {
  id: string;
  title: string;
  subsections: TermsSubsection[];
}

export const termsPageData = {
  title: "Terms and Conditions",
  lastUpdated: "June 1, 2023",
  intro: [
    "Thank you for using Skillophy!",
    "These Terms and Conditions govern your access to and use of the Skillophy website, mobile applications, and related services (collectively, the \"Services\"). By accessing or using our Services, you agree to be bound by these Terms.",
    "Please read these Terms carefully before using Skillophy. If you do not agree with any part of these Terms, you may not access or use the Services.",
  ],
  tableOfContents: [
    { id: "using-skillophy", label: "Using Skillophy" },
    { id: "content-offerings", label: "Content Offerings" },
    { id: "your-content", label: "Your Content" },
    { id: "payments-refunds", label: "Payments & Refunds" },
    { id: "rules-from-skillophy", label: "Rules when from Skillophy" },
    { id: "disclaimers", label: "Disclaimers" },
  ],
  sections: [
    {
      id: "using-skillophy",
      title: "Using Skillophy",
      subsections: [
        {
          heading: "Who May Use Our Services",
          paragraphs: [
            "You may use the Services only if you can form a binding contract with Skillophy and are not barred from receiving services under applicable law.",
          ],
          bulletItems: [
            "You must be at least 13 years old to use the Services.",
            "If you are under 18, you may use the Services only with the involvement and consent of a parent or legal guardian.",
            "You must provide accurate registration information and keep your account credentials secure.",
            "You are responsible for all activity that occurs under your account.",
          ],
        },
        {
          heading: "Our License to You",
          paragraphs: [
            "Subject to your compliance with these Terms, Skillophy grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the Services for your personal, non-commercial learning purposes.",
            "You may not copy, redistribute, transmit, assign, sell, broadcast, rent, share, lend, modify, adapt, edit, create derivative works of, license, or otherwise transfer or use any course content except as expressly permitted by Skillophy or the content provider.",
          ],
        },
        {
          heading: "Commercial Use",
          paragraphs: [
            "Unless you receive our prior written consent or make an explicit purchase through Skillophy, you agree not to use the Services for commercial purposes. Commercial use includes reselling access to courses, using course materials to operate a competing service, or reproducing content for paid distribution.",
          ],
        },
      ],
    },
    {
      id: "content-offerings",
      title: "Content Offerings",
      subsections: [
        {
          heading: "Changes to Content Offerings",
          paragraphs: [
            "Skillophy and its content providers may add, remove, or modify courses, lessons, features, and materials at any time. We may also update pricing, availability, or access requirements without prior notice, except where applicable law requires otherwise.",
          ],
        },
        {
          heading: "No Academic Credit",
          paragraphs: [
            "Unless explicitly stated on a specific offering, Skillophy courses do not confer academic credit, professional certification, or accredited credentials. Completion certificates, where offered, indicate course completion only and do not guarantee employment, licensure, or academic recognition.",
          ],
        },
        {
          heading: "Disclaimer of Interests - Content Provider Relationship",
          paragraphs: [
            "Instructors and content providers are independent third parties and not employees or agents of Skillophy. Skillophy does not control and is not responsible for the accuracy, quality, legality, or delivery of instructor-provided content, though we may review content for policy compliance.",
          ],
        },
      ],
    },
    {
      id: "your-content",
      title: "Your Content",
      subsections: [
        {
          heading: "User Content",
          paragraphs: [
            "You may submit content through the Services, including reviews, comments, assignments, discussion posts, profile information, and other materials (\"User Content\"). You retain ownership of your User Content, but you grant Skillophy the rights described below.",
          ],
        },
        {
          heading: "How Skillophy and Others May Use User Content",
          paragraphs: [
            "By submitting User Content, you grant Skillophy a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, host, store, reproduce, modify, publish, display, and distribute your User Content in connection with operating and improving the Services.",
            "Skillophy may remove or restrict User Content that violates these Terms, applicable law, or community guidelines.",
          ],
        },
        {
          heading: "Feedback",
          paragraphs: [
            "If you provide suggestions, ideas, or feedback about the Services, you agree that Skillophy may use that feedback without restriction or compensation to you.",
          ],
        },
      ],
    },
    {
      id: "payments-refunds",
      title: "Payments & Refunds",
      subsections: [
        {
          heading: "Security",
          paragraphs: [
            "You are responsible for maintaining the confidentiality of your account login information and for restricting access to your devices. Notify Skillophy immediately if you suspect unauthorized access to your account.",
            "Skillophy implements reasonable technical and organizational measures to protect payment and account data, but no system is completely secure.",
          ],
        },
        {
          heading: "Third Party Content",
          paragraphs: [
            "The Services may contain links to third-party websites, tools, or resources. Skillophy is not responsible for the content, policies, or practices of third parties, and your use of third-party services is at your own risk.",
          ],
        },
        {
          heading: "Copyright and Trademark",
          paragraphs: [
            "Skillophy respects intellectual property rights. If you believe content on the Services infringes your copyright or trademark, please contact us with sufficient detail to investigate the claim. Repeat infringers may have their accounts terminated.",
          ],
        },
        {
          heading: "Education Research",
          paragraphs: [
            "Skillophy may invite users to participate in optional education research to improve learning outcomes. Participation is voluntary and may be subject to separate consent notices describing how data will be used.",
          ],
        },
        {
          heading: "Paid Services from Skillophy",
          paragraphs: [
            "Some Services require payment. Prices, taxes, and available payment methods are shown at checkout. By completing a purchase, you authorize Skillophy or its payment partners to charge your selected payment method.",
            "Refund eligibility is governed by Skillophy's Refund Policy. Unless required by law, purchases are generally non-refundable after access has been granted, except where a refund window applies to a specific course or promotion.",
          ],
        },
      ],
    },
    {
      id: "rules-from-skillophy",
      title: "Rules when from Skillophy",
      subsections: [
        {
          heading: "Acceptable Use",
          paragraphs: [
            "You agree not to misuse the Services. Prohibited conduct includes attempting to gain unauthorized access to systems, scraping or harvesting data, uploading malware, harassing other users, impersonating others, or using the Services for unlawful purposes.",
          ],
          bulletItems: [
            "Do not share account credentials or course access with unauthorized users.",
            "Do not record, download, or redistribute course materials except where explicitly allowed.",
            "Do not interfere with the operation or security of the Services.",
            "Do not post content that is abusive, discriminatory, infringing, or misleading.",
          ],
        },
        {
          heading: "Account Suspension",
          paragraphs: [
            "Skillophy may suspend or terminate your account if you violate these Terms, create risk or legal exposure for Skillophy, or if we are required to do so by law. Where appropriate, we will provide notice and an opportunity to appeal.",
          ],
        },
      ],
    },
    {
      id: "disclaimers",
      title: "Disclaimers",
      subsections: [
        {
          heading: "General Disclaimer",
          paragraphs: [
            "THE SERVICES AND ALL CONTENT ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.",
            "SKILLOPHY DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF HARMFUL COMPONENTS, OR THAT ANY CONTENT WILL MEET YOUR EXPECTATIONS OR PRODUCE SPECIFIC RESULTS.",
            "TO THE MAXIMUM EXTENT PERMITTED BY LAW, SKILLOPHY AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND CONTENT PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM YOUR USE OF THE SERVICES.",
            "Some jurisdictions do not allow certain limitations of liability, so some of the above limitations may not apply to you.",
          ],
        },
      ],
    },
  ] satisfies TermsSection[],
};
