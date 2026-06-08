/** Decorative background for blog details hero — warm light surface + golden hex pattern */
export function BlogDetailsHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,232,224,0.55),transparent_42%)]" />
      <div className="absolute right-[-4%] top-[2%] hidden h-[min(440px,58vw)] w-[min(520px,68vw)] opacity-95 lg:block">
        <svg
          className="h-full w-full text-[#e8d4a8]/60"
          viewBox="0 0 520 440"
          fill="none"
        >
          {Array.from({ length: 10 }).map((_, index) => {
            const scale = 0.55 + index * 0.11;
            const cx = 300;
            const cy = 220;
            const r = 88 * scale;
            const points = Array.from({ length: 6 })
              .map((__, vertex) => {
                const angle = (Math.PI / 3) * vertex - Math.PI / 6;
                return `${cx + Math.cos(angle) * r},${cy + Math.sin(angle) * r}`;
              })
              .join(" ");

            return (
              <polygon
                key={index}
                points={points}
                stroke="currentColor"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
