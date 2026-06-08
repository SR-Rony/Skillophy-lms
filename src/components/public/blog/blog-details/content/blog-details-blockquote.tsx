interface BlogDetailsBlockquoteProps {
  text: string;
}

export function BlogDetailsBlockquote({ text }: BlogDetailsBlockquoteProps) {
  return (
    <figure className="w-full">
      <div className="rounded-[24px] bg-gradient-to-tr from-[#dc5a26] via-[#ef7a2e] to-[#f5c842] pb-5 pl-4 pt-5 pr-6 sm:pb-6 sm:pl-5 sm:pt-6 sm:pr-8">
        <blockquote className="rounded-[20px] bg-white px-8 py-10 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:rounded-[22px] sm:px-12 sm:py-12">
          <span
            className="mx-auto mb-6 block text-center font-serif text-[56px] font-bold leading-none text-[#e85d2a] sm:mb-7 sm:text-[64px]"
            aria-hidden
          >
            &ldquo;
          </span>

          <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#333333] sm:text-[17px]">
            {text}
          </p>
        </blockquote>
      </div>
    </figure>
  );
}
