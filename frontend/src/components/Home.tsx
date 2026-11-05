"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ArrowRight, Menu, Orbit, Rocket, Sparkles, X } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { Onboarding } from "./Onboarding";
import { HeroPlanet } from "./Planet";
import { IconBadge, Logo, SparkIcon } from "./Logo";
import { TOTAL } from "@/lib/data";
import { useAppState } from "@/lib/store";

const FEATURES = [
  { icon: <Sparkles size={17} />, tone: "spark" as const, title: "질문이 자라", desc: "평범한 생각에 맥락과 기준을 더해." },
  { icon: <Orbit size={17} />, tone: "violet" as const, title: "우주처럼 확장돼", desc: "아이디어의 가능성을 여러 방향으로." },
  { icon: <Rocket size={17} />, tone: "sky" as const, title: "결과물로 착륙해", desc: "대화가 기획서와 행동이 돼." },
];

export function Home() {
  const state = useAppState();
  const params = useSearchParams();
  const router = useRouter();
  const [onboarding, setOnboarding] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    if (params.get("start") === "1") setOnboarding(true);
  }, [params]);

  const closeOnboarding = useCallback(() => {
    setOnboarding(false);
    if (params.get("start")) router.replace("/");
  }, [params, router]);

  const openNew = () => {
    setDrawer(false);
    setOnboarding(true);
  };

  const latest = state?.projects
    .filter((p) => !p.example)
    .sort((a, b) => b.updatedAt - a.updatedAt)[0];
  const remaining = latest ? TOTAL - latest.answers.filter(Boolean).length : TOTAL;

  return (
    <div className="flex min-h-dvh">
      {/* desktop sidebar */}
      <aside className="sticky top-0 hidden h-dvh w-[272px] shrink-0 border-r border-line bg-surface/60 lg:block">
        <Sidebar onNew={openNew} />
      </aside>

      {/* mobile drawer */}
      {drawer && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setDrawer(false)} />
          <aside className="animate-rise absolute inset-y-0 left-0 w-[85%] max-w-[300px] border-r border-line bg-surface">
            <button onClick={() => setDrawer(false)} className="absolute right-3 top-3 z-10 p-1 text-muted" aria-label="메뉴 닫기">
              <X size={18} />
            </button>
            <Sidebar onNavigate={() => setDrawer(false)} onNew={openNew} />
          </aside>
        </div>
      )}

      <div className="glow-bg flex min-w-0 flex-1 flex-col overflow-x-clip">
        <header className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setDrawer(true)} className="text-muted lg:hidden" aria-label="메뉴 열기">
              <Menu size={20} />
            </button>
            <Logo className="lg:hidden" />
            <div className="hidden items-center gap-2 text-xs sm:flex">
              <span className="text-spark-2">현재 위치</span>
              <span className="text-faint">/</span>
              <span className="text-muted">홈</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="size-1.5 rounded-full bg-spark shadow-[0_0_8px_#ff5b2a]" /> 우주 탐험 중
          </div>
        </header>

        <main className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 px-4 py-10 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:py-16">
          <section className="animate-rise">
            <div className="inline-flex items-center gap-2 text-xs text-muted">
              <span className="flex size-7 items-center justify-center rounded-lg border border-line bg-spark/10 text-spark-2">
                <SparkIcon size={15} />
              </span>
              AI와 함께하는 청소년 기획 스튜디오
            </div>
            <h1 className="mt-6 text-[44px] font-semibold leading-[1.08] tracking-[-0.06em] sm:text-6xl lg:text-[72px]">
              아이디어에 <span className="text-spark-gradient">불꽃</span>,
              <br />
              설계는 내가<span className="text-spark-2">.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-muted">
              막연한 생각 하나를 들고 와. 열린 질문을 따라가다 보면
              <br className="hidden sm:block" /> 네 머릿속 아이디어가 진짜 설계도로 자라날 거야.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={openNew}
                className="btn-spark inline-flex items-center gap-2 rounded-[18px] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                <Rocket size={16} /> 시작하기 <ArrowRight size={16} />
              </button>
              <Link
                href={latest ? `/p/${latest.id}` : "/?start=1"}
                className="inline-flex items-center gap-2 rounded-[18px] border border-line-strong px-6 py-3.5 text-sm font-medium transition hover:bg-white/5"
              >
                <Orbit size={16} /> 이어하기
              </Link>
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {FEATURES.map((f) => (
                <li key={f.title} className="rounded-2xl border border-line bg-surface/70 p-4">
                  <IconBadge tone={f.tone}>{f.icon}</IconBadge>
                  <h3 className="mt-3 text-sm font-semibold">{f.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-muted">{f.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="relative order-first lg:order-none">
            <HeroPlanet />
            {latest && (
              <Link
                href={`/p/${latest.id}`}
                className="absolute right-0 top-[18%] flex items-center gap-2 rounded-xl border border-line-strong bg-surface-2/80 px-3 py-2 text-xs backdrop-blur hover:border-spark/40"
              >
                <span className="size-1.5 rounded-full bg-spark" /> 지금 자라고 있는 아이디어 · {latest.title}
              </Link>
            )}
            <div className="absolute bottom-[18%] left-0 flex items-center gap-2 rounded-xl border border-line-strong bg-surface-2/80 px-3 py-2 text-xs backdrop-blur">
              <span className="size-1.5 rounded-full bg-planet" /> 질문 {remaining}개 남음
            </div>
          </section>
        </main>

        <footer className="flex flex-wrap justify-between gap-2 border-t border-line px-6 py-4 text-[11px] text-faint">
          <span>열린 질문 하나가 제품의 설계도로 ✦</span>
          <span>made for curious minds</span>
        </footer>
      </div>

      <Onboarding open={onboarding} onClose={closeOnboarding} />
    </div>
  );
}
