export function MyCoursesSeamBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f6] via-white to-[#faf7fc]" />
      <div className="absolute left-[-6%] top-[20%] h-[240px] w-[240px] rounded-full bg-[#ffe8e4]/40 blur-3xl" />
      <div className="absolute right-[-4%] top-[8%] h-[280px] w-[280px] rounded-full bg-[#f0e8f8]/35 blur-3xl" />

      <svg
        className="absolute right-[-8%] top-[2%] h-[220px] w-[280px] text-[#ead8d2]/45 sm:h-[260px] sm:w-[360px] lg:hidden"
        viewBox="0 0 520 340"
        fill="none"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <path
            key={`mobile-right-${index}`}
            d={`M${24 + index * 12} ${250 - index * 7} C ${120 + index * 10} ${90 - index * 2}, ${280 + index * 6} ${86 + index * 4}, ${480 - index * 5} ${240 - index * 3}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute right-[-2%] top-[4%] hidden h-[320px] w-[520px] text-[#ead8d2]/50 lg:block"
        viewBox="0 0 520 340"
        fill="none"
      >
        {Array.from({ length: 14 }).map((_, index) => (
          <path
            key={index}
            d={`M${24 + index * 12} ${250 - index * 7} C ${120 + index * 10} ${90 - index * 2}, ${280 + index * 6} ${86 + index * 4}, ${480 - index * 5} ${240 - index * 3}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute left-[-4%] top-[10%] hidden h-[280px] w-[400px] text-[#efb0aa]/25 lg:block"
        viewBox="0 0 400 280"
        fill="none"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <path
            key={index}
            d={`M${8 + index * 10} ${220 - index * 6} C ${55 + index * 8} ${80 - index * 2}, ${160 + index * 6} ${72 + index * 3}, ${360 - index * 5} ${210 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
