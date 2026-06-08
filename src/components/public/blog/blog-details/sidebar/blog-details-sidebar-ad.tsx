import Link from "next/link";

export function BlogDetailsSidebarAd() {
  return (
    <div className="overflow-hidden rounded-[12px]">
      <div className="grid min-h-[220px] grid-cols-2">
        <div className="flex flex-col justify-between bg-[#D8E86A] px-4 py-4 sm:px-5 sm:py-5">
          <div>
            <p className="font-sans text-[9px] font-black uppercase leading-tight tracking-[0.06em] text-[#1F4D2E] sm:text-[10px]">
              Garnier
              <br />
              Fructis Treats
            </p>
            <p className="mt-3 font-sans text-[15px] font-bold leading-[1.2] text-[#1F4D2E] sm:text-[16px]">
              Nourish
              <br />
              hungry hair
            </p>
          </div>

          <div>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-[12px] bg-white px-4 font-sans text-[12px] font-bold text-[#111827] transition hover:bg-white/90"
            >
              Shop now
            </Link>
            <p className="mt-3 font-sans text-[11px] font-bold text-white sm:text-[12px]">Walmart.com</p>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-[#FFD54F] via-[#FFB300] to-[#FF8F00]">
          <div className="absolute right-2 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[7px] font-bold leading-tight text-[#111827] sm:h-11 sm:w-11 sm:text-[8px]">
            98%
            <br />
            natural
          </div>

          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-end gap-1 pb-2">
            <div className="h-[88px] w-[34px] rounded-t-[14px] bg-gradient-to-b from-[#7CB342] to-[#558B2F] shadow-md sm:h-[96px] sm:w-[38px]">
              <div className="mx-auto mt-2 h-3 w-3 rounded-full bg-white/80" />
            </div>
            <div className="h-[104px] w-[38px] rounded-t-[16px] bg-gradient-to-b from-[#FF7043] to-[#E64A19] shadow-md sm:h-[112px] sm:w-[42px]">
              <div className="mx-auto mt-2 h-3 w-3 rounded-full bg-white/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
