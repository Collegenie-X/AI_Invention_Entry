"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Download, FileText, Share2, Sparkles } from "lucide-react";
import { Loading, NotFoundProject } from "./NotFoundProject";
import { progressOf, QUESTIONS, type Project } from "@/lib/data";
import { useAppState } from "@/lib/store";

function fmtDate(t: number) {
  const d = new Date(t);
  return `${d.getFullYear()}. ${String(d.getMonth() + 1).padStart(2, "0")}. ${String(d.getDate()).padStart(2, "0")}`;
}

function toMarkdown(p: Project) {
  const lines = [`# ${p.title}`, "", `> ${p.answers[9] || p.idea}`, "", `성장도: ${progressOf(p)}%`, ""];
  QUESTIONS.forEach((q, i) => {
    if (p.answers[i]) lines.push(`## ${String(i + 1).padStart(2, "0")}. ${q.text}`, "", p.answers[i], "");
  });
  lines.push("---", "teensparkai — 열린 질문 하나가 제품의 설계도로 ✦");
  return lines.join("\n");
}

export function ProjectReport({ id }: { id: string }) {
  const state = useAppState();
  const [toast, setToast] = useState("");
  const project = state?.projects.find((p) => p.id === id);

  if (!state) return <Loading />;
  if (!project) return <NotFoundProject />;

  const a = project.answers;
  const pct = progressOf(project);
  const count = a.filter(Boolean).length;
  const owner = project.example ? "예시" : `${state.name || "서연"}의 우주`;
  const findings = [a[0], a[4], a[5], a[6]].filter(Boolean) as string[];

  const flash = (m: string) => {
    setToast(m);
    setTimeout(() => setToast(""), 2000);
  };

  const share = async () => {
    const text = toMarkdown(project);
    try {
      if (navigator.share) await navigator.share({ title: project.title, text });
      else {
        await navigator.clipboard.writeText(text);
        flash("리포트 내용을 복사했어");
      }
    } catch {
      /* user cancelled */
    }
  };

  const download = () => {
    const blob = new Blob([toMarkdown(project)], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const el = Object.assign(document.createElement("a"), { href: url, download: `${project.title}-기획리포트.md` });
    el.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-dvh glow-bg">
      <header className="no-print flex items-center justify-between border-b border-line px-4 py-3 sm:px-6">
        <Link href={`/p/${project.id}`} className="flex items-center gap-1.5 text-xs text-muted hover:text-fg">
          <ArrowLeft size={15} /> 대화로 돌아가기
        </Link>
        <div className="flex gap-2">
          <button onClick={share} className="flex items-center gap-1.5 rounded-lg border border-line-strong px-3 py-1.5 text-xs hover:bg-white/5">
            <Share2 size={13} /> 공유
          </button>
          <button onClick={download} className="btn-spark flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-white">
            <Download size={13} /> 내보내기
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-spark/15 text-spark-2">
            <FileText size={20} />
          </span>
          <div>
            <p className="text-[10px] font-medium tracking-[0.2em] text-spark-2">PROJECT REPORT / {fmtDate(project.updatedAt)}</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{project.title}</h1>
            <p className="mt-1 text-xs text-muted">{owner}에서 자란 설계도</p>
          </div>
        </div>

        <dl className="mt-8 grid grid-cols-3 gap-3">
          {[
            ["문제 정의", a[0] ? "완료" : "진행 중", ""],
            ["답한 질문", `${count}개`, ""],
            ["성장도", `${pct}%`, "text-spark-2"],
          ].map(([k, v, c]) => (
            <div key={k} className="rounded-2xl border border-line bg-surface p-4">
              <dt className="text-[11px] text-faint">{k}</dt>
              <dd className={`mt-2 text-base font-bold sm:text-lg ${c}`}>{v}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-5 rounded-3xl border border-line bg-surface p-5 sm:p-7">
          <p className="flex items-center gap-1.5 text-xs font-medium text-spark-2">
            <Sparkles size={13} /> 한 줄 요약
          </p>
          <p className="mt-3 text-lg font-semibold leading-8 sm:text-xl">{a[9] || project.idea}</p>
          {!a[9] && <p className="mt-2 text-xs text-faint">마지막 질문에 답하면 네 언어로 된 한 줄 요약이 완성돼.</p>}

          <hr className="my-7 border-line" />

          <h2 className="text-base font-semibold">우리가 발견한 것</h2>
          {findings.length ? (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {findings.map((f, i) => (
                <li key={i} className="flex gap-3 rounded-xl bg-surface-2 p-4 text-sm leading-6 text-fg/90">
                  <span className="text-xs font-semibold text-spark-2">{String(i + 1).padStart(2, "0")}</span>
                  {f}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-muted">아직 발견한 게 없어. 첫 질문부터 답해볼까?</p>
          )}

          <div className="mt-6 rounded-2xl border border-spark/25 bg-gradient-to-r from-spark/10 to-violet-500/10 p-5">
            <p className="text-[11px] font-semibold tracking-widest text-spark-2">NEXT STEP</p>
            <p className="mt-2 text-sm leading-6">
              {a[7] ? `${a[7]}${a[8] ? ` — 준비물: ${a[8]}` : ""}` : "대화로 돌아가 남은 질문에 답하면서 가장 작은 시작을 찾아봐."}
            </p>
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-line bg-surface p-5 sm:p-7">
          <h2 className="text-base font-semibold">질문 기록</h2>
          <ol className="mt-4 space-y-4">
            {QUESTIONS.map((q, i) => (
              <li key={i} className="border-l-2 border-line pl-4">
                <p className="text-xs text-muted">
                  <span className="mr-1 text-spark-2">{String(i + 1).padStart(2, "0")}</span>
                  {q.text}
                </p>
                <p className={`mt-1 text-sm leading-6 ${a[i] ? "" : "text-faint"}`}>{a[i] || "아직 탐험하지 않은 질문"}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      {toast && (
        <div role="status" className="animate-rise fixed bottom-6 left-1/2 -translate-x-1/2 rounded-xl border border-line-strong bg-surface-2 px-4 py-2 text-xs">
          {toast}
        </div>
      )}
    </div>
  );
}
