import { notFound } from "next/navigation";
import { HelpDetailsPage, getHelpArticleBySlug } from "@/components/public/help/help-details";

interface HelpArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: HelpArticlePageProps) {
  const { slug } = await params;
  const article = getHelpArticleBySlug(slug);

  if (!article) {
    return { title: "Help Article Not Found" };
  }

  return {
    title: article.title,
    description: article.intro[0],
  };
}

export default async function HelpArticlePage({ params }: HelpArticlePageProps) {
  const { slug } = await params;
  const article = getHelpArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <HelpDetailsPage article={article} />;
}
