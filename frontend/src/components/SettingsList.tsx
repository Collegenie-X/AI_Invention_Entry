"use client";

import { useState } from "react";
import { Bell, Check, ChevronRight, Moon, Shield, User } from "lucide-react";
import { useActions, useAppState } from "@/lib/store";

export function SettingsList() {
  const state = useAppState();
  const { setName, reset } = useActions();
  const [open, setOpen] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [notify, setNotify] = useState(true);

  const toggle = (k: string) => {
    if (k === "profile") setDraft(state?.name ?? "");
    setOpen((o) => (o === k ? null : k));
  };

  const rows = [
    { key: "profile", icon: <User size={16} />, title: "프로필", desc: state?.name ? `${state.name}(으)로 불리는 중` : "이름과 나를 부르는 방식" },
    { key: "notify", icon: <Bell size={16} />, title: "알림", desc: "프로젝트 리마인더와 업데이트" },
    { key: "theme", icon: <Moon size={16} />, title: "화면 설정", desc: "현재 다크 우주 테마 사용 중" },
    { key: "privacy", icon: <Shield size={16} />, title: "개인정보", desc: "내 아이디어는 안전하게 보관돼" },
  ];

  return (
    <ul className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
      {rows.map((r) => (
        <li key={r.key}>
          <button onClick={() => toggle(r.key)} className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-white/[0.03]" aria-expanded={open === r.key}>
            <span className="flex size-9 items-center justify-center rounded-xl bg-spark/10 text-spark-2">{r.icon}</span>
            <span className="flex-1">
              <span className="block text-sm font-semibold">{r.title}</span>
              <span className="block text-xs text-muted">{r.desc}</span>
            </span>
            <ChevronRight size={16} className={`text-faint transition ${open === r.key ? "rotate-90" : ""}`} />
          </button>

          {open === r.key && (
            <div className="animate-rise px-5 pb-5 pl-[4.5rem] text-sm text-muted">
              {r.key === "profile" && (
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (draft.trim()) setName(draft.trim());
                    setOpen(null);
                  }}
                >
                  <input
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    maxLength={12}
                    placeholder="이름"
                    className="min-w-0 flex-1 rounded-lg border border-line-strong bg-black/30 px-3 py-2 text-fg outline-none focus:border-spark"
                  />
                  <button className="btn-spark flex items-center gap-1 rounded-lg px-3 text-white">
                    <Check size={14} /> 저장
                  </button>
                </form>
              )}
              {r.key === "notify" && (
                <label className="flex items-center gap-3">
                  <input type="checkbox" checked={notify} onChange={(e) => setNotify(e.target.checked)} className="accent-[#ff5b2a]" />
                  하루 한 번 질문 리마인더 받기 (준비 중)
                </label>
              )}
              {r.key === "theme" && <p>지금은 다크 우주 테마만 지원해. 밝은 테마는 곧 착륙할 예정이야.</p>}
              {r.key === "privacy" && (
                <div className="space-y-3">
                  <p>이름과 아이디어는 서버가 아닌 이 브라우저(localStorage)에만 저장돼.</p>
                  <button
                    onClick={() => {
                      if (confirm("모든 프로젝트와 이름을 지울까? 되돌릴 수 없어.")) {
                        reset();
                        setOpen(null);
                      }
                    }}
                    className="rounded-lg border border-red-400/40 px-3 py-2 text-red-300 hover:bg-red-400/10"
                  >
                    내 데이터 모두 지우기
                  </button>
                </div>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
