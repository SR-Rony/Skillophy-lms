/** Decorative background for course details hero — light surface + golden line pattern */
export function CourseDetailsHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute right-[-2%] top-[4%] hidden h-[min(420px,55vw)] w-[min(560px,70vw)] opacity-90 lg:block">
        <svg
          className="h-full w-full text-[#e8d4a8]/55"
          viewBox="0 0 560 420"
          fill="none"
        >
          {Array.from({ length: 18 }).map((_, index) => {
            const radius = 80 + index * 18;
            return (
              <ellipse
                key={index}
                cx="380"
                cy="210"
                rx={radius * 1.15}
                ry={radius}
                stroke="currentColor"
                strokeWidth="1"
                transform={`rotate(-18 380 210)`}
              />
            );
          })}
          {Array.from({ length: 12 }).map((_, index) => (
            <path
              key={`wave-${index}`}
              d={`M${200 + index * 10} ${360 - index * 8} C ${280 + index * 8} ${120 - index * 3}, ${420 + index * 5} ${100 + index * 5}, ${520 - index * 4} ${340 - index * 4}`}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
