import { Skeleton } from "@/components/ui/skeleton";

export function BlogPostCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
      <Skeleton className="h-[210px] w-full rounded-none sm:h-[220px]" />
      <div className="space-y-3 px-5 py-5 sm:px-6 sm:py-6">
        <Skeleton className="h-3 w-2/3" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="flex items-center gap-3 pt-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
