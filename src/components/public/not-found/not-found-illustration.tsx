import Image from "next/image";

const NOT_FOUND_IMAGE = {
  src: "/images/404.png",
  width: 360,
  height: 254,
} as const;

function NotFoundIllustration() {
  return (
    <div className="relative mx-auto flex w-full max-w-[460px] justify-center px-2">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,71,71,0.1)_0%,rgba(255,214,170,0.06)_45%,transparent_72%)] sm:h-[220px] sm:w-[220px]"
        aria-hidden
      />
      <Image
        src={NOT_FOUND_IMAGE.src}
        alt="404 page illustration"
        width={NOT_FOUND_IMAGE.width}
        height={NOT_FOUND_IMAGE.height}
        priority
        unoptimized
        className="relative z-10 h-auto w-full max-w-[360px] object-contain sm:max-w-[420px]"
      />
    </div>
  );
}

export { NotFoundIllustration };
