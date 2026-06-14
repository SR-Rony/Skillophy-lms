interface HelpDetailsHeaderProps {
  title: string;
  lastUpdated: string;
}

export function HelpDetailsHeader({ title, lastUpdated }: HelpDetailsHeaderProps) {
  return (
    <header className="border-b border-[#ece6e3] pb-6 sm:pb-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <h1 className="max-w-3xl text-[26px] font-bold leading-tight text-[#24201f] sm:text-[32px] lg:text-[36px]">
          {title}
        </h1>
        <p className="shrink-0 text-[13px] text-[#9a908c] sm:pt-2 sm:text-[14px]">
          Last Update: {lastUpdated}
        </p>
      </div>
    </header>
  );
}
