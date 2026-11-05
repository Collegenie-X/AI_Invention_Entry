import type { Metadata } from "next";
import { SimpleShell } from "@/components/PageHeader";
import { SettingsList } from "@/components/SettingsList";

export const metadata: Metadata = { title: "설정 — teensparkai" };

export default function SettingsPage() {
  return (
    <SimpleShell>
      <p className="mt-8 text-xs font-medium text-spark-2">내 우주 조정하기</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">설정</h1>
      <SettingsList />
      <p className="mt-6 rounded-2xl border border-spark/20 bg-spark/5 px-5 py-4 text-sm text-muted">
        teensparkai는 네 아이디어를 평가하지 않아. 대신 더 좋은 질문을 함께 찾아가.
      </p>
    </SimpleShell>
  );
}
