import { CourseCategoryPageContent } from "@/components/public/all-courses/course-category-page-content";
import { ROUTES } from "@/constants";
import {
  getAllCategoryIds,
  getCategoryById,
  getExpandedCategoryCourses,
} from "@/data/mock/all-courses-categories";
import { notFound, redirect } from "next/navigation";

const COURSES_PER_PAGE = 12;

export function generateStaticParams() {
  return getAllCategoryIds().map((categoryId) => ({ categoryId }));
}

interface CourseCategoryPageProps {
  params: Promise<{ categoryId: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: CourseCategoryPageProps) {
  const { categoryId } = await params;
  const category = getCategoryById(categoryId);

  if (!category) {
    return { title: "Courses" };
  }

  return { title: category.label };
}

export default async function CourseCategoryPage({
  params,
  searchParams,
}: CourseCategoryPageProps) {
  const { categoryId } = await params;
  const { page } = await searchParams;

  if (!getCategoryById(categoryId)) {
    notFound();
  }

  const requestedPage = Math.max(1, Number.parseInt(page ?? "1", 10) || 1);
  const category = getCategoryById(categoryId)!;
  const totalCourses = getExpandedCategoryCourses(category, 108).length;
  const totalPages = Math.max(1, Math.ceil(totalCourses / COURSES_PER_PAGE));
  const currentPage = Math.min(requestedPage, totalPages);

  if (currentPage !== requestedPage) {
    redirect(
      currentPage === 1
        ? ROUTES.courseCategory(categoryId)
        : `${ROUTES.courseCategory(categoryId)}?page=${currentPage}`
    );
  }

  return (
    <CourseCategoryPageContent categoryId={categoryId} currentPage={currentPage} />
  );
}
