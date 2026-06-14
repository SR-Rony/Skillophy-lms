export interface PrivacySubsection {
  heading: string;
  paragraphs?: string[];
  bulletItems?: string[];
}

export interface PrivacySection {
  id: string;
  title: string;
  subsections: PrivacySubsection[];
}

export const privacyPageData = {
  title: "Privacy & Cookie Policy",
  lastUpdated: "3 June, 2024",
  intro: [
    "This Privacy & Cookie Policy explains how Skillophy collects, uses, stores, and protects your personal data when you visit our website, use our mobile applications, or interact with our learning services.",
    "We are committed to protecting your privacy and handling your information in an open and transparent manner. Please read this notice carefully to understand how we process personal data and what choices you have.",
  ],
  tableOfContents: [
    { id: "purpose-and-who-we-are", label: "Purpose and Who We Are" },
    { id: "what-information-covers", label: "What Information this Privacy Notice Covers" },
    { id: "legal-bases", label: "Legal Bases for Collecting and Using Personal Data" },
    { id: "what-personal-data-we-collect", label: "What Personal Data We Collect" },
    { id: "external-links", label: "External Links" },
    { id: "retention-of-personal-data", label: "Retention of Personal Data" },
    { id: "your-rights", label: "Your Rights" },
    { id: "changing-our-privacy-notice", label: "Changing Our Privacy Notice" },
  ],
  sections: [
    {
      id: "purpose-and-who-we-are",
      title: "Purpose and Who We Are",
      subsections: [
        {
          heading: "About Skillophy",
          paragraphs: [
            "Skillophy is an online learning platform that connects learners, teachers, and institutions through courses, live classes, assignments, and related educational services.",
            "This notice is issued by Skillophy and applies to personal data we process in connection with our website, applications, customer support, marketing communications, and platform operations.",
          ],
        },
        {
          heading: "Purpose of this Notice",
          paragraphs: [
            "The purpose of this Privacy & Cookie Policy is to inform you about what personal data we collect, why we collect it, how we use it, who we share it with, how long we keep it, and what rights you have in relation to your data.",
          ],
        },
      ],
    },
    {
      id: "what-information-covers",
      title: "What Information this Privacy Notice Covers",
      subsections: [
        {
          heading: "Scope",
          paragraphs: [
            "This notice applies to personal data collected when you create an account, browse our site, enroll in courses, communicate with us, subscribe to newsletters, participate in live sessions, or otherwise interact with Skillophy services.",
            "It does not apply to third-party websites, apps, or services that may be linked from our platform. Those services are governed by their own privacy policies.",
          ],
        },
      ],
    },
    {
      id: "legal-bases",
      title: "Legal Bases for Collecting and Using Personal Data",
      subsections: [
        {
          heading: "Why We Process Your Data",
          paragraphs: [
            "We process personal data only where we have a valid legal basis to do so. Depending on the activity, this may include:",
          ],
          bulletItems: [
            "Performance of a contract — to provide courses, accounts, payments, and support you request.",
            "Legitimate interests — to improve our platform, prevent fraud, and maintain security, where those interests are not overridden by your rights.",
            "Consent — for optional marketing, cookies, or research participation where required.",
            "Legal obligation — to comply with applicable laws, tax requirements, or regulatory requests.",
          ],
        },
      ],
    },
    {
      id: "what-personal-data-we-collect",
      title: "What Personal Data We Collect",
      subsections: [
        {
          heading: "Information relating to your use of our Site",
          paragraphs: [
            "When you use Skillophy, we may automatically collect technical and usage information such as your IP address, browser type, device identifiers, pages viewed, session duration, referral source, and interaction data with courses and features.",
            "We may also use cookies and similar technologies to remember preferences, keep you signed in, analyze traffic, and improve platform performance.",
          ],
        },
        {
          heading: "Personal Data provided directly by you or via third parties",
          paragraphs: [
            "We collect information you provide when registering, updating your profile, enrolling in courses, contacting support, submitting assignments, or making payments. This may include:",
          ],
          bulletItems: [
            "Name, email address, phone number, and account credentials.",
            "Profile photo, bio, education details, and teacher credentials where applicable.",
            "Payment and billing information processed through secure payment partners.",
            "Communications, feedback, reviews, and support requests.",
            "Information received from authentication or social login providers, if you choose to use them.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "We use essential cookies to operate the platform, functional cookies to remember settings, analytics cookies to understand usage, and marketing cookies where permitted. You can manage cookie preferences through your browser settings or any cookie banner we provide.",
          ],
        },
      ],
    },
    {
      id: "external-links",
      title: "External Links",
      subsections: [
        {
          heading: "Third-Party Websites",
          paragraphs: [
            "Our platform may contain links to external websites, payment gateways, social networks, or instructor resources. Skillophy is not responsible for the privacy practices or content of those third-party sites.",
            "We encourage you to review the privacy policies of any third-party service before providing personal data to them.",
          ],
        },
      ],
    },
    {
      id: "retention-of-personal-data",
      title: "Retention of Personal Data",
      subsections: [
        {
          heading: "How Long We Keep Data",
          paragraphs: [
            "We retain personal data only for as long as necessary to fulfill the purposes described in this notice, including providing services, maintaining business records, resolving disputes, enforcing agreements, and complying with legal obligations.",
            "When data is no longer required, we delete or anonymize it using appropriate technical and organizational measures.",
          ],
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      subsections: [
        {
          heading: "Your Data Protection Rights",
          paragraphs: [
            "Depending on your location and applicable law, you may have the following rights in relation to your personal data:",
          ],
          bulletItems: [
            "Request access to the personal data we hold about you.",
            "Request correction of inaccurate or incomplete personal data.",
            "Request deletion of your personal data in certain circumstances.",
            "Object to or restrict certain types of processing.",
            "Request portability of data you provided to us in a structured format.",
            "Withdraw consent at any time where processing is based on consent.",
            "Lodge a complaint with a relevant data protection authority.",
          ],
        },
        {
          heading: "How to Exercise Your Rights",
          paragraphs: [
            "To make a privacy request, contact us through the Skillophy support channels or email address listed on our Contact page. We may need to verify your identity before responding to certain requests.",
          ],
        },
      ],
    },
    {
      id: "changing-our-privacy-notice",
      title: "Changing Our Privacy Notice",
      subsections: [
        {
          heading: "Updates to this Policy",
          paragraphs: [
            "We may update this Privacy & Cookie Policy from time to time to reflect changes in our services, legal requirements, or data practices. When we make material changes, we will update the \"Last Update\" date at the top of this page and, where appropriate, notify you by email or through the platform.",
            "Your continued use of Skillophy after an update becomes effective means you acknowledge the revised notice, unless applicable law requires otherwise.",
          ],
        },
      ],
    },
  ] satisfies PrivacySection[],
};
