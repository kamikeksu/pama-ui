import Image from "next/image";

interface Ilogo {
  isScrolling: boolean;
}

export function Logo({ isScrolling }: Ilogo) {
  return (
    <a
      href="/"
      className="flex flex-col items-center justify-center max-h-full"
    >
      <Image
        alt="Pama logo"
        src="/logos/logo.avif"
        width="32"
        height="54"
        className="h-full grow"
        priority
        style={{ width: "auto", height: "100%" }}
      />
      <p
        className={`${
          isScrolling
            ? "bg-gradient-b-to-rt inline-block text-transparent bg-clip-text"
            : "text-white"
        } mt-2`}
      >
        PĀMA
      </p>
    </a>
  );
}

export default Logo;
