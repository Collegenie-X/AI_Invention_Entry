"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Ellipsis, FileText, Send, Sparkles, Trash2 } from "lucide-react";
import { SparkIcon } from "./Logo";
import { IdeaPlanet } from "./Planet";
import { Loading, NotFoundProject } from "./NotFoundProject";
import { COACH_CHEERS, currentIndex, DONE_MESSAGE, progressOf, QUESTIONS, TOTAL, type Message } from "@/lib/data";
import { useActions, useAppState } from "@/lib/store";

async function askCoach(payload: { idea: string; question: string; answer: string }) {
  try {
    const res = await fetch("/api/coach", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json()) as { reply?: string };
    if (data.reply) return data.reply;
  } catch {
    /* offline – fall through */
  }
  return COACH_CHEERS[Math.floor(Math.random() * COACH_CHEERS.length)];
}

export function ProjectChat({ id }: { id: string }) {
  const state = useAppState();
  const { saveProject, deleteProject } = useActions();
  const router = useRouter();
  const [draft, setDraft] = useState("");
  const [thinking, setThinking] = useState(false);
  const [menu, setMenu] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const project = state?.projects.find((p) => p.id === id);
  const msgCount = project?.messages.length ?? 0;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [msgCount, thinking]);

  if (!state) return <Loading />;
  if (!project) return <NotFoundProject />;

  const idx = currentIndex(project);
  const done = idx >= TOTAL;
  const pct = progressOf(project);
  const q = QUESTIONS[Math.min(idx, TOTAL - 1)];
  const readOnly = !!project.example;

  const send = async () => {
    const text = draft.trim();
    if (!text || thinking || done || readOnly) return;
    setDraft("");
    const answers = [...project.answers];
    answers[idx] = text;
    const withMine: Message[] = [...project.messages, { role: "me", text }];
    const base = { ...project, answers, messages: withMine };
    saveProject(base);

    setThinking(true);
    const reply = await askCoach({ idea: project.idea, question: q.text, answer: text });
    setThinking(false);

    const nextIdx = idx + 1;
    const tail: Message[] = [{ role: "coach", text: reply }];
    tail.push({ role: "coach", text: nextIdx < TOTAL ? QUESTIONS[nextIdx].text : DONE_MESSAGE });
    saveProject({ ...base, messages: [...withMine, ...tail] });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // isComposing: 한글 IME 조합 중 Enter는 무시해야 마지막 글자가 중복/누락되지 않음
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      send();
    }
  };

  const isQuestion = (m: Message) => m.role === "coach" && QUESTIONS.some((x) => x.text === m.text);

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/" className="text-muted hover:text-fg" aria-label="홈으로">
            <ArrowLeft size={18} />
          </Link>
          <div className="min-w-0">
            <p className="truncate text-[10px] font-medium tracking-[0.2em] text-spark-2">PROJECT / {project.title}</p>
            <p className="truncate text-sm font-semibold">
              {readOnly ? "예시 프로젝트" : `${state.name || "서연"}의 우주`}
            </p>
          </div>
        </div>
        <div className="relative flex items-center gap-1">
          <Link
            href={`/p/${project.id}/report`}
            className="flex items-center gap-1.5 rounded-lg border border-line-strong px-3 py-1.5 text-xs hover:bg-white/5"
          >
            <FileText size={14} /> 리포트 보기
          </Link>
          {!readOnly && (
            <>
              <button onClick={() => setMenu((v) => !v)} className="p-2 text-muted hover:text-fg" aria-label="더보기" aria-expanded={menu}>
                <Ellipsis size={18} />
              </button>
              {menu && (
                <div className="animate-rise absolute right-0 top-10 z-20 w-40 rounded-xl border border-line-strong bg-surface-2 p-1 shadow-xl">
                  <button
                    onClick={() => {
                      if (confirm(`"${project.title}" 프로젝트를 삭제할까?`)) {
                        deleteProject(project.id);
                        router.push("/");
                      }
                    }}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs text-red-300 hover:bg-red-400/10"
                  >
                    <Trash2 size={14} /> 프로젝트 삭제
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </header>

      {/* mobile progress */}
      <div className="h-1 bg-white/5 lg:hidden">
        <div className="btn-spark h-full transition-all" style={{ width: `${pct}%` }} />
      </div>

      <div className="mx-auto grid w-full max-w-6xl flex-1 gap-5 p-4 sm:p-6 lg:h-[calc(100dvh-57px)] lg:grid-cols-[240px_1fr_240px]">
        {/* exploration map */}
        <aside className="hidden flex-col rounded-2xl border border-line bg-surface p-4 lg:flex lg:min-h-0">
          <h2 className="mb-3 text-[11px] tracking-widest text-faint">탐험 지도</h2>
          <ol className="-mx-1 flex-1 space-y-1 overflow-y-auto px-1">
            {QUESTIONS.map((qq, i) => {
              const answered = !!project.answers[i];
              const cur = i === idx;
              return (
                <li
                  key={i}
                  className={`rounded-xl border px-3 py-2.5 text-xs leading-5 ${
                    cur ? "border-spark/40 bg-spark/10 text-fg" : answered ? "border-transparent text-muted" : "border-transparent text-faint"
                  }`}
                >
                  <span className={`mr-1.5 font-semibold ${cur || answered ? "text-spark-2" : ""}`}>
                    {answered ? <Check size={12} className="inline -mt-0.5" /> : String(i + 1).padStart(2, "0")}
                  </span>
                  {qq.text}
                </li>
              );
            })}
          </ol>
          <div className="mt-3 rounded-xl border border-line bg-surface-2 p-3">
            <div className="flex justify-between text-xs">
              <span className="font-medium">성장도</span>
              <span className="text-spark-2">{pct}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="btn-spark h-full rounded-full transition-all" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </aside>

        {/* chat */}
        <section className="flex min-h-[70dvh] flex-col overflow-hidden rounded-2xl border border-line bg-surface lg:min-h-0">
          <div className="border-b border-line px-5 py-4">
            <p className="flex items-center gap-1.5 text-xs font-medium text-spark-2">
              <Sparkles size={14} /> {done ? "탐험 완료" : `질문 ${idx + 1} / ${TOTAL}`}
              <span className="ml-1 rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-muted">{q.stage}</span>
            </p>
            <h1 className="mt-2 text-lg font-semibold">{done ? "아이디어가 설계도로 착륙했어!" : q.text}</h1>
            <p className="mt-1 text-xs text-muted">{done ? "리포트에서 정리된 기획을 확인해봐." : q.hint}</p>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-5 sm:px-5" aria-live="polite">
            {project.messages.map((m, i) =>
              m.role === "coach" ? (
                <div key={i} className="animate-rise flex gap-2.5">
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-spark/15 text-spark-2">
                    <SparkIcon size={14} />
                  </span>
                  <p
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tl-md px-4 py-3 text-sm leading-6 ${
                      isQuestion(m) ? "border border-spark/25 bg-spark/[0.07] font-medium" : "bg-surface-2 text-fg/90"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ) : (
                <div key={i} className="animate-rise flex justify-end">
                  <p className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tr-md bg-gradient-to-br from-[#ff6a3d] to-[#ff8a5c] px-4 py-3 text-sm leading-6 text-white">
                    {m.text}
                  </p>
                </div>
              ),
            )}
            {thinking && (
              <div className="flex gap-2.5">
                <span className="flex size-7 items-center justify-center rounded-full bg-spark/15 text-spark-2">
                  <SparkIcon size={14} />
                </span>
                <span className="flex items-center gap-1 rounded-2xl bg-surface-2 px-4 py-3">
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="size-1.5 rounded-full bg-muted animate-twinkle" style={{ animationDelay: `${d * 0.2}s` }} />
                  ))}
                </span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="border-t border-line p-3 sm:p-4">
            {readOnly ? (
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-surface-2 px-4 py-3 text-xs text-muted">
                예시 프로젝트는 읽기 전용이야. 내 아이디어로 시작해볼까?
                <Link href="/?start=1" className="font-semibold text-spark-2">
                  새 프로젝트 →
                </Link>
              </div>
            ) : done ? (
              <Link
                href={`/p/${project.id}/report`}
                className="btn-spark flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white"
              >
                기획 리포트 열기 <ArrowRight size={16} />
              </Link>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="flex items-end gap-2 rounded-2xl border border-line-strong bg-surface-2 p-2 focus-within:border-spark/60"
              >
                <textarea
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  maxLength={1000}
                  aria-label="답변 입력"
                  placeholder="내 생각을 적어봐..."
                  className="max-h-40 min-h-[40px] flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none [field-sizing:content] placeholder:text-faint"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || thinking}
                  className="btn-spark flex size-10 shrink-0 items-center justify-center rounded-xl text-white transition disabled:opacity-40 disabled:shadow-none"
                  aria-label="보내기"
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </section>

        {/* idea planet */}
        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border border-line bg-surface p-5">
            <p className="flex items-center gap-2 text-xs font-medium">
              <span className="size-1.5 rounded-full bg-planet shadow-[0_0_8px_#8ab4ff]" /> 아이디어 행성
            </p>
            <div className="py-6">
              <IdeaPlanet progress={pct} />
            </div>
            <p className="text-center text-xs leading-5 text-muted">
              질문에 답할수록
              <br />
              행성이 더 선명해져.
            </p>
          </div>
          <Link
            href={`/p/${project.id}/report`}
            className="flex items-center justify-between rounded-2xl border border-spark/30 bg-spark/[0.07] px-5 py-4 text-sm font-medium hover:bg-spark/[0.12]"
          >
            기획 리포트 열기 <ArrowRight size={16} />
          </Link>
        </aside>
      </div>
    </div>
  );
}
