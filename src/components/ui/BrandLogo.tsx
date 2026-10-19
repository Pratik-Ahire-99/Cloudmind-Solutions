
import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  showName?: boolean;
  logoSize?: number;
  className?: string;
};

export default function BrandLogo({
  showName = true,
  logoSize = 44,
  className = "",
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="CloudMind Solutions home"
      className={`group inline-flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${className}`}
    >
      <span
        className="flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white"
        style={{ width: logoSize, height: logoSize }}
      >
        <Image
          src="/logos/cloudmind-logo.png"
          alt=""
          width={logoSize}
          height={logoSize}
          priority
          className="h-full w-full object-contain"
        />
      </span>

      {showName && (
        <span className="leading-none">
          <span className="block whitespace-nowrap text-[12px]text-sm font-bold tracking-wide text-white ">
            Cloud<span className="text-[#38BDF8]">Mind</span>
          </span>

          <span className="mt-1.5 block text-[7px] font-medium tracking-[0.25em] text-white">
            SOLUTIONS 
          </span>
        </span>
      )}
    </Link>
  );
}
