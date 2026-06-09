"use client";

import { EmployeeSpotlightCard } from "@/components/public/employee-spotlight-card";
import { SpotlightSliderSection } from "@/components/public/spotlight-slider-section";
import { careerEmployeeOfTheYearData } from "@/components/public/career/data/career-employee-of-the-year.data";

export function CareerEmployeeOfTheYearSection() {
  const { title, description, employees } = careerEmployeeOfTheYearData;

  return (
    <SpotlightSliderSection
      title={title}
      description={description}
      items={employees}
      getItemKey={(employee) => employee.id}
      renderItem={(employee) => <EmployeeSpotlightCard employee={employee} />}
      ariaLabelPrefix="employee of the year"
      itemsPerPage={{ lg: 2, md: 2, sm: 1, default: 1 }}
      slideDotCount={2}
    />
  );
}
