function ComingSoonBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white" aria-hidden>
      <div className="absolute left-[-8%] top-[8%] h-[280px] w-[280px] rounded-full bg-[#ffe2cc]/35 blur-[90px] sm:h-[320px] sm:w-[320px]" />
      <div className="absolute right-[-6%] top-[18%] h-[260px] w-[260px] rounded-full bg-[#f5dce8]/28 blur-[85px] sm:h-[300px] sm:w-[300px]" />
      <div className="absolute bottom-[10%] left-[20%] h-[220px] w-[220px] rounded-full bg-[#fff0d4]/30 blur-[80px]" />

      <svg
        className="absolute left-[-6%] top-[6%] hidden h-[280px] w-[380px] text-[#efb0aa]/28 lg:block"
        viewBox="0 0 380 280"
        fill="none"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <path
            key={index}
            d={`M${8 + index * 10} ${220 - index * 7} C ${60 + index * 8} ${80 - index * 2}, ${150 + index * 6} ${72 + index * 3}, ${340 - index * 5} ${208 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute right-[-4%] bottom-[8%] hidden h-[260px] w-[420px] text-[#f0c89a]/22 lg:block"
        viewBox="0 0 420 260"
        fill="none"
      >
        {Array.from({ length: 11 }).map((_, index) => (
          <path
            key={index}
            d={`M${20 + index * 11} ${210 - index * 7} C ${110 + index * 9} ${70 - index * 2}, ${240 + index * 6} ${64 + index * 4}, ${390 - index * 5} ${190 - index * 3}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

export { ComingSoonBackground };
