"use client";

import { useState } from "react";
import { AdminCourseCreationMetaInfoBenefits } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-benefits";
import { AdminCourseCreationMetaInfoBookColumn } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-book-column";
import { AdminCourseCreationMetaInfoFaq } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-faq";
import { AdminCourseCreationMetaInfoRequirements } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-requirements";
import { AdminCourseCreationMetaInfoSkillsInput } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-skills-input";
import { AdminCourseCreationMetaInfoSectionHeader } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info-section-header";
import { adminCourseMetaInfoInputClassName } from "@/components/admin/course-creation/meta-info/admin-course-creation-meta-info.utils";
import type { AdminCourseMetaInfo } from "@/types/admin-course-creation.types";

interface AdminCourseCreationMetaInfoSectionProps {
  initialData: AdminCourseMetaInfo;
}

export function AdminCourseCreationMetaInfoSection({
  initialData,
}: AdminCourseCreationMetaInfoSectionProps) {
  const [metaInfo, setMetaInfo] = useState<AdminCourseMetaInfo>(initialData);

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <AdminCourseCreationMetaInfoSectionHeader title="Job Opening Stats" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Job Opening</label>
            <input
              type="text"
              inputMode="numeric"
              value={metaInfo.jobStats.jobOpening}
              onChange={(event) =>
                setMetaInfo((current) => ({
                  ...current,
                  jobStats: { ...current.jobStats, jobOpening: event.target.value },
                }))
              }
              className={adminCourseMetaInfoInputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Remote Jobs</label>
            <input
              type="text"
              inputMode="numeric"
              value={metaInfo.jobStats.remoteJobs}
              onChange={(event) =>
                setMetaInfo((current) => ({
                  ...current,
                  jobStats: { ...current.jobStats, remoteJobs: event.target.value },
                }))
              }
              className={adminCourseMetaInfoInputClassName}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[13px] font-semibold text-[#6b7280] sm:text-[14px]">Hiring in BD</label>
            <input
              type="text"
              inputMode="numeric"
              value={metaInfo.jobStats.hiringInBd}
              onChange={(event) =>
                setMetaInfo((current) => ({
                  ...current,
                  jobStats: { ...current.jobStats, hiringInBd: event.target.value },
                }))
              }
              className={adminCourseMetaInfoInputClassName}
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 border-t border-[#f0f0f0] pt-8 lg:grid-cols-2 lg:gap-8">
        <AdminCourseCreationMetaInfoBookColumn
          title="Skill Books"
          addLabel="Add Skill Books"
          items={metaInfo.skillBooks}
          onChange={(skillBooks) => setMetaInfo((current) => ({ ...current, skillBooks }))}
        />
        <AdminCourseCreationMetaInfoBookColumn
          title="Academic Guides"
          addLabel="Add Academic Guides"
          items={metaInfo.academicGuides}
          onChange={(academicGuides) => setMetaInfo((current) => ({ ...current, academicGuides }))}
        />
      </section>

      <section className="border-t border-[#f0f0f0] pt-8">
        <AdminCourseCreationMetaInfoSkillsInput
          skills={metaInfo.skills}
          onChange={(skills) => setMetaInfo((current) => ({ ...current, skills }))}
        />
      </section>

      <AdminCourseCreationMetaInfoRequirements
        requirements={metaInfo.requirements}
        onChange={(requirements) => setMetaInfo((current) => ({ ...current, requirements }))}
      />

      <AdminCourseCreationMetaInfoBenefits
        benefits={metaInfo.benefits}
        onChange={(benefits) => setMetaInfo((current) => ({ ...current, benefits }))}
      />

      <AdminCourseCreationMetaInfoFaq
        faqs={metaInfo.faqs}
        onChange={(faqs) => setMetaInfo((current) => ({ ...current, faqs }))}
      />
    </div>
  );
}
