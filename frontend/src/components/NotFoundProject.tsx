import Link from "next/link";

export function Loading() {
  return <div className="flex min-h-dvh items-center justify-center text-sm text-faint">우주를 불러오는 중…</div>;
}

export function NotFoundProject() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-4xl">🛸</p>
      <h1 className="text-lg font-semibold">이 행성은 찾을 수 없어</h1>
      <p className="text-sm text-muted">프로젝트는 이 기기에만 저장돼서, 다른 기기에서는 보이지 않아.</p>
      <Link href="/?start=1" className="btn-spark rounded-xl px-5 py-2.5 text-sm font-semibold text-white">
        새 프로젝트 시작하기
      </Link>
    </div>
  );
}
