"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/shared";
import { MyResourcesToolbar } from "@/components/student/my-resources/my-resources-toolbar";
import type { StudentCertificatePageData } from "@/types/student-certificate.types";
import { MyCertificateEmptyState } from "./my-certificate-empty-state";
import { MyCertificateHero } from "./my-certificate-hero";
import { MyCertificateList } from "./my-certificate-list";

interface MyCertificateContentProps {
  data: StudentCertificatePageData;
}

function parseDate(date: string): number {
  return new Date(date).getTime();
}

export function MyCertificateContent({ data }: MyCertificateContentProps) {
  const defaultCourseId = data.courseFilters[0]?.id ?? "";
  const [selectedCourseId, setSelectedCourseId] = useState(defaultCourseId);
  const [selectedSortId, setSelectedSortId] = useState(data.sortOptions[0]?.id ?? "default");

  const filteredCertificates = useMemo(() => {
    let items = data.certificates.filter(
      (certificate) => certificate.courseSlug === selectedCourseId
    );

    if (selectedSortId === "topic-asc") {
      items = [...items].sort((left, right) =>
        left.courseTitle.localeCompare(right.courseTitle)
      );
    } else if (selectedSortId === "topic-desc") {
      items = [...items].sort((left, right) =>
        right.courseTitle.localeCompare(left.courseTitle)
      );
    } else if (selectedSortId === "date-desc") {
      items = [...items].sort(
        (left, right) => parseDate(right.completedDate) - parseDate(left.completedDate)
      );
    } else if (selectedSortId === "date-asc") {
      items = [...items].sort(
        (left, right) => parseDate(left.completedDate) - parseDate(right.completedDate)
      );
    }

    return items;
  }, [data.certificates, selectedCourseId, selectedSortId]);

  const hasCertificates = data.certificates.length > 0;
  const hasFilteredCertificates = filteredCertificates.length > 0;

  return (
    <div className="bg-white">
      <MyCertificateHero title={data.title} subtitle={data.subtitle} />

      <Container className="bg-white py-6 md:py-8 lg:py-10">
        {hasCertificates ? (
          <>
            <MyResourcesToolbar
              courseFilters={data.courseFilters}
              sortOptions={data.sortOptions}
              selectedCourseId={selectedCourseId}
              selectedSortId={selectedSortId}
              onCourseChange={setSelectedCourseId}
              onSortChange={setSelectedSortId}
              className="mb-8 md:mb-10"
            />

            {hasFilteredCertificates ? (
              <MyCertificateList certificates={filteredCertificates} />
            ) : (
              <div className="rounded-2xl border border-dashed border-[#ebe8e6] bg-white px-6 py-14 text-center">
                <p className="text-[15px] font-semibold text-[#1a1a1a]">
                  No certificates for this course
                </p>
                <p className="mt-2 text-sm text-[#9ca3af]">
                  Try selecting a different course from the filter above.
                </p>
              </div>
            )}
          </>
        ) : (
          <MyCertificateEmptyState emptyState={data.emptyState} />
        )}
      </Container>
    </div>
  );
}
