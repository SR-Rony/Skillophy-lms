import Image from "next/image";
import Link from "next/link";
import { Facebook, Globe, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/shared";
import type {
  StudentAccountSettingsLinkPlatform,
  StudentAccountSettingsProfile,
  StudentAccountSettingsResumePreviewData,
} from "@/types/student-account-settings.types";
import { AccountSettingsResumeSidebarSeam } from "./account-settings-resume-sidebar-seam";
import { cn } from "@/utils";

interface AccountSettingsResumeDocumentProps {
  profile: StudentAccountSettingsProfile;
  resume: StudentAccountSettingsResumePreviewData;
  className?: string;
}

function ResumeLinkIcon({ platform }: { platform: StudentAccountSettingsLinkPlatform }) {
  if (platform === "portfolio") {
    return <Globe className="h-4 w-4 shrink-0 text-[#757575]" aria-hidden />;
  }

  if (platform === "linkedin") {
    return <Linkedin className="h-4 w-4 shrink-0 fill-[#0a66c2] text-[#0a66c2]" aria-hidden />;
  }

  if (platform === "facebook") {
    return <Facebook className="h-4 w-4 shrink-0 fill-[#1877f2] text-[#1877f2]" aria-hidden />;
  }

  if (platform === "instagram") {
    return <Instagram className="h-4 w-4 shrink-0 text-[#e4405f]" aria-hidden />;
  }

  return (
    <span
      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ea4c89] text-[9px] font-bold text-white"
      aria-hidden
    >
      D
    </span>
  );
}

function ResumeTagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="inline-flex rounded-md border border-[#ebe8e6] bg-white px-2.5 py-1 text-[11px] font-medium text-[#1a1a1a] shadow-[0_2px_8px_rgba(35,25,22,0.04)] sm:text-[12px]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function AccountSettingsResumeDocument({
  profile,
  resume,
  className,
}: AccountSettingsResumeDocumentProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-[#ebe8e6] bg-white shadow-[0_8px_30px_rgba(35,25,22,0.06)]",
        className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
        <div className="p-5 sm:p-6 md:p-7">
          <div className="flex items-center gap-4">
            <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full ring-2 ring-white sm:h-[80px] sm:w-[80px]">
              <Image
                src={profile.avatarUrl}
                alt={profile.fullName}
                fill
                unoptimized
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="min-w-0">
              <h3 className="text-[20px] font-bold leading-tight text-[#1a1a1a] sm:text-[22px]">
                {profile.fullName}
              </h3>
              <p className="mt-1 text-[14px] font-medium text-[#757575] sm:text-[15px]">
                {profile.jobTitle}
              </p>
            </div>
          </div>

          <section className="mt-6 sm:mt-7">
            <h4 className="text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">Profile</h4>
            <p className="mt-2.5 text-[12px] leading-relaxed text-[#757575] sm:text-[13px]">
              {resume.profileSummary}
            </p>
          </section>

          <section className="mt-6 sm:mt-7">
            <h4 className="text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">Experience</h4>
            <div className="mt-3 space-y-5 sm:space-y-6">
              {resume.experiences.map((experience) => (
                <div key={experience.id}>
                  <p className="text-[13px] font-bold text-[#1a1a1a] sm:text-[14px]">
                    {experience.company}
                  </p>
                  <p className="mt-0.5 text-[12px] font-medium text-[#1a1a1a] sm:text-[13px]">
                    {experience.role}{" "}
                    <span className="font-medium text-[#757575]">({experience.dateRange})</span>
                  </p>
                  <ul className="mt-2.5 list-disc space-y-1.5 pl-4 text-[11px] leading-relaxed text-[#757575] sm:text-[12px]">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 sm:mt-7">
            <h4 className="text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">Education</h4>
            <div className="mt-3 space-y-4 sm:space-y-5">
              {resume.education.map((item) => (
                <div key={item.id}>
                  <p className="text-[13px] font-bold text-[#1a1a1a] sm:text-[14px]">{item.title}</p>
                  <p className="mt-0.5 text-[11px] text-[#757575] sm:text-[12px]">{item.dateRange}</p>
                  {item.description ? (
                    <p className="mt-2 text-[11px] leading-relaxed text-[#757575] sm:text-[12px]">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="relative border-t border-[#f0ece9] lg:border-l lg:border-t-0">
          <AccountSettingsResumeSidebarSeam />

          <div className="relative z-10 p-5 sm:p-6 md:p-7">
            <div className="flex justify-end">
              <Logo imageClassName="h-7 sm:h-8" />
            </div>

            <section className="mt-6">
              <h4 className="text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">Details</h4>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="text-[12px] font-bold text-[#1a1a1a] sm:text-[13px]">Address</p>
                  <p className="mt-1 text-[11px] text-[#757575] sm:text-[12px]">
                    {resume.details.address}
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#1a1a1a] sm:text-[13px]">Phone</p>
                  <p className="mt-1 text-[11px] text-[#757575] sm:text-[12px]">
                    {resume.details.phone}
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#1a1a1a] sm:text-[13px]">Email</p>
                  <p className="mt-1 text-[11px] text-[#757575] sm:text-[12px]">
                    {resume.details.email}
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6">
              <h4 className="text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">Links</h4>
              <div className="mt-3 space-y-2.5">
                {resume.links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.url}
                    className="flex items-center gap-2.5 text-[12px] font-medium text-[#1a1a1a] transition-opacity hover:opacity-80 sm:text-[13px]"
                  >
                    <ResumeLinkIcon platform={link.platform} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h4 className="text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">Skills</h4>
              <div className="mt-3">
                <ResumeTagList items={resume.skills} />
              </div>
            </section>

            <section className="mt-6">
              <h4 className="text-[15px] font-bold text-[#1a1a1a] sm:text-[16px]">Interested Area</h4>
              <div className="mt-3">
                <ResumeTagList items={resume.interestedAreas} />
              </div>
            </section>
          </div>
        </aside>
      </div>
    </article>
  );
}
