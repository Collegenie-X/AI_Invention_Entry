import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`text-[15px] font-bold tracking-tight ${className}`} aria-label="teensparkai 홈">
      teen<span className="text-spark-gradient">sparkai</span>
      <span className="ml-0.5 text-spark">✦</span>
    </Link>
  );
}

export function SparkIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-25 12 12)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19" cy="6" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconBadge({ children, tone = "spark" }: { children: React.ReactNode; tone?: "spark" | "violet" | "sky" }) {
  const tones = {
    spark: "bg-spark/15 text-spark-2",
    violet: "bg-violet-400/15 text-violet-300",
    sky: "bg-sky-400/15 text-sky-300",
  };
  return <span className={`inline-flex size-9 items-center justify-center rounded-xl ${tones[tone]}`}>{children}</span>;
}
