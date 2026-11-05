# teensparkai — frontend

"아이디어에 불꽃, 설계는 내가." 청소년이 열린 질문 10개를 따라가며 아이디어를 기획 리포트로 키우는 웹앱입니다.
(https://teenspark.vercel.app 을 참고해 Next.js + Vercel 기준으로 재구성)

## 스택
- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 · lucide-react · Pretendard
- `@vercel/analytics` (Vercel 배포 시 자동 수집)
- 데이터: 브라우저 `localStorage` (서버 DB 없음)
- `/api/coach`: `ANTHROPIC_API_KEY` 가 있으면 Claude로 피드백, 없으면 기본 문구

## 화면
| 경로 | 설명 |
| --- | --- |
| `/` | 홈(사이드바 · 히어로) — `?start=1` 이면 온보딩 모달 |
| `/p/[id]` | 질문 대화 · 탐험 지도 · 아이디어 행성 |
| `/p/[id]/report` | 기획 리포트 (공유 · Markdown 내보내기) |
| `/about`, `/settings` | 소개 · 설정(이름 변경, 데이터 삭제) |

## 로컬 실행
```bash
cd frontend
npm install
npm run dev   # http://localhost:3000
```

## Vercel 배포
1. Vercel에서 이 저장소를 Import
2. **Root Directory** 를 `frontend` 로 지정 (Framework: Next.js 자동 감지)
3. (선택) Environment Variables 에 `ANTHROPIC_API_KEY` 추가
4. Deploy — 또는 CLI: `cd frontend && npx vercel --prod`
