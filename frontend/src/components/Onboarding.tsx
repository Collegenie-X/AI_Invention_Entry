"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import { SparkIcon } from "./Logo";
import { useActions, useAppState, newId } from "@/lib/store";
import { buildMessages } from "@/lib/data";

export function Onboarding({ open, onClose }: { open: boolean; onClose: () => void }) {
  const state = useAppState();
  const { setName, saveProject } = useActions();
  const router = useRouter();
  const [step, setStep] = useState<0 | 1>(0);
  const [name, setNameInput] = useState("");
  const [idea, setIdea] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setStep(state?.name ? 1 : 0);
    setNameInput(state?.name ?? "");
    setIdea("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
  }, [open, step]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const value = step === 0 ? name : idea;
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = value.trim();
    if (!v) return;
    if (step === 0) {
      setName(v);
      setStep(1);
      return;
    }
    const id = newId();
    const now = Date.now();
    saveProject({
      id,
      title: v.length > 16 ? v.slice(0, 16) + "…" : v,
      idea: v,
      answers: [],
      messages: buildMessages([], v),
      createdAt: now,
      updatedAt: now,
    });
    // navigating away unmounts the modal; calling onClose here would race with its router.replace("/")
    router.push(`/p/${id}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="onb-title">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
      <form
        onSubmit={submit}
        className="animate-rise relative w-full max-w-md rounded-3xl border border-line-strong bg-surface-2 p-6 shadow-2xl"
      >
        <button type="button" onClick={onClose} className="absolute right-4 top-4 text-muted hover:text-fg" aria-label="닫기">
          <X size={18} />
        </button>
        <span className="flex size-11 items-center justify-center rounded-2xl bg-spark/15 text-spark-2">
          <SparkIcon size={22} />
        </span>
        <h2 id="onb-title" className="mt-4 text-lg font-bold">
          {step === 0 ? "안녕! 나는 네 기획 코치야." : `반가워, ${name}! 어떤 아이디어를 키워볼까?`}
        </h2>
        <p className="mt-1 text-sm text-muted">
          {step === 0 ? "먼저 뭐라고 부르면 될까?" : "막연해도 괜찮아. 한 줄이면 충분해."}
        </p>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => (step === 0 ? setNameInput(e.target.value) : setIdea(e.target.value))}
          placeholder={step === 0 ? "예: 서연" : "예: 급식 재료를 알려주는 앱"}
          maxLength={step === 0 ? 12 : 60}
          className="mt-5 w-full rounded-xl border border-spark/50 bg-black/30 px-4 py-3 text-sm outline-none placeholder:text-faint focus:border-spark"
        />
        <button
          type="submit"
          disabled={!value.trim()}
          className="btn-spark mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl py-3 text-sm font-semibold text-white transition disabled:opacity-40 disabled:shadow-none"
        >
          {step === 0 ? "다음으로" : "탐험 시작하기"} <ArrowRight size={16} />
        </button>
        <p className="mt-3 text-center text-[11px] text-faint">
          {step === 0 ? "이름은 이 기기에만 저장돼" : "아이디어도 이 기기에만 저장돼"}
        </p>
      </form>
    </div>
  );
}
