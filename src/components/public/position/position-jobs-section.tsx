"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared";
import { CareerJobOpeningsSection } from "@/components/public/career/career-job-openings-section";
import { PositionJobDetailPanel } from "@/components/public/position/position-job-detail-panel";
import { PositionJobListCard } from "@/components/public/position/position-job-list-card";
import { positionJobs } from "@/components/public/position/data/position-jobs.data";
import { sectionTitleFadeUpVariants } from "@/components/public/section-title";
import { ROUTES } from "@/constants";

function PositionJobsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ecd8d2]/70 to-transparent" />
      <div className="absolute -left-[8%] top-[12%] h-[260px] w-[260px] rounded-full bg-[#ffe2cc]/30 blur-[90px]" />
      <div className="absolute right-[-6%] bottom-[10%] h-[280px] w-[280px] rounded-full bg-[#fff0eb]/45 blur-[100px]" />
    </div>
  );
}

export function PositionJobsSection() {
  const [selectedJobId, setSelectedJobId] = useState(positionJobs[0]?.id ?? "");
  const selectedJob =
    positionJobs.find((job) => job.id === selectedJobId) ?? positionJobs[0];

  return (
    <>
      <div className="lg:hidden">
        <CareerJobOpeningsSection
          showHeader={false}
          getJobHref={(job) => ROUTES.positionJob(job.id)}
        />
      </div>

      <section className="relative hidden overflow-hidden bg-white py-10 lg:block lg:py-14">
        <PositionJobsBackground />

        <Container
          as={motion.div}
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.08 }}
        >
          <div className="grid items-start gap-8 xl:grid-cols-[360px_minmax(0,1fr)] xl:gap-10">
            <motion.aside variants={sectionTitleFadeUpVariants} className="min-w-0">
              <div className="mb-5 flex items-end justify-between gap-4 px-1">
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
                    Open Roles
                  </p>
                  <p className="mt-1 text-[14px] text-[#6f6562]">
                    {positionJobs.length} positions available
                  </p>
                </div>
              </div>

              <div className="max-h-[780px] space-y-4 overflow-y-auto pr-2 [scrollbar-color:#ecd8d2_transparent] [scrollbar-width:thin]">
                {positionJobs.map((job) => (
                  <PositionJobListCard
                    key={job.id}
                    job={job}
                    isActive={job.id === selectedJob?.id}
                    onSelect={() => setSelectedJobId(job.id)}
                  />
                ))}
              </div>
            </motion.aside>

            <motion.div
              variants={sectionTitleFadeUpVariants}
              className="min-w-0 xl:sticky xl:top-24"
            >
              {selectedJob ? <PositionJobDetailPanel job={selectedJob} /> : null}
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
