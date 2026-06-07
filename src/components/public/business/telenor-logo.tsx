function TelenorLogo({ className }: { className?: string }) {
  return (
    <div className={className ?? "flex items-center gap-3 text-white"}>
      <svg viewBox="0 0 36 36" fill="none" className="h-9 w-9 shrink-0" aria-hidden="true">
        <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 2v8M18 26v8M2 18h8M26 18h8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="text-[15px] font-normal lowercase tracking-[0.02em]">telenor group</span>
    </div>
  );
}

export { TelenorLogo };
