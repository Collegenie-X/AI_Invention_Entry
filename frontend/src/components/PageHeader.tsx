import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "./Logo";

export function SimpleShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh glow-bg">
      <header className="border-b border-line px-6 py-5">
        <Logo />
      </header>
      <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-fg">
          <ArrowLeft size={14} /> 홈으로 돌아가기
        </Link>
        {children}
      </main>
    </div>
  );
}
