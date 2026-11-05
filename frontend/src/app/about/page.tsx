import type { Metadata } from "next";
import { Orbit, Rocket, Sparkles } from "lucide-react";
import { SimpleShell } from "@/components/PageHeader";
import { IconBadge, SparkIcon } from "@/components/Logo";

export const metadata: Metadata = { title: "소개 — teensparkai" };

const ITEMS = [
  { icon: <Sparkles size={17} />, tone: "spark" as const, title: "발견", desc: "생각 속 문제를 찾아요." },
  { icon: <Orbit size={17} />, tone: "violet" as const, title: "확장", desc: "가능성을 여러 궤도로 넓혀요." },
  { icon: <Rocket size={17} />, tone: "sky" as const, title: "착륙", desc: "실행 가능한 계획이 돼요." },
];

export default function AboutPage() {
  return (
    <SimpleShell>
      <span className="mt-10 flex size-14 items-center justify-center rounded-2xl bg-spark/15 text-spark-2">
        <SparkIcon size={26} />
      </span>
      <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
        아이디어가 행성처럼
        <br />
        <span className="text-spark-gradient">자라는 공간</span>
        <span className="text-spark-2">.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted">
        teensparkai는 청소년의 막연한 생각을 질문과 대화로 구체화하는 기획 스튜디오입니다. 정답을 알려주기보다, 스스로 더 좋은
        질문을 발견하도록 돕습니다.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {ITEMS.map((it) => (
          <li key={it.title} className="rounded-2xl border border-line bg-surface p-5">
            <IconBadge tone={it.tone}>{it.icon}</IconBadge>
            <h2 className="mt-3 text-sm font-semibold">{it.title}</h2>
            <p className="mt-1 text-xs text-muted">{it.desc}</p>
          </li>
        ))}
      </ul>
    </SimpleShell>
  );
}
