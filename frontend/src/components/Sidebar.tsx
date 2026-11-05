"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Plus, Settings } from "lucide-react";
import { Logo } from "./Logo";
import { PlanetDot } from "./Planet";
import { progressOf, TOTAL } from "@/lib/data";
import { useAppState } from "@/lib/store";

export function Sidebar({ onNavigate, onNew }: { onNavigate?: () => void; onNew: () => void }) {
  const state = useAppState();
  const pathname = usePathname();
  const [showExamples, setShowExamples] = useState(true);

  const mine = state?.projects.filter((p) => !p.example) ?? [];
  const examples = state?.projects.filter((p) => p.example) ?? [];
  const name = state?.name || "서연";
  const active = mine[0];
  const answered = active ? active.answers.filter(Boolean).length : 0;

  return (
    <div className="flex h-full flex-col gap-5 p-4">
      <div className="flex items-center justify-between px-1 pt-1">
        <Logo />
        <Link href="/about" onClick={onNavigate} className="rounded-lg border border-line px-2.5 py-1 text-xs text-muted hover:text-fg">
          소개
        </Link>
      </div>

      <div className="flex items-center gap-2 px-1">
        <span className="flex size-7 items-center justify-center rounded-full bg-spark/20 text-xs font-semibold text-spark-2">
          {name.slice(0, 1)}
        </span>
        <span className="text-sm font-semibold">{name}의 우주</span>
      </div>

      <div className="rounded-2xl border border-line bg-surface-2 p-3.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium">다음 리포트까지</span>
          <span className="font-semibold text-spark-2">
            {answered} / {TOTAL}
          </span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full btn-spark" style={{ width: `${(answered / TOTAL) * 100}%` }} />
        </div>
        <p className="mt-2 text-[11px] text-faint">질문이 설계도로 자라고 있어</p>
      </div>

      <button
        onClick={onNew}
        className="flex items-center justify-center gap-1.5 rounded-2xl border border-dashed border-spark/40 bg-spark/5 py-3 text-sm font-medium text-spark-2 transition hover:bg-spark/10"
      >
        <Plus size={16} /> 새 프로젝트
      </button>

      <nav className="-mx-1 flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-1">
        <section>
          <h3 className="mb-2 px-1 text-[11px] tracking-widest text-faint">내 프로젝트</h3>
          <ul className="flex flex-col gap-1.5">
            {state && mine.length === 0 && <li className="px-2 text-xs text-faint">아직 프로젝트가 없어.</li>}
            {mine.map((p) => {
              const pct = progressOf(p);
              const on = pathname === `/p/${p.id}`;
              return (
                <li key={p.id}>
                  <Link
                    href={`/p/${p.id}`}
                    onClick={onNavigate}
                    className={`block rounded-xl border px-3 py-2.5 transition ${
                      on ? "border-spark/40 bg-spark/10" : "border-transparent hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <PlanetDot seed={p.id} />
                      <span className="flex-1 truncate text-sm">{p.title}</span>
                      <span className="text-[11px] text-faint">{pct}%</span>
                    </div>
                    <div className="ml-6 mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-spark-2" style={{ width: `${pct}%` }} />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <button
            onClick={() => setShowExamples((v) => !v)}
            className="mb-2 flex w-full items-center justify-between px-1 text-[11px] tracking-widest text-faint"
            aria-expanded={showExamples}
          >
            예시 프로젝트
            <ChevronDown size={14} className={`transition ${showExamples ? "" : "-rotate-90"}`} />
          </button>
          {showExamples && (
            <ul className="flex flex-col">
              {examples.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/p/${p.id}`}
                    onClick={onNavigate}
                    className={`block rounded-lg px-3 py-2 text-sm transition hover:bg-white/[0.04] ${
                      pathname === `/p/${p.id}` ? "text-fg" : "text-muted"
                    }`}
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </nav>

      <div className="border-t border-line pt-3">
        <Link href="/settings" onClick={onNavigate} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted hover:text-fg">
          <Settings size={15} /> 설정
        </Link>
      </div>
    </div>
  );
}
