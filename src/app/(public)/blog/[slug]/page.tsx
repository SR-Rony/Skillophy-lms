import { notFound } from "next/navigation";
import { BlogPostDetail } from "@/components/public/blog";
import { blogService } from "@/services";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await blogService.getPostDetailBySlug(slug);

  if (!post) {
    return { title: "Blog Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await blogService.getPostDetailBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostDetail post={post} />;
}
