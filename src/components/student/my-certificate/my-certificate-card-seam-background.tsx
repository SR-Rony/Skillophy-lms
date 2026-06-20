export function MyCertificateCardSeamBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f6] via-white to-white" />

      <div className="absolute left-[-12%] top-[-20%] h-[180px] w-[180px] rounded-full bg-[#ffe8e4]/45 blur-3xl sm:h-[220px] sm:w-[220px]" />
      <div className="absolute right-[-8%] top-[10%] h-[160px] w-[160px] rounded-full bg-[#f0e8f8]/30 blur-3xl sm:h-[200px] sm:w-[200px]" />

      <svg
        className="absolute right-[-10%] top-[8%] h-[140px] w-[55%] text-[#ead8d2]/55 sm:right-[-6%] sm:h-[170px] sm:w-[50%]"
        viewBox="0 0 520 340"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={`seam-${index}`}
            d={`M${24 + index * 12} ${250 - index * 7} C ${120 + index * 10} ${90 - index * 2}, ${280 + index * 6} ${86 + index * 4}, ${480 - index * 5} ${240 - index * 3}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute right-[-4%] bottom-[6%] hidden h-[120px] w-[45%] text-[#efb0aa]/20 sm:block"
        viewBox="0 0 400 280"
        fill="none"
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <path
            key={`seam-accent-${index}`}
            d={`M${8 + index * 10} ${220 - index * 6} C ${55 + index * 8} ${80 - index * 2}, ${160 + index * 6} ${72 + index * 3}, ${360 - index * 5} ${210 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
