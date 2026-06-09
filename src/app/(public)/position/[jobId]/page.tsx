import { notFound } from "next/navigation";
import { PositionJobDetailPageContent } from "@/components/public/position/position-job-detail-page-content";
import {
  getPositionJobById,
  positionJobs,
} from "@/components/public/position/data/position-jobs.data";

interface PositionJobPageProps {
  params: Promise<{ jobId: string }>;
}

export function generateStaticParams() {
  return positionJobs.map((job) => ({ jobId: job.id }));
}

export async function generateMetadata({ params }: PositionJobPageProps) {
  const { jobId } = await params;
  const job = getPositionJobById(jobId);

  if (!job) {
    return { title: "Position Not Found" };
  }

  return {
    title: `${job.title} — Open Position`,
    description: job.description,
  };
}

export default async function PositionJobPage({ params }: PositionJobPageProps) {
  const { jobId } = await params;
  const job = getPositionJobById(jobId);

  if (!job) {
    notFound();
  }

  return <PositionJobDetailPageContent job={job} />;
}
