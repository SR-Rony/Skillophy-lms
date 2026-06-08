import Link from "next/link";

function ExpediaLogo() {
  return (
    <div className="flex shrink-0 items-center gap-2.5">
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#001433] sm:h-10 sm:w-10"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-[#FFB400]" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </span>
      <span className="font-sans text-[18px] font-bold tracking-[-0.02em] text-[#001433] sm:text-[20px]">
        Expedia
      </span>
    </div>
  );
}

function PromoHeadline({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="font-sans text-[17px] font-bold leading-[1.25] text-[#001433] sm:text-[19px] lg:text-[21px]">
        Take the trip of your life
        <br />
        with Member Pricing
      </p>
      <p className="mt-1 font-sans text-[11px] font-medium leading-snug text-white sm:text-[12px]">
        Terms apply. See site for details
      </p>
    </div>
  );
}

function PromoPhoneMockup() {
  return (
    <div
      className="pointer-events-none absolute -right-1 top-1/2 hidden h-[128px] w-[68px] -translate-y-1/2 overflow-hidden rounded-[18px] border-[3px] border-[#0f172a] bg-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] sm:block lg:h-[140px] lg:w-[72px]"
      aria-hidden
    >
      <div className="relative h-full w-full overflow-hidden bg-[#1e293b]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#475569] via-[#334155] to-[#1e293b]" />
        <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-[#64748b]/80 to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-between px-1.5 py-2">
          <div className="flex items-center gap-1">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#001433]">
              <svg viewBox="0 0 24 24" className="h-2 w-2 text-[#FFB400]" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </span>
            <span className="text-[5px] font-bold text-white">Expedia</span>
          </div>

          <div className="grid grid-cols-4 gap-0.5 pb-0.5">
            {["Stay", "Flight", "Car", "Act"].map((label) => (
              <div key={label} className="flex flex-col items-center gap-0.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#001433]" />
                </span>
                <span className="text-[4px] font-medium text-white/90">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogDetailsPromoBanner() {
  return (
    <aside
      className="relative overflow-hidden rounded-[12px] bg-[#FFB400]"
      aria-label="Expedia promotional offer"
    >
      <div className="relative flex min-h-[88px] flex-col items-start gap-4 px-4 py-5 sm:min-h-[80px] sm:flex-row sm:items-center sm:gap-0 sm:px-6 sm:py-4 lg:min-h-[84px] lg:px-8 lg:pr-[82px]">
        <ExpediaLogo />

        <PromoHeadline className="w-full text-center sm:hidden" />

        <PromoHeadline className="pointer-events-none absolute left-1/2 top-1/2 hidden w-full max-w-[460px] -translate-x-1/2 -translate-y-1/2 text-center sm:block" />

        <Link
          href="#"
          className="mx-auto inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-white px-8 font-sans text-[13px] font-bold text-[#001433] transition hover:bg-white/90 sm:ml-auto sm:mr-1 sm:h-11 sm:px-9 sm:text-[14px]"
        >
          Book now
        </Link>
      </div>

      <PromoPhoneMockup />
    </aside>
  );
}
