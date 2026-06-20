export function AccountSettingsResumeSidebarSeam() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff8f6] via-[#fafafa] to-[#fff4f0]" />
      <svg
        className="absolute bottom-[-8%] right-[-12%] h-[180px] w-[120%] text-[#ead8d2]/45"
        viewBox="0 0 520 340"
        fill="none"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <path
            key={`resume-seam-${index}`}
            d={`M${24 + index * 12} ${250 - index * 7} C ${120 + index * 10} ${90 - index * 2}, ${280 + index * 6} ${86 + index * 4}, ${480 - index * 5} ${240 - index * 3}`}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}
