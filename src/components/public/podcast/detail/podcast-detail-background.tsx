function PodcastDetailBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,214,170,0.12),transparent_32%),radial-gradient(circle_at_88%_24%,rgba(255,180,160,0.08),transparent_30%)]" />

      <svg
        className="absolute left-[-8%] top-[10%] hidden h-[320px] w-[420px] text-[#f0c89a]/18 lg:block"
        viewBox="0 0 420 320"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={index}
            d={`M${8 + index * 10} ${240 - index * 7} C ${60 + index * 8} ${88 - index * 2}, ${170 + index * 6} ${78 + index * 3}, ${380 - index * 5} ${228 - index * 4}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <svg
        className="absolute right-[-6%] bottom-[8%] hidden h-[340px] w-[520px] text-[#efb0aa]/16 lg:block"
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
    </div>
  );
}

export { PodcastDetailBackground };
