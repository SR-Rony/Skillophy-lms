interface BlogDetailsTagsProps {
  tags: string[];
}

export function BlogDetailsTags({ tags }: BlogDetailsTagsProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <span className="shrink-0 font-sans text-[20px] font-bold leading-none">
        Tags
      </span>

      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-[#FFF0ED] px-5 py-2 font-sans text-[14px] font-medium leading-none text-[#111827] sm:px-6 sm:text-[15px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
