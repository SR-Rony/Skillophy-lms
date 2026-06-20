export function AccountSettingsModalSeamBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-[20px]" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff8f6] via-white to-[#faf7fc]" />
      <div className="absolute left-[-10%] top-[-30%] h-[180px] w-[180px] rounded-full bg-[#ffe8e4]/45 blur-3xl" />
      <div className="absolute right-[-8%] top-[-10%] h-[160px] w-[160px] rounded-full bg-[#f0e8f8]/30 blur-3xl" />

      <svg
        className="absolute right-[-6%] top-[8%] h-[120px] w-[45%] text-[#ead8d2]/50"
        viewBox="0 0 520 340"
        fill="none"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <path
            key={`modal-seam-${index}`}
            d={`M${24 + index * 12} ${250 - index * 7} C ${120 + index * 10} ${90 - index * 2}, ${280 + index * 6} ${86 + index * 4}, ${480 - index * 5} ${240 - index * 3}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
